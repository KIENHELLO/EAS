import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/jeonjuvision',
  routeUrl: '/university/jeonjuvision',
  Head: () => (
    <>
      <title>Cao đẳng Jeonju Vision - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Jeonju Vision (Jeonju Vision College): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #613." />
      <meta name="keywords" content="Cao đẳng Jeonju Vision, học phí Cao đẳng Jeonju Vision, Jeonju Vision College, 전주비전대학교, đại học Jeonbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/jeonjuvision" />
      <meta property="og:title" content="Cao đẳng Jeonju Vision - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Jeonju Vision (Jeonju Vision College): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #613." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/jeonjuvision" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Jeonju Vision - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Jeonju Vision (Jeonju Vision College): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #613." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/jeonjuvision" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Jeonju Vision",
          "alternateName": "Jeonju Vision College",
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
    return <StaticRouter location="/university/jeonjuvision">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'jeonjuvision' }} />;
}
