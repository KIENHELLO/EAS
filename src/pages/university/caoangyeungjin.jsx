import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/caoangyeungjin',
  routeUrl: '/university/caoangyeungjin',
  Head: () => (
    <>
      <title>Cao đẳng Yeungjin - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Yeungjin (Cao đẳng Yeungjin (English) College (Korea)): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daegu, South Korea. Xếp hạng: #100." />
      <meta name="keywords" content="Cao đẳng Yeungjin, học phí Cao đẳng Yeungjin, Cao đẳng Yeungjin (English) College (Korea), Cao đẳng Yeungjin (Korean), đại học Daegu" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/caoangyeungjin" />
      <meta property="og:title" content="Cao đẳng Yeungjin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Yeungjin (Cao đẳng Yeungjin (English) College (Korea)): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daegu, South Korea. Xếp hạng: #100." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/caoangyeungjin" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Yeungjin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Yeungjin (Cao đẳng Yeungjin (English) College (Korea)): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daegu, South Korea. Xếp hạng: #100." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/caoangyeungjin" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Yeungjin",
          "alternateName": "Cao đẳng Yeungjin (English) College (Korea)",
          "url": "https://google.com",
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
    return <StaticRouter location="/university/caoangyeungjin">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'caoangyeungjin' }} />;
}
