import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/uni_7',
  routeUrl: '/university/uni_7',
  Head: () => (
    <>
      <title>Đại học Quốc gia Changwon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Changwon (Changwon University): 3,510,000 - 5,655,000 KRW (64,935,000 - 104,617,500 VND) mỗi học kỳ. Địa chỉ: 창원대학로, 퇴촌동, 의창구, 창원시, 경상남도, 51154, 대한민국. Xếp hạng: #99." />
      <meta name="keywords" content="Đại học Quốc gia Changwon, học phí Đại học Quốc gia Changwon, Changwon University, 창원대학교, đại học Gyeongnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/uni_7" />
      <meta property="og:title" content="Đại học Quốc gia Changwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Changwon (Changwon University): 3,510,000 - 5,655,000 KRW (64,935,000 - 104,617,500 VND) mỗi học kỳ. Địa chỉ: 창원대학로, 퇴촌동, 의창구, 창원시, 경상남도, 51154, 대한민국. Xếp hạng: #99." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/uni_7" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Changwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Changwon (Changwon University): 3,510,000 - 5,655,000 KRW (64,935,000 - 104,617,500 VND) mỗi học kỳ. Địa chỉ: 창원대학로, 퇴촌동, 의창구, 창원시, 경상남도, 51154, 대한민국. Xếp hạng: #99." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/uni_7" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Changwon",
          "alternateName": "Changwon University",
          "url": "http://www.uni_7.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/uni_7">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'uni_7' }} />;
}
