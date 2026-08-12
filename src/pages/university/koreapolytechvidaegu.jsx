import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreapolytechvidaegu',
  routeUrl: '/university/koreapolytechvidaegu',
  Head: () => (
    <>
      <title>Cao đẳng Polytech VI Daegu - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Polytech VI Daegu (Korea Polytech VI (Daegu)): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daegu. Xếp hạng: #622." />
      <meta name="keywords" content="Cao đẳng Polytech VI Daegu, học phí Cao đẳng Polytech VI Daegu, Korea Polytech VI (Daegu), 한국폴리텍VI대학 대구캠퍼스, đại học Daegu" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreapolytechvidaegu" />
      <meta property="og:title" content="Cao đẳng Polytech VI Daegu - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Polytech VI Daegu (Korea Polytech VI (Daegu)): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daegu. Xếp hạng: #622." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreapolytechvidaegu" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Polytech VI Daegu - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Polytech VI Daegu (Korea Polytech VI (Daegu)): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daegu. Xếp hạng: #622." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreapolytechvidaegu" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Polytech VI Daegu",
          "alternateName": "Korea Polytech VI (Daegu)",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daegu"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/koreapolytechvidaegu">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreapolytechvidaegu' }} />;
}
