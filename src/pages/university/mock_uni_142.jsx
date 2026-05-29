import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_142',
  routeUrl: '/university/mock_uni_142',
  Head: () => (
    <>
      <title>Đại học Changwon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Changwon (Changwon University): 2,855,000 - 4,655,000 KRW (52,817,500 - 86,117,500 VND) mỗi học kỳ. Địa chỉ: 123 Changwon-ro, Ulsan. Xếp hạng: #165." />
      <meta name="keywords" content="Đại học Changwon, học phí Đại học Changwon, Changwon University, Changwon대학교, đại học Ulsan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_142" />
      <meta property="og:title" content="Đại học Changwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Changwon (Changwon University): 2,855,000 - 4,655,000 KRW (52,817,500 - 86,117,500 VND) mỗi học kỳ. Địa chỉ: 123 Changwon-ro, Ulsan. Xếp hạng: #165." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_142" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Changwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Changwon (Changwon University): 2,855,000 - 4,655,000 KRW (52,817,500 - 86,117,500 VND) mỗi học kỳ. Địa chỉ: 123 Changwon-ro, Ulsan. Xếp hạng: #165." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_142" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Changwon",
          "alternateName": "Changwon University",
          "url": "https://www.changwon.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Ulsan"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_142">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_142' }} />;
}
