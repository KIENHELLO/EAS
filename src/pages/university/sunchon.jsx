import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/sunchon',
  routeUrl: '/university/sunchon',
  Head: () => (
    <>
      <title>Đại học Quốc gia Sunchon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Sunchon (Sunchon National University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Jeonnam. Xếp hạng: #188." />
      <meta name="keywords" content="Đại học Quốc gia Sunchon, học phí Đại học Quốc gia Sunchon, Sunchon National University, 국립순천대학교, đại học Jeonnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/sunchon" />
      <meta property="og:title" content="Đại học Quốc gia Sunchon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Sunchon (Sunchon National University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Jeonnam. Xếp hạng: #188." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/sunchon" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Sunchon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Sunchon (Sunchon National University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Jeonnam. Xếp hạng: #188." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/sunchon" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Sunchon",
          "alternateName": "Sunchon National University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeonnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/sunchon">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'sunchon' }} />;
}
