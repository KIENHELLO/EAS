import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/top3_school_21',
  routeUrl: '/university/top3_school_21',
  Head: () => (
    <>
      <title>Đại học Sanji - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sanji (Đại học Sanji (TOP 3%)): 2,100,000 - 2,730,000 KRW (38,850,000 - 50,505,000 VND) mỗi học kỳ. Địa chỉ: Gangwon, Hàn Quốc. Xếp hạng: #171." />
      <meta name="keywords" content="Đại học Sanji, học phí Đại học Sanji, Đại học Sanji (TOP 3%), Đại học Sanji, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/top3_school_21" />
      <meta property="og:title" content="Đại học Sanji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sanji (Đại học Sanji (TOP 3%)): 2,100,000 - 2,730,000 KRW (38,850,000 - 50,505,000 VND) mỗi học kỳ. Địa chỉ: Gangwon, Hàn Quốc. Xếp hạng: #171." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/top3_school_21" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sanji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sanji (Đại học Sanji (TOP 3%)): 2,100,000 - 2,730,000 KRW (38,850,000 - 50,505,000 VND) mỗi học kỳ. Địa chỉ: Gangwon, Hàn Quốc. Xếp hạng: #171." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/top3_school_21" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sanji",
          "alternateName": "Đại học Sanji (TOP 3%)",
          "url": "https://www.studyinkorea.go.kr",
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
    return <StaticRouter location="/university/top3_school_21">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'top3_school_21' }} />;
}
