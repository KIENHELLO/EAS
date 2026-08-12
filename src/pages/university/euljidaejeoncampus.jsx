import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/euljidaejeoncampus',
  routeUrl: '/university/euljidaejeoncampus',
  Head: () => (
    <>
      <title>ĐH Eulji (CS Daejeon, chỉ còn Y khoa) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Eulji (CS Daejeon, chỉ còn Y khoa) (Eulji University Daejeon Campus): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #491." />
      <meta name="keywords" content="ĐH Eulji (CS Daejeon, chỉ còn Y khoa), học phí ĐH Eulji (CS Daejeon, chỉ còn Y khoa), Eulji University Daejeon Campus, 을지대학교 대전캠퍼스, đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/euljidaejeoncampus" />
      <meta property="og:title" content="ĐH Eulji (CS Daejeon, chỉ còn Y khoa) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Eulji (CS Daejeon, chỉ còn Y khoa) (Eulji University Daejeon Campus): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #491." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/euljidaejeoncampus" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Eulji (CS Daejeon, chỉ còn Y khoa) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Eulji (CS Daejeon, chỉ còn Y khoa) (Eulji University Daejeon Campus): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #491." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/euljidaejeoncampus" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Eulji (CS Daejeon, chỉ còn Y khoa)",
          "alternateName": "Eulji University Daejeon Campus",
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
    return <StaticRouter location="/university/euljidaejeoncampus">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'euljidaejeoncampus' }} />;
}
