import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/nazarene',
  routeUrl: '/university/nazarene',
  Head: () => (
    <>
      <title>Đại học Nazarene (Chungnam) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Nazarene (Chungnam) (Korea Nazarene University): 3,500,000 - 4,500,000 KRW (64,750,000 - 83,250,000 VND) mỗi học kỳ. Địa chỉ: 48 Wolbong-ro, Seobuk-gu, Cheonan, Chungcheongnam-do. Xếp hạng: #45." />
      <meta name="keywords" content="Đại học Nazarene (Chungnam), học phí Đại học Nazarene (Chungnam), Korea Nazarene University, 나사렛대학교, đại học Chungnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/nazarene" />
      <meta property="og:title" content="Đại học Nazarene (Chungnam) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Nazarene (Chungnam) (Korea Nazarene University): 3,500,000 - 4,500,000 KRW (64,750,000 - 83,250,000 VND) mỗi học kỳ. Địa chỉ: 48 Wolbong-ro, Seobuk-gu, Cheonan, Chungcheongnam-do. Xếp hạng: #45." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/nazarene" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Nazarene (Chungnam) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Nazarene (Chungnam) (Korea Nazarene University): 3,500,000 - 4,500,000 KRW (64,750,000 - 83,250,000 VND) mỗi học kỳ. Địa chỉ: 48 Wolbong-ro, Seobuk-gu, Cheonan, Chungcheongnam-do. Xếp hạng: #45." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/nazarene" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Nazarene (Chungnam)",
          "alternateName": "Korea Nazarene University",
          "url": "http://www.kornu.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/nazarene">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'nazarene' }} />;
}
