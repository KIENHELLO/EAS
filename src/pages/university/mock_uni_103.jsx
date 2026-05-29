import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_103',
  routeUrl: '/university/mock_uni_103',
  Head: () => (
    <>
      <title>Đại học Duksung - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Duksung (Duksung University): 2,938,000 - 4,301,000 KRW (54,353,000 - 79,568,500 VND) mỗi học kỳ. Địa chỉ: 123 Duksung-ro, Busan. Xếp hạng: #126." />
      <meta name="keywords" content="Đại học Duksung, học phí Đại học Duksung, Duksung University, Duksung대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_103" />
      <meta property="og:title" content="Đại học Duksung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Duksung (Duksung University): 2,938,000 - 4,301,000 KRW (54,353,000 - 79,568,500 VND) mỗi học kỳ. Địa chỉ: 123 Duksung-ro, Busan. Xếp hạng: #126." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_103" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Duksung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Duksung (Duksung University): 2,938,000 - 4,301,000 KRW (54,353,000 - 79,568,500 VND) mỗi học kỳ. Địa chỉ: 123 Duksung-ro, Busan. Xếp hạng: #126." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_103" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Duksung",
          "alternateName": "Duksung University",
          "url": "https://www.duksung.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_103">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_103' }} />;
}
