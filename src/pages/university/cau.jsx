import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/cau',
  routeUrl: '/university/cau',
  Head: () => (
    <>
      <title>Đại học ChungAng - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học ChungAng (Chung-Ang University): 3,790,000 - 6,300,000 KRW (70,115,000 - 116,550,000 VND) mỗi học kỳ. Địa chỉ: 84 Heukseok-ro, Dongjak-gu, Seoul. Xếp hạng: #10." />
      <meta name="keywords" content="Đại học ChungAng, học phí Đại học ChungAng, Chung-Ang University, 중앙대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/cau" />
      <meta property="og:title" content="Đại học ChungAng - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học ChungAng (Chung-Ang University): 3,790,000 - 6,300,000 KRW (70,115,000 - 116,550,000 VND) mỗi học kỳ. Địa chỉ: 84 Heukseok-ro, Dongjak-gu, Seoul. Xếp hạng: #10." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/cau" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học ChungAng - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học ChungAng (Chung-Ang University): 3,790,000 - 6,300,000 KRW (70,115,000 - 116,550,000 VND) mỗi học kỳ. Địa chỉ: 84 Heukseok-ro, Dongjak-gu, Seoul. Xếp hạng: #10." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/cau" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học ChungAng",
          "alternateName": "Chung-Ang University",
          "url": "https://neweng.cau.ac.kr",
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
    return <StaticRouter location="/university/cau">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'cau' }} />;
}
