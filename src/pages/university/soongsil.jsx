import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/soongsil',
  routeUrl: '/university/soongsil',
  Head: () => (
    <>
      <title>ĐH Soongsil - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Soongsil (Soongsil University): 3,555,000 - 4,937,500 KRW (65,767,500 - 91,343,750 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #29." />
      <meta name="keywords" content="ĐH Soongsil, học phí ĐH Soongsil, Soongsil University, 숭실대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/soongsil" />
      <meta property="og:title" content="ĐH Soongsil - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Soongsil (Soongsil University): 3,555,000 - 4,937,500 KRW (65,767,500 - 91,343,750 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #29." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/soongsil" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Soongsil - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Soongsil (Soongsil University): 3,555,000 - 4,937,500 KRW (65,767,500 - 91,343,750 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #29." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/soongsil" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Soongsil",
          "alternateName": "Soongsil University",
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
    return <StaticRouter location="/university/soongsil">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'soongsil' }} />;
}
