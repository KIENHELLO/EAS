import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_116',
  routeUrl: '/university/mock_uni_116',
  Head: () => (
    <>
      <title>Đại học Chungwoon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Chungwoon (Chungwoon University): 2,237,000 - 3,913,000 KRW (41,384,500 - 72,390,500 VND) mỗi học kỳ. Địa chỉ: 123 Chungwoon-ro, Gyeongbuk. Xếp hạng: #139." />
      <meta name="keywords" content="Đại học Chungwoon, học phí Đại học Chungwoon, Chungwoon University, Chungwoon대학교, đại học Gyeongbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_116" />
      <meta property="og:title" content="Đại học Chungwoon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Chungwoon (Chungwoon University): 2,237,000 - 3,913,000 KRW (41,384,500 - 72,390,500 VND) mỗi học kỳ. Địa chỉ: 123 Chungwoon-ro, Gyeongbuk. Xếp hạng: #139." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_116" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Chungwoon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Chungwoon (Chungwoon University): 2,237,000 - 3,913,000 KRW (41,384,500 - 72,390,500 VND) mỗi học kỳ. Địa chỉ: 123 Chungwoon-ro, Gyeongbuk. Xếp hạng: #139." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_116" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Chungwoon",
          "alternateName": "Chungwoon University",
          "url": "https://www.chungwoon.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_116">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_116' }} />;
}
