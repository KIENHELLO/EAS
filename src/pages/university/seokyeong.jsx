import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/seokyeong',
  routeUrl: '/university/seokyeong',
  Head: () => (
    <>
      <title>ĐH Seokyeong - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Seokyeong (Seokyeong University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #313." />
      <meta name="keywords" content="ĐH Seokyeong, học phí ĐH Seokyeong, Seokyeong University, 서경대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/seokyeong" />
      <meta property="og:title" content="ĐH Seokyeong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Seokyeong (Seokyeong University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #313." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/seokyeong" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Seokyeong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Seokyeong (Seokyeong University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #313." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/seokyeong" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Seokyeong",
          "alternateName": "Seokyeong University",
          "url": "",
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
    return <StaticRouter location="/university/seokyeong">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'seokyeong' }} />;
}
