import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/namseoul',
  routeUrl: '/university/namseoul',
  Head: () => (
    <>
      <title>Đại học Namseoul - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Namseoul (Namseoul University): 3,100,000 - 3,900,000 KRW (57,350,000 - 72,150,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #56." />
      <meta name="keywords" content="Đại học Namseoul, học phí Đại học Namseoul, Namseoul University, 남서울대학교, đại học Chungnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/namseoul" />
      <meta property="og:title" content="Đại học Namseoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Namseoul (Namseoul University): 3,100,000 - 3,900,000 KRW (57,350,000 - 72,150,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #56." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/namseoul" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Namseoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Namseoul (Namseoul University): 3,100,000 - 3,900,000 KRW (57,350,000 - 72,150,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #56." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/namseoul" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Namseoul",
          "alternateName": "Namseoul University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/namseoul">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'namseoul' }} />;
}
