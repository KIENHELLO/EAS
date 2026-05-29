import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COORDINATES_PATH = path.join(__dirname, '../kr-unituition-next/src/data/school_coordinates.json');
const VITE_COORDINATES_PATH = path.join(__dirname, '../src/data/school_coordinates.json');
const UNIVERSITIES_JS_PATH = path.join(__dirname, '../kr-unituition-next/src/data/universities.js');

const UNIVERSITIES_GROUND_TRUTH = [
  // Seoul
  { school_code: 'SNU',      name_kr: '서울대학교',         expected_province: 'seoul',    lat: 37.4600, lng: 126.9521 },
  { school_code: 'YONSEI',   name_kr: '연세대학교',         expected_province: 'seoul',    lat: 37.5643, lng: 126.9388 },
  { school_code: 'KOREA',    name_kr: '고려대학교',         expected_province: 'seoul',    lat: 37.5868, lng: 127.0320 },
  { school_code: 'SUNGKYUN', name_kr: '성균관대학교',       expected_province: 'seoul',    lat: 37.5870, lng: 126.9930 },
  { school_code: 'HANYANG',  name_kr: '한양대학교',         expected_province: 'seoul',    lat: 37.5573, lng: 127.0444 },
  { school_code: 'SOGANG',   name_kr: '서강대학교',         expected_province: 'seoul',    lat: 37.5507, lng: 126.9413 },
  { school_code: 'EWHA',     name_kr: '이화여자대학교',     expected_province: 'seoul',    lat: 37.5624, lng: 126.9468 },
  { school_code: 'CHUNGANG', name_kr: '중앙대학교',         expected_province: 'seoul',    lat: 37.5046, lng: 126.9546 },
  { school_code: 'HONGIK',   name_kr: '홍익대학교',         expected_province: 'seoul',    lat: 37.5510, lng: 126.9222 },
  { school_code: 'KONKUK',   name_kr: '건국대학교',         expected_province: 'seoul',    lat: 37.5408, lng: 127.0793 },
  { school_code: 'DONGGUK',  name_kr: '동국대학교',         expected_province: 'seoul',    lat: 37.5584, lng: 126.9987 },
  { school_code: 'KOOKMIN',  name_kr: '국민대학교',         expected_province: 'seoul',    lat: 37.6062, lng: 126.9939 },
  { school_code: 'SEOULTECH',name_kr: '서울과학기술대학교', expected_province: 'seoul',    lat: 37.6330, lng: 127.0785 },
  { school_code: 'UOS',      name_kr: '서울시립대학교',     expected_province: 'seoul',    lat: 37.5830, lng: 127.0574 },
  // Busan
  { school_code: 'PNU',      name_kr: '부산대학교',         expected_province: 'busan',    lat: 35.2335, lng: 129.0802 },
  { school_code: 'PUKYONG',  name_kr: '부경대학교',         expected_province: 'busan',    lat: 35.1336, lng: 129.1057 },
  { school_code: 'DONGA',    name_kr: '동아대학교',         expected_province: 'busan',    lat: 35.1042, lng: 129.0175 },
  { school_code: 'KOSIN',    name_kr: '고신대학교',         expected_province: 'busan',    lat: 35.0987, lng: 128.9760 },
  { school_code: 'SILLA',    name_kr: '신라대학교',         expected_province: 'busan',    lat: 35.1506, lng: 128.9893 },
  // Daegu
  { school_code: 'KNU',      name_kr: '경북대학교',         expected_province: 'daegu',    lat: 35.8892, lng: 128.6107 },
  { school_code: 'KEIMYUNG', name_kr: '계명대학교',         expected_province: 'daegu',    lat: 35.8559, lng: 128.4898 },
  { school_code: 'YEUNGNAM', name_kr: '영남대학교',         expected_province: 'gyeongbuk',lat: 35.8378, lng: 128.7544 },
  // Incheon
  { school_code: 'INU',      name_kr: '인천대학교',         expected_province: 'incheon',  lat: 37.3745, lng: 126.6329 },
  { school_code: 'INHA',     name_kr: '인하대학교',         expected_province: 'incheon',  lat: 37.4498, lng: 126.6573 },
  // Daejeon
  { school_code: 'KAIST',    name_kr: '한국과학기술원',     expected_province: 'daejeon',  lat: 36.3741, lng: 127.3601 },
  { school_code: 'CNU',      name_kr: '충남대학교',         expected_province: 'daejeon',  lat: 36.3671, lng: 127.3444 },
  // Gwangju
  { school_code: 'CHONNAM',  name_kr: '전남대학교',         expected_province: 'gwangju',  lat: 35.1762, lng: 126.9084 },
  { school_code: 'JOSEON',   name_kr: '조선대학교',         expected_province: 'gwangju',  lat: 35.1408, lng: 126.9267 },
  // Ulsan
  { school_code: 'UNIST',    name_kr: '울산과학기술원',     expected_province: 'ulsan',    lat: 35.5816, lng: 129.1900 },
  { school_code: 'UOU',      name_kr: '울산대학교',         expected_province: 'ulsan',    lat: 35.5468, lng: 129.2497 },
  // Gyeonggi
  { school_code: 'AJOU',     name_kr: '아주대학교',         expected_province: 'gyeonggi', lat: 37.2793, lng: 127.0440 },
  { school_code: 'SUNGNAM',  name_kr: '성남대학교',         expected_province: 'gyeonggi', lat: 37.3883, lng: 127.1225 },
  // Gangwon
  { school_code: 'KANGWON',  name_kr: '강원대학교',         expected_province: 'gangwon',  lat: 37.8694, lng: 127.7456 },
  { school_code: 'HALLYM',   name_kr: '한림대학교',         expected_province: 'gangwon',  lat: 37.8851, lng: 127.7359 },
  // Chungbuk
  { school_code: 'CBNU',     name_kr: '충북대학교',         expected_province: 'chungbuk', lat: 36.6277, lng: 127.4573 },
  // Chungnam / Sejong
  { school_code: 'SUNMOON',  name_kr: '선문대학교',         expected_province: 'chungnam', lat: 36.7996, lng: 127.0755 },
  // Jeonbuk
  { school_code: 'JBNU',     name_kr: '전북대학교',         expected_province: 'jeonbuk',  lat: 35.8462, lng: 127.1352 },
  // Gyeongnam
  { school_code: 'GNU',      name_kr: '경상국립대학교',     expected_province: 'gyeongnam',lat: 35.1504, lng: 128.1002 },
  // Jeju
  { school_code: 'JNU',      name_kr: '제주대학교',         expected_province: 'jeju',     lat: 33.4570, lng: 126.5604 },
];

