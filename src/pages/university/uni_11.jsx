import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/uni_11',
  routeUrl: '/university/uni_11',
  Head: () => (
    <>
      <title>상명Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường 상명Đại học  (Sangmyung University): 3,510,000 - 6,240,000 KRW (64,935,000 - 115,440,000 VND) mỗi học kỳ. Địa chỉ: Seoul, South Korea. Xếp hạng: #103." />
      <meta name="keywords" content="상명Đại học , học phí 상명Đại học , Sangmyung University, 상명대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/uni_11" />
      <meta property="og:title" content="상명Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường 상명Đại học  (Sangmyung University): 3,510,000 - 6,240,000 KRW (64,935,000 - 115,440,000 VND) mỗi học kỳ. Địa chỉ: Seoul, South Korea. Xếp hạng: #103." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/uni_11" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="상명Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường 상명Đại học  (Sangmyung University): 3,510,000 - 6,240,000 KRW (64,935,000 - 115,440,000 VND) mỗi học kỳ. Địa chỉ: Seoul, South Korea. Xếp hạng: #103." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/uni_11" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "상명Đại học ",
          "alternateName": "Sangmyung University",
          "url": "http://www.uni_11.ac.kr",
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
    return <StaticRouter location="/university/uni_11">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'uni_11' }} />;
}
