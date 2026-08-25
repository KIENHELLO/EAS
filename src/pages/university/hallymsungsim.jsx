import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/hallymsungsim',
  routeUrl: '/university/hallymsungsim',
  Head: () => (
    <>
      <title>Cao đẳng Hallym Sungsim - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Hallym Sungsim (Hallym Sungsim University): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #614." />
      <meta name="keywords" content="Cao đẳng Hallym Sungsim, học phí Cao đẳng Hallym Sungsim, Hallym Sungsim University, 한림성심대학교, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/hallymsungsim" />
      <meta property="og:title" content="Cao đẳng Hallym Sungsim - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Hallym Sungsim (Hallym Sungsim University): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #614." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/hallymsungsim" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Hallym Sungsim - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Hallym Sungsim (Hallym Sungsim University): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #614." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/hallymsungsim" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Hallym Sungsim",
          "alternateName": "Hallym Sungsim University",
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
    return <StaticRouter location="/university/hallymsungsim">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'hallymsungsim' }} />;
}
