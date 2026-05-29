import { universities } from '../kr-unituition-next/src/data/universities.js';

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
        lon: parseFloat(data[0].lon),
        display_name: data[0].display_name
      };
    }
  } catch (err) {
    console.error(`Geocoding error for query "${query}":`, err);
  }
  return null;
}

const testSchools = ['korea', 'dongguk', 'skku', 'semyung', 'kunsan'];

async function main() {
  for (const id of testSchools) {
    const school = universities.find(u => u.id === id);
    if (!school) continue;
    console.log(`\n--- Testing school: ${school.name_vi} (${id}) ---`);
    console.log(`Address in DB: ${school.campus_address}`);
    console.log(`Name Ko: ${school.name_ko}`);

    // Try 1: Campus Address
    let cleanAddr = school.campus_address.split(',')[0];
    let res1 = await geocodeAddress(`${cleanAddr}, South Korea`);
    console.log(`Try 1 (Address):`, res1 ? `SUCCESS: lat=${res1.lat}, lon=${res1.lon} (${res1.display_name})` : 'FAILED');
    await sleep(1200);

    // Try 2: Name Ko
    if (school.name_ko) {
      let res2 = await geocodeAddress(`${school.name_ko}`);
      console.log(`Try 2 (Name Ko):`, res2 ? `SUCCESS: lat=${res2.lat}, lon=${res2.lon} (${res2.display_name})` : 'FAILED');
      await sleep(1200);
    }

    // Try 3: English Name + Region
    let res3 = await geocodeAddress(`${school.name_en}, ${school.region}, South Korea`);
    console.log(`Try 3 (Name En + Region):`, res3 ? `SUCCESS: lat=${res3.lat}, lon=${res3.lon} (${res3.display_name})` : 'FAILED');
    await sleep(1200);

    // Try 4: English Name
    let res4 = await geocodeAddress(`${school.name_en}, South Korea`);
    console.log(`Try 4 (Name En Only):`, res4 ? `SUCCESS: lat=${res4.lat}, lon=${res4.lon} (${res4.display_name})` : 'FAILED');
    await sleep(1200);
  }
}

main().catch(console.error);
