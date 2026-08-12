import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/joobu',
  routeUrl: '/university/joobu',
  Head: () => (
    <>
      <title>ĐH Joongbu (CS Goyang) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Joongbu (CS Goyang) (Joongbu University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #176." />
      <meta name="keywords" content="ĐH Joongbu (CS Goyang), học phí ĐH Joongbu (CS Goyang), Joongbu University, 중부대학교(고양창의캠퍼스), đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/joobu" />
      <meta property="og:title" content="ĐH Joongbu (CS Goyang) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Joongbu (CS Goyang) (Joongbu University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #176." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/joobu" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Joongbu (CS Goyang) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Joongbu (CS Goyang) (Joongbu University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #176." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/joobu" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Joongbu (CS Goyang)",
          "alternateName": "Joongbu University",
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
    return <StaticRouter location="/university/joobu">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'joobu' }} />;
}
