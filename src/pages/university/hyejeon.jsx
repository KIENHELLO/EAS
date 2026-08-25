import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/hyejeon',
  routeUrl: '/university/hyejeon',
  Head: () => (
    <>
      <title>Cao đẳng Hyejeon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Hyejeon (Hyejeon College): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #600." />
      <meta name="keywords" content="Cao đẳng Hyejeon, học phí Cao đẳng Hyejeon, Hyejeon College, 혜전대학교, đại học Chungnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/hyejeon" />
      <meta property="og:title" content="Cao đẳng Hyejeon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Hyejeon (Hyejeon College): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #600." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/hyejeon" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Hyejeon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Hyejeon (Hyejeon College): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #600." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/hyejeon" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Hyejeon",
          "alternateName": "Hyejeon College",
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
    return <StaticRouter location="/university/hyejeon">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'hyejeon' }} />;
}
