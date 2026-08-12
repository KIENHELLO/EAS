import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/konyang',
  routeUrl: '/university/konyang',
  Head: () => (
    <>
      <title>ĐH Konyang (CS Y khoa) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Konyang (CS Y khoa) (Konyang University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #165." />
      <meta name="keywords" content="ĐH Konyang (CS Y khoa), học phí ĐH Konyang (CS Y khoa), Konyang University, 건양대학교(메디컬캠퍼스), đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/konyang" />
      <meta property="og:title" content="ĐH Konyang (CS Y khoa) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Konyang (CS Y khoa) (Konyang University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #165." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/konyang" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Konyang (CS Y khoa) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Konyang (CS Y khoa) (Konyang University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #165." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/konyang" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Konyang (CS Y khoa)",
          "alternateName": "Konyang University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daejeon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/konyang">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'konyang' }} />;
}
