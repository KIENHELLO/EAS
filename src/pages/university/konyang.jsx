import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/konyang',
  routeUrl: '/university/konyang',
  Head: () => (
    <>
      <title>Đại học Konyang (Chungnam) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Konyang (Chungnam) (Konyang University): 3,400,000 - 6,000,000 KRW (62,900,000 - 111,000,000 VND) mỗi học kỳ. Địa chỉ: 121 Daehak-ro, Nonsan, Chungcheongnam-do. Xếp hạng: #55." />
      <meta name="keywords" content="Đại học Konyang (Chungnam), học phí Đại học Konyang (Chungnam), Konyang University, 건양대학교, đại học Chungnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/konyang" />
      <meta property="og:title" content="Đại học Konyang (Chungnam) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Konyang (Chungnam) (Konyang University): 3,400,000 - 6,000,000 KRW (62,900,000 - 111,000,000 VND) mỗi học kỳ. Địa chỉ: 121 Daehak-ro, Nonsan, Chungcheongnam-do. Xếp hạng: #55." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/konyang" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Konyang (Chungnam) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Konyang (Chungnam) (Konyang University): 3,400,000 - 6,000,000 KRW (62,900,000 - 111,000,000 VND) mỗi học kỳ. Địa chỉ: 121 Daehak-ro, Nonsan, Chungcheongnam-do. Xếp hạng: #55." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/konyang" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Konyang (Chungnam)",
          "alternateName": "Konyang University",
          "url": "https://www.konyang.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/konyang">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'konyang' }} />;
}
