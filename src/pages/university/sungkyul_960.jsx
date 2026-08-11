import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/sungkyul_960',
  routeUrl: '/university/sungkyul_960',
  Head: () => (
    <>
      <title>Đại học Sungkyul - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sungkyul (Đại học Sungkyul (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 성결대학로, 만안구, 안양시, 경기도, 14091, 대한민국. Xếp hạng: #154." />
      <meta name="keywords" content="Đại học Sungkyul, học phí Đại học Sungkyul, Đại học Sungkyul (Imported), Đại học Sungkyul, đại học Gyeonggi-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/sungkyul_960" />
      <meta property="og:title" content="Đại học Sungkyul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sungkyul (Đại học Sungkyul (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 성결대학로, 만안구, 안양시, 경기도, 14091, 대한민국. Xếp hạng: #154." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/sungkyul_960" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sungkyul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sungkyul (Đại học Sungkyul (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 성결대학로, 만안구, 안양시, 경기도, 14091, 대한민국. Xếp hạng: #154." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/sungkyul_960" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sungkyul",
          "alternateName": "Đại học Sungkyul (Imported)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeonggi-do"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/sungkyul_960">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'sungkyul_960' }} />;
}
