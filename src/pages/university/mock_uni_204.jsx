import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_204',
  routeUrl: '/university/mock_uni_204',
  Head: () => (
    <>
      <title>Đại học Dongshin - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Dongshin (Dongshin University): 2,204,000 - 4,574,000 KRW (40,774,000 - 84,619,000 VND) mỗi học kỳ. Địa chỉ: 123 Dongshin-ro, Seoul. Xếp hạng: #227." />
      <meta name="keywords" content="Đại học Dongshin, học phí Đại học Dongshin, Dongshin University, Dongshin대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_204" />
      <meta property="og:title" content="Đại học Dongshin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Dongshin (Dongshin University): 2,204,000 - 4,574,000 KRW (40,774,000 - 84,619,000 VND) mỗi học kỳ. Địa chỉ: 123 Dongshin-ro, Seoul. Xếp hạng: #227." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_204" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Dongshin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Dongshin (Dongshin University): 2,204,000 - 4,574,000 KRW (40,774,000 - 84,619,000 VND) mỗi học kỳ. Địa chỉ: 123 Dongshin-ro, Seoul. Xếp hạng: #227." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_204" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Dongshin",
          "alternateName": "Dongshin University",
          "url": "https://www.dongshin.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_204">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_204' }} />;
}
