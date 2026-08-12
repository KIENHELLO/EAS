import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/daeguscience',
  routeUrl: '/university/daeguscience',
  Head: () => (
    <>
      <title>Cao đẳng Khoa học Daegu - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Khoa học Daegu (Daegu Science University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daegu. Xếp hạng: #593." />
      <meta name="keywords" content="Cao đẳng Khoa học Daegu, học phí Cao đẳng Khoa học Daegu, Daegu Science University, 대구과학대학교, đại học Daegu" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/daeguscience" />
      <meta property="og:title" content="Cao đẳng Khoa học Daegu - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Khoa học Daegu (Daegu Science University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daegu. Xếp hạng: #593." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/daeguscience" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Khoa học Daegu - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Khoa học Daegu (Daegu Science University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Daegu. Xếp hạng: #593." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/daeguscience" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Khoa học Daegu",
          "alternateName": "Daegu Science University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daegu"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/daeguscience">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'daeguscience' }} />;
}
