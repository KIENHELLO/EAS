import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/khoahocdongeui',
  routeUrl: '/university/khoahocdongeui',
  Head: () => (
    <>
      <title>Cao đẳng Dong-eui Institute - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Dong-eui Institute (Dong-Eui Institute of Technology): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #210." />
      <meta name="keywords" content="Cao đẳng Dong-eui Institute, học phí Cao đẳng Dong-eui Institute, Dong-Eui Institute of Technology, 동의과학대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/khoahocdongeui" />
      <meta property="og:title" content="Cao đẳng Dong-eui Institute - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Dong-eui Institute (Dong-Eui Institute of Technology): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #210." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/khoahocdongeui" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Dong-eui Institute - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Dong-eui Institute (Dong-Eui Institute of Technology): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #210." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/khoahocdongeui" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Dong-eui Institute",
          "alternateName": "Dong-Eui Institute of Technology",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Busan"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/khoahocdongeui">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'khoahocdongeui' }} />;
}
