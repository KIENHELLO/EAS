import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/widuk_62',
  routeUrl: '/university/widuk_62',
  Head: () => (
    <>
      <title>Đại học Widuk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Widuk (Đại học Widuk (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 위덕대학교, 261, 동해대로, 강동면, 경주시, 경상북도, 38004, 대한민국. Xếp hạng: #167." />
      <meta name="keywords" content="Đại học Widuk, học phí Đại học Widuk, Đại học Widuk (Imported), Đại học Widuk, đại học Gyeongsangbuk-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/widuk_62" />
      <meta property="og:title" content="Đại học Widuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Widuk (Đại học Widuk (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 위덕대학교, 261, 동해대로, 강동면, 경주시, 경상북도, 38004, 대한민국. Xếp hạng: #167." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/widuk_62" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Widuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Widuk (Đại học Widuk (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 위덕대학교, 261, 동해대로, 강동면, 경주시, 경상북도, 38004, 대한민국. Xếp hạng: #167." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/widuk_62" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Widuk",
          "alternateName": "Đại học Widuk (Imported)",
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
    return <StaticRouter location="/university/widuk_62">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'widuk_62' }} />;
}
