import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/chunhaeofhealthsciences',
  routeUrl: '/university/chunhaeofhealthsciences',
  Head: () => (
    <>
      <title>Cao đẳng Y tế Chunhae - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Y tế Chunhae (Chunhae College of Health Sciences): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Ulsan. Xếp hạng: #584." />
      <meta name="keywords" content="Cao đẳng Y tế Chunhae, học phí Cao đẳng Y tế Chunhae, Chunhae College of Health Sciences, 춘해보건대학교, đại học Ulsan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/chunhaeofhealthsciences" />
      <meta property="og:title" content="Cao đẳng Y tế Chunhae - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Y tế Chunhae (Chunhae College of Health Sciences): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Ulsan. Xếp hạng: #584." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/chunhaeofhealthsciences" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Y tế Chunhae - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Y tế Chunhae (Chunhae College of Health Sciences): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Ulsan. Xếp hạng: #584." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/chunhaeofhealthsciences" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Y tế Chunhae",
          "alternateName": "Chunhae College of Health Sciences",
          "url": "",
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
    return <StaticRouter location="/university/chunhaeofhealthsciences">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'chunhaeofhealthsciences' }} />;
}
