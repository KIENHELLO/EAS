import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/wonkwangdigital_seoulcampus',
  routeUrl: '/university/wonkwangdigital_seoulcampus',
  Head: () => (
    <>
      <title>Đại học Cyber Digital Wonkwang - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Cyber Digital Wonkwang (Wonkwang Digital University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #574." />
      <meta name="keywords" content="Đại học Cyber Digital Wonkwang, học phí Đại học Cyber Digital Wonkwang, Wonkwang Digital University, 원광디지털대학교, đại học Jeonbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/wonkwangdigital_seoulcampus" />
      <meta property="og:title" content="Đại học Cyber Digital Wonkwang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Cyber Digital Wonkwang (Wonkwang Digital University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #574." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/wonkwangdigital_seoulcampus" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Cyber Digital Wonkwang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Cyber Digital Wonkwang (Wonkwang Digital University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #574." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/wonkwangdigital_seoulcampus" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Cyber Digital Wonkwang",
          "alternateName": "Wonkwang Digital University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeonbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/wonkwangdigital_seoulcampus">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'wonkwangdigital_seoulcampus' }} />;
}
