import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_178',
  routeUrl: '/university/mock_uni_178',
  Head: () => (
    <>
      <title>Đại học Sangji - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sangji (Sangji University): 2,104,000 - 4,463,000 KRW (38,924,000 - 82,565,500 VND) mỗi học kỳ. Địa chỉ: 123 Sangji-ro, Gyeonggi. Xếp hạng: #201." />
      <meta name="keywords" content="Đại học Sangji, học phí Đại học Sangji, Sangji University, Sangji대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_178" />
      <meta property="og:title" content="Đại học Sangji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sangji (Sangji University): 2,104,000 - 4,463,000 KRW (38,924,000 - 82,565,500 VND) mỗi học kỳ. Địa chỉ: 123 Sangji-ro, Gyeonggi. Xếp hạng: #201." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_178" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sangji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sangji (Sangji University): 2,104,000 - 4,463,000 KRW (38,924,000 - 82,565,500 VND) mỗi học kỳ. Địa chỉ: 123 Sangji-ro, Gyeonggi. Xếp hạng: #201." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_178" />
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
            "addressRegion": "Gyeonggi"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_178">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_178' }} />;
}
