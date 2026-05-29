import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/sookmyung',
  routeUrl: '/university/sookmyung',
  Head: () => (
    <>
      <title>Đại học Nữ sinh Sookmyung - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Nữ sinh Sookmyung (Sookmyung Womans University): 3,200,000 - 4,200,000 KRW (59,200,000 - 77,700,000 VND) mỗi học kỳ. Địa chỉ: 100 Cheongpa-ro 47-gil, Yongsan-gu, Seoul. Xếp hạng: #22." />
      <meta name="keywords" content="Đại học Nữ sinh Sookmyung, học phí Đại học Nữ sinh Sookmyung, Sookmyung Womans University, 숙명여자대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/sookmyung" />
      <meta property="og:title" content="Đại học Nữ sinh Sookmyung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Nữ sinh Sookmyung (Sookmyung Womans University): 3,200,000 - 4,200,000 KRW (59,200,000 - 77,700,000 VND) mỗi học kỳ. Địa chỉ: 100 Cheongpa-ro 47-gil, Yongsan-gu, Seoul. Xếp hạng: #22." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/sookmyung" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Nữ sinh Sookmyung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Nữ sinh Sookmyung (Sookmyung Womans University): 3,200,000 - 4,200,000 KRW (59,200,000 - 77,700,000 VND) mỗi học kỳ. Địa chỉ: 100 Cheongpa-ro 47-gil, Yongsan-gu, Seoul. Xếp hạng: #22." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/sookmyung" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Nữ sinh Sookmyung",
          "alternateName": "Sookmyung Womans University",
          "url": "https://www.sookmyung.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Seoul"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/sookmyung">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'sookmyung' }} />;
}
