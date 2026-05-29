import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/uni_4',
  routeUrl: '/university/uni_4',
  Head: () => (
    <>
      <title>동아Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường 동아Đại học  (Dong-A University): 3,060,000 - 5,440,000 KRW (56,610,000 - 100,640,000 VND) mỗi học kỳ. Địa chỉ: Busan, South Korea. Xếp hạng: #96." />
      <meta name="keywords" content="동아Đại học , học phí 동아Đại học , Dong-A University, 동아대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/uni_4" />
      <meta property="og:title" content="동아Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường 동아Đại học  (Dong-A University): 3,060,000 - 5,440,000 KRW (56,610,000 - 100,640,000 VND) mỗi học kỳ. Địa chỉ: Busan, South Korea. Xếp hạng: #96." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/uni_4" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="동아Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường 동아Đại học  (Dong-A University): 3,060,000 - 5,440,000 KRW (56,610,000 - 100,640,000 VND) mỗi học kỳ. Địa chỉ: Busan, South Korea. Xếp hạng: #96." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/uni_4" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "동아Đại học ",
          "alternateName": "Dong-A University",
          "url": "http://www.uni_4.ac.kr",
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
    return <StaticRouter location="/university/uni_4">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'uni_4' }} />;
}
