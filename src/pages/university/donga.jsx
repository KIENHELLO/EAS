import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/donga',
  routeUrl: '/university/donga',
  Head: () => (
    <>
      <title>Đại học Dong-A - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Dong-A (Đại học Dong-A (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 부산광역시 사하구 낙동대로550번길 37 (하단동, 동아대학교). Xếp hạng: #195." />
      <meta name="keywords" content="Đại học Dong-A, học phí Đại học Dong-A, Đại học Dong-A (Korea), Đại học Dong-A, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/donga" />
      <meta property="og:title" content="Đại học Dong-A - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Dong-A (Đại học Dong-A (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 부산광역시 사하구 낙동대로550번길 37 (하단동, 동아대학교). Xếp hạng: #195." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/donga" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Dong-A - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Dong-A (Đại học Dong-A (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 부산광역시 사하구 낙동대로550번길 37 (하단동, 동아대학교). Xếp hạng: #195." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/donga" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Dong-A",
          "alternateName": "Đại học Dong-A (Korea)",
          "url": "https://www.studyinkorea.go.kr",
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
    return <StaticRouter location="/university/donga">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'donga' }} />;
}
