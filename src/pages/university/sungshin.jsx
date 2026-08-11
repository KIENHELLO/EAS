import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/sungshin',
  routeUrl: '/university/sungshin',
  Head: () => (
    <>
      <title>Đại học Nữ Sungshin - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Nữ Sungshin (Sungshin Womans University): 3,300,000 - 4,600,000 KRW (61,050,000 - 85,100,000 VND) mỗi học kỳ. Địa chỉ: 2 Bomun-ro 34-da-gil, Seongbuk-gu, Seoul. Xếp hạng: #38." />
      <meta name="keywords" content="Đại học Nữ Sungshin, học phí Đại học Nữ Sungshin, Sungshin Womans University, 성신여자대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/sungshin" />
      <meta property="og:title" content="Đại học Nữ Sungshin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Nữ Sungshin (Sungshin Womans University): 3,300,000 - 4,600,000 KRW (61,050,000 - 85,100,000 VND) mỗi học kỳ. Địa chỉ: 2 Bomun-ro 34-da-gil, Seongbuk-gu, Seoul. Xếp hạng: #38." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/sungshin" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Nữ Sungshin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Nữ Sungshin (Sungshin Womans University): 3,300,000 - 4,600,000 KRW (61,050,000 - 85,100,000 VND) mỗi học kỳ. Địa chỉ: 2 Bomun-ro 34-da-gil, Seongbuk-gu, Seoul. Xếp hạng: #38." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/sungshin" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Nữ Sungshin",
          "alternateName": "Sungshin Womans University",
          "url": "https://www.sungshin.ac.kr",
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
    return <StaticRouter location="/university/sungshin">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'sungshin' }} />;
}
