import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/incheonnational',
  routeUrl: '/university/incheonnational',
  Head: () => (
    <>
      <title>ĐH Quốc gia Incheon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Quốc gia Incheon (Incheon National University): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #418." />
      <meta name="keywords" content="ĐH Quốc gia Incheon, học phí ĐH Quốc gia Incheon, Incheon National University, 인천대학교, đại học Incheon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/incheonnational" />
      <meta property="og:title" content="ĐH Quốc gia Incheon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Quốc gia Incheon (Incheon National University): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #418." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/incheonnational" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Quốc gia Incheon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Quốc gia Incheon (Incheon National University): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #418." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/incheonnational" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Quốc gia Incheon",
          "alternateName": "Incheon National University",
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
    return <StaticRouter location="/university/incheonnational">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'incheonnational' }} />;
}
