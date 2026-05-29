import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/seoultech',
  routeUrl: '/university/seoultech',
  Head: () => (
    <>
      <title>Đại học Khoa học & Công nghệ Quốc gia Seoul - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Khoa học & Công nghệ Quốc gia Seoul (Seoul National University of Science and Technology): 2,200,000 - 2,900,000 KRW (40,700,000 - 53,650,000 VND) mỗi học kỳ. Địa chỉ: 232 Gongneung-ro, Nowon-gu, Seoul. Xếp hạng: #22." />
      <meta name="keywords" content="Đại học Khoa học & Công nghệ Quốc gia Seoul, học phí Đại học Khoa học & Công nghệ Quốc gia Seoul, Seoul National University of Science and Technology, 서울과학기술대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/seoultech" />
      <meta property="og:title" content="Đại học Khoa học & Công nghệ Quốc gia Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Khoa học & Công nghệ Quốc gia Seoul (Seoul National University of Science and Technology): 2,200,000 - 2,900,000 KRW (40,700,000 - 53,650,000 VND) mỗi học kỳ. Địa chỉ: 232 Gongneung-ro, Nowon-gu, Seoul. Xếp hạng: #22." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/seoultech" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Khoa học & Công nghệ Quốc gia Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Khoa học & Công nghệ Quốc gia Seoul (Seoul National University of Science and Technology): 2,200,000 - 2,900,000 KRW (40,700,000 - 53,650,000 VND) mỗi học kỳ. Địa chỉ: 232 Gongneung-ro, Nowon-gu, Seoul. Xếp hạng: #22." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/seoultech" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Khoa học & Công nghệ Quốc gia Seoul",
          "alternateName": "Seoul National University of Science and Technology",
          "url": "https://www.seoultech.ac.kr",
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
    return <StaticRouter location="/university/seoultech">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'seoultech' }} />;
}
