import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreapolytechnici_1',
  routeUrl: '/university/koreapolytechnici_1',
  Head: () => (
    <>
      <title>CĐ Polytech I (Seongnam) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Polytech I (Seongnam) (Korea Polytechnic I College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #460." />
      <meta name="keywords" content="CĐ Polytech I (Seongnam), học phí CĐ Polytech I (Seongnam), Korea Polytechnic I College, 한국폴리텍I대학(성남), đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreapolytechnici_1" />
      <meta property="og:title" content="CĐ Polytech I (Seongnam) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Polytech I (Seongnam) (Korea Polytechnic I College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #460." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreapolytechnici_1" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Polytech I (Seongnam) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Polytech I (Seongnam) (Korea Polytechnic I College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #460." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreapolytechnici_1" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Polytech I (Seongnam)",
          "alternateName": "Korea Polytechnic I College",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeonggi"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/koreapolytechnici_1">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreapolytechnici_1' }} />;
}
