import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_105',
  routeUrl: '/university/mock_uni_105',
  Head: () => (
    <>
      <title>Đại học Seokyeong - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Seokyeong (Seokyeong University): 3,389,000 - 4,744,000 KRW (62,696,500 - 87,764,000 VND) mỗi học kỳ. Địa chỉ: 123 Seokyeong-ro, Incheon. Xếp hạng: #128." />
      <meta name="keywords" content="Đại học Seokyeong, học phí Đại học Seokyeong, Seokyeong University, Seokyeong대학교, đại học Incheon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_105" />
      <meta property="og:title" content="Đại học Seokyeong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Seokyeong (Seokyeong University): 3,389,000 - 4,744,000 KRW (62,696,500 - 87,764,000 VND) mỗi học kỳ. Địa chỉ: 123 Seokyeong-ro, Incheon. Xếp hạng: #128." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_105" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Seokyeong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Seokyeong (Seokyeong University): 3,389,000 - 4,744,000 KRW (62,696,500 - 87,764,000 VND) mỗi học kỳ. Địa chỉ: 123 Seokyeong-ro, Incheon. Xếp hạng: #128." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_105" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Seokyeong",
          "alternateName": "Seokyeong University",
          "url": "https://www.seokyeong.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Incheon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_105">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_105' }} />;
}
