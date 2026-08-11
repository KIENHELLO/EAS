import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/sausunhakup_944',
  routeUrl: '/university/sausunhakup_944',
  Head: () => (
    <>
      <title>Đại học Sau đại học Sunhak UP - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sau đại học Sunhak UP (Đại học Sau đại học Sunhak UP (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 선학UP대학원대학교, 서울양양고속도로, 미사리, 설악면, 가평군, 경기도, 12464, 대한민국. Xếp hạng: #176." />
      <meta name="keywords" content="Đại học Sau đại học Sunhak UP, học phí Đại học Sau đại học Sunhak UP, Đại học Sau đại học Sunhak UP (Imported), Đại học Sau đại học Sunhak UP, đại học Gyeonggi-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/sausunhakup_944" />
      <meta property="og:title" content="Đại học Sau đại học Sunhak UP - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sau đại học Sunhak UP (Đại học Sau đại học Sunhak UP (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 선학UP대학원대학교, 서울양양고속도로, 미사리, 설악면, 가평군, 경기도, 12464, 대한민국. Xếp hạng: #176." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/sausunhakup_944" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sau đại học Sunhak UP - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sau đại học Sunhak UP (Đại học Sau đại học Sunhak UP (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 선학UP대학원대학교, 서울양양고속도로, 미사리, 설악면, 가평군, 경기도, 12464, 대한민국. Xếp hạng: #176." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/sausunhakup_944" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sau đại học Sunhak UP",
          "alternateName": "Đại học Sau đại học Sunhak UP (Imported)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeonggi-do"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/sausunhakup_944">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'sausunhakup_944' }} />;
}
