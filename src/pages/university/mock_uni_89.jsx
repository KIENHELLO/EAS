import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_89',
  routeUrl: '/university/mock_uni_89',
  Head: () => (
    <>
      <title>Đại học Soongsil - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Soongsil (Soongsil University): 2,700,000 - 4,505,000 KRW (49,950,000 - 83,342,500 VND) mỗi học kỳ. Địa chỉ: 123 Soongsil-ro, Gwangju. Xếp hạng: #112." />
      <meta name="keywords" content="Đại học Soongsil, học phí Đại học Soongsil, Soongsil University, Soongsil대학교, đại học Gwangju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_89" />
      <meta property="og:title" content="Đại học Soongsil - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Soongsil (Soongsil University): 2,700,000 - 4,505,000 KRW (49,950,000 - 83,342,500 VND) mỗi học kỳ. Địa chỉ: 123 Soongsil-ro, Gwangju. Xếp hạng: #112." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_89" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Soongsil - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Soongsil (Soongsil University): 2,700,000 - 4,505,000 KRW (49,950,000 - 83,342,500 VND) mỗi học kỳ. Địa chỉ: 123 Soongsil-ro, Gwangju. Xếp hạng: #112." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_89" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Soongsil",
          "alternateName": "Soongsil University",
          "url": "https://www.soongsil.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_89">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_89' }} />;
}
