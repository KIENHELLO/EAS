import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/seoulchristian',
  routeUrl: '/university/seoulchristian',
  Head: () => (
    <>
      <title>ĐH Cơ Đốc Seoul - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Cơ Đốc Seoul (Seoul Christian University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #337." />
      <meta name="keywords" content="ĐH Cơ Đốc Seoul, học phí ĐH Cơ Đốc Seoul, Seoul Christian University, 서울기독대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/seoulchristian" />
      <meta property="og:title" content="ĐH Cơ Đốc Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Cơ Đốc Seoul (Seoul Christian University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #337." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/seoulchristian" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Cơ Đốc Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Cơ Đốc Seoul (Seoul Christian University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #337." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/seoulchristian" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Cơ Đốc Seoul",
          "alternateName": "Seoul Christian University",
          "url": "",
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
    return <StaticRouter location="/university/seoulchristian">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'seoulchristian' }} />;
}
