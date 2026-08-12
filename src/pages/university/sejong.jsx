import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/sejong',
  routeUrl: '/university/sejong',
  Head: () => (
    <>
      <title>ĐH Sejong - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Sejong (Sejong University): 3,510,000 - 4,875,000 KRW (64,935,000 - 90,187,500 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #16." />
      <meta name="keywords" content="ĐH Sejong, học phí ĐH Sejong, Sejong University, 세종대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/sejong" />
      <meta property="og:title" content="ĐH Sejong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Sejong (Sejong University): 3,510,000 - 4,875,000 KRW (64,935,000 - 90,187,500 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #16." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/sejong" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Sejong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Sejong (Sejong University): 3,510,000 - 4,875,000 KRW (64,935,000 - 90,187,500 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #16." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/sejong" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Sejong",
          "alternateName": "Sejong University",
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
    return <StaticRouter location="/university/sejong">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'sejong' }} />;
}
