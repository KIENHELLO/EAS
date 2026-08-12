import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/chonnam',
  routeUrl: '/university/chonnam',
  Head: () => (
    <>
      <title>Đại học Quốc gia Chonnam - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Chonnam (Chonnam National University): 1,750,000 - 3,250,000 KRW (32,375,000 - 60,125,000 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #23." />
      <meta name="keywords" content="Đại học Quốc gia Chonnam, học phí Đại học Quốc gia Chonnam, Chonnam National University, 전남대학교, đại học Gwangju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/chonnam" />
      <meta property="og:title" content="Đại học Quốc gia Chonnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Chonnam (Chonnam National University): 1,750,000 - 3,250,000 KRW (32,375,000 - 60,125,000 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #23." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/chonnam" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Chonnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Chonnam (Chonnam National University): 1,750,000 - 3,250,000 KRW (32,375,000 - 60,125,000 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #23." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/chonnam" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Chonnam",
          "alternateName": "Chonnam National University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gwangju"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/chonnam">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'chonnam' }} />;
}
