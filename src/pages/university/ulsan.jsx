import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/ulsan',
  routeUrl: '/university/ulsan',
  Head: () => (
    <>
      <title>Đại học Ulsan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Ulsan (University of Ulsan): 3,150,000 - 5,600,000 KRW (58,275,000 - 103,600,000 VND) mỗi học kỳ. Địa chỉ: 93 Daehak-ro, Nam-gu, Ulsan. Xếp hạng: #28." />
      <meta name="keywords" content="Đại học Ulsan, học phí Đại học Ulsan, University of Ulsan, 울산대학교, đại học Ulsan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/ulsan" />
      <meta property="og:title" content="Đại học Ulsan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Ulsan (University of Ulsan): 3,150,000 - 5,600,000 KRW (58,275,000 - 103,600,000 VND) mỗi học kỳ. Địa chỉ: 93 Daehak-ro, Nam-gu, Ulsan. Xếp hạng: #28." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/ulsan" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Ulsan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Ulsan (University of Ulsan): 3,150,000 - 5,600,000 KRW (58,275,000 - 103,600,000 VND) mỗi học kỳ. Địa chỉ: 93 Daehak-ro, Nam-gu, Ulsan. Xếp hạng: #28." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/ulsan" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Ulsan",
          "alternateName": "University of Ulsan",
          "url": "https://www.ulsan.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Ulsan"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/ulsan">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'ulsan' }} />;
}
