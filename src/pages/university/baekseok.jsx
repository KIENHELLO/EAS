import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/baekseok',
  routeUrl: '/university/baekseok',
  Head: () => (
    <>
      <title>Đại học Baekseok - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Baekseok (Baekseok University): 3,200,000 - 3,900,000 KRW (59,200,000 - 72,150,000 VND) mỗi học kỳ. Địa chỉ: 76 Munam-ro, Dongnam-gu, Cheonan, Chungcheongnam-do. Xếp hạng: #36." />
      <meta name="keywords" content="Đại học Baekseok, học phí Đại học Baekseok, Baekseok University, 백석대학교, đại học Chungnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/baekseok" />
      <meta property="og:title" content="Đại học Baekseok - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Baekseok (Baekseok University): 3,200,000 - 3,900,000 KRW (59,200,000 - 72,150,000 VND) mỗi học kỳ. Địa chỉ: 76 Munam-ro, Dongnam-gu, Cheonan, Chungcheongnam-do. Xếp hạng: #36." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/baekseok" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Baekseok - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Baekseok (Baekseok University): 3,200,000 - 3,900,000 KRW (59,200,000 - 72,150,000 VND) mỗi học kỳ. Địa chỉ: 76 Munam-ro, Dongnam-gu, Cheonan, Chungcheongnam-do. Xếp hạng: #36." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/baekseok" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Baekseok",
          "alternateName": "Baekseok University",
          "url": "https://www.bu.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/baekseok">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'baekseok' }} />;
}
