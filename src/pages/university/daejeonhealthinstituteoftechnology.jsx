import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/daejeonhealthinstituteoftechnology',
  routeUrl: '/university/daejeonhealthinstituteoftechnology',
  Head: () => (
    <>
      <title>CĐ Y tế Daejeon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Y tế Daejeon (Daejeon Health Institute of Technology): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #495." />
      <meta name="keywords" content="CĐ Y tế Daejeon, học phí CĐ Y tế Daejeon, Daejeon Health Institute of Technology, 대전보건대학교, đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/daejeonhealthinstituteoftechnology" />
      <meta property="og:title" content="CĐ Y tế Daejeon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Y tế Daejeon (Daejeon Health Institute of Technology): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #495." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/daejeonhealthinstituteoftechnology" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Y tế Daejeon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Y tế Daejeon (Daejeon Health Institute of Technology): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #495." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/daejeonhealthinstituteoftechnology" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Y tế Daejeon",
          "alternateName": "Daejeon Health Institute of Technology",
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
    return <StaticRouter location="/university/daejeonhealthinstituteoftechnology">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'daejeonhealthinstituteoftechnology' }} />;
}
