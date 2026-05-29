import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_195',
  routeUrl: '/university/mock_uni_195',
  Head: () => (
    <>
      <title>Đại học Ulsan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Ulsan (Ulsan University): 2,631,000 - 4,079,000 KRW (48,673,500 - 75,461,500 VND) mỗi học kỳ. Địa chỉ: 123 Ulsan-ro, Gyeonggi. Xếp hạng: #218." />
      <meta name="keywords" content="Đại học Ulsan, học phí Đại học Ulsan, Ulsan University, Ulsan대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_195" />
      <meta property="og:title" content="Đại học Ulsan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Ulsan (Ulsan University): 2,631,000 - 4,079,000 KRW (48,673,500 - 75,461,500 VND) mỗi học kỳ. Địa chỉ: 123 Ulsan-ro, Gyeonggi. Xếp hạng: #218." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_195" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Ulsan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Ulsan (Ulsan University): 2,631,000 - 4,079,000 KRW (48,673,500 - 75,461,500 VND) mỗi học kỳ. Địa chỉ: 123 Ulsan-ro, Gyeonggi. Xếp hạng: #218." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_195" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Ulsan",
          "alternateName": "Ulsan University",
          "url": "https://www.ulsan.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_195">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_195' }} />;
}
