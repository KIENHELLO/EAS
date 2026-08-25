import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreapolytechnicii_1',
  routeUrl: '/university/koreapolytechnicii_1',
  Head: () => (
    <>
      <title>CĐ Polytech II (Incheon) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Polytech II (Incheon) (Korea Polytechnic II College): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #462." />
      <meta name="keywords" content="CĐ Polytech II (Incheon), học phí CĐ Polytech II (Incheon), Korea Polytechnic II College, 한국폴리텍II대학(인천), đại học Incheon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreapolytechnicii_1" />
      <meta property="og:title" content="CĐ Polytech II (Incheon) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Polytech II (Incheon) (Korea Polytechnic II College): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #462." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreapolytechnicii_1" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Polytech II (Incheon) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Polytech II (Incheon) (Korea Polytechnic II College): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #462." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreapolytechnicii_1" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Polytech II (Incheon)",
          "alternateName": "Korea Polytechnic II College",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Incheon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/koreapolytechnicii_1">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreapolytechnicii_1' }} />;
}
