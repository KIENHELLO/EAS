import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/giaothonghanquo',
  routeUrl: '/university/giaothonghanquo',
  Head: () => (
    <>
      <title>Đại học Quốc gia Giao thông Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Giao thông Hàn Quốc (Đại học Quốc gia Giao thông Hàn Quốc (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #168." />
      <meta name="keywords" content="Đại học Quốc gia Giao thông Hàn Quốc, học phí Đại học Quốc gia Giao thông Hàn Quốc, Đại học Quốc gia Giao thông Hàn Quốc (Korea), Đại học Quốc gia Giao thông Hàn Quốc, đại học Chungbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/giaothonghanquo" />
      <meta property="og:title" content="Đại học Quốc gia Giao thông Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Giao thông Hàn Quốc (Đại học Quốc gia Giao thông Hàn Quốc (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #168." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/giaothonghanquo" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Giao thông Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Giao thông Hàn Quốc (Đại học Quốc gia Giao thông Hàn Quốc (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #168." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/giaothonghanquo" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Giao thông Hàn Quốc",
          "alternateName": "Đại học Quốc gia Giao thông Hàn Quốc (Korea)",
          "url": "https://www.studyinkorea.go.kr",
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
    return <StaticRouter location="/university/giaothonghanquo">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'giaothonghanquo' }} />;
}
