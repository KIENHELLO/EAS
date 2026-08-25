import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/chungwoon_incheoncampus',
  routeUrl: '/university/chungwoon_incheoncampus',
  Head: () => (
    <>
      <title>Đại học Chungwoon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Chungwoon (Chungwoon University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #571." />
      <meta name="keywords" content="Đại học Chungwoon, học phí Đại học Chungwoon, Chungwoon University, 청운대학교, đại học Chungnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/chungwoon_incheoncampus" />
      <meta property="og:title" content="Đại học Chungwoon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Chungwoon (Chungwoon University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #571." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/chungwoon_incheoncampus" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Chungwoon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Chungwoon (Chungwoon University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #571." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/chungwoon_incheoncampus" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Chungwoon",
          "alternateName": "Chungwoon University",
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
    return <StaticRouter location="/university/chungwoon_incheoncampus">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'chungwoon_incheoncampus' }} />;
}
