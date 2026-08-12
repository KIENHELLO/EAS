import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/viencaohocngonn',
  routeUrl: '/university/viencaohocngonn',
  Head: () => (
    <>
      <title>Học viện Sau ĐH Ngoại ngữ Seoul - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Học viện Sau ĐH Ngoại ngữ Seoul (Seoul Foreign Language Graduate University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #213." />
      <meta name="keywords" content="Học viện Sau ĐH Ngoại ngữ Seoul, học phí Học viện Sau ĐH Ngoại ngữ Seoul, Seoul Foreign Language Graduate University, 서울외국어대학원대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/viencaohocngonn" />
      <meta property="og:title" content="Học viện Sau ĐH Ngoại ngữ Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Học viện Sau ĐH Ngoại ngữ Seoul (Seoul Foreign Language Graduate University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #213." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/viencaohocngonn" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Học viện Sau ĐH Ngoại ngữ Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Học viện Sau ĐH Ngoại ngữ Seoul (Seoul Foreign Language Graduate University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #213." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/viencaohocngonn" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Học viện Sau ĐH Ngoại ngữ Seoul",
          "alternateName": "Seoul Foreign Language Graduate University",
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
    return <StaticRouter location="/university/viencaohocngonn">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'viencaohocngonn' }} />;
}
