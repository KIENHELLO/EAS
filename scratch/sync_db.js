import fs from 'fs';
import path from 'path';
import { universities } from '../src/data/universities.js';

// Load geocoded schools from Excel files
const schools = JSON.parse(fs.readFileSync('scratch/geocoded_schools.json', 'utf8'));

// Spelling/ID overrides for matching
const idOverrides = {
  "đại học seolyong ( 서경대학교 )": "seokyeong",
  "đại học khoa học và công nghệ pohang": "postech",
  "포항공과대학교 (đại học khoa học & công nghệ pohang - postech)": "postech",
  "đại học sungkyungwan": "skku",
  "đại học chungang": "cau",
  "đại học nữ sungshin": "sungshin_womens",
  "đại học nữ sinh ewha ( 이화여자대학교 )": "ewha",
  "đại học quốc gia busan": "pusan",
  "đại học thần học seoul ( stu ) ( 서울신학대학교 )": "seoul_theological",
  "đại học kyunghee": "kyung_hee",
  "đại học công giáo": "catholic",
  "đại học nữ duksung": "duksung_womens",
  "đại học nữ sookmyung": "sookmyung_womens",
  "đại học nữ seoul": "seoul_womens",
  "đại học quốc gia pukyong": "pukyong",
  "đại học quốc gia changwon": "changwon",
  "đại học yeungsang - top 3": "youngsan",
  "đại học doowon - top 3": "doowon_tech",
  "đại học jeju - top 3": "jeju",
  "đại học osan": "osan_uni",
};

