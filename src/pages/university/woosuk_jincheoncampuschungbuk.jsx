import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/woosuk_jincheoncampuschungbuk',
  routeUrl: '/university/woosuk_jincheoncampuschungbuk',
  Head: () => (
    <>
      <title>Đại học Woosuk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Woosuk (Woosuk University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #555." />
      <meta name="keywords" content="Đại học Woosuk, học phí Đại học Woosuk, Woosuk University, 우석대학교, đại học Jeonbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/woosuk_jincheoncampuschungbuk" />
      <meta property="og:title" content="Đại học Woosuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Woosuk (Woosuk University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #555." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/woosuk_jincheoncampuschungbuk" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Woosuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Woosuk (Woosuk University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #555." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/woosuk_jincheoncampuschungbuk" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Woosuk",
          "alternateName": "Woosuk University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeonbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/woosuk_jincheoncampuschungbuk">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'woosuk_jincheoncampuschungbuk' }} />;
}
