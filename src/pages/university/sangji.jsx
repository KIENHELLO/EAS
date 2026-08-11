import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/sangji',
  routeUrl: '/university/sangji',
  Head: () => (
    <>
      <title>Đại học Sanji - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sanji (Sangji University): 3,400,000 - 5,800,000 KRW (62,900,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: 83 Sangjidae-gil, Wonju-si, Gangwon-do. Xếp hạng: #62." />
      <meta name="keywords" content="Đại học Sanji, học phí Đại học Sanji, Sangji University, 상지대학교, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/sangji" />
      <meta property="og:title" content="Đại học Sanji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sanji (Sangji University): 3,400,000 - 5,800,000 KRW (62,900,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: 83 Sangjidae-gil, Wonju-si, Gangwon-do. Xếp hạng: #62." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/sangji" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sanji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sanji (Sangji University): 3,400,000 - 5,800,000 KRW (62,900,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: 83 Sangjidae-gil, Wonju-si, Gangwon-do. Xếp hạng: #62." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/sangji" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sanji",
          "alternateName": "Sangji University",
          "url": "https://www.sangji.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gangwon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/sangji">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'sangji' }} />;
}
