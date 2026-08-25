import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/jeonjunationalofeducation',
  routeUrl: '/university/jeonjunationalofeducation',
  Head: () => (
    <>
      <title>Đại học Sư phạm Quốc gia Jeonju - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sư phạm Quốc gia Jeonju (Jeonju National University of Education): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #567." />
      <meta name="keywords" content="Đại học Sư phạm Quốc gia Jeonju, học phí Đại học Sư phạm Quốc gia Jeonju, Jeonju National University of Education, 전주교육대학교, đại học Jeonbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/jeonjunationalofeducation" />
      <meta property="og:title" content="Đại học Sư phạm Quốc gia Jeonju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sư phạm Quốc gia Jeonju (Jeonju National University of Education): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #567." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/jeonjunationalofeducation" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sư phạm Quốc gia Jeonju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sư phạm Quốc gia Jeonju (Jeonju National University of Education): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #567." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/jeonjunationalofeducation" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sư phạm Quốc gia Jeonju",
          "alternateName": "Jeonju National University of Education",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeonbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/jeonjunationalofeducation">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'jeonjunationalofeducation' }} />;
}
