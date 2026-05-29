import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_111',
  routeUrl: '/university/mock_uni_111',
  Head: () => (
    <>
      <title>Đại học Kunsan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Kunsan (Kunsan University): 2,537,000 - 4,657,000 KRW (46,934,500 - 86,154,500 VND) mỗi học kỳ. Địa chỉ: 123 Kunsan-ro, Gangwon. Xếp hạng: #134." />
      <meta name="keywords" content="Đại học Kunsan, học phí Đại học Kunsan, Kunsan University, Kunsan대학교, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_111" />
      <meta property="og:title" content="Đại học Kunsan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Kunsan (Kunsan University): 2,537,000 - 4,657,000 KRW (46,934,500 - 86,154,500 VND) mỗi học kỳ. Địa chỉ: 123 Kunsan-ro, Gangwon. Xếp hạng: #134." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_111" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Kunsan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Kunsan (Kunsan University): 2,537,000 - 4,657,000 KRW (46,934,500 - 86,154,500 VND) mỗi học kỳ. Địa chỉ: 123 Kunsan-ro, Gangwon. Xếp hạng: #134." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_111" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Kunsan",
          "alternateName": "Kunsan University",
          "url": "https://www.kunsan.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_111">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_111' }} />;
}
