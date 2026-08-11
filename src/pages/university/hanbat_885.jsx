import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/hanbat_885',
  routeUrl: '/university/hanbat_885',
  Head: () => (
    <>
      <title>Đại học Quốc gia Hanbat - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Hanbat (Đại học Quốc gia Hanbat (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 국립한밭대학교, 125, 동서대로, 덕명동, 학하동, 유성구, 대전광역시, 34158, 대한민국. Xếp hạng: #156." />
      <meta name="keywords" content="Đại học Quốc gia Hanbat, học phí Đại học Quốc gia Hanbat, Đại học Quốc gia Hanbat (Imported), Đại học Quốc gia Hanbat, đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/hanbat_885" />
      <meta property="og:title" content="Đại học Quốc gia Hanbat - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Hanbat (Đại học Quốc gia Hanbat (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 국립한밭대학교, 125, 동서대로, 덕명동, 학하동, 유성구, 대전광역시, 34158, 대한민국. Xếp hạng: #156." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/hanbat_885" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Hanbat - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Hanbat (Đại học Quốc gia Hanbat (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 국립한밭대학교, 125, 동서대로, 덕명동, 학하동, 유성구, 대전광역시, 34158, 대한민국. Xếp hạng: #156." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/hanbat_885" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Hanbat",
          "alternateName": "Đại học Quốc gia Hanbat (Imported)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daejeon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/hanbat_885">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'hanbat_885' }} />;
}
