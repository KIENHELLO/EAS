import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_203',
  routeUrl: '/university/mock_uni_203',
  Head: () => (
    <>
      <title>Đại học Howon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Howon (Howon University): 2,271,000 - 4,579,000 KRW (42,013,500 - 84,711,500 VND) mỗi học kỳ. Địa chỉ: 호원대학교, 호원대2길, 술산리, 군산시, 전북특별자치도, 54055, 대한민국. Xếp hạng: #226." />
      <meta name="keywords" content="Đại học Howon, học phí Đại học Howon, Howon University, Howon대학교, đại học Jeju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_203" />
      <meta property="og:title" content="Đại học Howon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Howon (Howon University): 2,271,000 - 4,579,000 KRW (42,013,500 - 84,711,500 VND) mỗi học kỳ. Địa chỉ: 호원대학교, 호원대2길, 술산리, 군산시, 전북특별자치도, 54055, 대한민국. Xếp hạng: #226." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_203" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Howon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Howon (Howon University): 2,271,000 - 4,579,000 KRW (42,013,500 - 84,711,500 VND) mỗi học kỳ. Địa chỉ: 호원대학교, 호원대2길, 술산리, 군산시, 전북특별자치도, 54055, 대한민국. Xếp hạng: #226." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_203" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Howon",
          "alternateName": "Howon University",
          "url": "https://www.howon.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeju"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_203">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_203' }} />;
}
