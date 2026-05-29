import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { universities } from '../kr-unituition-next/src/data/universities.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COORDINATES_PATH = path.join(__dirname, '../kr-unituition-next/src/data/school_coordinates.json');
const VITE_COORDINATES_PATH = path.join(__dirname, '../src/data/school_coordinates.json');

// Province coordinates mapping for fallbacks
const PROVINCE_COORDS = {
  "Seoul": { lat: 37.5665, lon: 126.9780 },
  "Busan": { lat: 35.1796, lon: 129.0756 },
  "Daegu": { lat: 35.8714, lon: 128.6014 },
  "Incheon": { lat: 37.4563, lon: 126.7052 },
  "Gwangju": { lat: 35.1595, lon: 126.8526 },
  "Daejeon": { lat: 36.3504, lon: 127.3845 },
  "Ulsan": { lat: 35.5384, lon: 129.3114 },
  "Sejong": { lat: 36.4800, lon: 127.2890 },
  "Gyeonggi": { lat: 37.4138, lon: 127.5183 },
  "Gangwon": { lat: 37.8228, lon: 128.1555 },
  "Chungbuk": { lat: 36.6357, lon: 127.4917 },
  "Chungnam": { lat: 36.5184, lon: 126.8000 },
  "Jeonbuk": { lat: 35.7175, lon: 127.1530 },
  "Jeonnam": { lat: 34.8679, lon: 126.9910 },
  "Gyeongbuk": { lat: 36.4919, lon: 128.8889 },
  "Gyeongnam": { lat: 35.4606, lon: 128.2132 },
  "Jeju": { lat: 33.4890, lon: 126.4983 },
};

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function geocodeAddress(query) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'KR-UniTuition/1.0 (contact@eas-tuition.com)'
      }
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon)
      };
    }
  } catch (err) {
    console.error(`Geocoding error for query "${query}":`, err);
  }
  return null;
}

async function main() {
  console.log(`Starting geocoding for ${universities.length} universities...`);
  
  let coordinates = {};
  if (fs.existsSync(COORDINATES_PATH)) {
    coordinates = JSON.parse(fs.readFileSync(COORDINATES_PATH, 'utf8'));
  }

  let newlyGeocoded = 0;
  let fallbackCount = 0;

  for (let i = 0; i < universities.length; i++) {
    const school = universities[i];
    const id = school.id;

    // Check if valid coordinates already exist (lat between 30 and 40, lon between 124 and 132 for Korea)
    const existing = coordinates[id];
    if (existing && existing.lat >= 33 && existing.lat <= 39 && existing.lon >= 124 && existing.lon <= 131) {
      // It exists and is correct, keep it
      continue;
    }

    console.log(`[${i+1}/${universities.length}] Geocoding: ${school.name_vi} (${school.name_en})`);

    let coords = null;

    // Try 1: English name + "South Korea"
    coords = await geocodeAddress(`${school.name_en}, South Korea`);
    await sleep(1200); // 1.2s delay for Nominatim limit

    // Try 2: Korean name
    if (!coords && school.name_ko) {
      coords = await geocodeAddress(`${school.name_ko}`);
      await sleep(1200);
    }

    // Try 3: Address
    if (!coords && school.campus_address) {
      // Clean address to make it geocodable (remove post code or room numbers if any)
      const cleanAddr = school.campus_address.split(',')[0];
      coords = await geocodeAddress(`${cleanAddr}, South Korea`);
      await sleep(1200);
    }

    if (coords) {
      coordinates[id] = coords;
      newlyGeocoded++;
      console.log(`  -> SUCCESS: lat=${coords.lat}, lon=${coords.lon}`);
    } else {
      // Fallback to province center with a slight random offset so markers don't overlap completely
      const provCoords = PROVINCE_COORDS[school.region] || { lat: 35.8, lon: 127.8 };
      // slight offset (+/- 0.05 degrees, approx 5km)
      const offsetLat = provCoords.lat + (Math.random() - 0.5) * 0.15;
      const offsetLon = provCoords.lon + (Math.random() - 0.5) * 0.15;
      
      coordinates[id] = {
        lat: Number(offsetLat.toFixed(6)),
        lon: Number(offsetLon.toFixed(6))
      };
      fallbackCount++;
      console.log(`  -> FAILED: Fallback to region ${school.region} (offset lat=${coordinates[id].lat}, lon=${coordinates[id].lon})`);
    }

    // Intermediate saves to avoid losing progress
    if (newlyGeocoded % 5 === 0) {
      fs.writeFileSync(COORDINATES_PATH, JSON.stringify(coordinates, null, 2), 'utf8');
      fs.writeFileSync(VITE_COORDINATES_PATH, JSON.stringify(coordinates, null, 2), 'utf8');
    }
  }

  // Final save
  fs.writeFileSync(COORDINATES_PATH, JSON.stringify(coordinates, null, 2), 'utf8');
  fs.writeFileSync(VITE_COORDINATES_PATH, JSON.stringify(coordinates, null, 2), 'utf8');

  console.log(`Geocoding complete!`);
  console.log(`- Newly geocoded: ${newlyGeocoded}`);
  console.log(`- Fallbacks used: ${fallbackCount}`);
  console.log(`- Total coordinate mappings: ${Object.keys(coordinates).length}`);
}

main().catch(console.error);
