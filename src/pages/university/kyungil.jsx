import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kyungil',
  routeUrl: '/university/kyungil',
  Head: () => (
    <>
      <title>Đại học Kyungil (Daegu) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Kyungil (Daegu) (Kyungil University): 3,400,000 - 5,500,000 KRW (62,900,000 - 101,750,000 VND) mỗi học kỳ. Địa chỉ: 50 Gyeongil-ro, Hayang-eup, Gyeongsan, Gyeongsangbuk-do. Xếp hạng: #48." />
      <meta name="keywords" content="Đại học Kyungil (Daegu), học phí Đại học Kyungil (Daegu), Kyungil University, 경일대학교, đại học Daegu" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kyungil" />
      <meta property="og:title" content="Đại học Kyungil (Daegu) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Kyungil (Daegu) (Kyungil University): 3,400,000 - 5,500,000 KRW (62,900,000 - 101,750,000 VND) mỗi học kỳ. Địa chỉ: 50 Gyeongil-ro, Hayang-eup, Gyeongsan, Gyeongsangbuk-do. Xếp hạng: #48." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kyungil" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Kyungil (Daegu) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Kyungil (Daegu) (Kyungil University): 3,400,000 - 5,500,000 KRW (62,900,000 - 101,750,000 VND) mỗi học kỳ. Địa chỉ: 50 Gyeongil-ro, Hayang-eup, Gyeongsan, Gyeongsangbuk-do. Xếp hạng: #48." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kyungil" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Kyungil (Daegu)",
          "alternateName": "Kyungil University",
          "url": "https://www.kiu.ac.kr",
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
    return <StaticRouter location="/university/kyungil">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kyungil' }} />;
}
