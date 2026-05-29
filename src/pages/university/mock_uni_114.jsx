import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_114',
  routeUrl: '/university/mock_uni_114',
  Head: () => (
    <>
      <title>Đại học Far East - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Far East (Far East University): 2,175,000 - 4,326,000 KRW (40,237,500 - 80,031,000 VND) mỗi học kỳ. Địa chỉ: 123 Far East-ro, Jeonbuk. Xếp hạng: #137." />
      <meta name="keywords" content="Đại học Far East, học phí Đại học Far East, Far East University, Far East대학교, đại học Jeonbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_114" />
      <meta property="og:title" content="Đại học Far East - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Far East (Far East University): 2,175,000 - 4,326,000 KRW (40,237,500 - 80,031,000 VND) mỗi học kỳ. Địa chỉ: 123 Far East-ro, Jeonbuk. Xếp hạng: #137." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_114" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Far East - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Far East (Far East University): 2,175,000 - 4,326,000 KRW (40,237,500 - 80,031,000 VND) mỗi học kỳ. Địa chỉ: 123 Far East-ro, Jeonbuk. Xếp hạng: #137." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_114" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Far East",
          "alternateName": "Far East University",
          "url": "https://www.fareast.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_114">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_114' }} />;
}
