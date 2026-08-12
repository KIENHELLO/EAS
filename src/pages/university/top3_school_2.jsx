import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/top3_school_2',
  routeUrl: '/university/top3_school_2',
  Head: () => (
    <>
      <title>CĐ Ansan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Ansan (Ansan University): 2,200,000 - 2,860,000 KRW (40,700,000 - 52,910,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #152." />
      <meta name="keywords" content="CĐ Ansan, học phí CĐ Ansan, Ansan University, 안산대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/top3_school_2" />
      <meta property="og:title" content="CĐ Ansan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Ansan (Ansan University): 2,200,000 - 2,860,000 KRW (40,700,000 - 52,910,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #152." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/top3_school_2" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Ansan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Ansan (Ansan University): 2,200,000 - 2,860,000 KRW (40,700,000 - 52,910,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #152." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/top3_school_2" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Ansan",
          "alternateName": "Ansan University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeonggi"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/top3_school_2">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'top3_school_2' }} />;
}
