import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kyungdong_wonjumedicalcampusyangjucampus',
  routeUrl: '/university/kyungdong_wonjumedicalcampusyangjucampus',
  Head: () => (
    <>
      <title>Đại học Kyungdong - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Kyungdong (Kyungdong University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #560." />
      <meta name="keywords" content="Đại học Kyungdong, học phí Đại học Kyungdong, Kyungdong University, 경동대학교, đại học Gangwon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kyungdong_wonjumedicalcampusyangjucampus" />
      <meta property="og:title" content="Đại học Kyungdong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Kyungdong (Kyungdong University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #560." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kyungdong_wonjumedicalcampusyangjucampus" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Kyungdong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Kyungdong (Kyungdong University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gangwon. Xếp hạng: #560." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kyungdong_wonjumedicalcampusyangjucampus" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Kyungdong",
          "alternateName": "Kyungdong University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gangwon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/kyungdong_wonjumedicalcampusyangjucampus">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kyungdong_wonjumedicalcampusyangjucampus' }} />;
}
