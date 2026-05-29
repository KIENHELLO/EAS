import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_139',
  routeUrl: '/university/mock_uni_139',
  Head: () => (
    <>
      <title>Đại học Chosun - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Chosun (Chosun University): 2,506,000 - 4,427,000 KRW (46,361,000 - 81,899,500 VND) mỗi học kỳ. Địa chỉ: 123 Chosun-ro, Incheon. Xếp hạng: #162." />
      <meta name="keywords" content="Đại học Chosun, học phí Đại học Chosun, Chosun University, Chosun대학교, đại học Incheon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_139" />
      <meta property="og:title" content="Đại học Chosun - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Chosun (Chosun University): 2,506,000 - 4,427,000 KRW (46,361,000 - 81,899,500 VND) mỗi học kỳ. Địa chỉ: 123 Chosun-ro, Incheon. Xếp hạng: #162." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_139" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Chosun - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Chosun (Chosun University): 2,506,000 - 4,427,000 KRW (46,361,000 - 81,899,500 VND) mỗi học kỳ. Địa chỉ: 123 Chosun-ro, Incheon. Xếp hạng: #162." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_139" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Chosun",
          "alternateName": "Chosun University",
          "url": "https://www.chosun.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Incheon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_139">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_139' }} />;
}
