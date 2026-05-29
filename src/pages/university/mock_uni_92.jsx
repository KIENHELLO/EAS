import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_92',
  routeUrl: '/university/mock_uni_92',
  Head: () => (
    <>
      <title>Đại học Sangji - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sangji (Sangji University): 2,999,000 - 4,616,000 KRW (55,481,500 - 85,396,000 VND) mỗi học kỳ. Địa chỉ: 123 Sangji-ro, Sejong. Xếp hạng: #115." />
      <meta name="keywords" content="Đại học Sangji, học phí Đại học Sangji, Sangji University, Sangji대학교, đại học Sejong" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_92" />
      <meta property="og:title" content="Đại học Sangji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sangji (Sangji University): 2,999,000 - 4,616,000 KRW (55,481,500 - 85,396,000 VND) mỗi học kỳ. Địa chỉ: 123 Sangji-ro, Sejong. Xếp hạng: #115." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_92" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sangji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sangji (Sangji University): 2,999,000 - 4,616,000 KRW (55,481,500 - 85,396,000 VND) mỗi học kỳ. Địa chỉ: 123 Sangji-ro, Sejong. Xếp hạng: #115." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_92" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sangji",
          "alternateName": "Sangji University",
          "url": "https://www.sangji.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Sejong"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_92">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_92' }} />;
}