const THRESHOLD_KM = 30;

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 +
            Math.cos(lat1 * Math.PI/180) *
            Math.cos(lat2 * Math.PI/180) *
            Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

async function geocodeAddress(query) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'KR-UniTuition-Verify/2.0 (contact@eas-tuition.com)'
      }
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };
    }
  } catch (err) {
    console.error(`Geocoding error for query "${query}":`, err);
  }
  return null;
}

async function geocodeWithNominatim(name_kr, address) {
  // Try 1: name_kr
  if (name_kr) {
    const coords = await geocodeAddress(name_kr);
    if (coords) return coords;
    await new Promise(r => setTimeout(r, 1100));
  }
  // Try 2: address
  if (address) {
    const cleanAddr = address.split(',')[0];
    const coords = await geocodeAddress(`${cleanAddr}, South Korea`);
    if (coords) return coords;
    await new Promise(r => setTimeout(r, 1100));
  }
  return null;
}

// Function to save coordinates to local JSON files
function saveCoordinatesToStaticFiles(coordinatesObj) {
  try {
    fs.writeFileSync(COORDINATES_PATH, JSON.stringify(coordinatesObj, null, 2), 'utf8');
    fs.writeFileSync(VITE_COORDINATES_PATH, JSON.stringify(coordinatesObj, null, 2), 'utf8');
    console.log(`\n✓ Synchronized static files successfully!`);
    console.log(`  Next.js path: ${COORDINATES_PATH}`);
    console.log(`  Vite path: ${VITE_COORDINATES_PATH}`);
  } catch (e) {
    console.error('Error writing static coordinate files:', e.message);
  }
}

