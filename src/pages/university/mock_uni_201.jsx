import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_201',
  routeUrl: '/university/mock_uni_201',
  Head: () => (
    <>
      <title>Đại học Hanseo - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Hanseo (Hanseo University): 2,272,000 - 4,948,000 KRW (42,032,000 - 91,538,000 VND) mỗi học kỳ. Địa chỉ: 한서대학교 서산캠퍼스, 46, 한서1로, 대곡리, 서산시, 충청남도, 31962, 대한민국. Xếp hạng: #224." />
      <meta name="keywords" content="Đại học Hanseo, học phí Đại học Hanseo, Hanseo University, Hanseo대학교, đại học Gyeongbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_201" />
      <meta property="og:title" content="Đại học Hanseo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Hanseo (Hanseo University): 2,272,000 - 4,948,000 KRW (42,032,000 - 91,538,000 VND) mỗi học kỳ. Địa chỉ: 한서대학교 서산캠퍼스, 46, 한서1로, 대곡리, 서산시, 충청남도, 31962, 대한민국. Xếp hạng: #224." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_201" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Hanseo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Hanseo (Hanseo University): 2,272,000 - 4,948,000 KRW (42,032,000 - 91,538,000 VND) mỗi học kỳ. Địa chỉ: 한서대학교 서산캠퍼스, 46, 한서1로, 대곡리, 서산시, 충청남도, 31962, 대한민국. Xếp hạng: #224." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_201" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Hanseo",
          "alternateName": "Hanseo University",
          "url": "https://www.hanseo.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_201">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_201' }} />;
}
