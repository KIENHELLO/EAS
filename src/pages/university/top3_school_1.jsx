import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/top3_school_1',
  routeUrl: '/university/top3_school_1',
  Head: () => (
    <>
      <title>ĐH Tăng già Trung ương - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Tăng già Trung ương (Joong-Ang Sangha University): 3,200,000 - 4,160,000 KRW (59,200,000 - 76,960,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #151." />
      <meta name="keywords" content="ĐH Tăng già Trung ương, học phí ĐH Tăng già Trung ương, Joong-Ang Sangha University, 중앙승가대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/top3_school_1" />
      <meta property="og:title" content="ĐH Tăng già Trung ương - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Tăng già Trung ương (Joong-Ang Sangha University): 3,200,000 - 4,160,000 KRW (59,200,000 - 76,960,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #151." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/top3_school_1" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Tăng già Trung ương - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Tăng già Trung ương (Joong-Ang Sangha University): 3,200,000 - 4,160,000 KRW (59,200,000 - 76,960,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #151." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/top3_school_1" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Tăng già Trung ương",
          "alternateName": "Joong-Ang Sangha University",
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
    return <StaticRouter location="/university/top3_school_1">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'top3_school_1' }} />;
}
