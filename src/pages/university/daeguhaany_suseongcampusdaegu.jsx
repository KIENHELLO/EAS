import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/daeguhaany_suseongcampusdaegu',
  routeUrl: '/university/daeguhaany_suseongcampusdaegu',
  Head: () => (
    <>
      <title>Đại học Daegu Haany - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Daegu Haany (Daegu Haany University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeongbuk. Xếp hạng: #527." />
      <meta name="keywords" content="Đại học Daegu Haany, học phí Đại học Daegu Haany, Daegu Haany University, 대구한의대학교, đại học Gyeongbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/daeguhaany_suseongcampusdaegu" />
      <meta property="og:title" content="Đại học Daegu Haany - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Daegu Haany (Daegu Haany University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeongbuk. Xếp hạng: #527." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/daeguhaany_suseongcampusdaegu" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Daegu Haany - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Daegu Haany (Daegu Haany University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeongbuk. Xếp hạng: #527." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/daeguhaany_suseongcampusdaegu" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Daegu Haany",
          "alternateName": "Daegu Haany University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/daeguhaany_suseongcampusdaegu">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'daeguhaany_suseongcampusdaegu' }} />;
}
