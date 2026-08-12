import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/woosonginformation',
  routeUrl: '/university/woosonginformation',
  Head: () => (
    <>
      <title>CĐ Thông tin Woosong - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Thông tin Woosong (Woosong Information College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #496." />
      <meta name="keywords" content="CĐ Thông tin Woosong, học phí CĐ Thông tin Woosong, Woosong Information College, 우송정보대학, đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/woosonginformation" />
      <meta property="og:title" content="CĐ Thông tin Woosong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Thông tin Woosong (Woosong Information College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #496." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/woosonginformation" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Thông tin Woosong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Thông tin Woosong (Woosong Information College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #496." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/woosonginformation" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Thông tin Woosong",
          "alternateName": "Woosong Information College",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daejeon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/woosonginformation">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'woosonginformation' }} />;
}
