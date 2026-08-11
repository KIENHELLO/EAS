import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/dongwon_245',
  routeUrl: '/university/dongwon_245',
  Head: () => (
    <>
      <title>Đại học Dongwon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Dongwon (Đại học Dongwon (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 동원과학기술대학교, 명곡로, 중앙동, 양산시, 경상남도, 50577, 대한민국. Xếp hạng: #170." />
      <meta name="keywords" content="Đại học Dongwon, học phí Đại học Dongwon, Đại học Dongwon (Imported), Đại học Dongwon, đại học Gyeonggi-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/dongwon_245" />
      <meta property="og:title" content="Đại học Dongwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Dongwon (Đại học Dongwon (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 동원과학기술대학교, 명곡로, 중앙동, 양산시, 경상남도, 50577, 대한민국. Xếp hạng: #170." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/dongwon_245" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Dongwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Dongwon (Đại học Dongwon (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 동원과학기술대학교, 명곡로, 중앙동, 양산시, 경상남도, 50577, 대한민국. Xếp hạng: #170." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/dongwon_245" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Dongwon",
          "alternateName": "Đại học Dongwon (Imported)",
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
    return <StaticRouter location="/university/dongwon_245">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'dongwon_245' }} />;
}
