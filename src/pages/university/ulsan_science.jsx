import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/ulsan_science',
  routeUrl: '/university/ulsan_science',
  Head: () => (
    <>
      <title>Cao đẳng Ulsan College - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Ulsan College (Ulsan College): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Ulsan. Xếp hạng: #212." />
      <meta name="keywords" content="Cao đẳng Ulsan College, học phí Cao đẳng Ulsan College, Ulsan College, 울산과학대학교, đại học Ulsan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/ulsan_science" />
      <meta property="og:title" content="Cao đẳng Ulsan College - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Ulsan College (Ulsan College): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Ulsan. Xếp hạng: #212." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/ulsan_science" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Ulsan College - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Ulsan College (Ulsan College): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Ulsan. Xếp hạng: #212." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/ulsan_science" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Ulsan College",
          "alternateName": "Ulsan College",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Ulsan"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/ulsan_science">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'ulsan_science' }} />;
}
