import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_174',
  routeUrl: '/university/mock_uni_174',
  Head: () => (
    <>
      <title>Đại học Inha - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Inha (Inha University): 3,138,000 - 4,859,000 KRW (58,053,000 - 89,891,500 VND) mỗi học kỳ. Địa chỉ: 95, 호암로, 호원동, 호원1동, 의정부시, 경기도, 11644, 대한민국. Xếp hạng: #197." />
      <meta name="keywords" content="Đại học Inha, học phí Đại học Inha, Inha University, Inha대학교, đại học Gwangju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_174" />
      <meta property="og:title" content="Đại học Inha - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Inha (Inha University): 3,138,000 - 4,859,000 KRW (58,053,000 - 89,891,500 VND) mỗi học kỳ. Địa chỉ: 95, 호암로, 호원동, 호원1동, 의정부시, 경기도, 11644, 대한민국. Xếp hạng: #197." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_174" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Inha - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Inha (Inha University): 3,138,000 - 4,859,000 KRW (58,053,000 - 89,891,500 VND) mỗi học kỳ. Địa chỉ: 95, 호암로, 호원동, 호원1동, 의정부시, 경기도, 11644, 대한민국. Xếp hạng: #197." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_174" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Inha",
          "alternateName": "Inha University",
          "url": "https://www.inha.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gwangju"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_174">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_174' }} />;
}
