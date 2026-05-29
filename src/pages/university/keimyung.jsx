import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/keimyung',
  routeUrl: '/university/keimyung',
  Head: () => (
    <>
      <title>Đại học Keimyung (Daegu) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Keimyung (Daegu) (Keimyung University): 3,600,000 - 6,100,000 KRW (66,600,000 - 112,850,000 VND) mỗi học kỳ. Địa chỉ: 1095 Dalgubeol-daero, Dalseo-gu, Daegu. Xếp hạng: #34." />
      <meta name="keywords" content="Đại học Keimyung (Daegu), học phí Đại học Keimyung (Daegu), Keimyung University, 계명대학교, đại học Daegu" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/keimyung" />
      <meta property="og:title" content="Đại học Keimyung (Daegu) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Keimyung (Daegu) (Keimyung University): 3,600,000 - 6,100,000 KRW (66,600,000 - 112,850,000 VND) mỗi học kỳ. Địa chỉ: 1095 Dalgubeol-daero, Dalseo-gu, Daegu. Xếp hạng: #34." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/keimyung" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Keimyung (Daegu) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Keimyung (Daegu) (Keimyung University): 3,600,000 - 6,100,000 KRW (66,600,000 - 112,850,000 VND) mỗi học kỳ. Địa chỉ: 1095 Dalgubeol-daero, Dalseo-gu, Daegu. Xếp hạng: #34." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/keimyung" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Keimyung (Daegu)",
          "alternateName": "Keimyung University",
          "url": "https://www.kmu.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daegu"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/keimyung">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'keimyung' }} />;
}
