import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_84',
  routeUrl: '/university/mock_uni_84',
  Head: () => (
    <>
      <title>Đại học Tongmyong - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Tongmyong (Tongmyong University): 2,043,000 - 4,367,000 KRW (37,795,500 - 80,789,500 VND) mỗi học kỳ. Địa chỉ: 123 Tongmyong-ro, Jeju. Xếp hạng: #107." />
      <meta name="keywords" content="Đại học Tongmyong, học phí Đại học Tongmyong, Tongmyong University, Tongmyong대학교, đại học Jeju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_84" />
      <meta property="og:title" content="Đại học Tongmyong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Tongmyong (Tongmyong University): 2,043,000 - 4,367,000 KRW (37,795,500 - 80,789,500 VND) mỗi học kỳ. Địa chỉ: 123 Tongmyong-ro, Jeju. Xếp hạng: #107." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_84" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Tongmyong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Tongmyong (Tongmyong University): 2,043,000 - 4,367,000 KRW (37,795,500 - 80,789,500 VND) mỗi học kỳ. Địa chỉ: 123 Tongmyong-ro, Jeju. Xếp hạng: #107." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_84" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Tongmyong",
          "alternateName": "Tongmyong University",
          "url": "https://www.tongmyong.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeju"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_84">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_84' }} />;
}
