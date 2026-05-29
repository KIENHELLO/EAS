import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/inha',
  routeUrl: '/university/inha',
  Head: () => (
    <>
      <title>Đại học Inha - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Inha (Inha University): 3,645,000 - 6,480,000 KRW (67,432,500 - 119,880,000 VND) mỗi học kỳ. Địa chỉ: 100 Inha-ro, Michuhol-gu, Incheon. Xếp hạng: #19." />
      <meta name="keywords" content="Đại học Inha, học phí Đại học Inha, Inha University, 인하대학교, đại học Incheon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/inha" />
      <meta property="og:title" content="Đại học Inha - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Inha (Inha University): 3,645,000 - 6,480,000 KRW (67,432,500 - 119,880,000 VND) mỗi học kỳ. Địa chỉ: 100 Inha-ro, Michuhol-gu, Incheon. Xếp hạng: #19." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/inha" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Inha - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Inha (Inha University): 3,645,000 - 6,480,000 KRW (67,432,500 - 119,880,000 VND) mỗi học kỳ. Địa chỉ: 100 Inha-ro, Michuhol-gu, Incheon. Xếp hạng: #19." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/inha" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Inha",
          "alternateName": "Inha University",
          "url": "https://www.inha.ac.kr",
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
    return <StaticRouter location="/university/inha">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'inha' }} />;
}
