import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_99',
  routeUrl: '/university/mock_uni_99',
  Head: () => (
    <>
      <title>Đại học Changwon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Changwon (Changwon University): 2,979,000 - 4,691,000 KRW (55,111,500 - 86,783,500 VND) mỗi học kỳ. Địa chỉ: 123 Changwon-ro, Gyeongbuk. Xếp hạng: #122." />
      <meta name="keywords" content="Đại học Changwon, học phí Đại học Changwon, Changwon University, Changwon대학교, đại học Gyeongbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_99" />
      <meta property="og:title" content="Đại học Changwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Changwon (Changwon University): 2,979,000 - 4,691,000 KRW (55,111,500 - 86,783,500 VND) mỗi học kỳ. Địa chỉ: 123 Changwon-ro, Gyeongbuk. Xếp hạng: #122." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_99" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Changwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Changwon (Changwon University): 2,979,000 - 4,691,000 KRW (55,111,500 - 86,783,500 VND) mỗi học kỳ. Địa chỉ: 123 Changwon-ro, Gyeongbuk. Xếp hạng: #122." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_99" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Changwon",
          "alternateName": "Changwon University",
          "url": "https://www.changwon.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_99">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_99' }} />;
}
