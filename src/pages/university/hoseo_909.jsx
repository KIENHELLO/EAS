import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/hoseo_909',
  routeUrl: '/university/hoseo_909',
  Head: () => (
    <>
      <title>Đại học Hoseo - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Hoseo (Đại học Hoseo (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 호서대학교 천안캠퍼스, 호서대길, 안서동, 동남구, 천안시, 충청남도, 31066, 대한민국. Xếp hạng: #161." />
      <meta name="keywords" content="Đại học Hoseo, học phí Đại học Hoseo, Đại học Hoseo (Imported), Đại học Hoseo, đại học Chungcheongnam-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/hoseo_909" />
      <meta property="og:title" content="Đại học Hoseo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Hoseo (Đại học Hoseo (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 호서대학교 천안캠퍼스, 호서대길, 안서동, 동남구, 천안시, 충청남도, 31066, 대한민국. Xếp hạng: #161." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/hoseo_909" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Hoseo - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Hoseo (Đại học Hoseo (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 호서대학교 천안캠퍼스, 호서대길, 안서동, 동남구, 천안시, 충청남도, 31066, 대한민국. Xếp hạng: #161." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/hoseo_909" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Hoseo",
          "alternateName": "Đại học Hoseo (Imported)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungcheongnam-do"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/hoseo_909">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'hoseo_909' }} />;
}
