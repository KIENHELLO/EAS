import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreasejongcampus',
  routeUrl: '/university/koreasejongcampus',
  Head: () => (
    <>
      <title>ĐH Korea (CS Sejong) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Korea (CS Sejong) (Korea University Sejong Campus): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Sejong. Xếp hạng: #500." />
      <meta name="keywords" content="ĐH Korea (CS Sejong), học phí ĐH Korea (CS Sejong), Korea University Sejong Campus, 고려대학교 세종캠퍼스, đại học Sejong" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreasejongcampus" />
      <meta property="og:title" content="ĐH Korea (CS Sejong) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Korea (CS Sejong) (Korea University Sejong Campus): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Sejong. Xếp hạng: #500." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreasejongcampus" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Korea (CS Sejong) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Korea (CS Sejong) (Korea University Sejong Campus): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Sejong. Xếp hạng: #500." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreasejongcampus" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Korea (CS Sejong)",
          "alternateName": "Korea University Sejong Campus",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Sejong"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/koreasejongcampus">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreasejongcampus' }} />;
}
