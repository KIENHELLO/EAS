import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/top3_school_18',
  routeUrl: '/university/top3_school_18',
  Head: () => (
    <>
      <title>Cao đẳng Gangneung yeongdong - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Gangneung yeongdong (Gangneung yeongdong (TOP 3%) College (Korea)): 1,900,000 - 2,470,000 KRW (35,150,000 - 45,695,000 VND) mỗi học kỳ. Địa chỉ: Gangwon, Hàn Quốc. Xếp hạng: #168." />
      <meta name="keywords" content="Cao đẳng Gangneung yeongdong, học phí Cao đẳng Gangneung yeongdong, Gangneung yeongdong (TOP 3%) College (Korea), Đại học Gangneung yeongdong, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/top3_school_18" />
      <meta property="og:title" content="Cao đẳng Gangneung yeongdong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Gangneung yeongdong (Gangneung yeongdong (TOP 3%) College (Korea)): 1,900,000 - 2,470,000 KRW (35,150,000 - 45,695,000 VND) mỗi học kỳ. Địa chỉ: Gangwon, Hàn Quốc. Xếp hạng: #168." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/top3_school_18" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Gangneung yeongdong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Gangneung yeongdong (Gangneung yeongdong (TOP 3%) College (Korea)): 1,900,000 - 2,470,000 KRW (35,150,000 - 45,695,000 VND) mỗi học kỳ. Địa chỉ: Gangwon, Hàn Quốc. Xếp hạng: #168." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/top3_school_18" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Gangneung yeongdong",
          "alternateName": "Gangneung yeongdong (TOP 3%) College (Korea)",
          "url": "https://www.studyinkorea.go.kr",
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
    return <StaticRouter location="/university/top3_school_18">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'top3_school_18' }} />;
}
