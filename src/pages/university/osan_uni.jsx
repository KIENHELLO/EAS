import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/osan_uni',
  routeUrl: '/university/osan_uni',
  Head: () => (
    <>
      <title>CĐ Osan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Osan (Osan University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #203." />
      <meta name="keywords" content="CĐ Osan, học phí CĐ Osan, Osan University, 오산대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/osan_uni" />
      <meta property="og:title" content="CĐ Osan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Osan (Osan University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #203." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/osan_uni" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Osan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Osan (Osan University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #203." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/osan_uni" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Osan",
          "alternateName": "Osan University",
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
    return <StaticRouter location="/university/osan_uni">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'osan_uni' }} />;
}
