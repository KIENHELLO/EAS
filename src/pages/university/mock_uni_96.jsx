import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_96',
  routeUrl: '/university/mock_uni_96',
  Head: () => (
    <>
      <title>Đại học Chosun - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Chosun (Chosun University): 2,014,000 - 4,284,000 KRW (37,259,000 - 79,254,000 VND) mỗi học kỳ. Địa chỉ: 123 Chosun-ro, Chungnam. Xếp hạng: #119." />
      <meta name="keywords" content="Đại học Chosun, học phí Đại học Chosun, Chosun University, Chosun대학교, đại học Chungnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_96" />
      <meta property="og:title" content="Đại học Chosun - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Chosun (Chosun University): 2,014,000 - 4,284,000 KRW (37,259,000 - 79,254,000 VND) mỗi học kỳ. Địa chỉ: 123 Chosun-ro, Chungnam. Xếp hạng: #119." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_96" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Chosun - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Chosun (Chosun University): 2,014,000 - 4,284,000 KRW (37,259,000 - 79,254,000 VND) mỗi học kỳ. Địa chỉ: 123 Chosun-ro, Chungnam. Xếp hạng: #119." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_96" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Chosun",
          "alternateName": "Chosun University",
          "url": "https://www.chosun.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_96">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_96' }} />;
}
