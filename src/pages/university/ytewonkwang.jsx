import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/ytewonkwang',
  routeUrl: '/university/ytewonkwang',
  Head: () => (
    <>
      <title>Đại học Y tế Wonkwang - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Y tế Wonkwang (Đại học Y tế Wonkwang (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 원광대학교, 460, 익산대로, 신동, 익산시, 전북특별자치도, 54538, 대한민국. Xếp hạng: #209." />
      <meta name="keywords" content="Đại học Y tế Wonkwang, học phí Đại học Y tế Wonkwang, Đại học Y tế Wonkwang (Korea), Đại học Y tế Wonkwang, đại học Jeollabuk-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/ytewonkwang" />
      <meta property="og:title" content="Đại học Y tế Wonkwang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Y tế Wonkwang (Đại học Y tế Wonkwang (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 원광대학교, 460, 익산대로, 신동, 익산시, 전북특별자치도, 54538, 대한민국. Xếp hạng: #209." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/ytewonkwang" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Y tế Wonkwang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Y tế Wonkwang (Đại học Y tế Wonkwang (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 원광대학교, 460, 익산대로, 신동, 익산시, 전북특별자치도, 54538, 대한민국. Xếp hạng: #209." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/ytewonkwang" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Y tế Wonkwang",
          "alternateName": "Đại học Y tế Wonkwang (Korea)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeollabuk-do"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/ytewonkwang">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'ytewonkwang' }} />;
}
