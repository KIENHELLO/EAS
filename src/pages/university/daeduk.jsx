import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/daeduk',
  routeUrl: '/university/daeduk',
  Head: () => (
    <>
      <title>CĐ Daeduk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Daeduk (Daeduk University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #497." />
      <meta name="keywords" content="CĐ Daeduk, học phí CĐ Daeduk, Daeduk University, 대덕대학교, đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/daeduk" />
      <meta property="og:title" content="CĐ Daeduk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Daeduk (Daeduk University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #497." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/daeduk" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Daeduk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Daeduk (Daeduk University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #497." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/daeduk" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Daeduk",
          "alternateName": "Daeduk University",
          "url": "",
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
    return <StaticRouter location="/university/daeduk">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'daeduk' }} />;
}
