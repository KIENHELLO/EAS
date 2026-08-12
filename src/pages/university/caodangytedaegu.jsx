import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/caodangytedaegu',
  routeUrl: '/university/caodangytedaegu',
  Head: () => (
    <>
      <title>Cao đẳng Y tế Daegu - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Y tế Daegu (Daegu Health College): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Daegu. Xếp hạng: #235." />
      <meta name="keywords" content="Cao đẳng Y tế Daegu, học phí Cao đẳng Y tế Daegu, Daegu Health College, 대구보건대학교, đại học Daegu" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/caodangytedaegu" />
      <meta property="og:title" content="Cao đẳng Y tế Daegu - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Y tế Daegu (Daegu Health College): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Daegu. Xếp hạng: #235." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/caodangytedaegu" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Y tế Daegu - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Y tế Daegu (Daegu Health College): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Daegu. Xếp hạng: #235." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/caodangytedaegu" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Y tế Daegu",
          "alternateName": "Daegu Health College",
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
    return <StaticRouter location="/university/caodangytedaegu">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'caodangytedaegu' }} />;
}
