import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/induk',
  routeUrl: '/university/induk',
  Head: () => (
    <>
      <title>CĐ Induk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Induk (Induk University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #205." />
      <meta name="keywords" content="CĐ Induk, học phí CĐ Induk, Induk University, 인덕대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/induk" />
      <meta property="og:title" content="CĐ Induk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Induk (Induk University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #205." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/induk" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Induk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Induk (Induk University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #205." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/induk" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Induk",
          "alternateName": "Induk University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Seoul"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/induk">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'induk' }} />;
}
