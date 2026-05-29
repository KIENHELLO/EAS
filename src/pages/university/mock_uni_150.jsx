import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_150',
  routeUrl: '/university/mock_uni_150',
  Head: () => (
    <>
      <title>Đại học Semyung - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Semyung (Semyung University): 2,459,000 - 4,908,000 KRW (45,491,500 - 90,798,000 VND) mỗi học kỳ. Địa chỉ: 123 Semyung-ro, Gyeongbuk. Xếp hạng: #173." />
      <meta name="keywords" content="Đại học Semyung, học phí Đại học Semyung, Semyung University, Semyung대학교, đại học Gyeongbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_150" />
      <meta property="og:title" content="Đại học Semyung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Semyung (Semyung University): 2,459,000 - 4,908,000 KRW (45,491,500 - 90,798,000 VND) mỗi học kỳ. Địa chỉ: 123 Semyung-ro, Gyeongbuk. Xếp hạng: #173." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_150" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Semyung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Semyung (Semyung University): 2,459,000 - 4,908,000 KRW (45,491,500 - 90,798,000 VND) mỗi học kỳ. Địa chỉ: 123 Semyung-ro, Gyeongbuk. Xếp hạng: #173." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_150" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Semyung",
          "alternateName": "Semyung University",
          "url": "https://www.semyung.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_150">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_150' }} />;
}
