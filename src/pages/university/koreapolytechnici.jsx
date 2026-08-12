import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreapolytechnici',
  routeUrl: '/university/koreapolytechnici',
  Head: () => (
    <>
      <title>CĐ Kỹ năng Polytech I - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Kỹ năng Polytech I (Korea Polytechnic I College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #352." />
      <meta name="keywords" content="CĐ Kỹ năng Polytech I, học phí CĐ Kỹ năng Polytech I, Korea Polytechnic I College, 한국폴리텍I대학, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreapolytechnici" />
      <meta property="og:title" content="CĐ Kỹ năng Polytech I - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Kỹ năng Polytech I (Korea Polytechnic I College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #352." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreapolytechnici" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Kỹ năng Polytech I - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Kỹ năng Polytech I (Korea Polytechnic I College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #352." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreapolytechnici" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Kỹ năng Polytech I",
          "alternateName": "Korea Polytechnic I College",
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
    return <StaticRouter location="/university/koreapolytechnici">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreapolytechnici' }} />;
}
