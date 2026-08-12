import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreanationalofeducation',
  routeUrl: '/university/koreanationalofeducation',
  Head: () => (
    <>
      <title>Đại học Giáo dục Quốc gia Korea (KNUE) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Giáo dục Quốc gia Korea (KNUE) (Korea National University of Education): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Chungbuk. Xếp hạng: #563." />
      <meta name="keywords" content="Đại học Giáo dục Quốc gia Korea (KNUE), học phí Đại học Giáo dục Quốc gia Korea (KNUE), Korea National University of Education, 한국교원대학교, đại học Chungbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreanationalofeducation" />
      <meta property="og:title" content="Đại học Giáo dục Quốc gia Korea (KNUE) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Giáo dục Quốc gia Korea (KNUE) (Korea National University of Education): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Chungbuk. Xếp hạng: #563." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreanationalofeducation" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Giáo dục Quốc gia Korea (KNUE) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Giáo dục Quốc gia Korea (KNUE) (Korea National University of Education): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Chungbuk. Xếp hạng: #563." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreanationalofeducation" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Giáo dục Quốc gia Korea (KNUE)",
          "alternateName": "Korea National University of Education",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/koreanationalofeducation">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreanationalofeducation' }} />;
}
