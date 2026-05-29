import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/gist',
  routeUrl: '/university/gist',
  Head: () => (
    <>
      <title>Viện Khoa học & Công nghệ Gwangju (GIST) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Viện Khoa học & Công nghệ Gwangju (GIST) (GIST (Gwangju Institute of Science and Technology)): 2,925,000 - 3,835,000 KRW (54,112,500 - 70,947,500 VND) mỗi học kỳ. Địa chỉ: 123 Cheomdan-gwagiro, Buk-gu, Gwangju. Xếp hạng: #22." />
      <meta name="keywords" content="Viện Khoa học & Công nghệ Gwangju (GIST), học phí Viện Khoa học & Công nghệ Gwangju (GIST), GIST (Gwangju Institute of Science and Technology), 광주과학기술원, đại học Gwangju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/gist" />
      <meta property="og:title" content="Viện Khoa học & Công nghệ Gwangju (GIST) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Viện Khoa học & Công nghệ Gwangju (GIST) (GIST (Gwangju Institute of Science and Technology)): 2,925,000 - 3,835,000 KRW (54,112,500 - 70,947,500 VND) mỗi học kỳ. Địa chỉ: 123 Cheomdan-gwagiro, Buk-gu, Gwangju. Xếp hạng: #22." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/gist" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Viện Khoa học & Công nghệ Gwangju (GIST) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Viện Khoa học & Công nghệ Gwangju (GIST) (GIST (Gwangju Institute of Science and Technology)): 2,925,000 - 3,835,000 KRW (54,112,500 - 70,947,500 VND) mỗi học kỳ. Địa chỉ: 123 Cheomdan-gwagiro, Buk-gu, Gwangju. Xếp hạng: #22." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/gist" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Viện Khoa học & Công nghệ Gwangju (GIST)",
          "alternateName": "GIST (Gwangju Institute of Science and Technology)",
          "url": "https://www.gist.ac.kr",
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
