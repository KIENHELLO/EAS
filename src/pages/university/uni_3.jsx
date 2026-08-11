import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/uni_3',
  routeUrl: '/university/uni_3',
  Head: () => (
    <>
      <title>Đại học Chosun - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Chosun (Chosun University): 3,150,000 - 5,600,000 KRW (58,275,000 - 103,600,000 VND) mỗi học kỳ. Địa chỉ: 조선대학교 중앙도서관, 조선대5길, 서석동, 서남동, 동구, 광주, 전남광주통합특별시, 61452, 대한민국. Xếp hạng: #95." />
      <meta name="keywords" content="Đại học Chosun, học phí Đại học Chosun, Chosun University, 조선대학교, đại học Gwangju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/uni_3" />
      <meta property="og:title" content="Đại học Chosun - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Chosun (Chosun University): 3,150,000 - 5,600,000 KRW (58,275,000 - 103,600,000 VND) mỗi học kỳ. Địa chỉ: 조선대학교 중앙도서관, 조선대5길, 서석동, 서남동, 동구, 광주, 전남광주통합특별시, 61452, 대한민국. Xếp hạng: #95." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/uni_3" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Chosun - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Chosun (Chosun University): 3,150,000 - 5,600,000 KRW (58,275,000 - 103,600,000 VND) mỗi học kỳ. Địa chỉ: 조선대학교 중앙도서관, 조선대5길, 서석동, 서남동, 동구, 광주, 전남광주통합특별시, 61452, 대한민국. Xếp hạng: #95." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/uni_3" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Chosun",
          "alternateName": "Chosun University",
          "url": "http://www.uni_3.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gwangju"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/uni_3">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'uni_3' }} />;
}
