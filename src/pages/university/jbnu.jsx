import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/jbnu',
  routeUrl: '/university/jbnu',
  Head: () => (
    <>
      <title>Đại học Quốc gia Chonbuk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Chonbuk (Jeonbuk National University): 3,690,000 - 5,945,000 KRW (68,265,000 - 109,982,500 VND) mỗi học kỳ. Địa chỉ: 567 Baekje-daero, Deokjin-gu, Jeonju, Jeollabuk-do. Xếp hạng: #25." />
      <meta name="keywords" content="Đại học Quốc gia Chonbuk, học phí Đại học Quốc gia Chonbuk, Jeonbuk National University, 전북대학교, đại học Jeonbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/jbnu" />
      <meta property="og:title" content="Đại học Quốc gia Chonbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Chonbuk (Jeonbuk National University): 3,690,000 - 5,945,000 KRW (68,265,000 - 109,982,500 VND) mỗi học kỳ. Địa chỉ: 567 Baekje-daero, Deokjin-gu, Jeonju, Jeollabuk-do. Xếp hạng: #25." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/jbnu" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Chonbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Chonbuk (Jeonbuk National University): 3,690,000 - 5,945,000 KRW (68,265,000 - 109,982,500 VND) mỗi học kỳ. Địa chỉ: 567 Baekje-daero, Deokjin-gu, Jeonju, Jeollabuk-do. Xếp hạng: #25." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/jbnu" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Chonbuk",
          "alternateName": "Jeonbuk National University",
          "url": "https://www.jbnu.ac.kr",
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
    return <StaticRouter location="/university/jbnu">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'jbnu' }} />;
}
