import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/top3_school_1',
  routeUrl: '/university/top3_school_1',
  Head: () => (
    <>
      <title>Đại học Phật Giáo - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Phật Giáo (Đại học Phật Giáo (TOP 3%)): 3,200,000 - 4,160,000 KRW (59,200,000 - 76,960,000 VND) mỗi học kỳ. Địa chỉ: Seoul, Hàn Quốc. Xếp hạng: #151." />
      <meta name="keywords" content="Đại học Phật Giáo, học phí Đại học Phật Giáo, Đại học Phật Giáo (TOP 3%), Đại học Phật Giáo, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/top3_school_1" />
      <meta property="og:title" content="Đại học Phật Giáo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Phật Giáo (Đại học Phật Giáo (TOP 3%)): 3,200,000 - 4,160,000 KRW (59,200,000 - 76,960,000 VND) mỗi học kỳ. Địa chỉ: Seoul, Hàn Quốc. Xếp hạng: #151." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/top3_school_1" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Phật Giáo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Phật Giáo (Đại học Phật Giáo (TOP 3%)): 3,200,000 - 4,160,000 KRW (59,200,000 - 76,960,000 VND) mỗi học kỳ. Địa chỉ: Seoul, Hàn Quốc. Xếp hạng: #151." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/top3_school_1" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Phật Giáo",
          "alternateName": "Đại học Phật Giáo (TOP 3%)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Seoul"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/top3_school_1">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'top3_school_1' }} />;
}