async function runDatabaseMode(dbUrl) {
  console.log("Connecting to PostgreSQL Database...");
  const pool = new pg.Pool({
    connectionString: dbUrl,
    ssl: dbUrl.includes('sslmode=require') || dbUrl.includes('neon.tech') 
      ? { rejectUnauthorized: false } 
      : false
  });

  const client = await pool.connect();
  try {
    // Check and create schema columns if missing
    await client.query(`
      ALTER TABLE universities ADD COLUMN IF NOT EXISTS geocoded BOOLEAN DEFAULT false;
      ALTER TABLE universities ADD COLUMN IF NOT EXISTS geocode_source TEXT;
    `);

    // Verify Ground Truths
    for (const uni of UNIVERSITIES_GROUND_TRUTH) {
      let searchQuery = `%${uni.name_kr}%`;
      let searchCode = uni.school_code;
      if (uni.school_code === 'KOSIN') searchQuery = '%Kosin%';
      if (uni.school_code === 'SILLA') searchQuery = '%Silla%';
      if (uni.school_code === 'GNU') searchQuery = '%경상%';

      const row = await client.query(`
        SELECT school_code, lat, lng, name_kr
        FROM universities
        WHERE name_kr ILIKE $1 OR school_code ILIKE $2 OR school_code ILIKE $3
        LIMIT 1
      `, [searchQuery, searchCode, `%${searchCode}%`]);

      if (!row.rows.length) {
        console.log(`⚠ Không tìm thấy: ${uni.name_kr}`);
        continue;
      }

      const current = row.rows[0];
      const currentLat = current.lat ? parseFloat(current.lat) : null;
      const currentLng = current.lng ? parseFloat(current.lng) : null;
      const distKm = currentLat ? haversineKm(currentLat, currentLng, uni.lat, uni.lng) : 999;

      if (distKm > THRESHOLD_KM) {
        // Ghi đè tọa độ sai
        await client.query(`
          UPDATE universities
          SET lat = $1, lng = $2, geocoded = true, geocode_source = 'ground_truth'
          WHERE school_code = $3
        `, [uni.lat, uni.lng, current.school_code]);
        console.log(`✓ Fixed: ${uni.name_kr} (lệch ${distKm.toFixed(0)}km → đã sửa)`);
      } else {
        // Cập nhật geocode_source nếu chưa có
        await client.query(`
          UPDATE universities
          SET geocoded = true, geocode_source = 'ground_truth'
          WHERE school_code = $1
        `, [current.school_code]);
        console.log(`✓ OK: ${uni.name_kr} (lệch ${distKm.toFixed(0)}km)`);
      }
    }

    // Geocode remaining schools
    const remaining = await client.query(`
      SELECT school_code, name_kr, address
      FROM universities
      WHERE geocode_source != 'ground_truth' OR geocode_source IS NULL OR lat IS NULL
    `);

    console.log(`\n${remaining.rows.length} trường còn lại → geocode tự động...`);
    for (const uni of remaining.rows) {
      await new Promise(r => setTimeout(r, 1100));
      const result = await geocodeWithNominatim(uni.name_kr, uni.address);
      if (result) {
        await client.query(`
          UPDATE universities 
          SET lat=$1, lng=$2, geocoded=true, geocode_source='nominatim'
          WHERE school_code=$3
        `, [result.lat, result.lng, uni.school_code]);
        console.log(`✓ Nominatim: ${uni.name_kr}`);
      } else {
        console.warn(`✗ Cần fix thủ công: ${uni.name_kr}`);
      }
    }

    // Export all database coordinates to static JSON files
    const allSchools = await client.query('SELECT school_code, lat, lng FROM universities');
    let staticCoords = {};
    if (fs.existsSync(COORDINATES_PATH)) {
      staticCoords = JSON.parse(fs.readFileSync(COORDINATES_PATH, 'utf8'));
    }
    allSchools.rows.forEach(row => {
      if (row.lat && row.lng) {
        staticCoords[row.school_code.toLowerCase()] = {
          lat: parseFloat(row.lat),
          lon: parseFloat(row.lng)
        };
      }
    });
    saveCoordinatesToStaticFiles(staticCoords);

  } finally {
    client.release();
    await pool.end();
  }
}

