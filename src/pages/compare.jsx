import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'compare',
  routeUrl: '/compare',
  Head: () => (
    <>
      <title>So Sánh Học Phí Đại Học Hàn Quốc | KR-UniTuition</title>
      <meta name="description" content="Tính năng so sánh học phí, ký túc xá và sinh hoạt phí trực quan giữa nhiều trường đại học Hàn Quốc cùng lúc. Hỗ trợ chuyển đổi VND và KRW." />
      <meta name="keywords" content="so sánh trường đại học hàn quốc, so sánh học phí hàn quốc, ký túc xá đại học hàn quốc" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/compare" />
      <meta property="og:title" content="So Sánh Học Phí Đại Học Hàn Quốc | KR-UniTuition" />
      <meta property="og:description" content="Tính năng so sánh học phí, ký túc xá và sinh hoạt phí trực quan giữa nhiều trường đại học Hàn Quốc cùng lúc. Hỗ trợ chuyển đổi VND và KRW." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/compare" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="So Sánh Học Phí Đại Học Hàn Quốc" />
      <meta name="twitter:description" content="So sánh học phí, ký túc xá và sinh hoạt phí giữa nhiều trường đại học Hàn Quốc cùng lúc." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/compare" />
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/compare">{children}</StaticRouter>;
  }
};

export default function ComparePage() {
  return <Island component="components/CompareApp" />;
}
