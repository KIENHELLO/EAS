import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/inhatechnical',
  routeUrl: '/university/inhatechnical',
  Head: () => (
    <>
      <title>CĐ Công nghiệp Inha - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Công nghiệp Inha (Inha Technical College): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #457." />
      <meta name="keywords" content="CĐ Công nghiệp Inha, học phí CĐ Công nghiệp Inha, Inha Technical College, 인하공업전문대학, đại học Incheon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/inhatechnical" />
      <meta property="og:title" content="CĐ Công nghiệp Inha - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Công nghiệp Inha (Inha Technical College): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #457." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/inhatechnical" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Công nghiệp Inha - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Công nghiệp Inha (Inha Technical College): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #457." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/inhatechnical" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Công nghiệp Inha",
          "alternateName": "Inha Technical College",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Incheon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/inhatechnical">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'inhatechnical' }} />;
}
