import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/ofseoul',
  routeUrl: '/university/ofseoul',
  Head: () => (
    <>
      <title>ĐH Thị lập Seoul - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Thị lập Seoul (University of Seoul): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #316." />
      <meta name="keywords" content="ĐH Thị lập Seoul, học phí ĐH Thị lập Seoul, University of Seoul, 서울시립대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/ofseoul" />
      <meta property="og:title" content="ĐH Thị lập Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Thị lập Seoul (University of Seoul): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #316." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/ofseoul" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Thị lập Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Thị lập Seoul (University of Seoul): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #316." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/ofseoul" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Thị lập Seoul",
          "alternateName": "University of Seoul",
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
    return <StaticRouter location="/university/ofseoul">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'ofseoul' }} />;
}
