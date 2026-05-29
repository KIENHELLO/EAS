import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_120',
  routeUrl: '/university/mock_uni_120',
  Head: () => (
    <>
      <title>Đại học Mokpo - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Mokpo (Mokpo University): 2,854,000 - 3,797,000 KRW (52,799,000 - 70,244,500 VND) mỗi học kỳ. Địa chỉ: 123 Mokpo-ro, Busan. Xếp hạng: #143." />
      <meta name="keywords" content="Đại học Mokpo, học phí Đại học Mokpo, Mokpo University, Mokpo대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_120" />
      <meta property="og:title" content="Đại học Mokpo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Mokpo (Mokpo University): 2,854,000 - 3,797,000 KRW (52,799,000 - 70,244,500 VND) mỗi học kỳ. Địa chỉ: 123 Mokpo-ro, Busan. Xếp hạng: #143." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_120" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Mokpo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Mokpo (Mokpo University): 2,854,000 - 3,797,000 KRW (52,799,000 - 70,244,500 VND) mỗi học kỳ. Địa chỉ: 123 Mokpo-ro, Busan. Xếp hạng: #143." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_120" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Mokpo",
          "alternateName": "Mokpo University",
          "url": "https://www.mokpo.ac.kr",
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
    return <StaticRouter location="/university/mock_uni_120">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_120' }} />;
}
