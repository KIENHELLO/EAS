import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/sahmyook_520',
  routeUrl: '/university/sahmyook_520',
  Head: () => (
    <>
      <title>Đại học Sahmyook - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sahmyook (Đại học Sahmyook (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 세명대학교, 세명로, 모산동, 제천시, 충청북도, 27136, 대한민국. Xếp hạng: #153." />
      <meta name="keywords" content="Đại học Sahmyook, học phí Đại học Sahmyook, Đại học Sahmyook (Imported), Đại học Sahmyook, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/sahmyook_520" />
      <meta property="og:title" content="Đại học Sahmyook - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sahmyook (Đại học Sahmyook (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 세명대학교, 세명로, 모산동, 제천시, 충청북도, 27136, 대한민국. Xếp hạng: #153." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/sahmyook_520" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sahmyook - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sahmyook (Đại học Sahmyook (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 세명대학교, 세명로, 모산동, 제천시, 충청북도, 27136, 대한민국. Xếp hạng: #153." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/sahmyook_520" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sahmyook",
          "alternateName": "Đại học Sahmyook (Imported)",
          "url": "https://www.studyinkorea.go.kr",
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
    return <StaticRouter location="/university/sahmyook_520">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'sahmyook_520' }} />;
}
