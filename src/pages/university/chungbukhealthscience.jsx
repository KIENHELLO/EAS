import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/chungbukhealthscience',
  routeUrl: '/university/chungbukhealthscience',
  Head: () => (
    <>
      <title>Cao đẳng KH&Y tế Chungbuk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng KH&Y tế Chungbuk (Chungbuk Health Science University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Chungbuk. Xếp hạng: #602." />
      <meta name="keywords" content="Cao đẳng KH&Y tế Chungbuk, học phí Cao đẳng KH&Y tế Chungbuk, Chungbuk Health Science University, 충북보건과학대학교, đại học Chungbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/chungbukhealthscience" />
      <meta property="og:title" content="Cao đẳng KH&Y tế Chungbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng KH&Y tế Chungbuk (Chungbuk Health Science University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Chungbuk. Xếp hạng: #602." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/chungbukhealthscience" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng KH&Y tế Chungbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng KH&Y tế Chungbuk (Chungbuk Health Science University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Chungbuk. Xếp hạng: #602." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/chungbukhealthscience" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng KH&Y tế Chungbuk",
          "alternateName": "Chungbuk Health Science University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/chungbukhealthscience">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'chungbukhealthscience' }} />;
}
