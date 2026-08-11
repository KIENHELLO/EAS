import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kyongbuk_science',
  routeUrl: '/university/kyongbuk_science',
  Head: () => (
    <>
      <title>Đại học Khoa học Kyongbuk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Khoa học Kyongbuk (Kyongbuk Science College): 1,900,000 - 2,105,000 KRW (35,150,000 - 38,942,500 VND) mỗi học kỳ. Địa chỉ: 경북과학대학교, 봉화산 등산로, 용각리, 월항면, 성주군, 경상북도, 40038, 대한민국. Xếp hạng: #90." />
      <meta name="keywords" content="Đại học Khoa học Kyongbuk, học phí Đại học Khoa học Kyongbuk, Kyongbuk Science College, 경북과학대학교, đại học Gyeongbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kyongbuk_science" />
      <meta property="og:title" content="Đại học Khoa học Kyongbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Khoa học Kyongbuk (Kyongbuk Science College): 1,900,000 - 2,105,000 KRW (35,150,000 - 38,942,500 VND) mỗi học kỳ. Địa chỉ: 경북과학대학교, 봉화산 등산로, 용각리, 월항면, 성주군, 경상북도, 40038, 대한민국. Xếp hạng: #90." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kyongbuk_science" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Khoa học Kyongbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Khoa học Kyongbuk (Kyongbuk Science College): 1,900,000 - 2,105,000 KRW (35,150,000 - 38,942,500 VND) mỗi học kỳ. Địa chỉ: 경북과학대학교, 봉화산 등산로, 용각리, 월항면, 성주군, 경상북도, 40038, 대한민국. Xếp hạng: #90." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kyongbuk_science" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Khoa học Kyongbuk",
          "alternateName": "Kyongbuk Science College",
          "url": "https://www.kbsc.ac.kr",
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
    return <StaticRouter location="/university/kyongbuk_science">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kyongbuk_science' }} />;
}
