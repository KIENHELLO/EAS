import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_95',
  routeUrl: '/university/mock_uni_95',
  Head: () => (
    <>
      <title>Đại học Dankook - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Dankook (Dankook University): 2,025,000 - 4,357,000 KRW (37,462,500 - 80,604,500 VND) mỗi học kỳ. Địa chỉ: 123 Dankook-ro, Chungbuk. Xếp hạng: #118." />
      <meta name="keywords" content="Đại học Dankook, học phí Đại học Dankook, Dankook University, Dankook대학교, đại học Chungbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_95" />
      <meta property="og:title" content="Đại học Dankook - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Dankook (Dankook University): 2,025,000 - 4,357,000 KRW (37,462,500 - 80,604,500 VND) mỗi học kỳ. Địa chỉ: 123 Dankook-ro, Chungbuk. Xếp hạng: #118." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_95" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Dankook - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Dankook (Dankook University): 2,025,000 - 4,357,000 KRW (37,462,500 - 80,604,500 VND) mỗi học kỳ. Địa chỉ: 123 Dankook-ro, Chungbuk. Xếp hạng: #118." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_95" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Dankook",
          "alternateName": "Dankook University",
          "url": "https://www.dankook.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_95">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_95' }} />;
}
