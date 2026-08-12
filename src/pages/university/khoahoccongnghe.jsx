import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/khoahoccongnghe',
  routeUrl: '/university/khoahoccongnghe',
  Head: () => (
    <>
      <title>ĐH KH&CN Quốc gia Seoul - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH KH&CN Quốc gia Seoul (Seoul National University of Science and Technology): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #158." />
      <meta name="keywords" content="ĐH KH&CN Quốc gia Seoul, học phí ĐH KH&CN Quốc gia Seoul, Seoul National University of Science and Technology, 서울과학기술대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/khoahoccongnghe" />
      <meta property="og:title" content="ĐH KH&CN Quốc gia Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH KH&CN Quốc gia Seoul (Seoul National University of Science and Technology): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #158." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/khoahoccongnghe" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH KH&CN Quốc gia Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH KH&CN Quốc gia Seoul (Seoul National University of Science and Technology): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #158." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/khoahoccongnghe" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH KH&CN Quốc gia Seoul",
          "alternateName": "Seoul National University of Science and Technology",
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
    return <StaticRouter location="/university/khoahoccongnghe">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'khoahoccongnghe' }} />;
}
