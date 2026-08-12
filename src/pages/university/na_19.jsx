import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/na_19',
  routeUrl: '/university/na_19',
  Head: () => (
    <>
      <title>N/A - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường N/A (N/A): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #472." />
      <meta name="keywords" content="N/A, học phí N/A, N/A, 성서침례대학원대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/na_19" />
      <meta property="og:title" content="N/A - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường N/A (N/A): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #472." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/na_19" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="N/A - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường N/A (N/A): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #472." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/na_19" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "N/A",
          "alternateName": "N/A",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeonggi"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/na_19">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'na_19' }} />;
}
