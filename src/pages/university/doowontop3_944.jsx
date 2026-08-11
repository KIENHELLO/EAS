import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/doowontop3_944',
  routeUrl: '/university/doowontop3_944',
  Head: () => (
    <>
      <title>Đại học Doowon - top 3 - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Doowon - top 3 (Đại học Doowon - top 3 (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 두원공과대학교 안성캠퍼스, 장원길, 장원리, 죽산면, 안성시, 경기도, 17519, 대한민국. Xếp hạng: #178." />
      <meta name="keywords" content="Đại học Doowon - top 3, học phí Đại học Doowon - top 3, Đại học Doowon - top 3 (Imported), Đại học Doowon - top 3, đại học Gyeonggi-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/doowontop3_944" />
      <meta property="og:title" content="Đại học Doowon - top 3 - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Doowon - top 3 (Đại học Doowon - top 3 (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 두원공과대학교 안성캠퍼스, 장원길, 장원리, 죽산면, 안성시, 경기도, 17519, 대한민국. Xếp hạng: #178." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/doowontop3_944" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Doowon - top 3 - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Doowon - top 3 (Đại học Doowon - top 3 (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 두원공과대학교 안성캠퍼스, 장원길, 장원리, 죽산면, 안성시, 경기도, 17519, 대한민국. Xếp hạng: #178." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/doowontop3_944" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Doowon - top 3",
          "alternateName": "Đại học Doowon - top 3 (Imported)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeonggi-do"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/doowontop3_944">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'doowontop3_944' }} />;
}
