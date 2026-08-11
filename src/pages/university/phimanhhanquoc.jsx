import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/phimanhhanquoc',
  routeUrl: '/university/phimanhhanquoc',
  Head: () => (
    <>
      <title>Cao đẳng Phim ảnh Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Phim ảnh Hàn Quốc (Phim ảnh Hàn Quốc College (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #221." />
      <meta name="keywords" content="Cao đẳng Phim ảnh Hàn Quốc, học phí Cao đẳng Phim ảnh Hàn Quốc, Phim ảnh Hàn Quốc College (Korea), Đại học Phim ảnh Hàn Quốc, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/phimanhhanquoc" />
      <meta property="og:title" content="Cao đẳng Phim ảnh Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Phim ảnh Hàn Quốc (Phim ảnh Hàn Quốc College (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #221." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/phimanhhanquoc" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Phim ảnh Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Phim ảnh Hàn Quốc (Phim ảnh Hàn Quốc College (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Korea. Xếp hạng: #221." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/phimanhhanquoc" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Phim ảnh Hàn Quốc",
          "alternateName": "Phim ảnh Hàn Quốc College (Korea)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeonggi"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/phimanhhanquoc">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'phimanhhanquoc' }} />;
}
