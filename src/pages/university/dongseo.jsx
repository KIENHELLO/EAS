import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/dongseo',
  routeUrl: '/university/dongseo',
  Head: () => (
    <>
      <title>Đại học Dongseo (Busan) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Dongseo (Busan) (Dongseo University): 3,600,000 - 4,700,000 KRW (66,600,000 - 86,950,000 VND) mỗi học kỳ. Địa chỉ: 47 Jurye-ro, Sasang-gu, Busan. Xếp hạng: #38." />
      <meta name="keywords" content="Đại học Dongseo (Busan), học phí Đại học Dongseo (Busan), Dongseo University, 동서대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/dongseo" />
      <meta property="og:title" content="Đại học Dongseo (Busan) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Dongseo (Busan) (Dongseo University): 3,600,000 - 4,700,000 KRW (66,600,000 - 86,950,000 VND) mỗi học kỳ. Địa chỉ: 47 Jurye-ro, Sasang-gu, Busan. Xếp hạng: #38." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/dongseo" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Dongseo (Busan) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Dongseo (Busan) (Dongseo University): 3,600,000 - 4,700,000 KRW (66,600,000 - 86,950,000 VND) mỗi học kỳ. Địa chỉ: 47 Jurye-ro, Sasang-gu, Busan. Xếp hạng: #38." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/dongseo" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Dongseo (Busan)",
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
    return <StaticRouter location="/university/dongseo">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'dongseo' }} />;
}
