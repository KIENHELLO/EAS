import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/sangji_catholic',
  routeUrl: '/university/sangji_catholic',
  Head: () => (
    <>
      <title>Cao đẳng Catholic Sangji - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Catholic Sangji (Sangji Catholic College): 2,300,000 - 3,200,000 KRW (42,550,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 163 Sangji-gil, Andong, Gyeongsangbuk-do. Xếp hạng: #78." />
      <meta name="keywords" content="Cao đẳng Catholic Sangji, học phí Cao đẳng Catholic Sangji, Sangji Catholic College, 가톨릭상지대학교, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/sangji_catholic" />
      <meta property="og:title" content="Cao đẳng Catholic Sangji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Catholic Sangji (Sangji Catholic College): 2,300,000 - 3,200,000 KRW (42,550,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 163 Sangji-gil, Andong, Gyeongsangbuk-do. Xếp hạng: #78." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/sangji_catholic" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Catholic Sangji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Catholic Sangji (Sangji Catholic College): 2,300,000 - 3,200,000 KRW (42,550,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 163 Sangji-gil, Andong, Gyeongsangbuk-do. Xếp hạng: #78." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/sangji_catholic" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Catholic Sangji",
          "alternateName": "Sangji Catholic College",
          "url": "https://www.csj.ac.kr",
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
    return <StaticRouter location="/university/sangji_catholic">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'sangji_catholic' }} />;
}
