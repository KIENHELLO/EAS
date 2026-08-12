import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/gimcheon',
  routeUrl: '/university/gimcheon',
  Head: () => (
    <>
      <title>Đại học Gimcheon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Gimcheon (Gimcheon University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeongbuk. Xếp hạng: #526." />
      <meta name="keywords" content="Đại học Gimcheon, học phí Đại học Gimcheon, Gimcheon University, 김천대학교, đại học Gyeongbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/gimcheon" />
      <meta property="og:title" content="Đại học Gimcheon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Gimcheon (Gimcheon University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeongbuk. Xếp hạng: #526." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/gimcheon" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Gimcheon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Gimcheon (Gimcheon University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeongbuk. Xếp hạng: #526." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/gimcheon" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Gimcheon",
          "alternateName": "Gimcheon University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/gimcheon">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'gimcheon' }} />;
}
