import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/youngsan',
  routeUrl: '/university/youngsan',
  Head: () => (
    <>
      <title>Đại học Youngsan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Youngsan (Youngsan University): 3,100,000 - 3,800,000 KRW (57,350,000 - 70,300,000 VND) mỗi học kỳ. Địa chỉ: 142 Bansong-ro, Haeundae-gu, Busan. Xếp hạng: #54." />
      <meta name="keywords" content="Đại học Youngsan, học phí Đại học Youngsan, Youngsan University, 영산대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/youngsan" />
      <meta property="og:title" content="Đại học Youngsan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Youngsan (Youngsan University): 3,100,000 - 3,800,000 KRW (57,350,000 - 70,300,000 VND) mỗi học kỳ. Địa chỉ: 142 Bansong-ro, Haeundae-gu, Busan. Xếp hạng: #54." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/youngsan" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Youngsan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Youngsan (Youngsan University): 3,100,000 - 3,800,000 KRW (57,350,000 - 70,300,000 VND) mỗi học kỳ. Địa chỉ: 142 Bansong-ro, Haeundae-gu, Busan. Xếp hạng: #54." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/youngsan" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Youngsan",
          "alternateName": "Youngsan University",
          "url": "https://www.ysu.ac.kr",
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
    return <StaticRouter location="/university/youngsan">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'youngsan' }} />;
}
