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

function matchSchoolSmart(school, majorName) {
  if (!majorName || majorName === 'All' || !majorName.trim()) return true;

  const rawQuery = majorName.trim().toLowerCase();
  const normQuery = removeVietnameseTones(rawQuery);
  const cleanQueryStr = rawQuery.replace(/\(.*?\)/g, '');
  const normCleanStr = removeVietnameseTones(cleanQueryStr);

  const queryTokens = normCleanStr
    .split(/[\&\/\,\-\+]|\bva\b|\bhoac\b|\bor\b|\band\b/)
    .map(t => t.trim())
    .filter(t => t.length >= 2);

  const allKeywords = Array.from(new Set([normCleanStr, normQuery, ...queryTokens]));

  const textMatchesAnyKeyword = (text) => {
    if (!text) return false;
    const textLower = text.toLowerCase();
    const textNorm = removeVietnameseTones(textLower);
    return allKeywords.some(kw => textLower.includes(kw) || textNorm.includes(kw));
  };

  // 1. Check featured_majors from XLSX first (if school has featured_majors)
  if (school.featured_majors && school.featured_majors.trim()) {
    if (textMatchesAnyKeyword(school.featured_majors) || textMatchesAnyKeyword(school.custom_notes) || textMatchesAnyKeyword(school.description)) {
      return true;
    }
    return false;
  }

  // 2. Fallback for schools without explicit featured_majors string
  if (textMatchesAnyKeyword(school.custom_notes) || textMatchesAnyKeyword(school.description)) {
    return true;
  }

  return false;
}

const testMajors = [
  'Quản trị kinh doanh',
  'Truyền thông & Báo chí',
  'Khoa học máy tính & AI',
  'Nghệ thuật Thẩm mỹ & Làm đẹp',
  'Kỹ thuật Ô tô & Xe thông minh',
  'Quản trị Du lịch & Khách sạn',
  'Thiết kế Đồ họa & Kỹ thuật số',
  'Diễn xuất, Sân khấu & Điện ảnh',
  'Âm nhạc K-Pop & Vẫn nghệ'
];

console.log(`TOTAL SCHOOLS: ${universities.length}\n`);

for (const m of testMajors) {
  const matched = universities.filter(s => matchSchoolSmart(s, m));
  console.log(`Major: "${m}"`);
  console.log(`   Matched: ${matched.length} / ${universities.length} schools`);
  console.log(`   Sample: ${matched.slice(0, 6).map(s => s.name_vi).join(', ')}\n`);
}
