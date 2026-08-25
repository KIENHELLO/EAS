import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreapolytechnicdaejeoncampus',
  routeUrl: '/university/koreapolytechnicdaejeoncampus',
  Head: () => (
    <>
      <title>CĐ Kỹ năng Polytech Daejeon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Kỹ năng Polytech Daejeon (Korea Polytechnic Daejeon Campus): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #498." />
      <meta name="keywords" content="CĐ Kỹ năng Polytech Daejeon, học phí CĐ Kỹ năng Polytech Daejeon, Korea Polytechnic Daejeon Campus, 한국폴리텍대학 대전캠퍼스, đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreapolytechnicdaejeoncampus" />
      <meta property="og:title" content="CĐ Kỹ năng Polytech Daejeon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Kỹ năng Polytech Daejeon (Korea Polytechnic Daejeon Campus): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #498." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreapolytechnicdaejeoncampus" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Kỹ năng Polytech Daejeon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Kỹ năng Polytech Daejeon (Korea Polytechnic Daejeon Campus): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #498." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreapolytechnicdaejeoncampus" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Kỹ năng Polytech Daejeon",
          "alternateName": "Korea Polytechnic Daejeon Campus",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daejeon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/koreapolytechnicdaejeoncampus">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreapolytechnicdaejeoncampus' }} />;
}
