import { universities } from '../src/data/universities.js';

function removeVietnameseTones(str) {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

export function matchSchoolSmart(school, majorName) {
  if (!majorName || majorName === 'All' || !majorName.trim()) return true;

  const rawQuery = majorName.trim().toLowerCase();
  const normQuery = removeVietnameseTones(rawQuery);
  const cleanQueryStr = rawQuery.replace(/\(.*?\)/g, '');
  const normCleanStr = removeVietnameseTones(cleanQueryStr);

  // Split by symbols AND words
  const symbolTokens = normCleanStr
    .split(/[\&\/\,\-\+]|\bva\b|\bhoac\b|\bor\b|\band\b/)
    .map(t => t.trim())
    .filter(t => t.length >= 2);

  // Core keyword mappings for broad choices
  let coreKeywords = [...symbolTokens];
  if (normCleanStr.includes('kinh doanh')) coreKeywords.push('kinh doanh', 'quan tri', 'thuong mai', 'kinh te');
  if (normCleanStr.includes('truyen thong')) coreKeywords.push('truyen thong', 'bao chi', 'quang cao', 'media');
  if (normCleanStr.includes('han quoc') || normCleanStr.includes('ngon ngu han')) coreKeywords.push('ngon ngu han', 'han quoc', 'han hoc');
  if (normCleanStr.includes('may tinh') || normCleanStr.includes('ai') || normCleanStr.includes('it')) coreKeywords.push('may tinh', 'it', 'thong tin', 'phan mem', 'cong nghe thong tin');
  if (normCleanStr.includes('o to')) coreKeywords.push('o to', 'co khi', 'xe');
  if (normCleanStr.includes('thiet ke')) coreKeywords.push('thiet ke', 'do hoa', 'my thuat');
  if (normCleanStr.includes('lam dep') || normCleanStr.includes('tham my')) coreKeywords.push('lam dep', 'tham my', 'trang diem', 'beauty', 'trang diem');
  if (normCleanStr.includes('du lich') || normCleanStr.includes('khach san')) coreKeywords.push('du lich', 'khach san');
  if (normCleanStr.includes('dien anh') || normCleanStr.includes('san khau')) coreKeywords.push('dien anh', 'san khau', 'truyen hinh', 'dien xuat');
  if (normCleanStr.includes('am nhac') || normCleanStr.includes('k-pop')) coreKeywords.push('am nhac', 'k-pop', 'vocal', 'nghe thuat');
  if (normCleanStr.includes('dieu duong')) coreKeywords.push('dieu duong', 'nursing', 'y te');
  if (normCleanStr.includes('ban dan')) coreKeywords.push('ban dan', 'vi mach');
  if (normCleanStr.includes('duoc')) coreKeywords.push('duoc', 'thuoc');

  const allKeywords = Array.from(new Set([normCleanStr, normQuery, ...coreKeywords]));

  const textMatchesAnyKeyword = (text) => {
    if (!text) return false;
    const textLower = text.toLowerCase();
    const textNorm = removeVietnameseTones(textLower);
    return allKeywords.some(kw => textLower.includes(kw) || textNorm.includes(kw));
  };

  // 1. Check featured_majors from XLSX first (if school has featured_majors)
  if (school.featured_majors && school.featured_majors.trim()) {
    return textMatchesAnyKeyword(school.featured_majors) || textMatchesAnyKeyword(school.custom_notes) || textMatchesAnyKeyword(school.description);
  }

  // 2. Fallback for mock/other schools: match custom_notes or description
  if (textMatchesAnyKeyword(school.custom_notes) || textMatchesAnyKeyword(school.description)) {
    return true;
  }

  // 3. Fallback to broad tuition category if not defined
  return false;
}

const AVAILABLE_MAJORS = [
  'Quản trị kinh doanh',
  'Truyền thông & Báo chí',
  'Ngôn ngữ & Văn hóa Hàn Quốc',
  'Khoa học máy tính & AI',
  'Công nghệ thông tin (IT)',
  'Kỹ thuật Điện - Điện tử',
  'Kỹ thuật Cơ khí',
  'Kỹ thuật Ô tô & Xe thông minh',
  'Thiết kế Đồ họa & Kỹ thuật số',
  'Nghệ thuật Thẩm mỹ & Làm đẹp',
  'Quản trị Du lịch & Khách sạn',
  'Thương mại quốc tế',
  'Kinh tế học',
  'Diễn xuất, Sân khấu & Điện ảnh',
  'Âm nhạc K-Pop & Nghệ thuật',
  'Điều dưỡng (Nursing)',
  'Thiết kế Thời trang',
  'Kỹ thuật Bán dẫn',
  'Dược học',
  'Logistics'
];

console.log(`=== SMART MAJOR FILTER TEST ===\nTotal Schools: ${universities.length}\n`);

for (const m of AVAILABLE_MAJORS) {
  const matched = universities.filter(s => matchSchoolSmart(s, m));
  console.log(`Major: "${m}"`);
  console.log(`   Matches: ${matched.length} / ${universities.length} schools`);
  console.log(`   Sample: ${matched.slice(0, 5).map(s => s.name_vi).join(', ')}\n`);
}
