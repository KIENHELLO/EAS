import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/top3_school_8',
  routeUrl: '/university/top3_school_8',
  Head: () => (
    <>
      <title>ĐH Kyonggi (CS Seoul) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Kyonggi (CS Seoul) (Kyonggi University): 2,800,000 - 3,640,000 KRW (51,800,000 - 67,340,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #158." />
      <meta name="keywords" content="ĐH Kyonggi (CS Seoul), học phí ĐH Kyonggi (CS Seoul), Kyonggi University, 경기대학교(서울캠퍼스), đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/top3_school_8" />
      <meta property="og:title" content="ĐH Kyonggi (CS Seoul) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Kyonggi (CS Seoul) (Kyonggi University): 2,800,000 - 3,640,000 KRW (51,800,000 - 67,340,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #158." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/top3_school_8" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Kyonggi (CS Seoul) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Kyonggi (CS Seoul) (Kyonggi University): 2,800,000 - 3,640,000 KRW (51,800,000 - 67,340,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #158." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/top3_school_8" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Kyonggi (CS Seoul)",
          "alternateName": "Kyonggi University",
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
    return <StaticRouter location="/university/top3_school_8">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'top3_school_8' }} />;
}