async function runStaticMode() {
  console.log("No DATABASE_URL found. Running verifyAndFix in static local files mode...");

  if (!fs.existsSync(UNIVERSITIES_JS_PATH)) {
    console.error(`Error: Cannot find universities static file at ${UNIVERSITIES_JS_PATH}`);
    return;
  }

  // Load universities static data
  const fileContent = fs.readFileSync(UNIVERSITIES_JS_PATH, 'utf8');
  const arrayStart = fileContent.indexOf('[');
  const arrayEnd = fileContent.lastIndexOf(']') + 1;
  const jsonText = fileContent.slice(arrayStart, arrayEnd);
  const universities = JSON.parse(jsonText);

  // Load coordinates static data
  let coordinates = {};
  if (fs.existsSync(COORDINATES_PATH)) {
    coordinates = JSON.parse(fs.readFileSync(COORDINATES_PATH, 'utf8'));
  }

  const geocodeSource = {}; // in-memory geocode sources

  // Verify Ground Truths
  for (const uni of UNIVERSITIES_GROUND_TRUTH) {
    let nameSearchKeys = [uni.name_kr.toLowerCase()];
    if (uni.school_code === 'KOSIN') nameSearchKeys.push('kosin');
    if (uni.school_code === 'SILLA') nameSearchKeys.push('silla');
    if (uni.school_code === 'GNU') nameSearchKeys.push('경상');

    const school = universities.find(u => {
      const matchId = u.id === uni.school_code.toLowerCase();
      const matchKo = u.name_ko && nameSearchKeys.some(key => u.name_ko.toLowerCase().includes(key));
      const matchEn = u.name_en && nameSearchKeys.some(key => u.name_en.toLowerCase().includes(key));
      return matchId || matchKo || matchEn;
    });

    if (!school) {
      console.log(`⚠ Không tìm thấy: ${uni.name_kr}`);
      continue;
    }

    const currentCoords = coordinates[school.id];
    const currentLat = currentCoords ? currentCoords.lat : null;
    const currentLon = currentCoords ? currentCoords.lon : null;
    const distKm = currentLat ? haversineKm(currentLat, currentLon, uni.lat, uni.lng) : 999;

    if (distKm > THRESHOLD_KM) {
      coordinates[school.id] = { lat: uni.lat, lon: uni.lng };
      geocodeSource[school.id] = 'ground_truth';
      console.log(`✓ Fixed: ${uni.name_kr} (lệch ${distKm.toFixed(0)}km → đã sửa)`);
    } else {
      coordinates[school.id] = { lat: uni.lat, lon: uni.lng }; // enforce exact ground truth coordinates
      geocodeSource[school.id] = 'ground_truth';
      console.log(`✓ OK: ${uni.name_kr} (lệch ${distKm.toFixed(0)}km)`);
    }
  }

  // Geocode remaining schools
  const remaining = universities.filter(u => geocodeSource[u.id] !== 'ground_truth');

  console.log(`\n${remaining.length} trường còn lại → geocode tự động...`);
  for (const school of remaining) {
    const isMock = school.id.startsWith('mock_') || school.id.startsWith('uni_');
    if (isMock) {
      // Mock schools already handled by regional fallback. Do not query Nominatim.
      continue;
    }

    const current = coordinates[school.id];
    // If coordinates are already valid and not far off, skip geocoding
    if (current && current.lat && current.lon) {
      continue;
    }

    await new Promise(r => setTimeout(r, 1100));
    const result = await geocodeWithNominatim(school.name_ko, school.campus_address);
    if (result) {
      coordinates[school.id] = { lat: result.lat, lon: result.lng };
      console.log(`✓ Nominatim: ${school.name_ko || school.name_en}`);
    } else {
      console.warn(`✗ Cần fix thủ công: ${school.name_ko || school.name_en}`);
    }
  }

  saveCoordinatesToStaticFiles(coordinates);
}

async function main() {
  const dbUrl = process.env.DATABASE_URL;
  if (dbUrl && !dbUrl.includes('your_database')) {
    await runDatabaseMode(dbUrl);
  } else {
    await runStaticMode();
  }
}

main().catch(console.error);
