import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/chungbuk',
  routeUrl: '/university/chungbuk',
  Head: () => (
    <>
      <title>Đại học Quốc gia Chungbuk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Chungbuk (Chungbuk National University): 1,720,000 - 3,180,000 KRW (31,820,000 - 58,830,000 VND) mỗi học kỳ. Địa chỉ: 1 Chungdae-ro, Seowon-gu, Cheongju, Chungcheongbuk-do. Xếp hạng: #21." />
      <meta name="keywords" content="Đại học Quốc gia Chungbuk, học phí Đại học Quốc gia Chungbuk, Chungbuk National University, 충북대학교, đại học Chungbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/chungbuk" />
      <meta property="og:title" content="Đại học Quốc gia Chungbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Chungbuk (Chungbuk National University): 1,720,000 - 3,180,000 KRW (31,820,000 - 58,830,000 VND) mỗi học kỳ. Địa chỉ: 1 Chungdae-ro, Seowon-gu, Cheongju, Chungcheongbuk-do. Xếp hạng: #21." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/chungbuk" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Chungbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Chungbuk (Chungbuk National University): 1,720,000 - 3,180,000 KRW (31,820,000 - 58,830,000 VND) mỗi học kỳ. Địa chỉ: 1 Chungdae-ro, Seowon-gu, Cheongju, Chungcheongbuk-do. Xếp hạng: #21." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/chungbuk" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Chungbuk",
          "alternateName": "Chungbuk National University",
          "url": "https://www.chungbuk.ac.kr",
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
    return <StaticRouter location="/university/chungbuk">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'chungbuk' }} />;
}
