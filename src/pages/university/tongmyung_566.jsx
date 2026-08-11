import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/tongmyung_566',
  routeUrl: '/university/tongmyung_566',
  Head: () => (
    <>
      <title>Đại học Tongmyung - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Tongmyung (Đại học Tongmyung (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 동명정보공업고등학교, 동명로, 용당동, 남구, 부산광역시, 48520, 대한민국. Xếp hạng: #166." />
      <meta name="keywords" content="Đại học Tongmyung, học phí Đại học Tongmyung, Đại học Tongmyung (Imported), Đại học Tongmyung, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/tongmyung_566" />
      <meta property="og:title" content="Đại học Tongmyung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Tongmyung (Đại học Tongmyung (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 동명정보공업고등학교, 동명로, 용당동, 남구, 부산광역시, 48520, 대한민국. Xếp hạng: #166." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/tongmyung_566" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Tongmyung - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Tongmyung (Đại học Tongmyung (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 동명정보공업고등학교, 동명로, 용당동, 남구, 부산광역시, 48520, 대한민국. Xếp hạng: #166." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/tongmyung_566" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Tongmyung",
          "alternateName": "Đại học Tongmyung (Imported)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Busan"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/tongmyung_566">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'tongmyung_566' }} />;
}
