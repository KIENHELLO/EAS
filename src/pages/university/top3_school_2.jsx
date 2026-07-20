import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/top3_school_2',
  routeUrl: '/university/top3_school_2',
  Head: () => (
    <>
      <title>Đại học Ansan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Ansan (Đại học Ansan (TOP 3%)): 2,200,000 - 2,860,000 KRW (40,700,000 - 52,910,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi, Hàn Quốc. Xếp hạng: #152." />
      <meta name="keywords" content="Đại học Ansan, học phí Đại học Ansan, Đại học Ansan (TOP 3%), Đại học Ansan, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/top3_school_2" />
      <meta property="og:title" content="Đại học Ansan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Ansan (Đại học Ansan (TOP 3%)): 2,200,000 - 2,860,000 KRW (40,700,000 - 52,910,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi, Hàn Quốc. Xếp hạng: #152." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/top3_school_2" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Ansan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Ansan (Đại học Ansan (TOP 3%)): 2,200,000 - 2,860,000 KRW (40,700,000 - 52,910,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi, Hàn Quốc. Xếp hạng: #152." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/top3_school_2" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Ansan",
          "alternateName": "Đại học Ansan (TOP 3%)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeonggi"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/top3_school_2">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'top3_school_2' }} />;
}
