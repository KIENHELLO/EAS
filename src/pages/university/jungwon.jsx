import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/jungwon',
  routeUrl: '/university/jungwon',
  Head: () => (
    <>
      <title>Đại học Jungwon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Jungwon (Jungwon University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Chungbuk. Xếp hạng: #540." />
      <meta name="keywords" content="Đại học Jungwon, học phí Đại học Jungwon, Jungwon University, 중원대학교, đại học Chungbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/jungwon" />
      <meta property="og:title" content="Đại học Jungwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Jungwon (Jungwon University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Chungbuk. Xếp hạng: #540." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/jungwon" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Jungwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Jungwon (Jungwon University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Chungbuk. Xếp hạng: #540." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/jungwon" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Jungwon",
          "alternateName": "Jungwon University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/jungwon">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'jungwon' }} />;
}
