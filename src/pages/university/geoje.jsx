import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/geoje',
  routeUrl: '/university/geoje',
  Head: () => (
    <>
      <title>Cao đẳng Geoje - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Geoje (Geoje University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeongnam. Xếp hạng: #587." />
      <meta name="keywords" content="Cao đẳng Geoje, học phí Cao đẳng Geoje, Geoje University, 거제대학교, đại học Gyeongnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/geoje" />
      <meta property="og:title" content="Cao đẳng Geoje - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Geoje (Geoje University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeongnam. Xếp hạng: #587." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/geoje" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Geoje - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Geoje (Geoje University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeongnam. Xếp hạng: #587." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/geoje" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Geoje",
          "alternateName": "Geoje University",
          "url": "",
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
    return <StaticRouter location="/university/geoje">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'geoje' }} />;
}
