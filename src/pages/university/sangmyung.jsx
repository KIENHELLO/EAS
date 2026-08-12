import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/sangmyung',
  routeUrl: '/university/sangmyung',
  Head: () => (
    <>
      <title>ĐH Sangmyung (CS Seoul) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Sangmyung (CS Seoul) (Sangmyung University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #311." />
      <meta name="keywords" content="ĐH Sangmyung (CS Seoul), học phí ĐH Sangmyung (CS Seoul), Sangmyung University, 상명대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/sangmyung" />
      <meta property="og:title" content="ĐH Sangmyung (CS Seoul) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Sangmyung (CS Seoul) (Sangmyung University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #311." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/sangmyung" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Sangmyung (CS Seoul) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Sangmyung (CS Seoul) (Sangmyung University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #311." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/sangmyung" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Sangmyung (CS Seoul)",
          "alternateName": "Sangmyung University",
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
    return <StaticRouter location="/university/sangmyung">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'sangmyung' }} />;
}
