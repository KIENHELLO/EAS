import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/jeonjukijeon',
  routeUrl: '/university/jeonjukijeon',
  Head: () => (
    <>
      <title>Cao đẳng Jeonju Kijeon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Jeonju Kijeon (Jeonju Kijeon College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #612." />
      <meta name="keywords" content="Cao đẳng Jeonju Kijeon, học phí Cao đẳng Jeonju Kijeon, Jeonju Kijeon College, 전주기전대학, đại học Jeonbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/jeonjukijeon" />
      <meta property="og:title" content="Cao đẳng Jeonju Kijeon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Jeonju Kijeon (Jeonju Kijeon College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #612." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/jeonjukijeon" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Jeonju Kijeon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Jeonju Kijeon (Jeonju Kijeon College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #612." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/jeonjukijeon" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Jeonju Kijeon",
          "alternateName": "Jeonju Kijeon College",
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
    return <StaticRouter location="/university/jeonjukijeon">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'jeonjukijeon' }} />;
}
