import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_163',
  routeUrl: '/university/mock_uni_163',
  Head: () => (
    <>
      <title>Đại học Mokpo - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Mokpo (Mokpo University): 2,666,000 - 4,610,000 KRW (49,321,000 - 85,285,000 VND) mỗi học kỳ. Địa chỉ: 123 Mokpo-ro, Chungbuk. Xếp hạng: #186." />
      <meta name="keywords" content="Đại học Mokpo, học phí Đại học Mokpo, Mokpo University, Mokpo대학교, đại học Chungbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_163" />
      <meta property="og:title" content="Đại học Mokpo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Mokpo (Mokpo University): 2,666,000 - 4,610,000 KRW (49,321,000 - 85,285,000 VND) mỗi học kỳ. Địa chỉ: 123 Mokpo-ro, Chungbuk. Xếp hạng: #186." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_163" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Mokpo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Mokpo (Mokpo University): 2,666,000 - 4,610,000 KRW (49,321,000 - 85,285,000 VND) mỗi học kỳ. Địa chỉ: 123 Mokpo-ro, Chungbuk. Xếp hạng: #186." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_163" />
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
            "addressRegion": "Chungbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_163">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_163' }} />;
}
