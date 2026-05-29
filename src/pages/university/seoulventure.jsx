import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/seoulventure',
  routeUrl: '/university/seoulventure',
  Head: () => (
    <>
      <title>Đại học Seoul Venture (Seoul) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Seoul Venture (Seoul) (Seoul Venture University): 4,000,000 KRW (74,000,000 VND) mỗi học kỳ. Địa chỉ: 9 Bongeunsa-ro 22-gil, Gangnam-gu, Seoul. Xếp hạng: #70." />
      <meta name="keywords" content="Đại học Seoul Venture (Seoul), học phí Đại học Seoul Venture (Seoul), Seoul Venture University, 서울벤처대학원대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/seoulventure" />
      <meta property="og:title" content="Đại học Seoul Venture (Seoul) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Seoul Venture (Seoul) (Seoul Venture University): 4,000,000 KRW (74,000,000 VND) mỗi học kỳ. Địa chỉ: 9 Bongeunsa-ro 22-gil, Gangnam-gu, Seoul. Xếp hạng: #70." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/seoulventure" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Seoul Venture (Seoul) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Seoul Venture (Seoul) (Seoul Venture University): 4,000,000 KRW (74,000,000 VND) mỗi học kỳ. Địa chỉ: 9 Bongeunsa-ro 22-gil, Gangnam-gu, Seoul. Xếp hạng: #70." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/seoulventure" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Seoul Venture (Seoul)",
          "alternateName": "Seoul Venture University",
          "url": "http://www.svu.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Seoul"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/seoulventure">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'seoulventure' }} />;
}
