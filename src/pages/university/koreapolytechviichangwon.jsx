import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreapolytechviichangwon',
  routeUrl: '/university/koreapolytechviichangwon',
  Head: () => (
    <>
      <title>Cao đẳng Polytech VII Changwon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Polytech VII Changwon (Korea Polytech VII (Changwon)): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Gyeongnam. Xếp hạng: #623." />
      <meta name="keywords" content="Cao đẳng Polytech VII Changwon, học phí Cao đẳng Polytech VII Changwon, Korea Polytech VII (Changwon), 한국폴리텍VII대학 창원캠퍼스, đại học Gyeongnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreapolytechviichangwon" />
      <meta property="og:title" content="Cao đẳng Polytech VII Changwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Polytech VII Changwon (Korea Polytech VII (Changwon)): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Gyeongnam. Xếp hạng: #623." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreapolytechviichangwon" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Polytech VII Changwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Polytech VII Changwon (Korea Polytech VII (Changwon)): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Gyeongnam. Xếp hạng: #623." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreapolytechviichangwon" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Polytech VII Changwon",
          "alternateName": "Korea Polytech VII (Changwon)",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/koreapolytechviichangwon">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreapolytechviichangwon' }} />;
}
