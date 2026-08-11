import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/uni_8',
  routeUrl: '/university/uni_8',
  Head: () => (
    <>
      <title>Đại học Soonchunhyang - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Soonchunhyang (Soonchunhyang University): 3,375,000 - 6,000,000 KRW (62,437,500 - 111,000,000 VND) mỗi học kỳ. Địa chỉ: 주차장, 걷고싶은 길, 읍내리, 아산시, 충청남도, 31537, 대한민국. Xếp hạng: #100." />
      <meta name="keywords" content="Đại học Soonchunhyang, học phí Đại học Soonchunhyang, Soonchunhyang University, 순천향대학교, đại học Chungnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/uni_8" />
      <meta property="og:title" content="Đại học Soonchunhyang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Soonchunhyang (Soonchunhyang University): 3,375,000 - 6,000,000 KRW (62,437,500 - 111,000,000 VND) mỗi học kỳ. Địa chỉ: 주차장, 걷고싶은 길, 읍내리, 아산시, 충청남도, 31537, 대한민국. Xếp hạng: #100." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/uni_8" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Soonchunhyang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Soonchunhyang (Soonchunhyang University): 3,375,000 - 6,000,000 KRW (62,437,500 - 111,000,000 VND) mỗi học kỳ. Địa chỉ: 주차장, 걷고싶은 길, 읍내리, 아산시, 충청남도, 31537, 대한민국. Xếp hạng: #100." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/uni_8" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Soonchunhyang",
          "alternateName": "Soonchunhyang University",
          "url": "http://www.uni_8.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/uni_8">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'uni_8' }} />;
}
