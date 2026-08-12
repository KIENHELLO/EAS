import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/snu',
  routeUrl: '/university/snu',
  Head: () => (
    <>
      <title>ĐH Quốc gia Seoul - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Quốc gia Seoul (Seoul National University): 2,250,000 - 3,625,000 KRW (41,625,000 - 67,062,500 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #1." />
      <meta name="keywords" content="ĐH Quốc gia Seoul, học phí ĐH Quốc gia Seoul, Seoul National University, 서울대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/snu" />
      <meta property="og:title" content="ĐH Quốc gia Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Quốc gia Seoul (Seoul National University): 2,250,000 - 3,625,000 KRW (41,625,000 - 67,062,500 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #1." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/snu" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Quốc gia Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Quốc gia Seoul (Seoul National University): 2,250,000 - 3,625,000 KRW (41,625,000 - 67,062,500 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #1." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/snu" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Quốc gia Seoul",
          "alternateName": "Seoul National University",
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
    return <StaticRouter location="/university/snu">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'snu' }} />;
}
