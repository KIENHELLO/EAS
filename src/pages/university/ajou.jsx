import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/ajou',
  routeUrl: '/university/ajou',
  Head: () => (
    <>
      <title>ĐH Ajou - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Ajou (Ajou University): 3,690,000 - 6,560,000 KRW (68,265,000 - 121,360,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #18." />
      <meta name="keywords" content="ĐH Ajou, học phí ĐH Ajou, Ajou University, 아주대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/ajou" />
      <meta property="og:title" content="ĐH Ajou - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Ajou (Ajou University): 3,690,000 - 6,560,000 KRW (68,265,000 - 121,360,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #18." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/ajou" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Ajou - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Ajou (Ajou University): 3,690,000 - 6,560,000 KRW (68,265,000 - 121,360,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #18." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/ajou" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Ajou",
          "alternateName": "Ajou University",
          "url": "",
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
    return <StaticRouter location="/university/ajou">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'ajou' }} />;
}
