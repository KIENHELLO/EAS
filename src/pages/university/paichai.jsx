import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/paichai',
  routeUrl: '/university/paichai',
  Head: () => (
    <>
      <title>ĐH Pai Chai - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Pai Chai (Pai Chai University): 3,300,000 - 4,300,000 KRW (61,050,000 - 79,550,000 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #52." />
      <meta name="keywords" content="ĐH Pai Chai, học phí ĐH Pai Chai, Pai Chai University, 배재대학교, đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/paichai" />
      <meta property="og:title" content="ĐH Pai Chai - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Pai Chai (Pai Chai University): 3,300,000 - 4,300,000 KRW (61,050,000 - 79,550,000 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #52." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/paichai" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Pai Chai - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Pai Chai (Pai Chai University): 3,300,000 - 4,300,000 KRW (61,050,000 - 79,550,000 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #52." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/paichai" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Pai Chai",
          "alternateName": "Pai Chai University",
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
    return <StaticRouter location="/university/paichai">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'paichai' }} />;
}
