import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/induk_0',
  routeUrl: '/university/induk_0',
  Head: () => (
    <>
      <title>Đại học Induk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Induk (Đại học Induk (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 인관, 12, 초안산로, 월계동, 월계2동, 노원구, 서울특별시, 01878, 대한민국. Xếp hạng: #172." />
      <meta name="keywords" content="Đại học Induk, học phí Đại học Induk, Đại học Induk (Imported), Đại học Induk, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/induk_0" />
      <meta property="og:title" content="Đại học Induk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Induk (Đại học Induk (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 인관, 12, 초안산로, 월계동, 월계2동, 노원구, 서울특별시, 01878, 대한민국. Xếp hạng: #172." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/induk_0" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Induk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Induk (Đại học Induk (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 인관, 12, 초안산로, 월계동, 월계2동, 노원구, 서울특별시, 01878, 대한민국. Xếp hạng: #172." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/induk_0" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Induk",
          "alternateName": "Đại học Induk (Imported)",
          "url": "https://www.studyinkorea.go.kr",
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
    return <StaticRouter location="/university/induk_0">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'induk_0' }} />;
}
