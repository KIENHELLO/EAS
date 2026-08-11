import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/gyeongguk_459',
  routeUrl: '/university/gyeongguk_459',
  Head: () => (
    <>
      <title>Đại học Quốc gia Gyeongguk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Gyeongguk (Đại học Quốc gia Gyeongguk (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 파리바께뜨 국립경국대학교점, 1375, 경동로, 이천리, 안동시, 경상북도, 36728, 대한민국. Xếp hạng: #163." />
      <meta name="keywords" content="Đại học Quốc gia Gyeongguk, học phí Đại học Quốc gia Gyeongguk, Đại học Quốc gia Gyeongguk (Imported), Đại học Quốc gia Gyeongguk, đại học Gyeongsangbuk-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/gyeongguk_459" />
      <meta property="og:title" content="Đại học Quốc gia Gyeongguk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Gyeongguk (Đại học Quốc gia Gyeongguk (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 파리바께뜨 국립경국대학교점, 1375, 경동로, 이천리, 안동시, 경상북도, 36728, 대한민국. Xếp hạng: #163." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/gyeongguk_459" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Gyeongguk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Gyeongguk (Đại học Quốc gia Gyeongguk (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 파리바께뜨 국립경국대학교점, 1375, 경동로, 이천리, 안동시, 경상북도, 36728, 대한민국. Xếp hạng: #163." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/gyeongguk_459" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Gyeongguk",
          "alternateName": "Đại học Quốc gia Gyeongguk (Imported)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongsangbuk-do"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/gyeongguk_459">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'gyeongguk_459' }} />;
}
