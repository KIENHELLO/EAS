import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_143',
  routeUrl: '/university/mock_uni_143',
  Head: () => (
    <>
      <title>Đại học Hallym - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Hallym (Hallym University): 3,081,000 - 4,986,000 KRW (56,998,500 - 92,241,000 VND) mỗi học kỳ. Địa chỉ: 123 Hallym-ro, Sejong. Xếp hạng: #166." />
      <meta name="keywords" content="Đại học Hallym, học phí Đại học Hallym, Hallym University, Hallym대학교, đại học Sejong" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_143" />
      <meta property="og:title" content="Đại học Hallym - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Hallym (Hallym University): 3,081,000 - 4,986,000 KRW (56,998,500 - 92,241,000 VND) mỗi học kỳ. Địa chỉ: 123 Hallym-ro, Sejong. Xếp hạng: #166." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_143" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Hallym - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Hallym (Hallym University): 3,081,000 - 4,986,000 KRW (56,998,500 - 92,241,000 VND) mỗi học kỳ. Địa chỉ: 123 Hallym-ro, Sejong. Xếp hạng: #166." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_143" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Hallym",
          "alternateName": "Hallym University",
          "url": "https://www.hallym.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_143">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_143' }} />;
}
