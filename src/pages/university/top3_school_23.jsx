import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/top3_school_23',
  routeUrl: '/university/top3_school_23',
  Head: () => (
    <>
      <title>Cao đẳng Gangwon State  - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Gangwon State  (Gangwon State (TOP 3%) College (Korea)): 1,700,000 - 2,210,000 KRW (31,450,000 - 40,885,000 VND) mỗi học kỳ. Địa chỉ: Gangwon, Hàn Quốc. Xếp hạng: #173." />
      <meta name="keywords" content="Cao đẳng Gangwon State , học phí Cao đẳng Gangwon State , Gangwon State (TOP 3%) College (Korea), Đại học Gangwon State, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/top3_school_23" />
      <meta property="og:title" content="Cao đẳng Gangwon State  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Gangwon State  (Gangwon State (TOP 3%) College (Korea)): 1,700,000 - 2,210,000 KRW (31,450,000 - 40,885,000 VND) mỗi học kỳ. Địa chỉ: Gangwon, Hàn Quốc. Xếp hạng: #173." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/top3_school_23" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Gangwon State  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Gangwon State  (Gangwon State (TOP 3%) College (Korea)): 1,700,000 - 2,210,000 KRW (31,450,000 - 40,885,000 VND) mỗi học kỳ. Địa chỉ: Gangwon, Hàn Quốc. Xếp hạng: #173." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/top3_school_23" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Gangwon State ",
          "alternateName": "Gangwon State (TOP 3%) College (Korea)",
          "url": "https://www.studyinkorea.go.kr",
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
    return <StaticRouter location="/university/top3_school_23">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'top3_school_23' }} />;
}
