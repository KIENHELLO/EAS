import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mokponationalmaritime',
  routeUrl: '/university/mokponationalmaritime',
  Head: () => (
    <>
      <title>Đại học Quốc gia Hàng hải Mokpo - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Hàng hải Mokpo (Mokpo National Maritime University): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Jeonnam. Xếp hạng: #548." />
      <meta name="keywords" content="Đại học Quốc gia Hàng hải Mokpo, học phí Đại học Quốc gia Hàng hải Mokpo, Mokpo National Maritime University, 목포해양대학교, đại học Jeonnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mokponationalmaritime" />
      <meta property="og:title" content="Đại học Quốc gia Hàng hải Mokpo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Hàng hải Mokpo (Mokpo National Maritime University): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Jeonnam. Xếp hạng: #548." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mokponationalmaritime" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Hàng hải Mokpo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Hàng hải Mokpo (Mokpo National Maritime University): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Jeonnam. Xếp hạng: #548." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mokponationalmaritime" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Hàng hải Mokpo",
          "alternateName": "Mokpo National Maritime University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeonnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mokponationalmaritime">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mokponationalmaritime' }} />;
}
