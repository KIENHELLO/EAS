import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'universities',
  routeUrl: '/universities',
  Head: () => (
    <>
      <title>Danh Sách Các Trường Đại Học Hàn Quốc - Học Phí 2025 | KR-UniTuition</title>
      <meta name="description" content="Danh sách đầy đủ các trường đại học Hàn Quốc kèm học phí chi tiết cho từng nhóm ngành (Kỹ thuật, Khoa học, Nhân văn, Nghệ thuật). Lọc theo vùng, loại trường và thứ hạng." />
      <meta name="keywords" content="danh sách đại học hàn quốc, học phí các trường hàn quốc, đại học công lập hàn quốc, đại học tư thục hàn quốc" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/universities" />
      <meta property="og:title" content="Danh Sách Các Trường Đại Học Hàn Quốc - Học Phí 2025 | KR-UniTuition" />
      <meta property="og:description" content="Danh sách đầy đủ các trường đại học Hàn Quốc kèm học phí chi tiết cho từng nhóm ngành (Kỹ thuật, Khoa học, Nhân văn, Nghệ thuật). Lọc theo vùng, loại trường và thứ hạng." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/universities" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Danh Sách Các Trường Đại Học Hàn Quốc - Học Phí 2025" />
      <meta name="twitter:description" content="Danh sách đầy đủ các trường đại học Hàn Quốc kèm học phí chi tiết. Lọc theo vùng, loại trường và thứ hạng." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/universities" />
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/universities">{children}</StaticRouter>;
  }
};

export default function UniversitiesPage() {
  return <Island component="components/UniversitiesApp" />;
}
