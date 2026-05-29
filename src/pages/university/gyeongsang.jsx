import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/gyeongsang',
  routeUrl: '/university/gyeongsang',
  Head: () => (
    <>
      <title>Đại học Quốc gia Gyeongsang - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Gyeongsang (Gyeongsang National University): 1,750,000 - 3,250,000 KRW (32,375,000 - 60,125,000 VND) mỗi học kỳ. Địa chỉ: 501 Jinju-daero, Jinju-si, Gyeongsangnam-do. Xếp hạng: #26." />
      <meta name="keywords" content="Đại học Quốc gia Gyeongsang, học phí Đại học Quốc gia Gyeongsang, Gyeongsang National University, 경상대학교, đại học Gyeongnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/gyeongsang" />
      <meta property="og:title" content="Đại học Quốc gia Gyeongsang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Gyeongsang (Gyeongsang National University): 1,750,000 - 3,250,000 KRW (32,375,000 - 60,125,000 VND) mỗi học kỳ. Địa chỉ: 501 Jinju-daero, Jinju-si, Gyeongsangnam-do. Xếp hạng: #26." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/gyeongsang" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Gyeongsang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Gyeongsang (Gyeongsang National University): 1,750,000 - 3,250,000 KRW (32,375,000 - 60,125,000 VND) mỗi học kỳ. Địa chỉ: 501 Jinju-daero, Jinju-si, Gyeongsangnam-do. Xếp hạng: #26." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/gyeongsang" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Gyeongsang",
          "alternateName": "Gyeongsang National University",
          "url": "https://www.gnu.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/gyeongsang">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'gyeongsang' }} />;
}
