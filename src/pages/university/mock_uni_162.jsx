import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_162',
  routeUrl: '/university/mock_uni_162',
  Head: () => (
    <>
      <title>Đại học Nambu - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Nambu (Nambu University): 2,239,000 - 3,300,000 KRW (41,421,500 - 61,050,000 VND) mỗi học kỳ. Địa chỉ: 123 Nambu-ro, Gangwon. Xếp hạng: #185." />
      <meta name="keywords" content="Đại học Nambu, học phí Đại học Nambu, Nambu University, Nambu대학교, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_162" />
      <meta property="og:title" content="Đại học Nambu - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Nambu (Nambu University): 2,239,000 - 3,300,000 KRW (41,421,500 - 61,050,000 VND) mỗi học kỳ. Địa chỉ: 123 Nambu-ro, Gangwon. Xếp hạng: #185." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_162" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Nambu - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Nambu (Nambu University): 2,239,000 - 3,300,000 KRW (41,421,500 - 61,050,000 VND) mỗi học kỳ. Địa chỉ: 123 Nambu-ro, Gangwon. Xếp hạng: #185." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_162" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Nambu",
          "alternateName": "Nambu University",
          "url": "https://www.nambu.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_162">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_162' }} />;
}
