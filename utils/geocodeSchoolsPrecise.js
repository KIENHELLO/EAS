import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { universities } from '../kr-unituition-next/src/data/universities.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COORDINATES_PATH = path.join(__dirname, '../kr-unituition-next/src/data/school_coordinates.json');
const VITE_COORDINATES_PATH = path.join(__dirname, '../src/data/school_coordinates.json');

// Province coordinates mapping for fallbacks and mock schools
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
        'User-Agent': 'KR-UniTuition/2.0 (contact@eas-tuition.com)'
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

// Function to generate coordinates inside region with slight random offset
function getRegionFallbackCoords(region) {
  const provCoords = PROVINCE_COORDS[region] || { lat: 35.8, lon: 127.8 };
  // Add a random offset of +/- 0.05 to 0.08 degrees (approx 5-8km) so pins don't overlap
  const offsetLat = provCoords.lat + (Math.random() - 0.5) * 0.12;
  const offsetLon = provCoords.lon + (Math.random() - 0.5) * 0.12;
  return {
    lat: Number(offsetLat.toFixed(6)),
    lon: Number(offsetLon.toFixed(6))
  };
}

async function main() {
  console.log(`Starting precise geocoding for ${universities.length} universities...`);
  
  let coordinates = {};
  
  let realGeocodedCount = 0;
  let realFallbackCount = 0;
  let mockCount = 0;

  for (let i = 0; i < universities.length; i++) {
    const school = universities[i];
    const id = school.id;
    const isMock = id.startsWith('mock_') || id.startsWith('uni_');

    if (isMock) {
      // Mock schools: Assign coordinates in the designated region
      coordinates[id] = getRegionFallbackCoords(school.region);
      mockCount++;
      console.log(`[${i+1}/${universities.length}] [MOCK] ID: ${id} | Region: ${school.region} -> Assigned regional coordinates: lat=${coordinates[id].lat}, lon=${coordinates[id].lon}`);
      continue;
    }

    console.log(`[${i+1}/${universities.length}] [REAL] Geocoding: ${school.name_vi} (${school.name_en})`);
    let coords = null;

    // Try 1: Campus Address (most accurate for exact building location)
    if (school.campus_address) {
      const cleanAddr = school.campus_address.split(',')[0];
      coords = await geocodeAddress(`${cleanAddr}, South Korea`);
      if (coords) {
        console.log(`  -> Try 1 (Address) Success: lat=${coords.lat}, lon=${coords.lon}`);
      }
      await sleep(1200);
    }

    // Try 2: Korean Name (extremely accurate for official Korean listings)
    if (!coords && school.name_ko) {
      coords = await geocodeAddress(school.name_ko);
      if (coords) {
        console.log(`  -> Try 2 (Korean Name) Success: lat=${coords.lat}, lon=${coords.lon}`);
      }
      await sleep(1200);
    }

    // Try 3: English Name + Region (prevents other campus matches)
    if (!coords) {
      coords = await geocodeAddress(`${school.name_en}, ${school.region}, South Korea`);
      if (coords) {
        console.log(`  -> Try 3 (Name En + Region) Success: lat=${coords.lat}, lon=${coords.lon}`);
      }
      await sleep(1200);
    }

    // Try 4: English Name Only
    if (!coords) {
      coords = await geocodeAddress(`${school.name_en}, South Korea`);
      if (coords) {
        console.log(`  -> Try 4 (Name En Only) Success: lat=${coords.lat}, lon=${coords.lon}`);
      }
      await sleep(1200);
    }

    if (coords) {
      coordinates[id] = coords;
      realGeocodedCount++;
    } else {
      // Fallback
      coordinates[id] = getRegionFallbackCoords(school.region);
      realFallbackCount++;
      console.log(`  -> FAILED ALL TRIES: Fallback to region ${school.region} center: lat=${coordinates[id].lat}, lon=${coordinates[id].lon}`);
    }

    // Intermediate saves
    if (realGeocodedCount % 5 === 0) {
      fs.writeFileSync(COORDINATES_PATH, JSON.stringify(coordinates, null, 2), 'utf8');
      fs.writeFileSync(VITE_COORDINATES_PATH, JSON.stringify(coordinates, null, 2), 'utf8');
    }
  }

  // Final save
  fs.writeFileSync(COORDINATES_PATH, JSON.stringify(coordinates, null, 2), 'utf8');
  fs.writeFileSync(VITE_COORDINATES_PATH, JSON.stringify(coordinates, null, 2), 'utf8');

  console.log(`\nPrecise Geocoding complete!`);
  console.log(`- Real schools successfully geocoded: ${realGeocodedCount}`);
  console.log(`- Real schools fallback used: ${realFallbackCount}`);
  console.log(`- Mock schools assigned regional coords: ${mockCount}`);
  console.log(`- Total coordinate mappings written: ${Object.keys(coordinates).length}`);
}

main().catch(console.error);
