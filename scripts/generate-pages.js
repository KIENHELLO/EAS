import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { universities } from '../src/data/universities.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, '../src/pages');
const universityPagesDir = path.join(pagesDir, 'university');

// Ensure directories exist
fs.mkdirSync(pagesDir, { recursive: true });
fs.mkdirSync(universityPagesDir, { recursive: true });

// 1. Generate Home Page (index.jsx)
const homePageContent = `import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'index',
  routeUrl: '/',
  Head: () => (
    <>
      <title>KR-UniTuition - Tra Cứu Học Phí Đại Học Hàn Quốc (VND & KRW)</title>
      <meta name="description" content="Hệ thống tra cứu, chuyển đổi tỷ giá và so sánh học phí chi tiết hơn 200 trường đại học tại Hàn Quốc. Hiển thị đồng thời KRW và VND, hỗ trợ du học sinh Việt Nam." />
      <meta name="keywords" content="học phí hàn quốc, học phí đại học hàn quốc, tỷ giá won, so sánh học phí, du học hàn quốc, kr-unituition" />
      <link rel="canonical" href="https://eas-tuition.onrender.com" />
      <meta property="og:title" content="KR-UniTuition - Tra Cứu Học Phí Đại Học Hàn Quốc" />
      <meta property="og:description" content="Hệ thống tra cứu, chuyển đổi tỷ giá và so sánh học phí chi tiết hơn 200 trường đại học tại Hàn Quốc. Hiển thị đồng thời KRW và VND." />
      <meta property="og:url" content="https://eas-tuition.onrender.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="KR-UniTuition - Tra Cứu Học Phí Đại Học Hàn Quốc" />
      <meta name="twitter:description" content="Hệ thống tra cứu, chuyển đổi tỷ giá và so sánh học phí chi tiết hơn 200 trường đại học tại Hàn Quốc. Hiển thị đồng thời KRW và VND." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="KR-UniTuition" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com" />
      <script type="application/ld+json">
        {\`{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "KR-UniTuition",
          "url": "https://eas-tuition.onrender.com",
          "description": "Tra cứu học phí đại học Hàn Quốc bằng VND và KRW",
          "inLanguage": "vi-VN",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://eas-tuition.onrender.com/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }\`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/">{children}</StaticRouter>;
  }
};

export default function IndexPage() {
  return <Island component="components/HomeApp" />;
}
`;

fs.writeFileSync(path.join(pagesDir, 'index.jsx'), homePageContent);
console.log('Generated index.jsx');

// 2. Generate Universities List Page (universities.jsx)
const universitiesPageContent = `import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'universities',
  routeUrl: '/universities',
  Head: () => (
    <>
      <title>Danh Sách Các Trường Đại Học Hàn Quốc - Học Phí 2025 | KR-UniTuition</title>
      <meta name="description" content="Danh sách đầy đủ các trường đại học Hàn Quốc kèm học phí chi tiết cho từng nhóm ngành (Kỹ thuật, Khoa học, Nhân văn, Nghệ thuật). Lọc theo vùng, loại trường và thứ hạng." />
      <meta name="keywords" content="danh sách đại học hàn quốc, học phí các trường hàn quốc, đại học công lập hàn quốc, đại học tư thục hàn quốc" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/universities" />
      <meta property="og:title" content="Danh Sách Các Trường Đại Học Hàn Quốc - Học Phí 2025 | KR-UniTuition" />
      <meta property="og:description" content="Danh sách đầy đủ các trường đại học Hàn Quốc kèm học phí chi tiết cho từng nhóm ngành (Kỹ thuật, Khoa học, Nhân văn, Nghệ thuật). Lọc theo vùng, loại trường và thứ hạng." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/universities" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Danh Sách Các Trường Đại Học Hàn Quốc - Học Phí 2025" />
      <meta name="twitter:description" content="Danh sách đầy đủ các trường đại học Hàn Quốc kèm học phí chi tiết. Lọc theo vùng, loại trường và thứ hạng." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/universities" />
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/universities">{children}</StaticRouter>;
  }
};

export default function UniversitiesPage() {
  return <Island component="components/UniversitiesApp" />;
}
`;

