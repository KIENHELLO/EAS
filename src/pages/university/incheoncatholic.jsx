import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/incheoncatholic',
  routeUrl: '/university/incheoncatholic',
  Head: () => (
    <>
      <title>ĐH Công giáo Incheon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Công giáo Incheon (Incheon Catholic University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #417." />
      <meta name="keywords" content="ĐH Công giáo Incheon, học phí ĐH Công giáo Incheon, Incheon Catholic University, 인천가톨릭대학교, đại học Incheon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/incheoncatholic" />
      <meta property="og:title" content="ĐH Công giáo Incheon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Công giáo Incheon (Incheon Catholic University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #417." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/incheoncatholic" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Công giáo Incheon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Công giáo Incheon (Incheon Catholic University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #417." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/incheoncatholic" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Công giáo Incheon",
          "alternateName": "Incheon Catholic University",
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
    return <StaticRouter location="/university/incheoncatholic">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'incheoncatholic' }} />;
}
