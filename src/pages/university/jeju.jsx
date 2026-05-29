import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/jeju',
  routeUrl: '/university/jeju',
  Head: () => (
    <>
      <title>Đại học Quốc gia Jeju - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Jeju (Jeju National University): 3,420,000 - 5,510,000 KRW (63,270,000 - 101,935,000 VND) mỗi học kỳ. Địa chỉ: 102 Jejudaehak-ro, Jeju-si, Jeju-do. Xếp hạng: #27." />
      <meta name="keywords" content="Đại học Quốc gia Jeju, học phí Đại học Quốc gia Jeju, Jeju National University, 제주대학교, đại học Jeju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/jeju" />
      <meta property="og:title" content="Đại học Quốc gia Jeju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Jeju (Jeju National University): 3,420,000 - 5,510,000 KRW (63,270,000 - 101,935,000 VND) mỗi học kỳ. Địa chỉ: 102 Jejudaehak-ro, Jeju-si, Jeju-do. Xếp hạng: #27." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/jeju" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Jeju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Jeju (Jeju National University): 3,420,000 - 5,510,000 KRW (63,270,000 - 101,935,000 VND) mỗi học kỳ. Địa chỉ: 102 Jejudaehak-ro, Jeju-si, Jeju-do. Xếp hạng: #27." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/jeju" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Jeju",
          "alternateName": "Jeju National University",
          "url": "https://www.jejunu.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeju"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/jeju">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'jeju' }} />;
}
