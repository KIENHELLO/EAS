import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/viencongnghegeu',
  routeUrl: '/university/viencongnghegeu',
  Head: () => (
    <>
      <title>Đại học Quốc gia Công nghệ Kumoh - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Công nghệ Kumoh (Kumoh National Institute of Technology): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Gyeongbuk. Xếp hạng: #234." />
      <meta name="keywords" content="Đại học Quốc gia Công nghệ Kumoh, học phí Đại học Quốc gia Công nghệ Kumoh, Kumoh National Institute of Technology, 금오공과대학교, đại học Gyeongbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/viencongnghegeu" />
      <meta property="og:title" content="Đại học Quốc gia Công nghệ Kumoh - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Công nghệ Kumoh (Kumoh National Institute of Technology): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Gyeongbuk. Xếp hạng: #234." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/viencongnghegeu" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Công nghệ Kumoh - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Công nghệ Kumoh (Kumoh National Institute of Technology): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Gyeongbuk. Xếp hạng: #234." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/viencongnghegeu" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Công nghệ Kumoh",
          "alternateName": "Kumoh National Institute of Technology",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/viencongnghegeu">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'viencongnghegeu' }} />;
}
