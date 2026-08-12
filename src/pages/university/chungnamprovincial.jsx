import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/chungnamprovincial',
  routeUrl: '/university/chungnamprovincial',
  Head: () => (
    <>
      <title>Cao đẳng Tỉnh Chungnam - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Tỉnh Chungnam (Chungnam Provincial University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #597." />
      <meta name="keywords" content="Cao đẳng Tỉnh Chungnam, học phí Cao đẳng Tỉnh Chungnam, Chungnam Provincial University, 충남도립대학교, đại học Chungnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/chungnamprovincial" />
      <meta property="og:title" content="Cao đẳng Tỉnh Chungnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Tỉnh Chungnam (Chungnam Provincial University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #597." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/chungnamprovincial" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Tỉnh Chungnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Tỉnh Chungnam (Chungnam Provincial University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #597." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/chungnamprovincial" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Tỉnh Chungnam",
          "alternateName": "Chungnam Provincial University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/chungnamprovincial">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'chungnamprovincial' }} />;
}
