import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreapolytechiiichuncheon',
  routeUrl: '/university/koreapolytechiiichuncheon',
  Head: () => (
    <>
      <title>Cao đẳng Polytech III Chuncheon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Polytech III Chuncheon (Korea Polytech III (Chuncheon)): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #620." />
      <meta name="keywords" content="Cao đẳng Polytech III Chuncheon, học phí Cao đẳng Polytech III Chuncheon, Korea Polytech III (Chuncheon), 한국폴리텍III대학 춘천캠퍼스, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreapolytechiiichuncheon" />
      <meta property="og:title" content="Cao đẳng Polytech III Chuncheon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Polytech III Chuncheon (Korea Polytech III (Chuncheon)): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #620." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreapolytechiiichuncheon" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Polytech III Chuncheon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Polytech III Chuncheon (Korea Polytech III (Chuncheon)): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #620." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreapolytechiiichuncheon" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Polytech III Chuncheon",
          "alternateName": "Korea Polytech III (Chuncheon)",
          "url": "",
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
    return <StaticRouter location="/university/koreapolytechiiichuncheon">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreapolytechiiichuncheon' }} />;
}
