import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/soongeuiwomens',
  routeUrl: '/university/soongeuiwomens',
  Head: () => (
    <>
      <title>CĐ Nữ sinh Soongeui - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Nữ sinh Soongeui (Soongeui Women's College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #347." />
      <meta name="keywords" content="CĐ Nữ sinh Soongeui, học phí CĐ Nữ sinh Soongeui, Soongeui Women's College, 숭의여자대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/soongeuiwomens" />
      <meta property="og:title" content="CĐ Nữ sinh Soongeui - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Nữ sinh Soongeui (Soongeui Women's College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #347." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/soongeuiwomens" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Nữ sinh Soongeui - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Nữ sinh Soongeui (Soongeui Women's College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #347." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/soongeuiwomens" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Nữ sinh Soongeui",
          "alternateName": "Soongeui Women's College",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Seoul"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/soongeuiwomens">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'soongeuiwomens' }} />;
}
