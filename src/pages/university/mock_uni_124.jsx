import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_124',
  routeUrl: '/university/mock_uni_124',
  Head: () => (
    <>
      <title>Đại học Kyungsung - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Kyungsung (Kyungsung University): 2,470,000 - 4,976,000 KRW (45,695,000 - 92,056,000 VND) mỗi học kỳ. Địa chỉ: 123 Kyungsung-ro, Daejeon. Xếp hạng: #147." />
      <meta name="keywords" content="Đại học Kyungsung, học phí Đại học Kyungsung, Kyungsung University, Kyungsung대학교, đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_124" />
      <meta property="og:title" content="Đại học Kyungsung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Kyungsung (Kyungsung University): 2,470,000 - 4,976,000 KRW (45,695,000 - 92,056,000 VND) mỗi học kỳ. Địa chỉ: 123 Kyungsung-ro, Daejeon. Xếp hạng: #147." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_124" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Kyungsung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Kyungsung (Kyungsung University): 2,470,000 - 4,976,000 KRW (45,695,000 - 92,056,000 VND) mỗi học kỳ. Địa chỉ: 123 Kyungsung-ro, Daejeon. Xếp hạng: #147." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_124" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Kyungsung",
          "alternateName": "Kyungsung University",
          "url": "https://www.kyungsung.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daejeon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_124">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_124' }} />;
}
