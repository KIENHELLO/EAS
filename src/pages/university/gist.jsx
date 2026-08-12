import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/gist',
  routeUrl: '/university/gist',
  Head: () => (
    <>
      <title>Viện Khoa học & Công nghệ Gwangju (GIST) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Viện Khoa học & Công nghệ Gwangju (GIST) (GIST): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #626." />
      <meta name="keywords" content="Viện Khoa học & Công nghệ Gwangju (GIST), học phí Viện Khoa học & Công nghệ Gwangju (GIST), GIST, 광주과학기술원, đại học Gwangju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/gist" />
      <meta property="og:title" content="Viện Khoa học & Công nghệ Gwangju (GIST) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Viện Khoa học & Công nghệ Gwangju (GIST) (GIST): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #626." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/gist" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Viện Khoa học & Công nghệ Gwangju (GIST) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Viện Khoa học & Công nghệ Gwangju (GIST) (GIST): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #626." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/gist" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Viện Khoa học & Công nghệ Gwangju (GIST)",
          "alternateName": "GIST",
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
    return <StaticRouter location="/university/gist">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'gist' }} />;
}
