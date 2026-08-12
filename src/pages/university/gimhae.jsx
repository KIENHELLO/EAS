import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/gimhae',
  routeUrl: '/university/gimhae',
  Head: () => (
    <>
      <title>Cao đẳng Gimhae - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Gimhae (Gimhae College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeongnam. Xếp hạng: #589." />
      <meta name="keywords" content="Cao đẳng Gimhae, học phí Cao đẳng Gimhae, Gimhae College, 김해대학교, đại học Gyeongnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/gimhae" />
      <meta property="og:title" content="Cao đẳng Gimhae - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Gimhae (Gimhae College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeongnam. Xếp hạng: #589." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/gimhae" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Gimhae - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Gimhae (Gimhae College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeongnam. Xếp hạng: #589." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/gimhae" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Gimhae",
          "alternateName": "Gimhae College",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/gimhae">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'gimhae' }} />;
}
