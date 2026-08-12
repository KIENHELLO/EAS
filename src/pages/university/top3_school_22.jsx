import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/top3_school_22',
  routeUrl: '/university/top3_school_22',
  Head: () => (
    <>
      <title>Cao đẳng Songho - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Songho (Songho University): 1,800,000 - 2,340,000 KRW (33,300,000 - 43,290,000 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #172." />
      <meta name="keywords" content="Cao đẳng Songho, học phí Cao đẳng Songho, Songho University, 송호대학교, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/top3_school_22" />
      <meta property="og:title" content="Cao đẳng Songho - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Songho (Songho University): 1,800,000 - 2,340,000 KRW (33,300,000 - 43,290,000 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #172." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/top3_school_22" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Songho - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Songho (Songho University): 1,800,000 - 2,340,000 KRW (33,300,000 - 43,290,000 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #172." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/top3_school_22" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Songho",
          "alternateName": "Songho University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gangwon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/top3_school_22">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'top3_school_22' }} />;
}
