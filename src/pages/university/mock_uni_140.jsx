import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_140',
  routeUrl: '/university/mock_uni_140',
  Head: () => (
    <>
      <title>Đại học Dong-A - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Dong-A (Dong-A University): 2,030,000 - 4,399,000 KRW (37,555,000 - 81,381,500 VND) mỗi học kỳ. Địa chỉ: 123 Dong-A-ro, Gwangju. Xếp hạng: #163." />
      <meta name="keywords" content="Đại học Dong-A, học phí Đại học Dong-A, Dong-A University, Dong-A대학교, đại học Gwangju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_140" />
      <meta property="og:title" content="Đại học Dong-A - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Dong-A (Dong-A University): 2,030,000 - 4,399,000 KRW (37,555,000 - 81,381,500 VND) mỗi học kỳ. Địa chỉ: 123 Dong-A-ro, Gwangju. Xếp hạng: #163." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_140" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Dong-A - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Dong-A (Dong-A University): 2,030,000 - 4,399,000 KRW (37,555,000 - 81,381,500 VND) mỗi học kỳ. Địa chỉ: 123 Dong-A-ro, Gwangju. Xếp hạng: #163." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_140" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Dong-A",
          "alternateName": "Dong-A University",
          "url": "https://www.donga.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gwangju"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_140">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_140' }} />;
}
