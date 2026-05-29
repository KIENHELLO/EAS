import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_188',
  routeUrl: '/university/mock_uni_188',
  Head: () => (
    <>
      <title>Đại học Sangmyung - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sangmyung (Sangmyung University): 3,119,000 - 4,426,000 KRW (57,701,500 - 81,881,000 VND) mỗi học kỳ. Địa chỉ: 123 Sangmyung-ro, Busan. Xếp hạng: #211." />
      <meta name="keywords" content="Đại học Sangmyung, học phí Đại học Sangmyung, Sangmyung University, Sangmyung대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_188" />
      <meta property="og:title" content="Đại học Sangmyung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sangmyung (Sangmyung University): 3,119,000 - 4,426,000 KRW (57,701,500 - 81,881,000 VND) mỗi học kỳ. Địa chỉ: 123 Sangmyung-ro, Busan. Xếp hạng: #211." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_188" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sangmyung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sangmyung (Sangmyung University): 3,119,000 - 4,426,000 KRW (57,701,500 - 81,881,000 VND) mỗi học kỳ. Địa chỉ: 123 Sangmyung-ro, Busan. Xếp hạng: #211." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_188" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sangmyung",
          "alternateName": "Sangmyung University",
          "url": "https://www.sangmyung.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_188">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_188' }} />;
}
