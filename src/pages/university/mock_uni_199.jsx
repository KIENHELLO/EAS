import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_199',
  routeUrl: '/university/mock_uni_199',
  Head: () => (
    <>
      <title>Đại học Kyungwoon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Kyungwoon (Kyungwoon University): 2,194,000 - 4,446,000 KRW (40,589,000 - 82,251,000 VND) mỗi học kỳ. Địa chỉ: 낙동대로, 적림리, 구미시, 경상북도, 39463, 대한민국. Xếp hạng: #222." />
      <meta name="keywords" content="Đại học Kyungwoon, học phí Đại học Kyungwoon, Kyungwoon University, Kyungwoon대학교, đại học Jeonbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_199" />
      <meta property="og:title" content="Đại học Kyungwoon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Kyungwoon (Kyungwoon University): 2,194,000 - 4,446,000 KRW (40,589,000 - 82,251,000 VND) mỗi học kỳ. Địa chỉ: 낙동대로, 적림리, 구미시, 경상북도, 39463, 대한민국. Xếp hạng: #222." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_199" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Kyungwoon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Kyungwoon (Kyungwoon University): 2,194,000 - 4,446,000 KRW (40,589,000 - 82,251,000 VND) mỗi học kỳ. Địa chỉ: 낙동대로, 적림리, 구미시, 경상북도, 39463, 대한민국. Xếp hạng: #222." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_199" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Kyungwoon",
          "alternateName": "Kyungwoon University",
          "url": "https://www.kyungwoon.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeonbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_199">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_199' }} />;
}
