import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_148',
  routeUrl: '/university/mock_uni_148',
  Head: () => (
    <>
      <title>Đại học Seokyeong - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Seokyeong (Seokyeong University): 2,513,000 - 4,345,000 KRW (46,490,500 - 80,382,500 VND) mỗi học kỳ. Địa chỉ: 123 Seokyeong-ro, Jeonbuk. Xếp hạng: #171." />
      <meta name="keywords" content="Đại học Seokyeong, học phí Đại học Seokyeong, Seokyeong University, Seokyeong대학교, đại học Jeonbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_148" />
      <meta property="og:title" content="Đại học Seokyeong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Seokyeong (Seokyeong University): 2,513,000 - 4,345,000 KRW (46,490,500 - 80,382,500 VND) mỗi học kỳ. Địa chỉ: 123 Seokyeong-ro, Jeonbuk. Xếp hạng: #171." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_148" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Seokyeong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Seokyeong (Seokyeong University): 2,513,000 - 4,345,000 KRW (46,490,500 - 80,382,500 VND) mỗi học kỳ. Địa chỉ: 123 Seokyeong-ro, Jeonbuk. Xếp hạng: #171." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_148" />
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
            "addressRegion": "Jeonbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_148">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_148' }} />;
}
