import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kwangwoon_463',
  routeUrl: '/university/kwangwoon_463',
  Head: () => (
    <>
      <title>Đại học Kwangwoon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Kwangwoon (Đại học Kwangwoon (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 하나은행, 광운로6길, 월계1동, 노원구, 서울특별시, 02764, 대한민국. Xếp hạng: #151." />
      <meta name="keywords" content="Đại học Kwangwoon, học phí Đại học Kwangwoon, Đại học Kwangwoon (Imported), Đại học Kwangwoon, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kwangwoon_463" />
      <meta property="og:title" content="Đại học Kwangwoon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Kwangwoon (Đại học Kwangwoon (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 하나은행, 광운로6길, 월계1동, 노원구, 서울특별시, 02764, 대한민국. Xếp hạng: #151." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kwangwoon_463" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Kwangwoon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Kwangwoon (Đại học Kwangwoon (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 하나은행, 광운로6길, 월계1동, 노원구, 서울특별시, 02764, 대한민국. Xếp hạng: #151." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kwangwoon_463" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Kwangwoon",
          "alternateName": "Đại học Kwangwoon (Imported)",
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
    return <StaticRouter location="/university/kwangwoon_463">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kwangwoon_463' }} />;
}
