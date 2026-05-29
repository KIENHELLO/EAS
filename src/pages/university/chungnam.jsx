import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/chungnam',
  routeUrl: '/university/chungnam',
  Head: () => (
    <>
      <title>Đại học Quốc gia Chungnam - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Chungnam (Chungnam National University): 3,780,000 - 6,090,000 KRW (69,930,000 - 112,665,000 VND) mỗi học kỳ. Địa chỉ: 99 Daehak-ro, Yuseong-gu, Daejeon. Xếp hạng: #24." />
      <meta name="keywords" content="Đại học Quốc gia Chungnam, học phí Đại học Quốc gia Chungnam, Chungnam National University, 충남대학교, đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/chungnam" />
      <meta property="og:title" content="Đại học Quốc gia Chungnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Chungnam (Chungnam National University): 3,780,000 - 6,090,000 KRW (69,930,000 - 112,665,000 VND) mỗi học kỳ. Địa chỉ: 99 Daehak-ro, Yuseong-gu, Daejeon. Xếp hạng: #24." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/chungnam" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Chungnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Chungnam (Chungnam National University): 3,780,000 - 6,090,000 KRW (69,930,000 - 112,665,000 VND) mỗi học kỳ. Địa chỉ: 99 Daehak-ro, Yuseong-gu, Daejeon. Xếp hạng: #24." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/chungnam" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Chungnam",
          "alternateName": "Chungnam National University",
          "url": "https://plus.cnu.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daejeon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/chungnam">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'chungnam' }} />;
}
