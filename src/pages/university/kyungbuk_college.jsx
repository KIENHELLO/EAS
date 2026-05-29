import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kyungbuk_college',
  routeUrl: '/university/kyungbuk_college',
  Head: () => (
    <>
      <title>Cao đẳng Kyungbuk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Kyungbuk (Kyungbuk College): 1,800,000 - 2,000,000 KRW (33,300,000 - 37,000,000 VND) mỗi học kỳ. Địa chỉ: 315 Daehak-ro, Yeongju, Gyeongsangbuk-do. Xếp hạng: #92." />
      <meta name="keywords" content="Cao đẳng Kyungbuk, học phí Cao đẳng Kyungbuk, Kyungbuk College, 경북전문대학교, đại học Gyeongbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kyungbuk_college" />
      <meta property="og:title" content="Cao đẳng Kyungbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Kyungbuk (Kyungbuk College): 1,800,000 - 2,000,000 KRW (33,300,000 - 37,000,000 VND) mỗi học kỳ. Địa chỉ: 315 Daehak-ro, Yeongju, Gyeongsangbuk-do. Xếp hạng: #92." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kyungbuk_college" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Kyungbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Kyungbuk (Kyungbuk College): 1,800,000 - 2,000,000 KRW (33,300,000 - 37,000,000 VND) mỗi học kỳ. Địa chỉ: 315 Daehak-ro, Yeongju, Gyeongsangbuk-do. Xếp hạng: #92." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kyungbuk_college" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Kyungbuk",
          "alternateName": "Kyungbuk College",
          "url": "https://www.kbc.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/kyungbuk_college">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kyungbuk_college' }} />;
}
