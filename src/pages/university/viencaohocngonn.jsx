import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/viencaohocngonn',
  routeUrl: '/university/viencaohocngonn',
  Head: () => (
    <>
      <title>Viện Cao học Ngôn ngữ Quốc tế - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Viện Cao học Ngôn ngữ Quốc tế (Viện Cao học Ngôn ngữ Quốc tế (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #213." />
      <meta name="keywords" content="Viện Cao học Ngôn ngữ Quốc tế, học phí Viện Cao học Ngôn ngữ Quốc tế, Viện Cao học Ngôn ngữ Quốc tế (Korea), Viện Cao học Ngôn ngữ Quốc tế, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/viencaohocngonn" />
      <meta property="og:title" content="Viện Cao học Ngôn ngữ Quốc tế - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Viện Cao học Ngôn ngữ Quốc tế (Viện Cao học Ngôn ngữ Quốc tế (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #213." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/viencaohocngonn" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Viện Cao học Ngôn ngữ Quốc tế - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Viện Cao học Ngôn ngữ Quốc tế (Viện Cao học Ngôn ngữ Quốc tế (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #213." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/viencaohocngonn" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Viện Cao học Ngôn ngữ Quốc tế",
          "alternateName": "Viện Cao học Ngôn ngữ Quốc tế (Korea)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Seoul"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/viencaohocngonn">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'viencaohocngonn' }} />;
}
