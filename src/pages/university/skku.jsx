import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/skku',
  routeUrl: '/university/skku',
  Head: () => (
    <>
      <title>Đại học Sungkyunkwan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sungkyunkwan (Sungkyunkwan University): 3,780,000 - 6,720,000 KRW (69,930,000 - 124,320,000 VND) mỗi học kỳ. Địa chỉ: 25-2 Sungkyunkwan-ro, Jongno-gu, Seoul. Xếp hạng: #5." />
      <meta name="keywords" content="Đại học Sungkyunkwan, học phí Đại học Sungkyunkwan, Sungkyunkwan University, 성균관대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/skku" />
      <meta property="og:title" content="Đại học Sungkyunkwan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sungkyunkwan (Sungkyunkwan University): 3,780,000 - 6,720,000 KRW (69,930,000 - 124,320,000 VND) mỗi học kỳ. Địa chỉ: 25-2 Sungkyunkwan-ro, Jongno-gu, Seoul. Xếp hạng: #5." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/skku" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sungkyunkwan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sungkyunkwan (Sungkyunkwan University): 3,780,000 - 6,720,000 KRW (69,930,000 - 124,320,000 VND) mỗi học kỳ. Địa chỉ: 25-2 Sungkyunkwan-ro, Jongno-gu, Seoul. Xếp hạng: #5." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/skku" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sungkyunkwan",
          "alternateName": "Sungkyunkwan University",
          "url": "https://www.skku.edu",
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
    return <StaticRouter location="/university/skku">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'skku' }} />;
}
