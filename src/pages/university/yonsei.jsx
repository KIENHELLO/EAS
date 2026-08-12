import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/yonsei',
  routeUrl: '/university/yonsei',
  Head: () => (
    <>
      <title>ĐH Yonsei (CS Sinchon) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Yonsei (CS Sinchon) (Yonsei University): 4,050,000 - 7,200,000 KRW (74,925,000 - 133,200,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #3." />
      <meta name="keywords" content="ĐH Yonsei (CS Sinchon), học phí ĐH Yonsei (CS Sinchon), Yonsei University, 연세대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/yonsei" />
      <meta property="og:title" content="ĐH Yonsei (CS Sinchon) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Yonsei (CS Sinchon) (Yonsei University): 4,050,000 - 7,200,000 KRW (74,925,000 - 133,200,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #3." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/yonsei" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Yonsei (CS Sinchon) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Yonsei (CS Sinchon) (Yonsei University): 4,050,000 - 7,200,000 KRW (74,925,000 - 133,200,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #3." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/yonsei" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Yonsei (CS Sinchon)",
          "alternateName": "Yonsei University",
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
    return <StaticRouter location="/university/yonsei">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'yonsei' }} />;
}
