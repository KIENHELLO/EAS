import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/sogang',
  routeUrl: '/university/sogang',
  Head: () => (
    <>
      <title>Đại học Sogang - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sogang (Sogang University): 3,850,000 - 4,980,000 KRW (71,225,000 - 92,130,000 VND) mỗi học kỳ. Địa chỉ: 35 Baekbeom-ro, Mapo-gu, Seoul. Xếp hạng: #9." />
      <meta name="keywords" content="Đại học Sogang, học phí Đại học Sogang, Sogang University, 서강대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/sogang" />
      <meta property="og:title" content="Đại học Sogang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sogang (Sogang University): 3,850,000 - 4,980,000 KRW (71,225,000 - 92,130,000 VND) mỗi học kỳ. Địa chỉ: 35 Baekbeom-ro, Mapo-gu, Seoul. Xếp hạng: #9." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/sogang" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sogang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sogang (Sogang University): 3,850,000 - 4,980,000 KRW (71,225,000 - 92,130,000 VND) mỗi học kỳ. Địa chỉ: 35 Baekbeom-ro, Mapo-gu, Seoul. Xếp hạng: #9." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/sogang" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sogang",
          "alternateName": "Sogang University",
          "url": "http://www.sogang.ac.kr",
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
    return <StaticRouter location="/university/sogang">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'sogang' }} />;
}
