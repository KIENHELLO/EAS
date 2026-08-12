import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/sunmoon',
  routeUrl: '/university/sunmoon',
  Head: () => (
    <>
      <title>Đại học Sun Moon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sun Moon (Sun Moon University): 3,097,000 - 3,950,000 KRW (57,294,500 - 73,075,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #48." />
      <meta name="keywords" content="Đại học Sun Moon, học phí Đại học Sun Moon, Sun Moon University, 선문대학교, đại học Chungnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/sunmoon" />
      <meta property="og:title" content="Đại học Sun Moon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sun Moon (Sun Moon University): 3,097,000 - 3,950,000 KRW (57,294,500 - 73,075,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #48." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/sunmoon" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sun Moon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sun Moon (Sun Moon University): 3,097,000 - 3,950,000 KRW (57,294,500 - 73,075,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #48." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/sunmoon" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sun Moon",
          "alternateName": "Sun Moon University",
          "url": "",
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
    return <StaticRouter location="/university/sunmoon">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'sunmoon' }} />;
}
