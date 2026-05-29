import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/chonnam_science',
  routeUrl: '/university/chonnam_science',
  Head: () => (
    <>
      <title>Cao đẳng Khoa học Chonnam - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Khoa học Chonnam (Chonnam Science College): 2,400,000 - 3,400,000 KRW (44,400,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: 19 Okwa-gil, Okwa-myeon, Gokseong-gun, Jeollanam-do. Xếp hạng: #75." />
      <meta name="keywords" content="Cao đẳng Khoa học Chonnam, học phí Cao đẳng Khoa học Chonnam, Chonnam Science College, 전남과학대학교, đại học Jeonnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/chonnam_science" />
      <meta property="og:title" content="Cao đẳng Khoa học Chonnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Khoa học Chonnam (Chonnam Science College): 2,400,000 - 3,400,000 KRW (44,400,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: 19 Okwa-gil, Okwa-myeon, Gokseong-gun, Jeollanam-do. Xếp hạng: #75." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/chonnam_science" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Khoa học Chonnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Khoa học Chonnam (Chonnam Science College): 2,400,000 - 3,400,000 KRW (44,400,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: 19 Okwa-gil, Okwa-myeon, Gokseong-gun, Jeollanam-do. Xếp hạng: #75." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/chonnam_science" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Khoa học Chonnam",
          "alternateName": "Chonnam Science College",
          "url": "http://www.cntc.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeonnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/chonnam_science">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'chonnam_science' }} />;
}
