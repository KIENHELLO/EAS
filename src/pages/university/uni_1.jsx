import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/uni_1',
  routeUrl: '/university/uni_1',
  Head: () => (
    <>
      <title>가천Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường 가천Đại học  (Gachon University): 3,645,000 - 6,480,000 KRW (67,432,500 - 119,880,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi, South Korea. Xếp hạng: #93." />
      <meta name="keywords" content="가천Đại học , học phí 가천Đại học , Gachon University, 가천대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/uni_1" />
      <meta property="og:title" content="가천Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường 가천Đại học  (Gachon University): 3,645,000 - 6,480,000 KRW (67,432,500 - 119,880,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi, South Korea. Xếp hạng: #93." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/uni_1" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="가천Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường 가천Đại học  (Gachon University): 3,645,000 - 6,480,000 KRW (67,432,500 - 119,880,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi, South Korea. Xếp hạng: #93." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/uni_1" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "가천Đại học ",
          "alternateName": "Gachon University",
          "url": "http://www.uni_1.ac.kr",
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
    return <StaticRouter location="/university/uni_1">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'uni_1' }} />;
}
