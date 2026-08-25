import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreanationalofagricultureandfisheries',
  routeUrl: '/university/koreanationalofagricultureandfisheries',
  Head: () => (
    <>
      <title>Đại học Nông Nông nghiệp & Thủy sản Korea - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Nông Nông nghiệp & Thủy sản Korea (Korea National College of Agriculture and Fisheries): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #629." />
      <meta name="keywords" content="Đại học Nông Nông nghiệp & Thủy sản Korea, học phí Đại học Nông Nông nghiệp & Thủy sản Korea, Korea National College of Agriculture and Fisheries, 한국농수산대학교, đại học Jeonbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreanationalofagricultureandfisheries" />
      <meta property="og:title" content="Đại học Nông Nông nghiệp & Thủy sản Korea - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Nông Nông nghiệp & Thủy sản Korea (Korea National College of Agriculture and Fisheries): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #629." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreanationalofagricultureandfisheries" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Nông Nông nghiệp & Thủy sản Korea - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Nông Nông nghiệp & Thủy sản Korea (Korea National College of Agriculture and Fisheries): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Jeonbuk. Xếp hạng: #629." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreanationalofagricultureandfisheries" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Nông Nông nghiệp & Thủy sản Korea",
          "alternateName": "Korea National College of Agriculture and Fisheries",
          "url": "",
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
    return <StaticRouter location="/university/koreanationalofagricultureandfisheries">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreanationalofagricultureandfisheries' }} />;
}
