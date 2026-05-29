import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/uos',
  routeUrl: '/university/uos',
  Head: () => (
    <>
      <title>Đại học Seoul (UOS) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Seoul (UOS) (University of Seoul): 1,022,000 - 1,610,000 KRW (18,907,000 - 29,785,000 VND) mỗi học kỳ. Địa chỉ: 163 Seoulsiripdae-ro, Dongdaemun-gu, Seoul. Xếp hạng: #28." />
      <meta name="keywords" content="Đại học Seoul (UOS), học phí Đại học Seoul (UOS), University of Seoul, 서울시립대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/uos" />
      <meta property="og:title" content="Đại học Seoul (UOS) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Seoul (UOS) (University of Seoul): 1,022,000 - 1,610,000 KRW (18,907,000 - 29,785,000 VND) mỗi học kỳ. Địa chỉ: 163 Seoulsiripdae-ro, Dongdaemun-gu, Seoul. Xếp hạng: #28." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/uos" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Seoul (UOS) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Seoul (UOS) (University of Seoul): 1,022,000 - 1,610,000 KRW (18,907,000 - 29,785,000 VND) mỗi học kỳ. Địa chỉ: 163 Seoulsiripdae-ro, Dongdaemun-gu, Seoul. Xếp hạng: #28." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/uos" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Seoul (UOS)",
          "alternateName": "University of Seoul",
          "url": "https://www.uos.ac.kr",
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
    return <StaticRouter location="/university/uos">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'uos' }} />;
}
