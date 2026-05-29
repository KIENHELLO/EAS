import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/ewha',
  routeUrl: '/university/ewha',
  Head: () => (
    <>
      <title>Đại học Nữ giới Ewha - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Nữ giới Ewha (Ewha Womans University): 4,100,000 - 6,620,000 KRW (75,850,000 - 122,470,000 VND) mỗi học kỳ. Địa chỉ: 52 Ewhayeodae-gil, Seodaemun-gu, Seoul. Xếp hạng: #8." />
      <meta name="keywords" content="Đại học Nữ giới Ewha, học phí Đại học Nữ giới Ewha, Ewha Womans University, 이화여자대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/ewha" />
      <meta property="og:title" content="Đại học Nữ giới Ewha - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Nữ giới Ewha (Ewha Womans University): 4,100,000 - 6,620,000 KRW (75,850,000 - 122,470,000 VND) mỗi học kỳ. Địa chỉ: 52 Ewhayeodae-gil, Seodaemun-gu, Seoul. Xếp hạng: #8." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/ewha" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Nữ giới Ewha - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Nữ giới Ewha (Ewha Womans University): 4,100,000 - 6,620,000 KRW (75,850,000 - 122,470,000 VND) mỗi học kỳ. Địa chỉ: 52 Ewhayeodae-gil, Seodaemun-gu, Seoul. Xếp hạng: #8." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/ewha" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Nữ giới Ewha",
          "alternateName": "Ewha Womans University",
          "url": "https://www.ewha.ac.kr",
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
    return <StaticRouter location="/university/ewha">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'ewha' }} />;
}
