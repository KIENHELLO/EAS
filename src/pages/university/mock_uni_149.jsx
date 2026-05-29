import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_149',
  routeUrl: '/university/mock_uni_149',
  Head: () => (
    <>
      <title>Đại học Sungshin - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sungshin (Sungshin University): 2,069,000 - 4,364,000 KRW (38,276,500 - 80,734,000 VND) mỗi học kỳ. Địa chỉ: 123 Sungshin-ro, Jeonnam. Xếp hạng: #172." />
      <meta name="keywords" content="Đại học Sungshin, học phí Đại học Sungshin, Sungshin University, Sungshin대학교, đại học Jeonnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_149" />
      <meta property="og:title" content="Đại học Sungshin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sungshin (Sungshin University): 2,069,000 - 4,364,000 KRW (38,276,500 - 80,734,000 VND) mỗi học kỳ. Địa chỉ: 123 Sungshin-ro, Jeonnam. Xếp hạng: #172." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_149" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sungshin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sungshin (Sungshin University): 2,069,000 - 4,364,000 KRW (38,276,500 - 80,734,000 VND) mỗi học kỳ. Địa chỉ: 123 Sungshin-ro, Jeonnam. Xếp hạng: #172." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_149" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sungshin",
          "alternateName": "Sungshin University",
          "url": "https://www.sungshin.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeonnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_149">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_149' }} />;
}
