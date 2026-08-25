import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreamilitaryacademy',
  routeUrl: '/university/koreamilitaryacademy',
  Head: () => (
    <>
      <title>Trường Sĩ quan Lục quân - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Trường Sĩ quan Lục quân (Korea Military Academy): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #354." />
      <meta name="keywords" content="Trường Sĩ quan Lục quân, học phí Trường Sĩ quan Lục quân, Korea Military Academy, 육군사관학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreamilitaryacademy" />
      <meta property="og:title" content="Trường Sĩ quan Lục quân - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Trường Sĩ quan Lục quân (Korea Military Academy): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #354." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreamilitaryacademy" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Trường Sĩ quan Lục quân - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Trường Sĩ quan Lục quân (Korea Military Academy): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #354." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreamilitaryacademy" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Trường Sĩ quan Lục quân",
          "alternateName": "Korea Military Academy",
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
    return <StaticRouter location="/university/koreamilitaryacademy">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreamilitaryacademy' }} />;
}
