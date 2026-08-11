import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kyungsang_78',
  routeUrl: '/university/kyungsang_78',
  Head: () => (
    <>
      <title>Đại học Quốc gia Kyungsang - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Kyungsang (Đại học Quốc gia Kyungsang (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 내동로, 가좌동, 가호동, 진주시, 경상남도, 52826, 대한민국. Xếp hạng: #162." />
      <meta name="keywords" content="Đại học Quốc gia Kyungsang, học phí Đại học Quốc gia Kyungsang, Đại học Quốc gia Kyungsang (Imported), Đại học Quốc gia Kyungsang, đại học Gyeongsangnam-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kyungsang_78" />
      <meta property="og:title" content="Đại học Quốc gia Kyungsang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Kyungsang (Đại học Quốc gia Kyungsang (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 내동로, 가좌동, 가호동, 진주시, 경상남도, 52826, 대한민국. Xếp hạng: #162." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kyungsang_78" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Kyungsang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Kyungsang (Đại học Quốc gia Kyungsang (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 내동로, 가좌동, 가호동, 진주시, 경상남도, 52826, 대한민국. Xếp hạng: #162." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kyungsang_78" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Kyungsang",
          "alternateName": "Đại học Quốc gia Kyungsang (Imported)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongsangnam-do"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/kyungsang_78">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kyungsang_78' }} />;
}
