import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/top3_school_20',
  routeUrl: '/university/top3_school_20',
  Head: () => (
    <>
      <title>ĐH Kyungdong (CS Metropol) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Kyungdong (CS Metropol) (Kyungdong University): 2,400,000 - 3,120,000 KRW (44,400,000 - 57,720,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #170." />
      <meta name="keywords" content="ĐH Kyungdong (CS Metropol), học phí ĐH Kyungdong (CS Metropol), Kyungdong University, 경동대학교(메트로폴캠퍼스), đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/top3_school_20" />
      <meta property="og:title" content="ĐH Kyungdong (CS Metropol) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Kyungdong (CS Metropol) (Kyungdong University): 2,400,000 - 3,120,000 KRW (44,400,000 - 57,720,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #170." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/top3_school_20" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Kyungdong (CS Metropol) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Kyungdong (CS Metropol) (Kyungdong University): 2,400,000 - 3,120,000 KRW (44,400,000 - 57,720,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #170." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/top3_school_20" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Kyungdong (CS Metropol)",
          "alternateName": "Kyungdong University",
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
    return <StaticRouter location="/university/top3_school_20">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'top3_school_20' }} />;
}
