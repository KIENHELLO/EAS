import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mokwon_93',
  routeUrl: '/university/mokwon_93',
  Head: () => (
    <>
      <title>Đại học Mokwon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Mokwon (Đại học Mokwon (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 중앙도서관, 동서대로656번길, 용계동, 진잠동, 유성구, 대전광역시, 35350, 대한민국. Xếp hạng: #157." />
      <meta name="keywords" content="Đại học Mokwon, học phí Đại học Mokwon, Đại học Mokwon (Imported), Đại học Mokwon, đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mokwon_93" />
      <meta property="og:title" content="Đại học Mokwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Mokwon (Đại học Mokwon (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 중앙도서관, 동서대로656번길, 용계동, 진잠동, 유성구, 대전광역시, 35350, 대한민국. Xếp hạng: #157." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mokwon_93" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Mokwon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Mokwon (Đại học Mokwon (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 중앙도서관, 동서대로656번길, 용계동, 진잠동, 유성구, 대전광역시, 35350, 대한민국. Xếp hạng: #157." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mokwon_93" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Mokwon",
          "alternateName": "Đại học Mokwon (Imported)",
          "url": "https://www.studyinkorea.go.kr",
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
    return <StaticRouter location="/university/mokwon_93">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mokwon_93' }} />;
}
