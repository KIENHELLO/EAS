import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/chungang',
  routeUrl: '/university/chungang',
  Head: () => (
    <>
      <title>ĐH Chung-Ang (CS Davinci) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Chung-Ang (CS Davinci) (Chung-Ang University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #401." />
      <meta name="keywords" content="ĐH Chung-Ang (CS Davinci), học phí ĐH Chung-Ang (CS Davinci), Chung-Ang University, 중앙대학교(다빈치캠퍼스), đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/chungang" />
      <meta property="og:title" content="ĐH Chung-Ang (CS Davinci) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Chung-Ang (CS Davinci) (Chung-Ang University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #401." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/chungang" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Chung-Ang (CS Davinci) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Chung-Ang (CS Davinci) (Chung-Ang University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #401." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/chungang" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Chung-Ang (CS Davinci)",
          "alternateName": "Chung-Ang University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeonggi"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/chungang">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'chungang' }} />;
}
