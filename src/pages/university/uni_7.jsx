import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/uni_7',
  routeUrl: '/university/uni_7',
  Head: () => (
    <>
      <title>창원Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường 창원Đại học  (Changwon University): 3,510,000 - 5,655,000 KRW (64,935,000 - 104,617,500 VND) mỗi học kỳ. Địa chỉ: Seoul, South Korea. Xếp hạng: #99." />
      <meta name="keywords" content="창원Đại học , học phí 창원Đại học , Changwon University, 창원대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/uni_7" />
      <meta property="og:title" content="창원Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường 창원Đại học  (Changwon University): 3,510,000 - 5,655,000 KRW (64,935,000 - 104,617,500 VND) mỗi học kỳ. Địa chỉ: Seoul, South Korea. Xếp hạng: #99." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/uni_7" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="창원Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường 창원Đại học  (Changwon University): 3,510,000 - 5,655,000 KRW (64,935,000 - 104,617,500 VND) mỗi học kỳ. Địa chỉ: Seoul, South Korea. Xếp hạng: #99." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/uni_7" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "창원Đại học ",
          "alternateName": "Changwon University",
          "url": "http://www.uni_7.ac.kr",
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
    return <StaticRouter location="/university/uni_7">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'uni_7' }} />;
}
