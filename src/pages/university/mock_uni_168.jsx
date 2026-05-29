import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_168',
  routeUrl: '/university/mock_uni_168',
  Head: () => (
    <>
      <title>Đại học Dong-Eui - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Dong-Eui (Dong-Eui University): 2,613,000 - 4,978,000 KRW (48,340,500 - 92,093,000 VND) mỗi học kỳ. Địa chỉ: 123 Dong-Eui-ro, Gyeongnam. Xếp hạng: #191." />
      <meta name="keywords" content="Đại học Dong-Eui, học phí Đại học Dong-Eui, Dong-Eui University, Dong-Eui대학교, đại học Gyeongnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_168" />
      <meta property="og:title" content="Đại học Dong-Eui - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Dong-Eui (Dong-Eui University): 2,613,000 - 4,978,000 KRW (48,340,500 - 92,093,000 VND) mỗi học kỳ. Địa chỉ: 123 Dong-Eui-ro, Gyeongnam. Xếp hạng: #191." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_168" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Dong-Eui - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Dong-Eui (Dong-Eui University): 2,613,000 - 4,978,000 KRW (48,340,500 - 92,093,000 VND) mỗi học kỳ. Địa chỉ: 123 Dong-Eui-ro, Gyeongnam. Xếp hạng: #191." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_168" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Dong-Eui",
          "alternateName": "Dong-Eui University",
          "url": "https://www.dongeui.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_168">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_168' }} />;
}
