import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/nghethuatyewon',
  routeUrl: '/university/nghethuatyewon',
  Head: () => (
    <>
      <title>Đại học Nghệ thuật Yewon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Nghệ thuật Yewon (Đại học Nghệ thuật Yewon (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #228." />
      <meta name="keywords" content="Đại học Nghệ thuật Yewon, học phí Đại học Nghệ thuật Yewon, Đại học Nghệ thuật Yewon (Korea), Đại học Nghệ thuật Yewon, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/nghethuatyewon" />
      <meta property="og:title" content="Đại học Nghệ thuật Yewon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Nghệ thuật Yewon (Đại học Nghệ thuật Yewon (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #228." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/nghethuatyewon" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Nghệ thuật Yewon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Nghệ thuật Yewon (Đại học Nghệ thuật Yewon (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #228." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/nghethuatyewon" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Nghệ thuật Yewon",
          "alternateName": "Đại học Nghệ thuật Yewon (Korea)",
          "url": "https://www.studyinkorea.go.kr",
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
    return <StaticRouter location="/university/nghethuatyewon">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'nghethuatyewon' }} />;
}
