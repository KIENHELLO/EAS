import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_127',
  routeUrl: '/university/mock_uni_127',
  Head: () => (
    <>
      <title>Đại học Tongmyong - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Tongmyong (Tongmyong University): 2,682,000 - 4,660,000 KRW (49,617,000 - 86,210,000 VND) mỗi học kỳ. Địa chỉ: 123 Tongmyong-ro, Gyeonggi. Xếp hạng: #150." />
      <meta name="keywords" content="Đại học Tongmyong, học phí Đại học Tongmyong, Tongmyong University, Tongmyong대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_127" />
      <meta property="og:title" content="Đại học Tongmyong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Tongmyong (Tongmyong University): 2,682,000 - 4,660,000 KRW (49,617,000 - 86,210,000 VND) mỗi học kỳ. Địa chỉ: 123 Tongmyong-ro, Gyeonggi. Xếp hạng: #150." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_127" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Tongmyong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Tongmyong (Tongmyong University): 2,682,000 - 4,660,000 KRW (49,617,000 - 86,210,000 VND) mỗi học kỳ. Địa chỉ: 123 Tongmyong-ro, Gyeonggi. Xếp hạng: #150." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_127" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Tongmyong",
          "alternateName": "Tongmyong University",
          "url": "https://www.tongmyong.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_127">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_127' }} />;
}
