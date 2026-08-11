import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/yeongsangtop3_49',
  routeUrl: '/university/yeongsangtop3_49',
  Head: () => (
    <>
      <title>Đại học Yeongsang - top 3 - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Yeongsang - top 3 (Đại học Yeongsang - top 3 (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 반송순환로, 반송동, 반송1동, 해운대구, 부산광역시, 48015, 대한민국. Xếp hạng: #177." />
      <meta name="keywords" content="Đại học Yeongsang - top 3, học phí Đại học Yeongsang - top 3, Đại học Yeongsang - top 3 (Imported), Đại học Yeongsang - top 3, đại học Sejong" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/yeongsangtop3_49" />
      <meta property="og:title" content="Đại học Yeongsang - top 3 - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Yeongsang - top 3 (Đại học Yeongsang - top 3 (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 반송순환로, 반송동, 반송1동, 해운대구, 부산광역시, 48015, 대한민국. Xếp hạng: #177." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/yeongsangtop3_49" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Yeongsang - top 3 - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Yeongsang - top 3 (Đại học Yeongsang - top 3 (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 반송순환로, 반송동, 반송1동, 해운대구, 부산광역시, 48015, 대한민국. Xếp hạng: #177." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/yeongsangtop3_49" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Yeongsang - top 3",
          "alternateName": "Đại học Yeongsang - top 3 (Imported)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Sejong"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/yeongsangtop3_49">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'yeongsangtop3_49' }} />;
}
