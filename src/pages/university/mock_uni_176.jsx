import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_176',
  routeUrl: '/university/mock_uni_176',
  Head: () => (
    <>
      <title>Đại học Konyang - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Konyang (Konyang University): 2,340,000 - 4,618,000 KRW (43,290,000 - 85,433,000 VND) mỗi học kỳ. Địa chỉ: 123 Konyang-ro, Ulsan. Xếp hạng: #199." />
      <meta name="keywords" content="Đại học Konyang, học phí Đại học Konyang, Konyang University, Konyang대학교, đại học Ulsan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_176" />
      <meta property="og:title" content="Đại học Konyang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Konyang (Konyang University): 2,340,000 - 4,618,000 KRW (43,290,000 - 85,433,000 VND) mỗi học kỳ. Địa chỉ: 123 Konyang-ro, Ulsan. Xếp hạng: #199." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_176" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Konyang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Konyang (Konyang University): 2,340,000 - 4,618,000 KRW (43,290,000 - 85,433,000 VND) mỗi học kỳ. Địa chỉ: 123 Konyang-ro, Ulsan. Xếp hạng: #199." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_176" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Konyang",
          "alternateName": "Konyang University",
          "url": "https://www.konyang.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Ulsan"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_176">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_176' }} />;
}
