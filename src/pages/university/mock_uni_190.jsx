import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_190',
  routeUrl: '/university/mock_uni_190',
  Head: () => (
    <>
      <title>Đại học Hongik - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Hongik (Hongik University): 2,827,000 - 4,851,000 KRW (52,299,500 - 89,743,500 VND) mỗi học kỳ. Địa chỉ: 94, 와우산로, 홍대, 17통, 서강동, 마포구, 서울특별시, 04066, 대한민국. Xếp hạng: #213." />
      <meta name="keywords" content="Đại học Hongik, học phí Đại học Hongik, Hongik University, Hongik대학교, đại học Incheon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_190" />
      <meta property="og:title" content="Đại học Hongik - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Hongik (Hongik University): 2,827,000 - 4,851,000 KRW (52,299,500 - 89,743,500 VND) mỗi học kỳ. Địa chỉ: 94, 와우산로, 홍대, 17통, 서강동, 마포구, 서울특별시, 04066, 대한민국. Xếp hạng: #213." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_190" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Hongik - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Hongik (Hongik University): 2,827,000 - 4,851,000 KRW (52,299,500 - 89,743,500 VND) mỗi học kỳ. Địa chỉ: 94, 와우산로, 홍대, 17통, 서강동, 마포구, 서울특별시, 04066, 대한민국. Xếp hạng: #213." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_190" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Hongik",
          "alternateName": "Hongik University",
          "url": "https://www.hongik.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Incheon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_190">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_190' }} />;
}
