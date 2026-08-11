import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/gangneungwonju_721',
  routeUrl: '/university/gangneungwonju_721',
  Head: () => (
    <>
      <title>Đại học Quốc gia Gangneung-Wonju - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Gangneung-Wonju (Đại học Quốc gia Gangneung-Wonju (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 강원대학교 강릉캠퍼스, 7, 죽헌길, 지변동, 경포동, 강릉시, 강원특별자치도, 25457, 대한민국. Xếp hạng: #152." />
      <meta name="keywords" content="Đại học Quốc gia Gangneung-Wonju, học phí Đại học Quốc gia Gangneung-Wonju, Đại học Quốc gia Gangneung-Wonju (Imported), Đại học Quốc gia Gangneung-Wonju, đại học Gangwon-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/gangneungwonju_721" />
      <meta property="og:title" content="Đại học Quốc gia Gangneung-Wonju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Gangneung-Wonju (Đại học Quốc gia Gangneung-Wonju (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 강원대학교 강릉캠퍼스, 7, 죽헌길, 지변동, 경포동, 강릉시, 강원특별자치도, 25457, 대한민국. Xếp hạng: #152." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/gangneungwonju_721" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Gangneung-Wonju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Gangneung-Wonju (Đại học Quốc gia Gangneung-Wonju (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 강원대학교 강릉캠퍼스, 7, 죽헌길, 지변동, 경포동, 강릉시, 강원특별자치도, 25457, 대한민국. Xếp hạng: #152." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/gangneungwonju_721" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Gangneung-Wonju",
          "alternateName": "Đại học Quốc gia Gangneung-Wonju (Imported)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gangwon-do"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/gangneungwonju_721">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'gangneungwonju_721' }} />;
}
