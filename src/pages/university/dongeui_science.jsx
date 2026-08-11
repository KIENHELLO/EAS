import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/dongeui_science',
  routeUrl: '/university/dongeui_science',
  Head: () => (
    <>
      <title>Đại học Dong Eui - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Dong Eui (Dongeui Science University): 2,455,000 KRW (45,417,500 VND) mỗi học kỳ. Địa chỉ: 동의대학교 가야캠퍼스, 176, 엄광로, 해운맨션, 가야동, 가야1동, 부산진구, 부산광역시, 47340, 대한민국. Xếp hạng: #58." />
      <meta name="keywords" content="Đại học Dong Eui, học phí Đại học Dong Eui, Dongeui Science University, 동의과학대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/dongeui_science" />
      <meta property="og:title" content="Đại học Dong Eui - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Dong Eui (Dongeui Science University): 2,455,000 KRW (45,417,500 VND) mỗi học kỳ. Địa chỉ: 동의대학교 가야캠퍼스, 176, 엄광로, 해운맨션, 가야동, 가야1동, 부산진구, 부산광역시, 47340, 대한민국. Xếp hạng: #58." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/dongeui_science" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Dong Eui - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Dong Eui (Dongeui Science University): 2,455,000 KRW (45,417,500 VND) mỗi học kỳ. Địa chỉ: 동의대학교 가야캠퍼스, 176, 엄광로, 해운맨션, 가야동, 가야1동, 부산진구, 부산광역시, 47340, 대한민국. Xếp hạng: #58." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/dongeui_science" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Dong Eui",
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
