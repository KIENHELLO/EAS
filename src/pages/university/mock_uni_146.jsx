import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_146',
  routeUrl: '/university/mock_uni_146',
  Head: () => (
    <>
      <title>Đại học Duksung - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Duksung (Duksung University): 3,479,000 - 3,910,000 KRW (64,361,500 - 72,335,000 VND) mỗi học kỳ. Địa chỉ: 123 Duksung-ro, Chungbuk. Xếp hạng: #169." />
      <meta name="keywords" content="Đại học Duksung, học phí Đại học Duksung, Duksung University, Duksung대학교, đại học Chungbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_146" />
      <meta property="og:title" content="Đại học Duksung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Duksung (Duksung University): 3,479,000 - 3,910,000 KRW (64,361,500 - 72,335,000 VND) mỗi học kỳ. Địa chỉ: 123 Duksung-ro, Chungbuk. Xếp hạng: #169." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_146" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Duksung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Duksung (Duksung University): 3,479,000 - 3,910,000 KRW (64,361,500 - 72,335,000 VND) mỗi học kỳ. Địa chỉ: 123 Duksung-ro, Chungbuk. Xếp hạng: #169." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_146" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Duksung",
          "alternateName": "Duksung University",
          "url": "https://www.duksung.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_146">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_146' }} />;
}
