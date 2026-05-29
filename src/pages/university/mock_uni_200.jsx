import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_200',
  routeUrl: '/university/mock_uni_200',
  Head: () => (
    <>
      <title>Đại học Far East - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Far East (Far East University): 3,475,000 - 4,992,000 KRW (64,287,500 - 92,352,000 VND) mỗi học kỳ. Địa chỉ: 123 Far East-ro, Jeonnam. Xếp hạng: #223." />
      <meta name="keywords" content="Đại học Far East, học phí Đại học Far East, Far East University, Far East대학교, đại học Jeonnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_200" />
      <meta property="og:title" content="Đại học Far East - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Far East (Far East University): 3,475,000 - 4,992,000 KRW (64,287,500 - 92,352,000 VND) mỗi học kỳ. Địa chỉ: 123 Far East-ro, Jeonnam. Xếp hạng: #223." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_200" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Far East - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Far East (Far East University): 3,475,000 - 4,992,000 KRW (64,287,500 - 92,352,000 VND) mỗi học kỳ. Địa chỉ: 123 Far East-ro, Jeonnam. Xếp hạng: #223." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_200" />
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
            "addressRegion": "Jeonnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_200">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_200' }} />;
}
