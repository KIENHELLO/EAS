import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kentech',
  routeUrl: '/university/kentech',
  Head: () => (
    <>
      <title>Đại học Năng lượng Hàn Quốc (KENTECH) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Năng lượng Hàn Quốc (KENTECH) (KENTECH): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Jeonnam. Xếp hạng: #627." />
      <meta name="keywords" content="Đại học Năng lượng Hàn Quốc (KENTECH), học phí Đại học Năng lượng Hàn Quốc (KENTECH), KENTECH, 한국에너지공과대학교, đại học Jeonnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kentech" />
      <meta property="og:title" content="Đại học Năng lượng Hàn Quốc (KENTECH) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Năng lượng Hàn Quốc (KENTECH) (KENTECH): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Jeonnam. Xếp hạng: #627." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kentech" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Năng lượng Hàn Quốc (KENTECH) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Năng lượng Hàn Quốc (KENTECH) (KENTECH): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Jeonnam. Xếp hạng: #627." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kentech" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Năng lượng Hàn Quốc (KENTECH)",
          "alternateName": "KENTECH",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeonnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/kentech">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kentech' }} />;
}
