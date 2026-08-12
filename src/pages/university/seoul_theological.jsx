import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/seoul_theological',
  routeUrl: '/university/seoul_theological',
  Head: () => (
    <>
      <title>ĐH Thần học Seoul - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Thần học Seoul (Seoul Theological University): 2,900,000 - 3,800,000 KRW (53,650,000 - 70,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #65." />
      <meta name="keywords" content="ĐH Thần học Seoul, học phí ĐH Thần học Seoul, Seoul Theological University, 서울신학대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/seoul_theological" />
      <meta property="og:title" content="ĐH Thần học Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Thần học Seoul (Seoul Theological University): 2,900,000 - 3,800,000 KRW (53,650,000 - 70,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #65." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/seoul_theological" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Thần học Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Thần học Seoul (Seoul Theological University): 2,900,000 - 3,800,000 KRW (53,650,000 - 70,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #65." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/seoul_theological" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Thần học Seoul",
          "alternateName": "Seoul Theological University",
          "url": "",
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
    return <StaticRouter location="/university/seoul_theological">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'seoul_theological' }} />;
}
