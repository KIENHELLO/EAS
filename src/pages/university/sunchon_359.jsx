import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/sunchon_359',
  routeUrl: '/university/sunchon_359',
  Head: () => (
    <>
      <title>Đại học Quốc gia Sunchon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Sunchon (Đại học Quốc gia Sunchon (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 학생식당, 255, 중앙로, 매곡동, 옥천동, 순천시, 전남광주통합특별시, 57922, 대한민국. Xếp hạng: #164." />
      <meta name="keywords" content="Đại học Quốc gia Sunchon, học phí Đại học Quốc gia Sunchon, Đại học Quốc gia Sunchon (Imported), Đại học Quốc gia Sunchon, đại học Jeollanam-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/sunchon_359" />
      <meta property="og:title" content="Đại học Quốc gia Sunchon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Sunchon (Đại học Quốc gia Sunchon (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 학생식당, 255, 중앙로, 매곡동, 옥천동, 순천시, 전남광주통합특별시, 57922, 대한민국. Xếp hạng: #164." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/sunchon_359" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Sunchon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Sunchon (Đại học Quốc gia Sunchon (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 학생식당, 255, 중앙로, 매곡동, 옥천동, 순천시, 전남광주통합특별시, 57922, 대한민국. Xếp hạng: #164." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/sunchon_359" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Sunchon",
          "alternateName": "Đại học Quốc gia Sunchon (Imported)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeollanam-do"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/sunchon_359">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'sunchon_359' }} />;
}
