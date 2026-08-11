import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_187',
  routeUrl: '/university/mock_uni_187',
  Head: () => (
    <>
      <title>Đại học Myongji - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Myongji (Myongji University): 2,057,000 - 3,890,000 KRW (38,054,500 - 71,965,000 VND) mỗi học kỳ. Địa chỉ: 134, 가좌로, 홍은2동, 서대문구, 서울특별시, 03656, 대한민국. Xếp hạng: #210." />
      <meta name="keywords" content="Đại học Myongji, học phí Đại học Myongji, Myongji University, Myongji대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_187" />
      <meta property="og:title" content="Đại học Myongji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Myongji (Myongji University): 2,057,000 - 3,890,000 KRW (38,054,500 - 71,965,000 VND) mỗi học kỳ. Địa chỉ: 134, 가좌로, 홍은2동, 서대문구, 서울특별시, 03656, 대한민국. Xếp hạng: #210." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_187" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Myongji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Myongji (Myongji University): 2,057,000 - 3,890,000 KRW (38,054,500 - 71,965,000 VND) mỗi học kỳ. Địa chỉ: 134, 가좌로, 홍은2동, 서대문구, 서울특별시, 03656, 대한민국. Xếp hạng: #210." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_187" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Myongji",
          "alternateName": "Myongji University",
          "url": "https://www.myongji.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Seoul"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_187">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_187' }} />;
}
