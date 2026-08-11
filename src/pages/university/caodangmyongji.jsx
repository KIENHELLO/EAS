import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/caodangmyongji',
  routeUrl: '/university/caodangmyongji',
  Head: () => (
    <>
      <title>Cao đẳng Myongji - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Myongji (Cao đẳng Myongji (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 134, 가좌로, 홍은2동, 서대문구, 서울특별시, 03656, 대한민국. Xếp hạng: #204." />
      <meta name="keywords" content="Cao đẳng Myongji, học phí Cao đẳng Myongji, Cao đẳng Myongji (Korea), Cao đẳng Myongji, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/caodangmyongji" />
      <meta property="og:title" content="Cao đẳng Myongji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Myongji (Cao đẳng Myongji (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 134, 가좌로, 홍은2동, 서대문구, 서울특별시, 03656, 대한민국. Xếp hạng: #204." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/caodangmyongji" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Myongji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Myongji (Cao đẳng Myongji (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 134, 가좌로, 홍은2동, 서대문구, 서울특별시, 03656, 대한민국. Xếp hạng: #204." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/caodangmyongji" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Myongji",
          "alternateName": "Cao đẳng Myongji (Korea)",
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
    return <StaticRouter location="/university/caodangmyongji">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'caodangmyongji' }} />;
}
