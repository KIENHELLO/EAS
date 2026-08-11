import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/caodangkhoahock',
  routeUrl: '/university/caodangkhoahock',
  Head: () => (
    <>
      <title>Cao đẳng Khoa học kỹ thuật Dongwon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Khoa học kỹ thuật Dongwon (Khoa học kỹ thuật Dongwon College (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #236." />
      <meta name="keywords" content="Cao đẳng Khoa học kỹ thuật Dongwon, học phí Cao đẳng Khoa học kỹ thuật Dongwon, Khoa học kỹ thuật Dongwon College (Korea), Cao đẳng Khoa học kỹ thuật Dongwon, đại học Gyeongnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/caodangkhoahock" />
      <meta property="og:title" content="Cao đẳng Khoa học kỹ thuật Dongwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Khoa học kỹ thuật Dongwon (Khoa học kỹ thuật Dongwon College (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #236." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/caodangkhoahock" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Khoa học kỹ thuật Dongwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Khoa học kỹ thuật Dongwon (Khoa học kỹ thuật Dongwon College (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #236." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/caodangkhoahock" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Khoa học kỹ thuật Dongwon",
          "alternateName": "Khoa học kỹ thuật Dongwon College (Korea)",
          "url": "https://www.studyinkorea.go.kr",
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
    return <StaticRouter location="/university/caodangkhoahock">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'caodangkhoahock' }} />;
}
