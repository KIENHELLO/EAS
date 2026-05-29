import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_98',
  routeUrl: '/university/mock_uni_98',
  Head: () => (
    <>
      <title>Đại học Pukyong - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Pukyong (Pukyong University): 2,656,000 - 3,895,000 KRW (49,136,000 - 72,057,500 VND) mỗi học kỳ. Địa chỉ: 123 Pukyong-ro, Jeonnam. Xếp hạng: #121." />
      <meta name="keywords" content="Đại học Pukyong, học phí Đại học Pukyong, Pukyong University, Pukyong대학교, đại học Jeonnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_98" />
      <meta property="og:title" content="Đại học Pukyong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Pukyong (Pukyong University): 2,656,000 - 3,895,000 KRW (49,136,000 - 72,057,500 VND) mỗi học kỳ. Địa chỉ: 123 Pukyong-ro, Jeonnam. Xếp hạng: #121." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_98" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Pukyong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Pukyong (Pukyong University): 2,656,000 - 3,895,000 KRW (49,136,000 - 72,057,500 VND) mỗi học kỳ. Địa chỉ: 123 Pukyong-ro, Jeonnam. Xếp hạng: #121." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_98" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Pukyong",
          "alternateName": "Pukyong University",
          "url": "https://www.pukyong.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_98">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_98' }} />;
}
