import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/myongji',
  routeUrl: '/university/myongji',
  Head: () => (
    <>
      <title>Đại học Myongji - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Myongji (Myongji University): 3,450,000 - 4,500,000 KRW (63,825,000 - 83,250,000 VND) mỗi học kỳ. Địa chỉ: 34 Namgajwa-dong, Seodaemun-gu, Seoul. Xếp hạng: #33." />
      <meta name="keywords" content="Đại học Myongji, học phí Đại học Myongji, Myongji University, 명지대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/myongji" />
      <meta property="og:title" content="Đại học Myongji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Myongji (Myongji University): 3,450,000 - 4,500,000 KRW (63,825,000 - 83,250,000 VND) mỗi học kỳ. Địa chỉ: 34 Namgajwa-dong, Seodaemun-gu, Seoul. Xếp hạng: #33." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/myongji" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Myongji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Myongji (Myongji University): 3,450,000 - 4,500,000 KRW (63,825,000 - 83,250,000 VND) mỗi học kỳ. Địa chỉ: 34 Namgajwa-dong, Seodaemun-gu, Seoul. Xếp hạng: #33." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/myongji" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Myongji",
          "alternateName": "Myongji University",
          "url": "https://www.mju.ac.kr",
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
    return <StaticRouter location="/university/myongji">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'myongji' }} />;
}
