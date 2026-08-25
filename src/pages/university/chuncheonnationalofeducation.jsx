import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/chuncheonnationalofeducation',
  routeUrl: '/university/chuncheonnationalofeducation',
  Head: () => (
    <>
      <title>Đại học Sư phạm Quốc gia Chuncheon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sư phạm Quốc gia Chuncheon (Chuncheon National University of Education): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #566." />
      <meta name="keywords" content="Đại học Sư phạm Quốc gia Chuncheon, học phí Đại học Sư phạm Quốc gia Chuncheon, Chuncheon National University of Education, 춘천교육대학교, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/chuncheonnationalofeducation" />
      <meta property="og:title" content="Đại học Sư phạm Quốc gia Chuncheon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sư phạm Quốc gia Chuncheon (Chuncheon National University of Education): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #566." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/chuncheonnationalofeducation" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sư phạm Quốc gia Chuncheon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sư phạm Quốc gia Chuncheon (Chuncheon National University of Education): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #566." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/chuncheonnationalofeducation" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sư phạm Quốc gia Chuncheon",
          "alternateName": "Chuncheon National University of Education",
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
    return <StaticRouter location="/university/chuncheonnationalofeducation">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'chuncheonnationalofeducation' }} />;
}