fs.writeFileSync(path.join(pagesDir, 'universities.jsx'), universitiesPageContent);
console.log('Generated universities.jsx');

// 3. Generate Compare Page (compare.jsx)
const comparePageContent = `import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'compare',
  routeUrl: '/compare',
  Head: () => (
    <>
      <title>So Sánh Học Phí Đại Học Hàn Quốc | KR-UniTuition</title>
      <meta name="description" content="Tính năng so sánh học phí, ký túc xá và sinh hoạt phí trực quan giữa nhiều trường đại học Hàn Quốc cùng lúc. Hỗ trợ chuyển đổi VND và KRW." />
      <meta name="keywords" content="so sánh trường đại học hàn quốc, so sánh học phí hàn quốc, ký túc xá đại học hàn quốc" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/compare" />
      <meta property="og:title" content="So Sánh Học Phí Đại Học Hàn Quốc | KR-UniTuition" />
      <meta property="og:description" content="Tính năng so sánh học phí, ký túc xá và sinh hoạt phí trực quan giữa nhiều trường đại học Hàn Quốc cùng lúc. Hỗ trợ chuyển đổi VND và KRW." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/compare" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="So Sánh Học Phí Đại Học Hàn Quốc" />
      <meta name="twitter:description" content="So sánh học phí, ký túc xá và sinh hoạt phí giữa nhiều trường đại học Hàn Quốc cùng lúc." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/compare" />
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/compare">{children}</StaticRouter>;
  }
};

export default function ComparePage() {
  return <Island component="components/CompareApp" />;
}
`;

fs.writeFileSync(path.join(pagesDir, 'compare.jsx'), comparePageContent);
console.log('Generated compare.jsx');

// 4. Generate Dynamic University Pages
const defaultRate = 18.5; // Default exchange rate
let generatedCount = 0;

for (const u of universities) {
  const values = Object.values(u.tuition).filter(val => val !== null && val !== undefined);
  const minTuition = values.length > 0 ? Math.min(...values) : 0;
  const maxTuition = values.length > 0 ? Math.max(...values) : 0;
  
  const minVnd = Math.round(minTuition * defaultRate);
  const maxVnd = Math.round(maxTuition * defaultRate);

  const tuitionStrKrw = minTuition === maxTuition 
    ? `${minTuition.toLocaleString()} KRW` 
    : `${minTuition.toLocaleString()} - ${maxTuition.toLocaleString()} KRW`;

  const tuitionStrVnd = minVnd === maxVnd 
    ? `${minVnd.toLocaleString()} VND` 
    : `${minVnd.toLocaleString()} - ${maxVnd.toLocaleString()} VND`;

  const description = `Học phí trường ${u.name_vi} (${u.name_en}): ${tuitionStrKrw} (${tuitionStrVnd}) mỗi học kỳ. Địa chỉ: ${u.campus_address || u.region}. Xếp hạng: #${u.ranking}.`;

  const pageContent = `import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/${u.id}',
  routeUrl: '/university/${u.id}',
  Head: () => (
    <>
      <title>${u.name_vi} - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="${description.replace(/"/g, '&quot;')}" />
      <meta name="keywords" content="${u.name_vi}, học phí ${u.name_vi}, ${u.name_en}, ${u.name_ko}, đại học ${u.region}" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/${u.id}" />
      <meta property="og:title" content="${u.name_vi} - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/${u.id}" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${u.name_vi} - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/${u.id}" />
      <script type="application/ld+json">
        {\`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "${u.name_vi}",
          "alternateName": "${u.name_en}",
          "url": "${u.website || ''}",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "${u.region}"
          }
        }\`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/${u.id}">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: '${u.id}' }} />;
}
`;

  fs.writeFileSync(path.join(universityPagesDir, `${u.id}.jsx`), pageContent);
  generatedCount++;
}

console.log(`Successfully generated ${generatedCount} university detail pages.`);
