import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kukjeofarts',
  routeUrl: '/university/kukjeofarts',
  Head: () => (
    <>
      <title>CĐ Nghệ thuật Quốc tế - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Nghệ thuật Quốc tế (Kukje College of Arts): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #349." />
      <meta name="keywords" content="CĐ Nghệ thuật Quốc tế, học phí CĐ Nghệ thuật Quốc tế, Kukje College of Arts, 국제예술대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kukjeofarts" />
      <meta property="og:title" content="CĐ Nghệ thuật Quốc tế - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Nghệ thuật Quốc tế (Kukje College of Arts): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #349." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kukjeofarts" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Nghệ thuật Quốc tế - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Nghệ thuật Quốc tế (Kukje College of Arts): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #349." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kukjeofarts" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Nghệ thuật Quốc tế",
          "alternateName": "Kukje College of Arts",
          "url": "",
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
    return <StaticRouter location="/university/kukjeofarts">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kukjeofarts' }} />;
}
