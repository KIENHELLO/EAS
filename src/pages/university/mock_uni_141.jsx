import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_141',
  routeUrl: '/university/mock_uni_141',
  Head: () => (
    <>
      <title>Đại học Pukyong - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Pukyong (Pukyong University): 2,126,000 - 4,477,000 KRW (39,331,000 - 82,824,500 VND) mỗi học kỳ. Địa chỉ: 123 Pukyong-ro, Daejeon. Xếp hạng: #164." />
      <meta name="keywords" content="Đại học Pukyong, học phí Đại học Pukyong, Pukyong University, Pukyong대학교, đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_141" />
      <meta property="og:title" content="Đại học Pukyong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Pukyong (Pukyong University): 2,126,000 - 4,477,000 KRW (39,331,000 - 82,824,500 VND) mỗi học kỳ. Địa chỉ: 123 Pukyong-ro, Daejeon. Xếp hạng: #164." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_141" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Pukyong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Pukyong (Pukyong University): 2,126,000 - 4,477,000 KRW (39,331,000 - 82,824,500 VND) mỗi học kỳ. Địa chỉ: 123 Pukyong-ro, Daejeon. Xếp hạng: #164." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_141" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Pukyong",
          "alternateName": "Pukyong University",
          "url": "https://www.pukyong.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daejeon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_141">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_141' }} />;
}
