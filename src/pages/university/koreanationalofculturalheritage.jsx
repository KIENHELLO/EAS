import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreanationalofculturalheritage',
  routeUrl: '/university/koreanationalofculturalheritage',
  Head: () => (
    <>
      <title>Đại học Di sản Văn hóa Quốc gia (KNUCH) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Di sản Văn hóa Quốc gia (KNUCH) (Korea National University of Cultural Heritage): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #631." />
      <meta name="keywords" content="Đại học Di sản Văn hóa Quốc gia (KNUCH), học phí Đại học Di sản Văn hóa Quốc gia (KNUCH), Korea National University of Cultural Heritage, 한국전통문화대학교, đại học Chungnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreanationalofculturalheritage" />
      <meta property="og:title" content="Đại học Di sản Văn hóa Quốc gia (KNUCH) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Di sản Văn hóa Quốc gia (KNUCH) (Korea National University of Cultural Heritage): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #631." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreanationalofculturalheritage" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Di sản Văn hóa Quốc gia (KNUCH) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Di sản Văn hóa Quốc gia (KNUCH) (Korea National University of Cultural Heritage): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #631." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreanationalofculturalheritage" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Di sản Văn hóa Quốc gia (KNUCH)",
          "alternateName": "Korea National University of Cultural Heritage",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/koreanationalofculturalheritage">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreanationalofculturalheritage' }} />;
}
