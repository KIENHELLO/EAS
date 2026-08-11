import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/joobu_795',
  routeUrl: '/university/joobu_795',
  Head: () => (
    <>
      <title>Đại học Joobu - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Joobu (Đại học Joobu (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 송백관, 201, 대학로, 추부면, 금산군, 충청남도, 32713, 대한민국. Xếp hạng: #159." />
      <meta name="keywords" content="Đại học Joobu, học phí Đại học Joobu, Đại học Joobu (Imported), Đại học Joobu, đại học Chungcheongnam-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/joobu_795" />
      <meta property="og:title" content="Đại học Joobu - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Joobu (Đại học Joobu (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 송백관, 201, 대학로, 추부면, 금산군, 충청남도, 32713, 대한민국. Xếp hạng: #159." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/joobu_795" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Joobu - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Joobu (Đại học Joobu (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 송백관, 201, 대학로, 추부면, 금산군, 충청남도, 32713, 대한민국. Xếp hạng: #159." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/joobu_795" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Joobu",
          "alternateName": "Đại học Joobu (Imported)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungcheongnam-do"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/joobu_795">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'joobu_795' }} />;
}
