import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/top3_school_4',
  routeUrl: '/university/top3_school_4',
  Head: () => (
    <>
      <title>Cao đẳng Y Dongnam - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Y Dongnam (Y Dongnam (TOP 3%) College (Korea)): 2,300,000 - 2,990,000 KRW (42,550,000 - 55,315,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi, Hàn Quốc. Xếp hạng: #154." />
      <meta name="keywords" content="Cao đẳng Y Dongnam, học phí Cao đẳng Y Dongnam, Y Dongnam (TOP 3%) College (Korea), Đại học Y Dongnam, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/top3_school_4" />
      <meta property="og:title" content="Cao đẳng Y Dongnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Y Dongnam (Y Dongnam (TOP 3%) College (Korea)): 2,300,000 - 2,990,000 KRW (42,550,000 - 55,315,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi, Hàn Quốc. Xếp hạng: #154." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/top3_school_4" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Y Dongnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Y Dongnam (Y Dongnam (TOP 3%) College (Korea)): 2,300,000 - 2,990,000 KRW (42,550,000 - 55,315,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi, Hàn Quốc. Xếp hạng: #154." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/top3_school_4" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Y Dongnam",
          "alternateName": "Y Dongnam (TOP 3%) College (Korea)",
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
    return <StaticRouter location="/university/top3_school_4">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'top3_school_4' }} />;
}
