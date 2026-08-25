import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/eulji',
  routeUrl: '/university/eulji',
  Head: () => (
    <>
      <title>ĐH Eulji (CS Uijeongbu/Seongnam) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Eulji (CS Uijeongbu/Seongnam) (Eulji University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #399." />
      <meta name="keywords" content="ĐH Eulji (CS Uijeongbu/Seongnam), học phí ĐH Eulji (CS Uijeongbu/Seongnam), Eulji University, 을지대학교(의정부·성남캠퍼스), đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/eulji" />
      <meta property="og:title" content="ĐH Eulji (CS Uijeongbu/Seongnam) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Eulji (CS Uijeongbu/Seongnam) (Eulji University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #399." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/eulji" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Eulji (CS Uijeongbu/Seongnam) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Eulji (CS Uijeongbu/Seongnam) (Eulji University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #399." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/eulji" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Eulji (CS Uijeongbu/Seongnam)",
          "alternateName": "Eulji University",
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
    return <StaticRouter location="/university/eulji">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'eulji' }} />;
}
