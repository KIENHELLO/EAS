import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/hanyang',
  routeUrl: '/university/hanyang',
  Head: () => (
    <>
      <title>Đại học Hanyang - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Hanyang (Hanyang University): 3,690,000 - 6,560,000 KRW (68,265,000 - 121,360,000 VND) mỗi học kỳ. Địa chỉ: 222 Wangsimni-ro, Seongdong-gu, Seoul. Xếp hạng: #6." />
      <meta name="keywords" content="Đại học Hanyang, học phí Đại học Hanyang, Hanyang University, 한양대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/hanyang" />
      <meta property="og:title" content="Đại học Hanyang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Hanyang (Hanyang University): 3,690,000 - 6,560,000 KRW (68,265,000 - 121,360,000 VND) mỗi học kỳ. Địa chỉ: 222 Wangsimni-ro, Seongdong-gu, Seoul. Xếp hạng: #6." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/hanyang" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Hanyang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Hanyang (Hanyang University): 3,690,000 - 6,560,000 KRW (68,265,000 - 121,360,000 VND) mỗi học kỳ. Địa chỉ: 222 Wangsimni-ro, Seongdong-gu, Seoul. Xếp hạng: #6." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/hanyang" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Hanyang",
          "alternateName": "Hanyang University",
          "url": "https://www.hanyang.ac.kr",
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
    return <StaticRouter location="/university/hanyang">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'hanyang' }} />;
}
