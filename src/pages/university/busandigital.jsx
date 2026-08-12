import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/busandigital',
  routeUrl: '/university/busandigital',
  Head: () => (
    <>
      <title>Đại học Cyber Digital Busan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Cyber Digital Busan (Busan Digital University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #575." />
      <meta name="keywords" content="Đại học Cyber Digital Busan, học phí Đại học Cyber Digital Busan, Busan Digital University, 부산디지털대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/busandigital" />
      <meta property="og:title" content="Đại học Cyber Digital Busan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Cyber Digital Busan (Busan Digital University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #575." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/busandigital" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Cyber Digital Busan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Cyber Digital Busan (Busan Digital University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #575." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/busandigital" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Cyber Digital Busan",
          "alternateName": "Busan Digital University",
          "url": "",
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
    return <StaticRouter location="/university/busandigital">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'busandigital' }} />;
}
