import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreabaptisttheological',
  routeUrl: '/university/koreabaptisttheological',
  Head: () => (
    <>
      <title>ĐH Thần học Báp-tít - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Thần học Báp-tít (Korea Baptist Theological University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #489." />
      <meta name="keywords" content="ĐH Thần học Báp-tít, học phí ĐH Thần học Báp-tít, Korea Baptist Theological University, 침례신학대학교, đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreabaptisttheological" />
      <meta property="og:title" content="ĐH Thần học Báp-tít - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Thần học Báp-tít (Korea Baptist Theological University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #489." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreabaptisttheological" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Thần học Báp-tít - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Thần học Báp-tít (Korea Baptist Theological University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #489." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreabaptisttheological" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Thần học Báp-tít",
          "alternateName": "Korea Baptist Theological University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daejeon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/koreabaptisttheological">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreabaptisttheological' }} />;
}
