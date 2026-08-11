import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/pusan',
  routeUrl: '/university/pusan',
  Head: () => (
    <>
      <title>Cao đẳng Quốc gia Busan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Quốc gia Busan (Pusan National College): 3,960,000 - 6,380,000 KRW (73,260,000 - 118,030,000 VND) mỗi học kỳ. Địa chỉ: 2 Busandaehak-ro 63beon-gil, Geumjeong-gu, Busan. Xếp hạng: #11." />
      <meta name="keywords" content="Cao đẳng Quốc gia Busan, học phí Cao đẳng Quốc gia Busan, Pusan National College, 부산대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/pusan" />
      <meta property="og:title" content="Cao đẳng Quốc gia Busan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Quốc gia Busan (Pusan National College): 3,960,000 - 6,380,000 KRW (73,260,000 - 118,030,000 VND) mỗi học kỳ. Địa chỉ: 2 Busandaehak-ro 63beon-gil, Geumjeong-gu, Busan. Xếp hạng: #11." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/pusan" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Quốc gia Busan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Quốc gia Busan (Pusan National College): 3,960,000 - 6,380,000 KRW (73,260,000 - 118,030,000 VND) mỗi học kỳ. Địa chỉ: 2 Busandaehak-ro 63beon-gil, Geumjeong-gu, Busan. Xếp hạng: #11." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/pusan" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Quốc gia Busan",
          "alternateName": "Pusan National College",
          "url": "https://www.pusan.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Busan"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/pusan">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'pusan' }} />;
}
