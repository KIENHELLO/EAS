import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/dongeui_science',
  routeUrl: '/university/dongeui_science',
  Head: () => (
    <>
      <title>Cao đẳng Công nghệ Dongeui - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Công nghệ Dongeui (Dongeui Science University): 2,455,000 KRW (45,417,500 VND) mỗi học kỳ. Địa chỉ: 54 Yangji-ro, Busanjin-gu, Busan. Xếp hạng: #58." />
      <meta name="keywords" content="Cao đẳng Công nghệ Dongeui, học phí Cao đẳng Công nghệ Dongeui, Dongeui Science University, 동의과학대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/dongeui_science" />
      <meta property="og:title" content="Cao đẳng Công nghệ Dongeui - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Công nghệ Dongeui (Dongeui Science University): 2,455,000 KRW (45,417,500 VND) mỗi học kỳ. Địa chỉ: 54 Yangji-ro, Busanjin-gu, Busan. Xếp hạng: #58." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/dongeui_science" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Công nghệ Dongeui - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Công nghệ Dongeui (Dongeui Science University): 2,455,000 KRW (45,417,500 VND) mỗi học kỳ. Địa chỉ: 54 Yangji-ro, Busanjin-gu, Busan. Xếp hạng: #58." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/dongeui_science" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Công nghệ Dongeui",
          "alternateName": "Dongeui Science University",
          "url": "https://www.dit.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Busan"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/dongeui_science">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'dongeui_science' }} />;
}
