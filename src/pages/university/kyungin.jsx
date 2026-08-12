import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kyungin',
  routeUrl: '/university/kyungin',
  Head: () => (
    <>
      <title>CĐ Nữ sinh Gyeongin - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Nữ sinh Gyeongin (Kyungin Women's University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #200." />
      <meta name="keywords" content="CĐ Nữ sinh Gyeongin, học phí CĐ Nữ sinh Gyeongin, Kyungin Women's University, 경인여자대학교, đại học Incheon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kyungin" />
      <meta property="og:title" content="CĐ Nữ sinh Gyeongin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Nữ sinh Gyeongin (Kyungin Women's University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #200." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kyungin" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Nữ sinh Gyeongin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Nữ sinh Gyeongin (Kyungin Women's University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #200." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kyungin" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Nữ sinh Gyeongin",
          "alternateName": "Kyungin Women's University",
          "url": "",
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
    return <StaticRouter location="/university/kyungin">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kyungin' }} />;
}
