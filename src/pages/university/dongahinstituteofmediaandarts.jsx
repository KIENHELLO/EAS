import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/dongahinstituteofmediaandarts',
  routeUrl: '/university/dongahinstituteofmediaandarts',
  Head: () => (
    <>
      <title>CĐ Nghệ thuật Truyền thông Dong-Ah - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Nghệ thuật Truyền thông Dong-Ah (Dong-Ah Institute of Media and Arts): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #435." />
      <meta name="keywords" content="CĐ Nghệ thuật Truyền thông Dong-Ah, học phí CĐ Nghệ thuật Truyền thông Dong-Ah, Dong-Ah Institute of Media and Arts, 동아방송예술대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/dongahinstituteofmediaandarts" />
      <meta property="og:title" content="CĐ Nghệ thuật Truyền thông Dong-Ah - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Nghệ thuật Truyền thông Dong-Ah (Dong-Ah Institute of Media and Arts): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #435." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/dongahinstituteofmediaandarts" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Nghệ thuật Truyền thông Dong-Ah - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Nghệ thuật Truyền thông Dong-Ah (Dong-Ah Institute of Media and Arts): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #435." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/dongahinstituteofmediaandarts" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Nghệ thuật Truyền thông Dong-Ah",
          "alternateName": "Dong-Ah Institute of Media and Arts",
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
    return <StaticRouter location="/university/dongahinstituteofmediaandarts">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'dongahinstituteofmediaandarts' }} />;
}
