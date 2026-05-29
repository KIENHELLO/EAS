import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_197',
  routeUrl: '/university/mock_uni_197',
  Head: () => (
    <>
      <title>Đại học Kunsan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Kunsan (Kunsan University): 3,108,000 - 3,756,000 KRW (57,498,000 - 69,486,000 VND) mỗi học kỳ. Địa chỉ: 123 Kunsan-ro, Chungbuk. Xếp hạng: #220." />
      <meta name="keywords" content="Đại học Kunsan, học phí Đại học Kunsan, Kunsan University, Kunsan대학교, đại học Chungbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_197" />
      <meta property="og:title" content="Đại học Kunsan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Kunsan (Kunsan University): 3,108,000 - 3,756,000 KRW (57,498,000 - 69,486,000 VND) mỗi học kỳ. Địa chỉ: 123 Kunsan-ro, Chungbuk. Xếp hạng: #220." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_197" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Kunsan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Kunsan (Kunsan University): 3,108,000 - 3,756,000 KRW (57,498,000 - 69,486,000 VND) mỗi học kỳ. Địa chỉ: 123 Kunsan-ro, Chungbuk. Xếp hạng: #220." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_197" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Kunsan",
          "alternateName": "Kunsan University",
          "url": "https://www.kunsan.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_197">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_197' }} />;
}
