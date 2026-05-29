import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_198',
  routeUrl: '/university/mock_uni_198',
  Head: () => (
    <>
      <title>Đại học Woosuk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Woosuk (Woosuk University): 2,027,000 - 4,995,000 KRW (37,499,500 - 92,407,500 VND) mỗi học kỳ. Địa chỉ: 123 Woosuk-ro, Chungnam. Xếp hạng: #221." />
      <meta name="keywords" content="Đại học Woosuk, học phí Đại học Woosuk, Woosuk University, Woosuk대학교, đại học Chungnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_198" />
      <meta property="og:title" content="Đại học Woosuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Woosuk (Woosuk University): 2,027,000 - 4,995,000 KRW (37,499,500 - 92,407,500 VND) mỗi học kỳ. Địa chỉ: 123 Woosuk-ro, Chungnam. Xếp hạng: #221." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_198" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Woosuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Woosuk (Woosuk University): 2,027,000 - 4,995,000 KRW (37,499,500 - 92,407,500 VND) mỗi học kỳ. Địa chỉ: 123 Woosuk-ro, Chungnam. Xếp hạng: #221." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_198" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Woosuk",
          "alternateName": "Woosuk University",
          "url": "https://www.woosuk.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_198">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_198' }} />;
}
