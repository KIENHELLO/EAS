import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/jeonju',
  routeUrl: '/university/jeonju',
  Head: () => (
    <>
      <title>Đại học Jeonju - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Jeonju (Jeonju University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #554." />
      <meta name="keywords" content="Đại học Jeonju, học phí Đại học Jeonju, Jeonju University, 전주대학교, đại học Jeonbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/jeonju" />
      <meta property="og:title" content="Đại học Jeonju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Jeonju (Jeonju University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #554." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/jeonju" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Jeonju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Jeonju (Jeonju University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #554." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/jeonju" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Jeonju",
          "alternateName": "Jeonju University",
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
    return <StaticRouter location="/university/jeonju">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'jeonju' }} />;
}
