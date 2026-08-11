import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_179',
  routeUrl: '/university/mock_uni_179',
  Head: () => (
    <>
      <title>Đại học Hansung - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Hansung (Hansung University): 3,447,000 - 4,477,000 KRW (63,769,500 - 82,824,500 VND) mỗi học kỳ. Địa chỉ: 한성대정문, 삼선교로16길, 삼선동2가, 삼선동, 성북구, 서울특별시, 02876, 대한민국. Xếp hạng: #202." />
      <meta name="keywords" content="Đại học Hansung, học phí Đại học Hansung, Hansung University, Hansung대학교, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_179" />
      <meta property="og:title" content="Đại học Hansung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Hansung (Hansung University): 3,447,000 - 4,477,000 KRW (63,769,500 - 82,824,500 VND) mỗi học kỳ. Địa chỉ: 한성대정문, 삼선교로16길, 삼선동2가, 삼선동, 성북구, 서울특별시, 02876, 대한민국. Xếp hạng: #202." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_179" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Hansung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Hansung (Hansung University): 3,447,000 - 4,477,000 KRW (63,769,500 - 82,824,500 VND) mỗi học kỳ. Địa chỉ: 한성대정문, 삼선교로16길, 삼선동2가, 삼선동, 성북구, 서울특별시, 02876, 대한민국. Xếp hạng: #202." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_179" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Hansung",
          "alternateName": "Hansung University",
          "url": "https://www.hansung.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gangwon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_179">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_179' }} />;
}
