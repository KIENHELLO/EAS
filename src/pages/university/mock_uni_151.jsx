import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_151',
  routeUrl: '/university/mock_uni_151',
  Head: () => (
    <>
      <title>Đại học Sookmyung - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sookmyung (Sookmyung University): 2,052,000 - 3,461,000 KRW (37,962,000 - 64,028,500 VND) mỗi học kỳ. Địa chỉ: 123 Sookmyung-ro, Gyeongnam. Xếp hạng: #174." />
      <meta name="keywords" content="Đại học Sookmyung, học phí Đại học Sookmyung, Sookmyung University, Sookmyung대학교, đại học Gyeongnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_151" />
      <meta property="og:title" content="Đại học Sookmyung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sookmyung (Sookmyung University): 2,052,000 - 3,461,000 KRW (37,962,000 - 64,028,500 VND) mỗi học kỳ. Địa chỉ: 123 Sookmyung-ro, Gyeongnam. Xếp hạng: #174." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_151" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sookmyung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sookmyung (Sookmyung University): 2,052,000 - 3,461,000 KRW (37,962,000 - 64,028,500 VND) mỗi học kỳ. Địa chỉ: 123 Sookmyung-ro, Gyeongnam. Xếp hạng: #174." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_151" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sookmyung",
          "alternateName": "Sookmyung University",
          "url": "https://www.sookmyung.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_151">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_151' }} />;
}
