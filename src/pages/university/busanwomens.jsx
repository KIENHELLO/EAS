import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/busanwomens',
  routeUrl: '/university/busanwomens',
  Head: () => (
    <>
      <title>Cao đẳng Nữ Busan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Nữ Busan (Busan Women's College): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #581." />
      <meta name="keywords" content="Cao đẳng Nữ Busan, học phí Cao đẳng Nữ Busan, Busan Women's College, 부산여자대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/busanwomens" />
      <meta property="og:title" content="Cao đẳng Nữ Busan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Nữ Busan (Busan Women's College): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #581." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/busanwomens" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Nữ Busan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Nữ Busan (Busan Women's College): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #581." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/busanwomens" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Nữ Busan",
          "alternateName": "Busan Women's College",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Busan"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/busanwomens">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'busanwomens' }} />;
}
