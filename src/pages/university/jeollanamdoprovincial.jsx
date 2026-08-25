import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/jeollanamdoprovincial',
  routeUrl: '/university/jeollanamdoprovincial',
  Head: () => (
    <>
      <title>Cao đẳng Tỉnh Jeonnam - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Tỉnh Jeonnam (Jeollanam-do Provincial College): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Jeonnam. Xếp hạng: #607." />
      <meta name="keywords" content="Cao đẳng Tỉnh Jeonnam, học phí Cao đẳng Tỉnh Jeonnam, Jeollanam-do Provincial College, 전남도립대학교, đại học Jeonnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/jeollanamdoprovincial" />
      <meta property="og:title" content="Cao đẳng Tỉnh Jeonnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Tỉnh Jeonnam (Jeollanam-do Provincial College): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Jeonnam. Xếp hạng: #607." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/jeollanamdoprovincial" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Tỉnh Jeonnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Tỉnh Jeonnam (Jeollanam-do Provincial College): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Jeonnam. Xếp hạng: #607." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/jeollanamdoprovincial" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Tỉnh Jeonnam",
          "alternateName": "Jeollanam-do Provincial College",
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
    return <StaticRouter location="/university/jeollanamdoprovincial">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'jeollanamdoprovincial' }} />;
}
