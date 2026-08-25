import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/unist',
  routeUrl: '/university/unist',
  Head: () => (
    <>
      <title>Viện Khoa học & Công nghệ Ulsan (UNIST) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Viện Khoa học & Công nghệ Ulsan (UNIST) (UNIST): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Ulsan. Xếp hạng: #624." />
      <meta name="keywords" content="Viện Khoa học & Công nghệ Ulsan (UNIST), học phí Viện Khoa học & Công nghệ Ulsan (UNIST), UNIST, 울산과학기술원, đại học Ulsan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/unist" />
      <meta property="og:title" content="Viện Khoa học & Công nghệ Ulsan (UNIST) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Viện Khoa học & Công nghệ Ulsan (UNIST) (UNIST): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Ulsan. Xếp hạng: #624." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/unist" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Viện Khoa học & Công nghệ Ulsan (UNIST) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Viện Khoa học & Công nghệ Ulsan (UNIST) (UNIST): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Ulsan. Xếp hạng: #624." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/unist" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Viện Khoa học & Công nghệ Ulsan (UNIST)",
          "alternateName": "UNIST",
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
    return <StaticRouter location="/university/unist">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'unist' }} />;
}
