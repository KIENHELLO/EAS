import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreanationalsport',
  routeUrl: '/university/koreanationalsport',
  Head: () => (
    <>
      <title>ĐH Thể thao Quốc gia Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Thể thao Quốc gia Hàn Quốc (Korea National Sport University): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #327." />
      <meta name="keywords" content="ĐH Thể thao Quốc gia Hàn Quốc, học phí ĐH Thể thao Quốc gia Hàn Quốc, Korea National Sport University, 한국체육대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreanationalsport" />
      <meta property="og:title" content="ĐH Thể thao Quốc gia Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Thể thao Quốc gia Hàn Quốc (Korea National Sport University): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #327." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreanationalsport" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Thể thao Quốc gia Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Thể thao Quốc gia Hàn Quốc (Korea National Sport University): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #327." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreanationalsport" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Thể thao Quốc gia Hàn Quốc",
          "alternateName": "Korea National Sport University",
          "url": "",
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
    return <StaticRouter location="/university/koreanationalsport">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreanationalsport' }} />;
}
