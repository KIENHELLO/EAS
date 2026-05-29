import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'index',
  routeUrl: '/',
  Head: () => (
    <>
      <title>KR-UniTuition - Tra Cứu Học Phí Đại Học Hàn Quốc (VND & KRW)</title>
      <meta name="description" content="Hệ thống tra cứu, chuyển đổi tỷ giá và so sánh học phí chi tiết hơn 200 trường đại học tại Hàn Quốc. Hiển thị đồng thời KRW và VND, hỗ trợ du học sinh Việt Nam." />
      <meta name="keywords" content="học phí hàn quốc, học phí đại học hàn quốc, tỷ giá won, so sánh học phí, du học hàn quốc, kr-unituition" />
      <link rel="canonical" href="https://eas-tuition.onrender.com" />
      <meta property="og:title" content="KR-UniTuition - Tra Cứu Học Phí Đại Học Hàn Quốc" />
      <meta property="og:description" content="Hệ thống tra cứu, chuyển đổi tỷ giá và so sánh học phí chi tiết hơn 200 trường đại học tại Hàn Quốc. Hiển thị đồng thời KRW và VND." />
      <meta property="og:url" content="https://eas-tuition.onrender.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="KR-UniTuition - Tra Cứu Học Phí Đại Học Hàn Quốc" />
      <meta name="twitter:description" content="Hệ thống tra cứu, chuyển đổi tỷ giá và so sánh học phí chi tiết hơn 200 trường đại học tại Hàn Quốc. Hiển thị đồng thời KRW và VND." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="KR-UniTuition" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "KR-UniTuition",
          "url": "https://eas-tuition.onrender.com",
          "description": "Tra cứu học phí đại học Hàn Quốc bằng VND và KRW",
          "inLanguage": "vi-VN",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://eas-tuition.onrender.com/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/">{children}</StaticRouter>;
  }
};

export default function IndexPage() {
  return <Island component="components/HomeApp" />;
}
