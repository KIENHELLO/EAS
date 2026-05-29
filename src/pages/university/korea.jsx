import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/korea',
  routeUrl: '/university/korea',
  Head: () => (
    <>
      <title>Đại học Korea - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Korea (Korea University): 3,870,000 - 6,880,000 KRW (71,595,000 - 127,280,000 VND) mỗi học kỳ. Địa chỉ: 145 Anam-ro, Seongbuk-gu, Seoul. Xếp hạng: #4." />
      <meta name="keywords" content="Đại học Korea, học phí Đại học Korea, Korea University, 고려대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/korea" />
      <meta property="og:title" content="Đại học Korea - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Korea (Korea University): 3,870,000 - 6,880,000 KRW (71,595,000 - 127,280,000 VND) mỗi học kỳ. Địa chỉ: 145 Anam-ro, Seongbuk-gu, Seoul. Xếp hạng: #4." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/korea" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Korea - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Korea (Korea University): 3,870,000 - 6,880,000 KRW (71,595,000 - 127,280,000 VND) mỗi học kỳ. Địa chỉ: 145 Anam-ro, Seongbuk-gu, Seoul. Xếp hạng: #4." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/korea" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Korea",
          "alternateName": "Korea University",
          "url": "https://www.korea.ac.kr",
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
    return <StaticRouter location="/university/korea">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'korea' }} />;
}
