import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/yonaminstituteoftechnology',
  routeUrl: '/university/yonaminstituteoftechnology',
  Head: () => (
    <>
      <title>Cao đẳng Công nghệ Yonam - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Công nghệ Yonam (Yonam Institute of Technology): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Gyeongnam. Xếp hạng: #588." />
      <meta name="keywords" content="Cao đẳng Công nghệ Yonam, học phí Cao đẳng Công nghệ Yonam, Yonam Institute of Technology, 연암공과대학교, đại học Gyeongnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/yonaminstituteoftechnology" />
      <meta property="og:title" content="Cao đẳng Công nghệ Yonam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Công nghệ Yonam (Yonam Institute of Technology): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Gyeongnam. Xếp hạng: #588." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/yonaminstituteoftechnology" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Công nghệ Yonam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Công nghệ Yonam (Yonam Institute of Technology): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Gyeongnam. Xếp hạng: #588." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/yonaminstituteoftechnology" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Công nghệ Yonam",
          "alternateName": "Yonam Institute of Technology",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/yonaminstituteoftechnology">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'yonaminstituteoftechnology' }} />;
}
