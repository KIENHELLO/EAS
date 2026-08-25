import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreanationalofarts',
  routeUrl: '/university/koreanationalofarts',
  Head: () => (
    <>
      <title>Trường ĐH Nghệ thuật QG Hàn Quốc (K-Arts) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Trường ĐH Nghệ thuật QG Hàn Quốc (K-Arts) (Korea National University of Arts): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #353." />
      <meta name="keywords" content="Trường ĐH Nghệ thuật QG Hàn Quốc (K-Arts), học phí Trường ĐH Nghệ thuật QG Hàn Quốc (K-Arts), Korea National University of Arts, 한국예술종합학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreanationalofarts" />
      <meta property="og:title" content="Trường ĐH Nghệ thuật QG Hàn Quốc (K-Arts) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Trường ĐH Nghệ thuật QG Hàn Quốc (K-Arts) (Korea National University of Arts): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #353." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreanationalofarts" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Trường ĐH Nghệ thuật QG Hàn Quốc (K-Arts) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Trường ĐH Nghệ thuật QG Hàn Quốc (K-Arts) (Korea National University of Arts): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #353." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreanationalofarts" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Trường ĐH Nghệ thuật QG Hàn Quốc (K-Arts)",
          "alternateName": "Korea National University of Arts",
          "url": "",
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
    return <StaticRouter location="/university/koreanationalofarts">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreanationalofarts' }} />;
}
