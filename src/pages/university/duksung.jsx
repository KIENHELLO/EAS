import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/duksung',
  routeUrl: '/university/duksung',
  Head: () => (
    <>
      <title>ĐH Nữ sinh Duksung - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Nữ sinh Duksung (Duksung Women's University): 3,150,000 - 4,650,000 KRW (58,275,000 - 86,025,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #35." />
      <meta name="keywords" content="ĐH Nữ sinh Duksung, học phí ĐH Nữ sinh Duksung, Duksung Women's University, 덕성여자대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/duksung" />
      <meta property="og:title" content="ĐH Nữ sinh Duksung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Nữ sinh Duksung (Duksung Women's University): 3,150,000 - 4,650,000 KRW (58,275,000 - 86,025,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #35." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/duksung" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Nữ sinh Duksung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Nữ sinh Duksung (Duksung Women's University): 3,150,000 - 4,650,000 KRW (58,275,000 - 86,025,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #35." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/duksung" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Nữ sinh Duksung",
          "alternateName": "Duksung Women's University",
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
    return <StaticRouter location="/university/duksung">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'duksung' }} />;
}
