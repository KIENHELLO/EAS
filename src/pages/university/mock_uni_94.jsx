import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_94',
  routeUrl: '/university/mock_uni_94',
  Head: () => (
    <>
      <title>Đại học Gachon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Gachon (Gachon University): 2,126,000 - 4,973,000 KRW (39,331,000 - 92,000,500 VND) mỗi học kỳ. Địa chỉ: 123 Gachon-ro, Gangwon. Xếp hạng: #117." />
      <meta name="keywords" content="Đại học Gachon, học phí Đại học Gachon, Gachon University, Gachon대학교, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_94" />
      <meta property="og:title" content="Đại học Gachon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Gachon (Gachon University): 2,126,000 - 4,973,000 KRW (39,331,000 - 92,000,500 VND) mỗi học kỳ. Địa chỉ: 123 Gachon-ro, Gangwon. Xếp hạng: #117." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_94" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Gachon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Gachon (Gachon University): 2,126,000 - 4,973,000 KRW (39,331,000 - 92,000,500 VND) mỗi học kỳ. Địa chỉ: 123 Gachon-ro, Gangwon. Xếp hạng: #117." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_94" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Gachon",
          "alternateName": "Gachon University",
          "url": "https://www.gachon.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_94">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_94' }} />;
}
