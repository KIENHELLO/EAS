import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_153',
  routeUrl: '/university/mock_uni_153',
  Head: () => (
    <>
      <title>Đại học Youngsan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Youngsan (Youngsan University): 2,423,000 - 4,706,000 KRW (44,825,500 - 87,061,000 VND) mỗi học kỳ. Địa chỉ: 123 Youngsan-ro, Seoul. Xếp hạng: #176." />
      <meta name="keywords" content="Đại học Youngsan, học phí Đại học Youngsan, Youngsan University, Youngsan대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_153" />
      <meta property="og:title" content="Đại học Youngsan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Youngsan (Youngsan University): 2,423,000 - 4,706,000 KRW (44,825,500 - 87,061,000 VND) mỗi học kỳ. Địa chỉ: 123 Youngsan-ro, Seoul. Xếp hạng: #176." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_153" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Youngsan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Youngsan (Youngsan University): 2,423,000 - 4,706,000 KRW (44,825,500 - 87,061,000 VND) mỗi học kỳ. Địa chỉ: 123 Youngsan-ro, Seoul. Xếp hạng: #176." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_153" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Youngsan",
          "alternateName": "Youngsan University",
          "url": "https://www.youngsan.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_153">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_153' }} />;
}
