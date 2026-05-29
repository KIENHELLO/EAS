import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_122',
  routeUrl: '/university/mock_uni_122',
  Head: () => (
    <>
      <title>Đại học Gwangju - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Gwangju (Gwangju University): 2,257,000 - 4,652,000 KRW (41,754,500 - 86,062,000 VND) mỗi học kỳ. Địa chỉ: 123 Gwangju-ro, Incheon. Xếp hạng: #145." />
      <meta name="keywords" content="Đại học Gwangju, học phí Đại học Gwangju, Gwangju University, Gwangju대학교, đại học Incheon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_122" />
      <meta property="og:title" content="Đại học Gwangju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Gwangju (Gwangju University): 2,257,000 - 4,652,000 KRW (41,754,500 - 86,062,000 VND) mỗi học kỳ. Địa chỉ: 123 Gwangju-ro, Incheon. Xếp hạng: #145." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_122" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Gwangju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Gwangju (Gwangju University): 2,257,000 - 4,652,000 KRW (41,754,500 - 86,062,000 VND) mỗi học kỳ. Địa chỉ: 123 Gwangju-ro, Incheon. Xếp hạng: #145." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_122" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Gwangju",
          "alternateName": "Gwangju University",
          "url": "https://www.gwangju.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_122">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_122' }} />;
}
