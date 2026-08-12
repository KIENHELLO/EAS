import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/seoyeong_pajucampusgyeonggi',
  routeUrl: '/university/seoyeong_pajucampusgyeonggi',
  Head: () => (
    <>
      <title>Cao đẳng Seoyeong - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Seoyeong (Seoyeong University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #605." />
      <meta name="keywords" content="Cao đẳng Seoyeong, học phí Cao đẳng Seoyeong, Seoyeong University, 서영대학교, đại học Gwangju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/seoyeong_pajucampusgyeonggi" />
      <meta property="og:title" content="Cao đẳng Seoyeong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Seoyeong (Seoyeong University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #605." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/seoyeong_pajucampusgyeonggi" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Seoyeong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Seoyeong (Seoyeong University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #605." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/seoyeong_pajucampusgyeonggi" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Seoyeong",
          "alternateName": "Seoyeong University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gwangju"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/seoyeong_pajucampusgyeonggi">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'seoyeong_pajucampusgyeonggi' }} />;
}
