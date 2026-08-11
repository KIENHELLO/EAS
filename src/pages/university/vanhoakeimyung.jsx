import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/vanhoakeimyung',
  routeUrl: '/university/vanhoakeimyung',
  Head: () => (
    <>
      <title>Đại học Văn hoá Keimyung - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Văn hoá Keimyung (Đại học Văn hoá Keimyung (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #232." />
      <meta name="keywords" content="Đại học Văn hoá Keimyung, học phí Đại học Văn hoá Keimyung, Đại học Văn hoá Keimyung (Korea), Đại học Văn hoá Keimyung, đại học Daegu" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/vanhoakeimyung" />
      <meta property="og:title" content="Đại học Văn hoá Keimyung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Văn hoá Keimyung (Đại học Văn hoá Keimyung (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #232." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/vanhoakeimyung" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Văn hoá Keimyung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Văn hoá Keimyung (Đại học Văn hoá Keimyung (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #232." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/vanhoakeimyung" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Văn hoá Keimyung",
          "alternateName": "Đại học Văn hoá Keimyung (Korea)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daegu"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/vanhoakeimyung">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'vanhoakeimyung' }} />;
}
