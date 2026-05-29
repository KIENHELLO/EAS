import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/konkuk',
  routeUrl: '/university/konkuk',
  Head: () => (
    <>
      <title>Đại học Konkuk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Konkuk (Konkuk University): 3,900,000 - 6,280,000 KRW (72,150,000 - 116,180,000 VND) mỗi học kỳ. Địa chỉ: 120 Neungdong-ro, Gwangjin-gu, Seoul. Xếp hạng: #15." />
      <meta name="keywords" content="Đại học Konkuk, học phí Đại học Konkuk, Konkuk University, 건국대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/konkuk" />
      <meta property="og:title" content="Đại học Konkuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Konkuk (Konkuk University): 3,900,000 - 6,280,000 KRW (72,150,000 - 116,180,000 VND) mỗi học kỳ. Địa chỉ: 120 Neungdong-ro, Gwangjin-gu, Seoul. Xếp hạng: #15." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/konkuk" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Konkuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Konkuk (Konkuk University): 3,900,000 - 6,280,000 KRW (72,150,000 - 116,180,000 VND) mỗi học kỳ. Địa chỉ: 120 Neungdong-ro, Gwangjin-gu, Seoul. Xếp hạng: #15." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/konkuk" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Konkuk",
          "alternateName": "Konkuk University",
          "url": "http://www.konkuk.ac.kr",
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
    return <StaticRouter location="/university/konkuk">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'konkuk' }} />;
}
