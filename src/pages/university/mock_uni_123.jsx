import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_123',
  routeUrl: '/university/mock_uni_123',
  Head: () => (
    <>
      <title>Đại học Kosin - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Kosin (Kosin University): 2,178,000 - 4,658,000 KRW (40,293,000 - 86,173,000 VND) mỗi học kỳ. Địa chỉ: 123 Kosin-ro, Gwangju. Xếp hạng: #146." />
      <meta name="keywords" content="Đại học Kosin, học phí Đại học Kosin, Kosin University, Kosin대학교, đại học Gwangju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_123" />
      <meta property="og:title" content="Đại học Kosin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Kosin (Kosin University): 2,178,000 - 4,658,000 KRW (40,293,000 - 86,173,000 VND) mỗi học kỳ. Địa chỉ: 123 Kosin-ro, Gwangju. Xếp hạng: #146." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_123" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Kosin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Kosin (Kosin University): 2,178,000 - 4,658,000 KRW (40,293,000 - 86,173,000 VND) mỗi học kỳ. Địa chỉ: 123 Kosin-ro, Gwangju. Xếp hạng: #146." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_123" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Kosin",
          "alternateName": "Kosin University",
          "url": "https://www.kosin.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_123">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_123' }} />;
}
