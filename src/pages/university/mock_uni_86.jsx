import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_86',
  routeUrl: '/university/mock_uni_86',
  Head: () => (
    <>
      <title>Đại học Kookmin - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Kookmin (Kookmin University): 2,129,000 - 3,833,000 KRW (39,386,500 - 70,910,500 VND) mỗi học kỳ. Địa chỉ: 123 Kookmin-ro, Busan. Xếp hạng: #109." />
      <meta name="keywords" content="Đại học Kookmin, học phí Đại học Kookmin, Kookmin University, Kookmin대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_86" />
      <meta property="og:title" content="Đại học Kookmin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Kookmin (Kookmin University): 2,129,000 - 3,833,000 KRW (39,386,500 - 70,910,500 VND) mỗi học kỳ. Địa chỉ: 123 Kookmin-ro, Busan. Xếp hạng: #109." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_86" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Kookmin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Kookmin (Kookmin University): 2,129,000 - 3,833,000 KRW (39,386,500 - 70,910,500 VND) mỗi học kỳ. Địa chỉ: 123 Kookmin-ro, Busan. Xếp hạng: #109." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_86" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Kookmin",
          "alternateName": "Kookmin University",
          "url": "https://www.kookmin.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Busan"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_86">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_86' }} />;
}
