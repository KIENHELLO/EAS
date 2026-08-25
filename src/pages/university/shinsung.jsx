import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/shinsung',
  routeUrl: '/university/shinsung',
  Head: () => (
    <>
      <title>Cao đẳng Shinsung - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Shinsung (Shinsung University): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #599." />
      <meta name="keywords" content="Cao đẳng Shinsung, học phí Cao đẳng Shinsung, Shinsung University, 신성대학교, đại học Chungnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/shinsung" />
      <meta property="og:title" content="Cao đẳng Shinsung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Shinsung (Shinsung University): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #599." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/shinsung" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Shinsung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Shinsung (Shinsung University): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #599." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/shinsung" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Shinsung",
          "alternateName": "Shinsung University",
          "url": "",
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
    return <StaticRouter location="/university/shinsung">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'shinsung' }} />;
}
