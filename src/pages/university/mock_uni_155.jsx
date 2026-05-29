import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_155',
  routeUrl: '/university/mock_uni_155',
  Head: () => (
    <>
      <title>Đại học Woosuk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Woosuk (Woosuk University): 2,743,000 - 4,572,000 KRW (50,745,500 - 84,582,000 VND) mỗi học kỳ. Địa chỉ: 123 Woosuk-ro, Daegu. Xếp hạng: #178." />
      <meta name="keywords" content="Đại học Woosuk, học phí Đại học Woosuk, Woosuk University, Woosuk대학교, đại học Daegu" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_155" />
      <meta property="og:title" content="Đại học Woosuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Woosuk (Woosuk University): 2,743,000 - 4,572,000 KRW (50,745,500 - 84,582,000 VND) mỗi học kỳ. Địa chỉ: 123 Woosuk-ro, Daegu. Xếp hạng: #178." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_155" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Woosuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Woosuk (Woosuk University): 2,743,000 - 4,572,000 KRW (50,745,500 - 84,582,000 VND) mỗi học kỳ. Địa chỉ: 123 Woosuk-ro, Daegu. Xếp hạng: #178." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_155" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Woosuk",
          "alternateName": "Woosuk University",
          "url": "https://www.woosuk.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daegu"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_155">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_155' }} />;
}
