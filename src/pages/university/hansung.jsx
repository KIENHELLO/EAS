import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/hansung',
  routeUrl: '/university/hansung',
  Head: () => (
    <>
      <title>Đại học Hansung - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Hansung (Hansung University): 1,050,000 - 4,800,000 KRW (19,425,000 - 88,800,000 VND) mỗi học kỳ. Địa chỉ: 116 Samseongyo-ro 16-gil, Seongbuk-gu, Seoul. Xếp hạng: #35." />
      <meta name="keywords" content="Đại học Hansung, học phí Đại học Hansung, Hansung University, 한성대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/hansung" />
      <meta property="og:title" content="Đại học Hansung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Hansung (Hansung University): 1,050,000 - 4,800,000 KRW (19,425,000 - 88,800,000 VND) mỗi học kỳ. Địa chỉ: 116 Samseongyo-ro 16-gil, Seongbuk-gu, Seoul. Xếp hạng: #35." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/hansung" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Hansung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Hansung (Hansung University): 1,050,000 - 4,800,000 KRW (19,425,000 - 88,800,000 VND) mỗi học kỳ. Địa chỉ: 116 Samseongyo-ro 16-gil, Seongbuk-gu, Seoul. Xếp hạng: #35." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/hansung" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Hansung",
          "alternateName": "Hansung University",
          "url": "https://www.hansung.ac.kr",
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
    return <StaticRouter location="/university/hansung">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'hansung' }} />;
}
