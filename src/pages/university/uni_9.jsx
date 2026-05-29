import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/uni_9',
  routeUrl: '/university/uni_9',
  Head: () => (
    <>
      <title>한림Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường 한림Đại học  (Hallym University): 3,330,000 - 5,920,000 KRW (61,605,000 - 109,520,000 VND) mỗi học kỳ. Địa chỉ: Gangwon, South Korea. Xếp hạng: #101." />
      <meta name="keywords" content="한림Đại học , học phí 한림Đại học , Hallym University, 한림대학교, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/uni_9" />
      <meta property="og:title" content="한림Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường 한림Đại học  (Hallym University): 3,330,000 - 5,920,000 KRW (61,605,000 - 109,520,000 VND) mỗi học kỳ. Địa chỉ: Gangwon, South Korea. Xếp hạng: #101." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/uni_9" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="한림Đại học  - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường 한림Đại học  (Hallym University): 3,330,000 - 5,920,000 KRW (61,605,000 - 109,520,000 VND) mỗi học kỳ. Địa chỉ: Gangwon, South Korea. Xếp hạng: #101." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/uni_9" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "한림Đại học ",
          "alternateName": "Hallym University",
          "url": "http://www.uni_9.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gangwon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/uni_9">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'uni_9' }} />;
}
