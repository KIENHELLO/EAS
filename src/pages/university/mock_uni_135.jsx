import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_135',
  routeUrl: '/university/mock_uni_135',
  Head: () => (
    <>
      <title>Đại học Sangji - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sangji (Sangji University): 2,126,000 - 4,599,000 KRW (39,331,000 - 85,081,500 VND) mỗi học kỳ. Địa chỉ: 123 Sangji-ro, Jeju. Xếp hạng: #158." />
      <meta name="keywords" content="Đại học Sangji, học phí Đại học Sangji, Sangji University, Sangji대학교, đại học Jeju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_135" />
      <meta property="og:title" content="Đại học Sangji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sangji (Sangji University): 2,126,000 - 4,599,000 KRW (39,331,000 - 85,081,500 VND) mỗi học kỳ. Địa chỉ: 123 Sangji-ro, Jeju. Xếp hạng: #158." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_135" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sangji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sangji (Sangji University): 2,126,000 - 4,599,000 KRW (39,331,000 - 85,081,500 VND) mỗi học kỳ. Địa chỉ: 123 Sangji-ro, Jeju. Xếp hạng: #158." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_135" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sangji",
          "alternateName": "Sangji University",
          "url": "https://www.sangji.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeju"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_135">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_135' }} />;
}
