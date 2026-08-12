import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/gwangjunationalofeducation',
  routeUrl: '/university/gwangjunationalofeducation',
  Head: () => (
    <>
      <title>Đại học Sư phạm Quốc gia Gwangju - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sư phạm Quốc gia Gwangju (Gwangju National University of Education): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #568." />
      <meta name="keywords" content="Đại học Sư phạm Quốc gia Gwangju, học phí Đại học Sư phạm Quốc gia Gwangju, Gwangju National University of Education, 광주교육대학교, đại học Gwangju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/gwangjunationalofeducation" />
      <meta property="og:title" content="Đại học Sư phạm Quốc gia Gwangju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sư phạm Quốc gia Gwangju (Gwangju National University of Education): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #568." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/gwangjunationalofeducation" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sư phạm Quốc gia Gwangju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sư phạm Quốc gia Gwangju (Gwangju National University of Education): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #568." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/gwangjunationalofeducation" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sư phạm Quốc gia Gwangju",
          "alternateName": "Gwangju National University of Education",
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
    return <StaticRouter location="/university/gwangjunationalofeducation">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'gwangjunationalofeducation' }} />;
}
