import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/nghethuatyewon',
  routeUrl: '/university/nghethuatyewon',
  Head: () => (
    <>
      <title>ĐH Nghệ thuật Yewon (CS Yangju) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Nghệ thuật Yewon (CS Yangju) (Yewon Arts University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #228." />
      <meta name="keywords" content="ĐH Nghệ thuật Yewon (CS Yangju), học phí ĐH Nghệ thuật Yewon (CS Yangju), Yewon Arts University, 예원예술대학교(양주캠퍼스), đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/nghethuatyewon" />
      <meta property="og:title" content="ĐH Nghệ thuật Yewon (CS Yangju) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Nghệ thuật Yewon (CS Yangju) (Yewon Arts University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #228." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/nghethuatyewon" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Nghệ thuật Yewon (CS Yangju) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Nghệ thuật Yewon (CS Yangju) (Yewon Arts University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #228." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/nghethuatyewon" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Nghệ thuật Yewon (CS Yangju)",
          "alternateName": "Yewon Arts University",
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
    return <StaticRouter location="/university/nghethuatyewon">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'nghethuatyewon' }} />;
}
