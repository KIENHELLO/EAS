import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/woosong_391',
  routeUrl: '/university/woosong_391',
  Head: () => (
    <>
      <title>Đại học Woosong - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Woosong (Đại học Woosong (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 우송대학교 동캠퍼스, 백룡로, 용운동, 동구, 대전광역시, 34526, 대한민국. Xếp hạng: #158." />
      <meta name="keywords" content="Đại học Woosong, học phí Đại học Woosong, Đại học Woosong (Imported), Đại học Woosong, đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/woosong_391" />
      <meta property="og:title" content="Đại học Woosong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Woosong (Đại học Woosong (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 우송대학교 동캠퍼스, 백룡로, 용운동, 동구, 대전광역시, 34526, 대한민국. Xếp hạng: #158." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/woosong_391" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Woosong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Woosong (Đại học Woosong (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 우송대학교 동캠퍼스, 백룡로, 용운동, 동구, 대전광역시, 34526, 대한민국. Xếp hạng: #158." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/woosong_391" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Woosong",
          "alternateName": "Đại học Woosong (Imported)",
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
    return <StaticRouter location="/university/woosong_391">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'woosong_391' }} />;
}
