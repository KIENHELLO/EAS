import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/osan',
  routeUrl: '/university/osan',
  Head: () => (
    <>
      <title>Đại học Osan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Osan (Đại học Osan (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 오산대학교, 45, 청학로, 청학동, 오산시, 경기도, 18119, 대한민국. Xếp hạng: #205." />
      <meta name="keywords" content="Đại học Osan, học phí Đại học Osan, Đại học Osan (Korea), Đại học Osan, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/osan" />
      <meta property="og:title" content="Đại học Osan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Osan (Đại học Osan (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 오산대학교, 45, 청학로, 청학동, 오산시, 경기도, 18119, 대한민국. Xếp hạng: #205." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/osan" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Osan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Osan (Đại học Osan (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 오산대학교, 45, 청학로, 청학동, 오산시, 경기도, 18119, 대한민국. Xếp hạng: #205." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/osan" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Osan",
          "alternateName": "Đại học Osan (Korea)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeonggi"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/osan">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'osan' }} />;
}
