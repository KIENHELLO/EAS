import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/caodangcatholic',
  routeUrl: '/university/caodangcatholic',
  Head: () => (
    <>
      <title>Cao đẳng Catholic Sangji - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Catholic Sangji (Cao đẳng Catholic Sangji (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 가톨릭상지대학교, 동부길, 동문동, 안동시, 경상북도, 36704, 대한민국. Xếp hạng: #201." />
      <meta name="keywords" content="Cao đẳng Catholic Sangji, học phí Cao đẳng Catholic Sangji, Cao đẳng Catholic Sangji (Korea), Cao đẳng Catholic Sangji, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/caodangcatholic" />
      <meta property="og:title" content="Cao đẳng Catholic Sangji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Catholic Sangji (Cao đẳng Catholic Sangji (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 가톨릭상지대학교, 동부길, 동문동, 안동시, 경상북도, 36704, 대한민국. Xếp hạng: #201." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/caodangcatholic" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Catholic Sangji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Catholic Sangji (Cao đẳng Catholic Sangji (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 가톨릭상지대학교, 동부길, 동문동, 안동시, 경상북도, 36704, 대한민국. Xếp hạng: #201." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/caodangcatholic" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Catholic Sangji",
          "alternateName": "Cao đẳng Catholic Sangji (Korea)",
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
    return <StaticRouter location="/university/caodangcatholic">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'caodangcatholic' }} />;
}