// Text cleaning function
function clean(text) {
  if (!text) return "";
  let t = text.toLowerCase()
    .replace(/[-\s']/g, "")
    .replace(/đạihọcquốcgia/g, "")
    .replace(/đạihọccônggiáo/g, "")
    .replace(/đạihọcnữsinh/g, "")
    .replace(/đạihọcnữ/g, "")
    .replace(/đạihọc/g, "")
    .replace(/caodẳngkỹthuật/g, "")
    .replace(/caodẳngy/g, "")
    .replace(/caodẳng/g, "")
    .replace(/trường/g, "");
    
  // strip vietnamese tones
  const accents = {
    'a': '[àáảãạăằắẳẵặâầấẩẫậ]',
    'e': '[èéẻẽẹêềếểễệ]',
    'i': '[ìíỉĩị]',
    'o': '[òóỏõọôồốổỗộơờớởỡợ]',
    'u': '[ùúủũụưừứửữự]',
    'y': '[ỳýỷỹỵ]',
    'd': 'đ'
  };
  for (let key in accents) {
    t = t.replace(new RegExp(accents[key], 'g'), key);
  }
  return t;
}

// Map existing DB schools by clean name
const dbByCleanVi = {};
const dbByCleanEn = {};
universities.forEach(u => {
  dbByCleanVi[clean(u.name_vi)] = u;
  dbByCleanEn[clean(u.name_en)] = u;
});

let matchedCount = 0;
let addedCount = 0;
const newSchools = [];

// Track coordinate mappings
const coordsMap = {};

// We also load existing coordinates to merge
if (fs.existsSync('src/data/school_coordinates.json')) {
  try {
    const existingCoords = JSON.parse(fs.readFileSync('src/data/school_coordinates.json', 'utf8'));
    Object.assign(coordsMap, existingCoords);
  } catch (e) {
    console.warn("Failed to load existing coords", e);
  }
}

schools.forEach(s => {
  const name = s.name;
  const nameL = name.toLowerCase().trim();
  
  let found = null;
  
  // 1. Check override
  if (idOverrides[nameL]) {
    const matchedId = idOverrides[nameL];
    found = universities.find(u => u.id === matchedId);
  }
  
  // 2. Direct clean matches
  if (!found) {
    const cleanName = clean(name);
    if (dbByCleanVi[cleanName]) {
      found = dbByCleanVi[cleanName];
    } else if (dbByCleanEn[cleanName]) {
      found = dbByCleanEn[cleanName];
    }
  }
  
  // 3. Substring clean matches
  if (!found) {
    const cleanName = clean(name);
    for (let dbClean in dbByCleanVi) {
      if (dbClean && cleanName && (dbClean.includes(cleanName) || cleanName.includes(dbClean))) {
        found = dbByCleanVi[dbClean];
        break;
      }
    }
    if (!found) {
      for (let dbClean in dbByCleanEn) {
        if (dbClean && cleanName && (dbClean.includes(cleanName) || cleanName.includes(dbClean))) {
          found = dbByCleanEn[dbClean];
          break;
        }
      }
    }
  }
  
  if (found) {
    // Update existing school properties
    matchedCount++;
    found.coordinates = { latitude: s.lat, longitude: s.lon };
    found.campus_address = s.address_ko || found.campus_address;
    
    // Set visa and accept flags based on source file
    if (s.file_source === 'diachitop1%.xlsx') {
      found.top_1_percent = true;
      found.accept_gdtx = 'top1';
    } else if (s.file_source === 'diachitop2%.xlsx') {
      found.top_1_percent = false;
      found.accept_gdtx = 'top2';
    } else if (s.file_source === 'diachitop3%.xlsx') {
      found.top_1_percent = false;
      found.accept_gdtx = 'top3';
    }
    
    // Update coordinate map
    coordsMap[found.id] = { lat: s.lat, lon: s.lon };
    
  } else {
    // Create new school object for missing school
    addedCount++;
    const isCollege = name.toLowerCase().includes('cao đẳng') || name.toLowerCase().includes('college') || name.toLowerCase().includes('doowon') || name.toLowerCase().includes('tongwon') || name.toLowerCase().includes('shingu');
    
    // Generate clean ID from name
    const newId = clean(name).substring(0, 15) + "_" + Math.floor(Math.random() * 1000);
    
    const newSchool = {
      id: newId,
      name_vi: name,
      name_en: name + " (Imported)",
      name_ko: name,
      type: "private", // Default to private
      region: s.region_orig || "Seoul",
      ranking: 150 + addedCount,
      campus_address: s.address_ko || "Korea",
      website: "https://www.studyinkorea.go.kr",
      tuition: {
        humanities_social: 2500000,
        natural_sciences: 2800000,
        engineering: 3000000,
        arts_sports: 3200000,
        medicine_pharmacy: null
      },
      dorm_fee: 1000000,
      living_cost_est: 3500000,
      scholarships: [
        "Học bổng khuyến học kỳ đầu cho tân sinh viên",
        "Học bổng kết quả học tập GPA xuất sắc"
      ],
      accept_gdtx: s.file_source === 'diachitop1%.xlsx' ? 'top1' : (s.file_source === 'diachitop2%.xlsx' ? 'top2' : 'top3'),
      visa_metropolitan: true,
      master_no_topik: false,
      top_1_percent: s.file_source === 'diachitop1%.xlsx',
      is_restricted_school: false,
      featured_majors: isCollege ? "Kỹ thuật, thẩm mỹ, du lịch khách sạn" : "Kinh doanh, truyền thông, kỹ thuật công nghệ",
      custom_notes: "Trường được đồng bộ tự động từ danh sách địa chỉ 2026",
      invoice_details: "HỌC PHÍ 4,800,000-5,200,000KRW - BẢO HIỂM 150,000KRW",
      coordinates: {
        latitude: s.lat,
        longitude: s.lon
      },
      majors_detail: [
        {
          category: "humanities_social",
          faculty_name_vi: "Khoa Nhân văn & Xã hội",
          faculty_name_ko: "인문사회대학",
          tuition_krw: 2500000,
          majors: [
            { name_vi: "Quản trị Kinh doanh", name_ko: "경영학과", is_hot: true },
            { name_vi: "Ngôn ngữ Hàn Quốc", name_ko: "한국어학과", is_hot: true }
          ]
        }
      ]
    };
    
    universities.push(newSchool);
    coordsMap[newId] = { lat: s.lat, lon: s.lon };
  }
});

console.log(`Sync Stats:`);
console.log(`  Matched and updated: ${matchedCount}`);
console.log(`  Newly added missing schools: ${addedCount}`);
console.log(`  Total database schools now: ${universities.length}`);

// Write updated universities.js back
const outputJs = `export const universities = ${JSON.stringify(universities, null, 2)};\n`;

fs.writeFileSync('src/data/universities.js', outputJs, 'utf8');
fs.writeFileSync('kr-unituition-next/src/data/universities.js', outputJs, 'utf8');

// Write updated school_coordinates.json
fs.writeFileSync('src/data/school_coordinates.json', JSON.stringify(coordsMap, null, 2), 'utf8');
fs.writeFileSync('kr-unituition-next/src/data/school_coordinates.json', JSON.stringify(coordsMap, null, 2), 'utf8');

console.log('Successfully synced data & coordinates across Vite client and Next.js server!');
