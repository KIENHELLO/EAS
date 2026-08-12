import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/yeungnam',
  routeUrl: '/university/yeungnam',
  Head: () => (
    <>
      <title>Đại học Yeungnam - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Yeungnam (Yeungnam University): 3,200,000 - 5,850,000 KRW (59,200,000 - 108,225,000 VND) mỗi học kỳ. Địa chỉ: Gyeongbuk. Xếp hạng: #30." />
      <meta name="keywords" content="Đại học Yeungnam, học phí Đại học Yeungnam, Yeungnam University, 영남대학교, đại học Gyeongbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/yeungnam" />
      <meta property="og:title" content="Đại học Yeungnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Yeungnam (Yeungnam University): 3,200,000 - 5,850,000 KRW (59,200,000 - 108,225,000 VND) mỗi học kỳ. Địa chỉ: Gyeongbuk. Xếp hạng: #30." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/yeungnam" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Yeungnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Yeungnam (Yeungnam University): 3,200,000 - 5,850,000 KRW (59,200,000 - 108,225,000 VND) mỗi học kỳ. Địa chỉ: Gyeongbuk. Xếp hạng: #30." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/yeungnam" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Yeungnam",
          "alternateName": "Yeungnam University",
          "url": "",
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
    return <StaticRouter location="/university/yeungnam">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'yeungnam' }} />;
}
