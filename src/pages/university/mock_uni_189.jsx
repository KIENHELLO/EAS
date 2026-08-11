import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_189',
  routeUrl: '/university/mock_uni_189',
  Head: () => (
    <>
      <title>Đại học Duksung - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Duksung (Duksung University): 2,781,000 - 4,663,000 KRW (51,448,500 - 86,265,500 VND) mỗi học kỳ. Địa chỉ: 덕성여자대학교 도서관, 우이천로, 쌍문동, 쌍문1동, 도봉구, 서울특별시, 01377, 대한민국. Xếp hạng: #212." />
      <meta name="keywords" content="Đại học Duksung, học phí Đại học Duksung, Duksung University, Duksung대학교, đại học Daegu" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_189" />
      <meta property="og:title" content="Đại học Duksung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Duksung (Duksung University): 2,781,000 - 4,663,000 KRW (51,448,500 - 86,265,500 VND) mỗi học kỳ. Địa chỉ: 덕성여자대학교 도서관, 우이천로, 쌍문동, 쌍문1동, 도봉구, 서울특별시, 01377, 대한민국. Xếp hạng: #212." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_189" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Duksung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Duksung (Duksung University): 2,781,000 - 4,663,000 KRW (51,448,500 - 86,265,500 VND) mỗi học kỳ. Địa chỉ: 덕성여자대학교 도서관, 우이천로, 쌍문동, 쌍문1동, 도봉구, 서울특별시, 01377, 대한민국. Xếp hạng: #212." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_189" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Duksung",
          "alternateName": "Duksung University",
          "url": "https://www.duksung.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daegu"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_189">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_189' }} />;
}
