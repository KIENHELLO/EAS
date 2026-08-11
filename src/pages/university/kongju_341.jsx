import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kongju_341',
  routeUrl: '/university/kongju_341',
  Head: () => (
    <>
      <title>Đại học Quốc gia Kongju - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Kongju (Đại học Quốc gia Kongju (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 56, 공주대학로, 신관동현대1차아파트, 신관동, 공주시, 충청남도, 32588, 대한민국. Xếp hạng: #155." />
      <meta name="keywords" content="Đại học Quốc gia Kongju, học phí Đại học Quốc gia Kongju, Đại học Quốc gia Kongju (Imported), Đại học Quốc gia Kongju, đại học Chungcheongnam-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kongju_341" />
      <meta property="og:title" content="Đại học Quốc gia Kongju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Kongju (Đại học Quốc gia Kongju (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 56, 공주대학로, 신관동현대1차아파트, 신관동, 공주시, 충청남도, 32588, 대한민국. Xếp hạng: #155." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kongju_341" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Kongju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Kongju (Đại học Quốc gia Kongju (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 56, 공주대학로, 신관동현대1차아파트, 신관동, 공주시, 충청남도, 32588, 대한민국. Xếp hạng: #155." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kongju_341" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Kongju",
          "alternateName": "Đại học Quốc gia Kongju (Imported)",
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
    return <StaticRouter location="/university/kongju_341">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kongju_341' }} />;
}
