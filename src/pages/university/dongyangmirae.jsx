import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/dongyangmirae',
  routeUrl: '/university/dongyangmirae',
  Head: () => (
    <>
      <title>CĐ Dongyang Mirae - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Dongyang Mirae (Dongyang Mirae University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #340." />
      <meta name="keywords" content="CĐ Dongyang Mirae, học phí CĐ Dongyang Mirae, Dongyang Mirae University, 동양미래대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/dongyangmirae" />
      <meta property="og:title" content="CĐ Dongyang Mirae - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Dongyang Mirae (Dongyang Mirae University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #340." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/dongyangmirae" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Dongyang Mirae - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Dongyang Mirae (Dongyang Mirae University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #340." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/dongyangmirae" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Dongyang Mirae",
          "alternateName": "Dongyang Mirae University",
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
    return <StaticRouter location="/university/dongyangmirae">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'dongyangmirae' }} />;
}
