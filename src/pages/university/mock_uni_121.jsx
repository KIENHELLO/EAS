import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_121',
  routeUrl: '/university/mock_uni_121',
  Head: () => (
    <>
      <title>Đại học Suncheon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Suncheon (Suncheon University): 2,937,000 - 4,804,000 KRW (54,334,500 - 88,874,000 VND) mỗi học kỳ. Địa chỉ: 123 Suncheon-ro, Daegu. Xếp hạng: #144." />
      <meta name="keywords" content="Đại học Suncheon, học phí Đại học Suncheon, Suncheon University, Suncheon대학교, đại học Daegu" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_121" />
      <meta property="og:title" content="Đại học Suncheon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Suncheon (Suncheon University): 2,937,000 - 4,804,000 KRW (54,334,500 - 88,874,000 VND) mỗi học kỳ. Địa chỉ: 123 Suncheon-ro, Daegu. Xếp hạng: #144." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_121" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Suncheon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Suncheon (Suncheon University): 2,937,000 - 4,804,000 KRW (54,334,500 - 88,874,000 VND) mỗi học kỳ. Địa chỉ: 123 Suncheon-ro, Daegu. Xếp hạng: #144." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_121" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Suncheon",
          "alternateName": "Suncheon University",
          "url": "https://www.suncheon.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_121">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_121' }} />;
}
