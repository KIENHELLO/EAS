import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/silla',
  routeUrl: '/university/silla',
  Head: () => (
    <>
      <title>Đại học Silla - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Silla (Silla University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #196." />
      <meta name="keywords" content="Đại học Silla, học phí Đại học Silla, Silla University, 신라대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/silla" />
      <meta property="og:title" content="Đại học Silla - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Silla (Silla University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #196." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/silla" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Silla - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Silla (Silla University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #196." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/silla" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Silla",
          "alternateName": "Silla University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Busan"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/silla">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'silla' }} />;
}
