import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/top3_school_13',
  routeUrl: '/university/top3_school_13',
  Head: () => (
    <>
      <title>Cao đẳng kỹ thuật Doowon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng kỹ thuật Doowon (kỹ thuật Doowon (TOP 3%) College (Korea)): 2,100,000 - 2,730,000 KRW (38,850,000 - 50,505,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi, Hàn Quốc. Xếp hạng: #163." />
      <meta name="keywords" content="Cao đẳng kỹ thuật Doowon, học phí Cao đẳng kỹ thuật Doowon, kỹ thuật Doowon (TOP 3%) College (Korea), Đại học kỹ thuật Doowon, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/top3_school_13" />
      <meta property="og:title" content="Cao đẳng kỹ thuật Doowon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng kỹ thuật Doowon (kỹ thuật Doowon (TOP 3%) College (Korea)): 2,100,000 - 2,730,000 KRW (38,850,000 - 50,505,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi, Hàn Quốc. Xếp hạng: #163." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/top3_school_13" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng kỹ thuật Doowon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng kỹ thuật Doowon (kỹ thuật Doowon (TOP 3%) College (Korea)): 2,100,000 - 2,730,000 KRW (38,850,000 - 50,505,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi, Hàn Quốc. Xếp hạng: #163." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/top3_school_13" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng kỹ thuật Doowon",
          "alternateName": "kỹ thuật Doowon (TOP 3%) College (Korea)",
          "url": "https://www.studyinkorea.go.kr",
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
    return <StaticRouter location="/university/top3_school_13">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'top3_school_13' }} />;
}
