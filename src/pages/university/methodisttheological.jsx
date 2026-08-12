import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/methodisttheological',
  routeUrl: '/university/methodisttheological',
  Head: () => (
    <>
      <title>ĐH Thần học Giám Lý - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Thần học Giám Lý (Methodist Theological University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #336." />
      <meta name="keywords" content="ĐH Thần học Giám Lý, học phí ĐH Thần học Giám Lý, Methodist Theological University, 감리교신학대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/methodisttheological" />
      <meta property="og:title" content="ĐH Thần học Giám Lý - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Thần học Giám Lý (Methodist Theological University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #336." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/methodisttheological" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Thần học Giám Lý - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Thần học Giám Lý (Methodist Theological University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #336." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/methodisttheological" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Thần học Giám Lý",
          "alternateName": "Methodist Theological University",
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
    return <StaticRouter location="/university/methodisttheological">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'methodisttheological' }} />;
}
