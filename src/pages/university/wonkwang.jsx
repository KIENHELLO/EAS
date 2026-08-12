import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/wonkwang',
  routeUrl: '/university/wonkwang',
  Head: () => (
    <>
      <title>Đại học Wonkwang - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Wonkwang (Wonkwang University): 3,100,000 - 5,600,000 KRW (57,350,000 - 103,600,000 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #37." />
      <meta name="keywords" content="Đại học Wonkwang, học phí Đại học Wonkwang, Wonkwang University, 원광대학교, đại học Jeonbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/wonkwang" />
      <meta property="og:title" content="Đại học Wonkwang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Wonkwang (Wonkwang University): 3,100,000 - 5,600,000 KRW (57,350,000 - 103,600,000 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #37." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/wonkwang" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Wonkwang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Wonkwang (Wonkwang University): 3,100,000 - 5,600,000 KRW (57,350,000 - 103,600,000 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #37." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/wonkwang" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Wonkwang",
          "alternateName": "Wonkwang University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeonbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/wonkwang">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'wonkwang' }} />;
}
