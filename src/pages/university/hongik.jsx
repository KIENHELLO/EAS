import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/hongik',
  routeUrl: '/university/hongik',
  Head: () => (
    <>
      <title>Đại học Hongik - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Hongik (Hongik University): 3,800,000 - 4,900,000 KRW (70,300,000 - 90,650,000 VND) mỗi học kỳ. Địa chỉ: 94 Wausan-ro, Mapo-gu, Seoul. Xếp hạng: #24." />
      <meta name="keywords" content="Đại học Hongik, học phí Đại học Hongik, Hongik University, 홍익대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/hongik" />
      <meta property="og:title" content="Đại học Hongik - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Hongik (Hongik University): 3,800,000 - 4,900,000 KRW (70,300,000 - 90,650,000 VND) mỗi học kỳ. Địa chỉ: 94 Wausan-ro, Mapo-gu, Seoul. Xếp hạng: #24." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/hongik" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Hongik - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Hongik (Hongik University): 3,800,000 - 4,900,000 KRW (70,300,000 - 90,650,000 VND) mỗi học kỳ. Địa chỉ: 94 Wausan-ro, Mapo-gu, Seoul. Xếp hạng: #24." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/hongik" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Hongik",
          "alternateName": "Hongik University",
          "url": "https://www.hongik.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Seoul"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/hongik">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'hongik' }} />;
}
