import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/uni_10',
  routeUrl: '/university/uni_10',
  Head: () => (
    <>
      <title>명지Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường 명지Đại học  (Myongji University): 3,555,000 - 6,320,000 KRW (65,767,500 - 116,920,000 VND) mỗi học kỳ. Địa chỉ: Seoul, South Korea. Xếp hạng: #102." />
      <meta name="keywords" content="명지Đại học , học phí 명지Đại học , Myongji University, 명지대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/uni_10" />
      <meta property="og:title" content="명지Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường 명지Đại học  (Myongji University): 3,555,000 - 6,320,000 KRW (65,767,500 - 116,920,000 VND) mỗi học kỳ. Địa chỉ: Seoul, South Korea. Xếp hạng: #102." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/uni_10" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="명지Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường 명지Đại học  (Myongji University): 3,555,000 - 6,320,000 KRW (65,767,500 - 116,920,000 VND) mỗi học kỳ. Địa chỉ: Seoul, South Korea. Xếp hạng: #102." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/uni_10" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "명지Đại học ",
          "alternateName": "Myongji University",
          "url": "http://www.uni_10.ac.kr",
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
    return <StaticRouter location="/university/uni_10">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'uni_10' }} />;
}
