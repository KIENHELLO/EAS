import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/hocviennghethua',
  routeUrl: '/university/hocviennghethua',
  Head: () => (
    <>
      <title>Học viện Nghệ thuật Seoul  - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Học viện Nghệ thuật Seoul  (Học viện Nghệ thuật Seoul College (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #206." />
      <meta name="keywords" content="Học viện Nghệ thuật Seoul , học phí Học viện Nghệ thuật Seoul , Học viện Nghệ thuật Seoul College (Korea), Học viện Nghệ thuật Seoul , đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/hocviennghethua" />
      <meta property="og:title" content="Học viện Nghệ thuật Seoul  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Học viện Nghệ thuật Seoul  (Học viện Nghệ thuật Seoul College (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #206." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/hocviennghethua" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Học viện Nghệ thuật Seoul  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Học viện Nghệ thuật Seoul  (Học viện Nghệ thuật Seoul College (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #206." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/hocviennghethua" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Học viện Nghệ thuật Seoul ",
          "alternateName": "Học viện Nghệ thuật Seoul College (Korea)",
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
    return <StaticRouter location="/university/hocviennghethua">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'hocviennghethua' }} />;
}
