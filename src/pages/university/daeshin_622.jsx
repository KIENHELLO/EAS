import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/daeshin_622',
  routeUrl: '/university/daeshin_622',
  Head: () => (
    <>
      <title>Đại học Daeshin - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Daeshin (Đại học Daeshin (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 대신대학교, 삼성현로, 점촌동, 남부동, 경산시, 경상북도, 38606, 대한민국. Xếp hạng: #165." />
      <meta name="keywords" content="Đại học Daeshin, học phí Đại học Daeshin, Đại học Daeshin (Imported), Đại học Daeshin, đại học Gyeongsangbuk-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/daeshin_622" />
      <meta property="og:title" content="Đại học Daeshin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Daeshin (Đại học Daeshin (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 대신대학교, 삼성현로, 점촌동, 남부동, 경산시, 경상북도, 38606, 대한민국. Xếp hạng: #165." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/daeshin_622" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Daeshin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Daeshin (Đại học Daeshin (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 대신대학교, 삼성현로, 점촌동, 남부동, 경산시, 경상북도, 38606, 대한민국. Xếp hạng: #165." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/daeshin_622" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Daeshin",
          "alternateName": "Đại học Daeshin (Imported)",
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
    return <StaticRouter location="/university/daeshin_622">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'daeshin_622' }} />;
}
