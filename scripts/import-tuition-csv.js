/**
 * SCRIPT TỰ ĐỘNG HÓA NHẬP DỮ LIỆU HỌC PHÍ ĐẠI HỌC HÀN QUỐC
 * -------------------------------------------------------------
 * Script này đọc file CSV dữ liệu học phí tải từ Cổng thông tin công khai Hàn Quốc (data.go.kr)
 * hoặc Cổng thông tin công bố giáo dục đại học (academyinfo.go.kr),
 * tự động dịch tên, vùng miền, định dạng lại số liệu và lưu đè vào file `src/data/universities.js`.
 * 
 * Hướng dẫn sử dụng:
 * 1. Tải file CSV "대학 등록금 현황" (Tình hình học phí đại học) từ data.go.kr hoặc academyinfo.go.kr
 * 2. Lưu file vào thư mục dự án với tên `tuition_raw.csv`
 * 3. Chạy lệnh: `node scripts/import-tuition-csv.js`
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Bảng ánh xạ dịch khu vực từ tiếng Hàn sang tiếng Anh/Việt
const REGION_MAP = {
  '서울': 'Seoul',
  '부산': 'Busan',
  '대구': 'Daegu',
  '인천': 'Incheon',
  '광주': 'Gwangju',
  '대전': 'Daejeon',
  '울산': 'Ulsan',
  '세종': 'Sejong',
  '경기': 'Gyeonggi',
  '강원': 'Gangwon',
  '충북': 'Chungbuk',
  '충남': 'Chungnam',
  '전북': 'Jeonbuk',
  '전남': 'Jeonnam',
  '경북': 'Gyeongbuk',
  '경남': 'Gyeongnam',
  '제주': 'Jeju'
};

// Từ điển dịch tên một số trường phổ biến sang tiếng Việt
const UNIVERSITY_NAME_VI_MAP = {
  '서울대학교': 'Đại học Quốc gia Seoul',
  '연세대학교': 'Đại học Yonsei',
  '고려대학교': 'Đại học Korea',
  '성균관대학교': 'Đại học Sungkyunkwan',
  '한양대학교': 'Đại học Hanyang',
  '경희대학교': 'Đại học Kyung Hee',
  '이화여자대학교': 'Đại học Nữ giới Ewha',
  '서강대학교': 'Đại học Sogang',
  '중앙대학교': 'Đại học Trung ương (Chung-Ang)',
  '부산대학교': 'Đại học Quốc gia Pusan',
  '경북대학교': 'Đại học Quốc gia Kyungpook',
  '한국외국어대학교': 'Đại học Ngoại ngữ Hankuk (HUFS)',
  '동국대학교': 'Đại học Dongguk',
  '건국대학교': 'Đại học Konkuk',
  '세종대학교': 'Đại học Sejong',
  '국민대학교': 'Đại học Kookmin',
  '아주대학교': 'Đại học Ajou',
  '인하대학교': 'Đại học Inha',
  '포항공과대학교': 'Đại học Khoa học & Công nghệ Pohang (POSTECH)',
  '한국과학기술원': 'Viện Khoa học & Công nghệ Tiên tiến Hàn Quốc (KAIST)',
  '울산과학기술원': 'Viện Khoa học & Công nghệ Quốc gia Ulsan (UNIST)',
  '광주과학기술원': 'Viện Khoa học & Công nghệ Gwangju (GIST)',
  '전남대학교': 'Đại học Quốc gia Chonnam',
  '충남대학교': 'Đại học Quốc gia Chungnam',
  '전북대학교': 'Đại học Quốc gia Jeonbuk',
  '강원대학교': 'Đại học Quốc gia Kangwon',
  '제주대학교': 'Đại học Quốc gia Jeju',
  '서울시립대학교': 'Đại học Seoul (UOS)',
  '숭실대학교': 'Đại học Soongsil',
  '영남대학교': 'Đại học Yeungnam'
};

// Hàm phiên âm thô tiếng Hàn sang chữ Latin (nếu không có trong từ điển tiếng Việt)
function romanizeKoreanName(koName) {
  // Thay thế các hậu tố phổ biến
  let name = koName;
  let suffix = ' University';
  
  if (name.endsWith('대학교')) {
    name = name.slice(0, -3);
    suffix = ' University';
  } else if (name.endsWith('대학')) {
    name = name.slice(0, -2);
    suffix = ' College';
  }
  
  // Ánh xạ phiên âm một số âm tiết phổ biến
  const syllables = {
    '서울': 'Seoul', '부산': 'Pusan', '대구': 'Daegu', '인천': 'Incheon', 
    '광주': 'Gwangju', '대전': 'Daejeon', '울산': 'Ulsan', '경기': 'Gyeonggi',
    '강원': 'Gangwon', '제주': 'Jeju', '충남': 'Chungnam', '충북': 'Chungbuk',
    '전남': 'Chonnam', '전북': 'Jeonbuk', '경남': 'Gyeongnam', '경북': 'Gyeongpook',
    '세종': 'Sejong', '국민': 'Kookmin', '숭실': 'Soongsil', '아주': 'Ajou',
    '인하': 'Inha', '한양': 'Hanyang', '성균관': 'Sungkyunkwan', '건국': 'Konkuk',
    '동국': 'Dongguk', '중앙': 'Chung-Ang', '경희': 'Kyung Hee', '서강': 'Sogang',
    '단국': 'Dankook', '명지': 'Myongji', '상명': 'Sangmyung', '가천': 'Gachon',
    '인제': 'Inje', '한림': 'Hallym', '순천향': 'Soonchunhyang', '울산': 'Ulsan',
    '조선': 'Chosun', '동아': 'Dong-A', '부경': 'Pukyong', '창원': 'Changwon'
  };

  for (const [ko, en] of Object.entries(syllables)) {
    if (name.includes(ko)) {
      return name.replace(ko, en) + suffix;
    }
  }

  return name + suffix; // Fallback
}

const csvFilePath = path.join(__dirname, '../tuition_raw.csv');
const outputFilePath = path.join(__dirname, '../src/data/universities.js');

if (!fs.existsSync(csvFilePath)) {
  console.error(`\x1b[31m[LỖI] Không tìm thấy tệp tin ${csvFilePath}\x1b[0m`);
  console.log(`Vui lòng tải tệp CSV học phí từ data.go.kr và lưu với tên 'tuition_raw.csv' trong thư mục dự án.`);
  process.exit(1);
}

// Tải cơ sở dữ liệu hiện có
let currentUniversities = [];
try {
  const module = await import('../src/data/universities.js');
  currentUniversities = module.universities || [];
  console.log(`Đã tải thành công ${currentUniversities.length} trường hiện có từ hệ thống.`);
} catch (e) {
  console.log('Không thể tải dữ liệu hiện tại, sẽ khởi tạo mới từ CSV.');
}

const existingMap = new Map();
currentUniversities.forEach(u => {
  existingMap.set(u.name_ko, u);
});

// Xác định ID và Rank lớn nhất để tự động tăng cho trường mới
let maxIdNum = 0;
currentUniversities.forEach(u => {
  const match = u.id.match(/^uni_(\d+)$/);
  if (match) {
    const num = parseInt(match[1], 10);
    if (num > maxIdNum) maxIdNum = num;
  }
});
let idCounter = maxIdNum + 1;

let maxRanking = 0;
currentUniversities.forEach(u => {
  if (u.ranking > maxRanking) maxRanking = u.ranking;
});

console.log('Đang đọc và xử lý tệp CSV...');

const rawData = fs.readFileSync(csvFilePath, 'utf-8');
const lines = rawData.split('\n');

// Đọc dòng tiêu đề để xác định cột
const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
console.log('Tiêu đề cột phát hiện được:', headers);

const nameIndex = headers.findIndex(h => h.includes('학교명') || h.includes('대학명') || h.includes('Name'));
const typeIndex = headers.findIndex(h => h.includes('설립구분') || h.includes('설립') || h.includes('Establishment'));
const regionIndex = headers.findIndex(h => h.includes('지역') || h.includes('주소') || h.includes('Region'));
const tuitionIndex = headers.findIndex(h => h.includes('등록금') || h.includes('평균등록금') || h.includes('Tuition'));

if (nameIndex === -1 || tuitionIndex === -1) {
  console.error('\x1b[31m[LỖI] Cấu trúc file CSV không hợp lệ. Phải chứa cột tên trường (학교명) và học phí (등록금).\x1b[0m');
  process.exit(1);
}

// Bắt đầu duyệt từ dòng thứ 2 (dữ liệu)
for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  // Xử lý split comma bảo vệ dấu ngoặc kép
  const columns = [];
  let currentWord = '';
  let inQuotes = false;
  
  for (let c = 0; c < line.length; c++) {
    const char = line[c];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      columns.push(currentWord.trim().replace(/"/g, ''));
      currentWord = '';
    } else {
      currentWord += char;
    }
  }
  columns.push(currentWord.trim().replace(/"/g, ''));

  if (columns.length < headers.length) continue;

  const rawName = columns[nameIndex];
  // Bỏ qua các chi nhánh/cơ sở phụ nếu trùng lắp hoặc lọc các trường đại học chuyên biệt
  if (rawName.includes('대학원') || rawName.includes('사이버')) continue;

  const rawTuition = columns[tuitionIndex];
  const tuitionAverage = parseFloat(rawTuition.replace(/[^0-9.]/g, '')) || 3500000;
  const tuitionPerSemester = tuitionAverage > 4500000 ? Math.round(tuitionAverage / 2) : Math.round(tuitionAverage);

  if (existingMap.has(rawName)) {
    const school = existingMap.get(rawName);
    
    // Cập nhật học phí bảo toàn giá trị null của chuyên ngành
    const updatedTuition = { ...school.tuition };
    const multipliers = {
      humanities_social: 0.9,
      natural_sciences: 1.05,
      engineering: 1.18,
      arts_sports: 1.25,
      medicine_pharmacy: school.type === 'public' ? 1.45 : 1.6
    };

    Object.keys(updatedTuition).forEach(major => {
      if (updatedTuition[major] !== null && updatedTuition[major] !== undefined) {
        const mult = multipliers[major] || 1.0;
        updatedTuition[major] = Math.round(tuitionPerSemester * mult);
      }
    });

    school.tuition = updatedTuition;
  } else {
    // Thêm trường mới nếu chưa tồn tại
    const rawType = typeIndex !== -1 ? columns[typeIndex] : '사립';
    const type = (rawType.includes('국립') || rawType.includes('공립') || rawType.includes('시립') || rawType.includes('도립')) ? 'public' : 'private';

    const rawRegion = regionIndex !== -1 ? columns[regionIndex] : '서울';
    const regionKey = Object.keys(REGION_MAP).find(k => rawRegion.startsWith(k)) || '서울';
    const region = REGION_MAP[regionKey] || 'Seoul';

    const id = `uni_${idCounter++}`;
    const name_vi = UNIVERSITY_NAME_VI_MAP[rawName] || rawName.replace('대학교', 'Đại học ').replace('대학', 'Đại học ');
    const name_en = romanizeKoreanName(rawName);

    const tuitionBreakdown = {
      humanities_social: Math.round(tuitionPerSemester * 0.9),
      natural_sciences: Math.round(tuitionPerSemester * 1.05),
      engineering: Math.round(tuitionPerSemester * 1.18),
      arts_sports: Math.round(tuitionPerSemester * 1.25),
      medicine_pharmacy: type === 'public' ? Math.round(tuitionPerSemester * 1.45) : Math.round(tuitionPerSemester * 1.6)
    };

    if (name_en.includes('Science') || name_en.includes('Technology')) {
      tuitionBreakdown.arts_sports = null;
      tuitionBreakdown.medicine_pharmacy = null;
    }

    const isSeoul = region === 'Seoul';
    const dorm_fee = isSeoul ? 1400000 : 950000;
    const living_cost_est = isSeoul ? 800000 : 550000;

    maxRanking++;
    const newSchool = {
      id,
      name_en,
      name_ko: rawName,
      name_vi,
      type,
      region,
      ranking: maxRanking,
      campus_address: `${region}, South Korea`,
      website: `http://www.${id}.ac.kr`,
      tuition: tuitionBreakdown,
      dorm_fee,
      living_cost_est,
      scholarships: [
        "Học bổng Chính phủ Hàn Quốc (GKS)",
        "Học bổng dựa trên chứng chỉ tiếng Hàn TOPIK (30% - 100% học phí)",
        "Học bổng khuyến khích kết quả học tập GPA xuất sắc hàng kỳ"
      ],
      description: `Trường đại học đào tạo đa ngành tại khu vực ${region}. Trường có môi trường quốc tế năng động và nhiều hỗ trợ dành cho du học sinh Việt Nam.`,
      accept_gdtx: null,
      visa_metropolitan: false,
      master_no_topik: false,
      custom_notes: ""
    };

    currentUniversities.push(newSchool);
    existingMap.set(rawName, newSchool);
  }
}

// Ghi đè lại tệp JS kết quả
const fileContent = `// TỆP DỮ LIỆU ĐƯỢC CẬP NHẬT TỪ HỌC PHÍ CSV VÀ BẢO TOÀN TRƯỜNG TỰ ĐỊNH NGHĨA
export const universities = ${JSON.stringify(currentUniversities, null, 2)};
`;

fs.writeFileSync(outputFilePath, fileContent, 'utf-8');
console.log(`\x1b[32m[THÀNH CÔNG] Đã cập nhật học phí thành công. Hiện có ${currentUniversities.length} trường học trong hệ thống tại ${outputFilePath}\x1b[0m`);
