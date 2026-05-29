import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_171',
  routeUrl: '/university/mock_uni_171',
  Head: () => (
    <>
      <title>Đại học Dongseo - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Dongseo (Dongseo University): 3,370,000 - 4,411,000 KRW (62,345,000 - 81,603,500 VND) mỗi học kỳ. Địa chỉ: 123 Dongseo-ro, Busan. Xếp hạng: #194." />
      <meta name="keywords" content="Đại học Dongseo, học phí Đại học Dongseo, Dongseo University, Dongseo대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_171" />
      <meta property="og:title" content="Đại học Dongseo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Dongseo (Dongseo University): 3,370,000 - 4,411,000 KRW (62,345,000 - 81,603,500 VND) mỗi học kỳ. Địa chỉ: 123 Dongseo-ro, Busan. Xếp hạng: #194." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_171" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Dongseo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Dongseo (Dongseo University): 3,370,000 - 4,411,000 KRW (62,345,000 - 81,603,500 VND) mỗi học kỳ. Địa chỉ: 123 Dongseo-ro, Busan. Xếp hạng: #194." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_171" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Dongseo",
          "alternateName": "Dongseo University",
          "url": "https://www.dongseo.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Busan"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_171">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_171' }} />;
}
