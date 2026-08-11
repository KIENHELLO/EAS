import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/dongguk',
  routeUrl: '/university/dongguk',
  Head: () => (
    <>
      <title>Đại học Dongguk
( 동국대 학교) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Dongguk
( 동국대 학교) (Dongguk University): 3,820,000 - 6,100,000 KRW (70,670,000 - 112,850,000 VND) mỗi học kỳ. Địa chỉ: 30 Pildong-ro 1-gil, Jung-gu, Seoul. Xếp hạng: #14." />
      <meta name="keywords" content="Đại học Dongguk
( 동국대 학교), học phí Đại học Dongguk
( 동국대 학교), Dongguk University, 동국대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/dongguk" />
      <meta property="og:title" content="Đại học Dongguk
( 동국대 학교) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Dongguk
( 동국대 학교) (Dongguk University): 3,820,000 - 6,100,000 KRW (70,670,000 - 112,850,000 VND) mỗi học kỳ. Địa chỉ: 30 Pildong-ro 1-gil, Jung-gu, Seoul. Xếp hạng: #14." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/dongguk" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Dongguk
( 동국대 학교) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Dongguk
( 동국대 학교) (Dongguk University): 3,820,000 - 6,100,000 KRW (70,670,000 - 112,850,000 VND) mỗi học kỳ. Địa chỉ: 30 Pildong-ro 1-gil, Jung-gu, Seoul. Xếp hạng: #14." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/dongguk" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Dongguk
( 동국대 학교)",
          "alternateName": "Dongguk University",
          "url": "https://www.dongguk.edu",
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
    return <StaticRouter location="/university/dongguk">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'dongguk' }} />;
}
