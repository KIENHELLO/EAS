import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/caoangkimpo',
  routeUrl: '/university/caoangkimpo',
  Head: () => (
    <>
      <title>CĐ Kimpo - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Kimpo (Kimpo University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #100." />
      <meta name="keywords" content="CĐ Kimpo, học phí CĐ Kimpo, Kimpo University, 김포대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/caoangkimpo" />
      <meta property="og:title" content="CĐ Kimpo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Kimpo (Kimpo University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #100." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/caoangkimpo" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Kimpo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Kimpo (Kimpo University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #100." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/caoangkimpo" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Kimpo",
          "alternateName": "Kimpo University",
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
    return <StaticRouter location="/university/caoangkimpo">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'caoangkimpo' }} />;
}
