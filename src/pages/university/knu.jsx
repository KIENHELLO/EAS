import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/knu',
  routeUrl: '/university/knu',
  Head: () => (
    <>
      <title>Đại học Quốc gia Kyungpook - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Kyungpook (Kyungpook National University): 3,870,000 - 6,235,000 KRW (71,595,000 - 115,347,500 VND) mỗi học kỳ. Địa chỉ: Daegu. Xếp hạng: #12." />
      <meta name="keywords" content="Đại học Quốc gia Kyungpook, học phí Đại học Quốc gia Kyungpook, Kyungpook National University, 경북대학교, đại học Daegu" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/knu" />
      <meta property="og:title" content="Đại học Quốc gia Kyungpook - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Kyungpook (Kyungpook National University): 3,870,000 - 6,235,000 KRW (71,595,000 - 115,347,500 VND) mỗi học kỳ. Địa chỉ: Daegu. Xếp hạng: #12." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/knu" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Kyungpook - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Kyungpook (Kyungpook National University): 3,870,000 - 6,235,000 KRW (71,595,000 - 115,347,500 VND) mỗi học kỳ. Địa chỉ: Daegu. Xếp hạng: #12." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/knu" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Kyungpook",
          "alternateName": "Kyungpook National University",
          "url": "",
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
    return <StaticRouter location="/university/knu">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'knu' }} />;
}
