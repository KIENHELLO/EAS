import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kookmin',
  routeUrl: '/university/kookmin',
  Head: () => (
    <>
      <title>ĐH Kookmin - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Kookmin (Kookmin University): 3,555,000 - 4,937,500 KRW (65,767,500 - 91,343,750 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #17." />
      <meta name="keywords" content="ĐH Kookmin, học phí ĐH Kookmin, Kookmin University, 국민대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kookmin" />
      <meta property="og:title" content="ĐH Kookmin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Kookmin (Kookmin University): 3,555,000 - 4,937,500 KRW (65,767,500 - 91,343,750 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #17." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kookmin" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Kookmin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Kookmin (Kookmin University): 3,555,000 - 4,937,500 KRW (65,767,500 - 91,343,750 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #17." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kookmin" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Kookmin",
          "alternateName": "Kookmin University",
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
    return <StaticRouter location="/university/kookmin">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kookmin' }} />;
}
