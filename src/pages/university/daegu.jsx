import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/daegu',
  routeUrl: '/university/daegu',
  Head: () => (
    <>
      <title>Đại học Công giáo Daegu - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Công giáo Daegu (Đại học Công giáo Daegu (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 42Gyeongsan, 201, 대구대로, 진량읍, 경산시, 경상북도, 38454, 대한민국. Xếp hạng: #191." />
      <meta name="keywords" content="Đại học Công giáo Daegu, học phí Đại học Công giáo Daegu, Đại học Công giáo Daegu (Korea), Đại học Công giáo Daegu, đại học Gyeongsangbuk-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/daegu" />
      <meta property="og:title" content="Đại học Công giáo Daegu - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Công giáo Daegu (Đại học Công giáo Daegu (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 42Gyeongsan, 201, 대구대로, 진량읍, 경산시, 경상북도, 38454, 대한민국. Xếp hạng: #191." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/daegu" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Công giáo Daegu - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Công giáo Daegu (Đại học Công giáo Daegu (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 42Gyeongsan, 201, 대구대로, 진량읍, 경산시, 경상북도, 38454, 대한민국. Xếp hạng: #191." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/daegu" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Công giáo Daegu",
          "alternateName": "Đại học Công giáo Daegu (Korea)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongsangbuk-do"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/daegu">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'daegu' }} />;
}
