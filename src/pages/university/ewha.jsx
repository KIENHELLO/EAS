import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/ewha',
  routeUrl: '/university/ewha',
  Head: () => (
    <>
      <title>Đại học Nữ sinh Ewha
( 이화여자대학교 ) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Nữ sinh Ewha
( 이화여자대학교 ) (Đại học Nữ sinh Ewha
( 이화여자대학교 ) (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #152." />
      <meta name="keywords" content="Đại học Nữ sinh Ewha
( 이화여자대학교 ), học phí Đại học Nữ sinh Ewha
( 이화여자대학교 ), Đại học Nữ sinh Ewha
( 이화여자대학교 ) (Korea), Đại học Nữ sinh Ewha
( 이화여자대학교 ), đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/ewha" />
      <meta property="og:title" content="Đại học Nữ sinh Ewha
( 이화여자대학교 ) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Nữ sinh Ewha
( 이화여자대학교 ) (Đại học Nữ sinh Ewha
( 이화여자대학교 ) (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #152." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/ewha" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Nữ sinh Ewha
( 이화여자대학교 ) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Nữ sinh Ewha
( 이화여자대학교 ) (Đại học Nữ sinh Ewha
( 이화여자대학교 ) (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #152." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/ewha" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Nữ sinh Ewha
( 이화여자대학교 )",
          "alternateName": "Đại học Nữ sinh Ewha
( 이화여자대학교 ) (Korea)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Seoul"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/ewha">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'ewha' }} />;
}
