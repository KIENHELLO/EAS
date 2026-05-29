import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_160',
  routeUrl: '/university/mock_uni_160',
  Head: () => (
    <>
      <title>Đại học Howon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Howon (Howon University): 3,263,000 - 4,936,000 KRW (60,365,500 - 91,316,000 VND) mỗi học kỳ. Địa chỉ: 123 Howon-ro, Sejong. Xếp hạng: #183." />
      <meta name="keywords" content="Đại học Howon, học phí Đại học Howon, Howon University, Howon대학교, đại học Sejong" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_160" />
      <meta property="og:title" content="Đại học Howon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Howon (Howon University): 3,263,000 - 4,936,000 KRW (60,365,500 - 91,316,000 VND) mỗi học kỳ. Địa chỉ: 123 Howon-ro, Sejong. Xếp hạng: #183." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_160" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Howon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Howon (Howon University): 3,263,000 - 4,936,000 KRW (60,365,500 - 91,316,000 VND) mỗi học kỳ. Địa chỉ: 123 Howon-ro, Sejong. Xếp hạng: #183." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_160" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Howon",
          "alternateName": "Howon University",
          "url": "https://www.howon.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Sejong"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_160">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_160' }} />;
}
