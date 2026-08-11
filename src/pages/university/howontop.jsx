import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/howontop',
  routeUrl: '/university/howontop',
  Head: () => (
    <>
      <title>Đại học Howon   - top 3 - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Howon   - top 3 (Đại học Howon   - top 3 (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #218." />
      <meta name="keywords" content="Đại học Howon   - top 3, học phí Đại học Howon   - top 3, Đại học Howon   - top 3 (Korea), Đại học Howon   - top 3, đại học Jeonllabuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/howontop" />
      <meta property="og:title" content="Đại học Howon   - top 3 - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Howon   - top 3 (Đại học Howon   - top 3 (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #218." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/howontop" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Howon   - top 3 - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Howon   - top 3 (Đại học Howon   - top 3 (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #218." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/howontop" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Howon   - top 3",
          "alternateName": "Đại học Howon   - top 3 (Korea)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeonllabuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/howontop">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'howontop' }} />;
}
