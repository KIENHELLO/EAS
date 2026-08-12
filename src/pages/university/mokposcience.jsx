import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mokposcience',
  routeUrl: '/university/mokposcience',
  Head: () => (
    <>
      <title>Cao đẳng Khoa học Mokpo - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Khoa học Mokpo (Mokpo Science College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Jeonnam. Xếp hạng: #610." />
      <meta name="keywords" content="Cao đẳng Khoa học Mokpo, học phí Cao đẳng Khoa học Mokpo, Mokpo Science College, 목포과학대학교, đại học Jeonnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mokposcience" />
      <meta property="og:title" content="Cao đẳng Khoa học Mokpo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Khoa học Mokpo (Mokpo Science College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Jeonnam. Xếp hạng: #610." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mokposcience" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Khoa học Mokpo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Khoa học Mokpo (Mokpo Science College): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Jeonnam. Xếp hạng: #610." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mokposcience" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Khoa học Mokpo",
          "alternateName": "Mokpo Science College",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeonnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mokposcience">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mokposcience' }} />;
}
