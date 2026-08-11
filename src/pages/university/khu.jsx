import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/khu',
  routeUrl: '/university/khu',
  Head: () => (
    <>
      <title>Đại học Kyunghee - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Kyunghee (Kyung Hee University): 3,820,000 - 6,350,000 KRW (70,670,000 - 117,475,000 VND) mỗi học kỳ. Địa chỉ: 26 Kyungheedae-ro, Dongdaemun-gu, Seoul. Xếp hạng: #7." />
      <meta name="keywords" content="Đại học Kyunghee, học phí Đại học Kyunghee, Kyung Hee University, 경희대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/khu" />
      <meta property="og:title" content="Đại học Kyunghee - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Kyunghee (Kyung Hee University): 3,820,000 - 6,350,000 KRW (70,670,000 - 117,475,000 VND) mỗi học kỳ. Địa chỉ: 26 Kyungheedae-ro, Dongdaemun-gu, Seoul. Xếp hạng: #7." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/khu" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Kyunghee - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Kyunghee (Kyung Hee University): 3,820,000 - 6,350,000 KRW (70,670,000 - 117,475,000 VND) mỗi học kỳ. Địa chỉ: 26 Kyungheedae-ro, Dongdaemun-gu, Seoul. Xếp hạng: #7." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/khu" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Kyunghee",
          "alternateName": "Kyung Hee University",
          "url": "https://www.khu.ac.kr",
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
    return <StaticRouter location="/university/khu">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'khu' }} />;
}
