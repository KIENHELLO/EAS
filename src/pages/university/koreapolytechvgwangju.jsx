import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreapolytechvgwangju',
  routeUrl: '/university/koreapolytechvgwangju',
  Head: () => (
    <>
      <title>Cao đẳng Polytech V Gwangju - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Polytech V Gwangju (Korea Polytech V (Gwangju)): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #621." />
      <meta name="keywords" content="Cao đẳng Polytech V Gwangju, học phí Cao đẳng Polytech V Gwangju, Korea Polytech V (Gwangju), 한국폴리텍V대학 광주캠퍼스, đại học Gwangju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreapolytechvgwangju" />
      <meta property="og:title" content="Cao đẳng Polytech V Gwangju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Polytech V Gwangju (Korea Polytech V (Gwangju)): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #621." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreapolytechvgwangju" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Polytech V Gwangju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Polytech V Gwangju (Korea Polytech V (Gwangju)): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #621." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreapolytechvgwangju" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Polytech V Gwangju",
          "alternateName": "Korea Polytech V (Gwangju)",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gwangju"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/koreapolytechvgwangju">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreapolytechvgwangju' }} />;
}
