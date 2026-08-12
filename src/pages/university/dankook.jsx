import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/dankook',
  routeUrl: '/university/dankook',
  Head: () => (
    <>
      <title>ĐH Dankook (CS Jukjeon) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Dankook (CS Jukjeon) (Dankook University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #173." />
      <meta name="keywords" content="ĐH Dankook (CS Jukjeon), học phí ĐH Dankook (CS Jukjeon), Dankook University, 단국대학교(죽전캠퍼스), đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/dankook" />
      <meta property="og:title" content="ĐH Dankook (CS Jukjeon) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Dankook (CS Jukjeon) (Dankook University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #173." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/dankook" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Dankook (CS Jukjeon) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Dankook (CS Jukjeon) (Dankook University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #173." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/dankook" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Dankook (CS Jukjeon)",
          "alternateName": "Dankook University",
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
    return <StaticRouter location="/university/dankook">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'dankook' }} />;
}
