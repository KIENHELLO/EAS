import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/khoahockyongbuk',
  routeUrl: '/university/khoahockyongbuk',
  Head: () => (
    <>
      <title>Đại học Khoa học Kyongbuk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Khoa học Kyongbuk (Đại học Khoa học Kyongbuk (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #233." />
      <meta name="keywords" content="Đại học Khoa học Kyongbuk, học phí Đại học Khoa học Kyongbuk, Đại học Khoa học Kyongbuk (Korea), Đại học Khoa học Kyongbuk, đại học Gyeongbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/khoahockyongbuk" />
      <meta property="og:title" content="Đại học Khoa học Kyongbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Khoa học Kyongbuk (Đại học Khoa học Kyongbuk (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #233." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/khoahockyongbuk" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Khoa học Kyongbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Khoa học Kyongbuk (Đại học Khoa học Kyongbuk (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #233." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/khoahockyongbuk" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Khoa học Kyongbuk",
          "alternateName": "Đại học Khoa học Kyongbuk (Korea)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/khoahockyongbuk">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'khoahockyongbuk' }} />;
}
