import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/hosan',
  routeUrl: '/university/hosan',
  Head: () => (
    <>
      <title>Cao đẳng Hosan (Gyeongbuk) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Hosan (Gyeongbuk) (Hosan College): 1,800,000 - 2,000,000 KRW (33,300,000 - 37,000,000 VND) mỗi học kỳ. Địa chỉ: 15 Gyeongil-ro, Hayang-eup, Gyeongsan, Gyeongsangbuk-do. Xếp hạng: #88." />
      <meta name="keywords" content="Cao đẳng Hosan (Gyeongbuk), học phí Cao đẳng Hosan (Gyeongbuk), Hosan College, 호산대학교, đại học Gyeongbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/hosan" />
      <meta property="og:title" content="Cao đẳng Hosan (Gyeongbuk) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Hosan (Gyeongbuk) (Hosan College): 1,800,000 - 2,000,000 KRW (33,300,000 - 37,000,000 VND) mỗi học kỳ. Địa chỉ: 15 Gyeongil-ro, Hayang-eup, Gyeongsan, Gyeongsangbuk-do. Xếp hạng: #88." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/hosan" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Hosan (Gyeongbuk) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Hosan (Gyeongbuk) (Hosan College): 1,800,000 - 2,000,000 KRW (33,300,000 - 37,000,000 VND) mỗi học kỳ. Địa chỉ: 15 Gyeongil-ro, Hayang-eup, Gyeongsan, Gyeongsangbuk-do. Xếp hạng: #88." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/hosan" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Hosan (Gyeongbuk)",
          "alternateName": "Hosan College",
          "url": "https://www.hosan.ac.kr",
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
    return <StaticRouter location="/university/hosan">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'hosan' }} />;
}
