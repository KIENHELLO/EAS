import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/uni_6',
  routeUrl: '/university/uni_6',
  Head: () => (
    <>
      <title>울산Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường 울산Đại học  (Ulsan University): 3,285,000 - 5,840,000 KRW (60,772,500 - 108,040,000 VND) mỗi học kỳ. Địa chỉ: Ulsan, South Korea. Xếp hạng: #98." />
      <meta name="keywords" content="울산Đại học , học phí 울산Đại học , Ulsan University, 울산대학교, đại học Ulsan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/uni_6" />
      <meta property="og:title" content="울산Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường 울산Đại học  (Ulsan University): 3,285,000 - 5,840,000 KRW (60,772,500 - 108,040,000 VND) mỗi học kỳ. Địa chỉ: Ulsan, South Korea. Xếp hạng: #98." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/uni_6" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="울산Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường 울산Đại học  (Ulsan University): 3,285,000 - 5,840,000 KRW (60,772,500 - 108,040,000 VND) mỗi học kỳ. Địa chỉ: Ulsan, South Korea. Xếp hạng: #98." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/uni_6" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "울산Đại học ",
          "alternateName": "Ulsan University",
          "url": "http://www.uni_6.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Ulsan"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/uni_6">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'uni_6' }} />;
}
