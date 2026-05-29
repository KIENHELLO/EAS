import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kangwon',
  routeUrl: '/university/kangwon',
  Head: () => (
    <>
      <title>Đại học Quốc gia Kangwon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Kangwon (Kangwon National University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: 1 Kangwondaehak-gil, Chuncheon-si, Gangwon-do. Xếp hạng: #26." />
      <meta name="keywords" content="Đại học Quốc gia Kangwon, học phí Đại học Quốc gia Kangwon, Kangwon National University, 강원대학교, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kangwon" />
      <meta property="og:title" content="Đại học Quốc gia Kangwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Kangwon (Kangwon National University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: 1 Kangwondaehak-gil, Chuncheon-si, Gangwon-do. Xếp hạng: #26." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kangwon" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Kangwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Kangwon (Kangwon National University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: 1 Kangwondaehak-gil, Chuncheon-si, Gangwon-do. Xếp hạng: #26." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kangwon" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Kangwon",
          "alternateName": "Kangwon National University",
          "url": "https://www.kangwon.ac.kr",
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
    return <StaticRouter location="/university/kangwon">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kangwon' }} />;
}
