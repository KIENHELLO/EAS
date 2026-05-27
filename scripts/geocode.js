import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const filePath = path.join(__dirname, '../src/data/universities.js');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Extract the JSON array from the file content
  const arrayStart = fileContent.indexOf('[');
  const arrayEnd = fileContent.lastIndexOf(']') + 1;
  const jsonText = fileContent.slice(arrayStart, arrayEnd);
  
  const universities = JSON.parse(jsonText);
  console.log(`Loaded ${universities.length} universities. Starting geocoding...`);

  const coordinates = {};

  for (let i = 0; i < universities.length; i++) {
    const u = universities[i];
    const query = `${u.name_en}, South Korea`;
    console.log(`[${i+1}/${universities.length}] Geocoding: ${u.name_vi} (${u.name_en})`);
    
    try {
      // Nominatim requires a User-Agent
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`, {
        headers: {
          'User-Agent': 'KR-UniTuition-Geocoder/1.0 (kient@gemini.antigravity)'
        }
      });
      
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      
      if (data && data.length > 0) {
        coordinates[u.id] = {
          lat: parseFloat(data[0].lat),
          lon: parseFloat(data[0].lon)
        };
        console.log(`  Success: ${data[0].lat}, ${data[0].lon}`);
      } else {
        // Try searching with campus address
        console.log(`  Name search failed. Trying address: ${u.campus_address}`);
        const responseAddr = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(u.campus_address)}&format=json&limit=1`, {
          headers: {
            'User-Agent': 'KR-UniTuition-Geocoder/1.0 (kient@gemini.antigravity)'
          }
        });
        const dataAddr = await responseAddr.json();
        if (dataAddr && dataAddr.length > 0) {
          coordinates[u.id] = {
            lat: parseFloat(dataAddr[0].lat),
            lon: parseFloat(dataAddr[0].lon)
          };
          console.log(`  Success: ${dataAddr[0].lat}, ${dataAddr[0].lon}`);
        } else {
          console.log(`  Failed to resolve. Fallback to province-level default.`);
          coordinates[u.id] = null;
        }
      }
    } catch (e) {
      console.error(`  Error geocoding ${u.name_en}:`, e.message);
      coordinates[u.id] = null;
    }
    
    // Rate limit: 1.2 seconds sleep to respect Nominatim policy
    await new Promise(resolve => setTimeout(resolve, 1200));
  }

  // Write coordinates to output file
  const outPath = path.join(__dirname, '../src/data/school_coordinates.json');
  fs.writeFileSync(outPath, JSON.stringify(coordinates, null, 2));
  console.log(`Completed! Coordinates written to ${outPath}`);
}

main().catch(console.error);
