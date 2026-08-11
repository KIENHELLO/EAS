import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/chonbuk_769',
  routeUrl: '/university/chonbuk_769',
  Head: () => (
    <>
      <title>Đại học Quốc gia Chonbuk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Chonbuk (Đại học Quốc gia Chonbuk (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 전북대학교 전주캠퍼스, 567, 백제대로, 금암동, 덕진구, 전주시, 전북특별자치도, 54896, 대한민국. Xếp hạng: #168." />
      <meta name="keywords" content="Đại học Quốc gia Chonbuk, học phí Đại học Quốc gia Chonbuk, Đại học Quốc gia Chonbuk (Imported), Đại học Quốc gia Chonbuk, đại học Jeollabuk-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/chonbuk_769" />
      <meta property="og:title" content="Đại học Quốc gia Chonbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Chonbuk (Đại học Quốc gia Chonbuk (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 전북대학교 전주캠퍼스, 567, 백제대로, 금암동, 덕진구, 전주시, 전북특별자치도, 54896, 대한민국. Xếp hạng: #168." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/chonbuk_769" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Chonbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Chonbuk (Đại học Quốc gia Chonbuk (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 전북대학교 전주캠퍼스, 567, 백제대로, 금암동, 덕진구, 전주시, 전북특별자치도, 54896, 대한민국. Xếp hạng: #168." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/chonbuk_769" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Chonbuk",
          "alternateName": "Đại học Quốc gia Chonbuk (Imported)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeollabuk-do"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/chonbuk_769">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'chonbuk_769' }} />;
}
