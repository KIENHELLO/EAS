import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/catholickwandong_yangyangcampus',
  routeUrl: '/university/catholickwandong_yangyangcampus',
  Head: () => (
    <>
      <title>Đại học Kwandong Công giáo - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Kwandong Công giáo (Catholic Kwandong University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #558." />
      <meta name="keywords" content="Đại học Kwandong Công giáo, học phí Đại học Kwandong Công giáo, Catholic Kwandong University, 가톨릭관동대학교, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/catholickwandong_yangyangcampus" />
      <meta property="og:title" content="Đại học Kwandong Công giáo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Kwandong Công giáo (Catholic Kwandong University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #558." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/catholickwandong_yangyangcampus" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Kwandong Công giáo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Kwandong Công giáo (Catholic Kwandong University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #558." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/catholickwandong_yangyangcampus" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Kwandong Công giáo",
          "alternateName": "Catholic Kwandong University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gangwon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/catholickwandong_yangyangcampus">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'catholickwandong_yangyangcampus' }} />;
}
