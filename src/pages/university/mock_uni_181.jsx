import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_181',
  routeUrl: '/university/mock_uni_181',
  Head: () => (
    <>
      <title>Đại học Dankook - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Dankook (Dankook University): 3,029,000 - 4,923,000 KRW (56,036,500 - 91,075,500 VND) mỗi học kỳ. Địa chỉ: 123 Dankook-ro, Chungnam. Xếp hạng: #204." />
      <meta name="keywords" content="Đại học Dankook, học phí Đại học Dankook, Dankook University, Dankook대학교, đại học Chungnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_181" />
      <meta property="og:title" content="Đại học Dankook - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Dankook (Dankook University): 3,029,000 - 4,923,000 KRW (56,036,500 - 91,075,500 VND) mỗi học kỳ. Địa chỉ: 123 Dankook-ro, Chungnam. Xếp hạng: #204." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_181" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Dankook - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Dankook (Dankook University): 3,029,000 - 4,923,000 KRW (56,036,500 - 91,075,500 VND) mỗi học kỳ. Địa chỉ: 123 Dankook-ro, Chungnam. Xếp hạng: #204." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_181" />
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
            "addressRegion": "Chungnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_181">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_181' }} />;
}
