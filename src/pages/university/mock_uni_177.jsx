import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/mock_uni_177',
  routeUrl: '/university/mock_uni_177',
  Head: () => (
    <>
      <title>Đại học Inje - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Inje (Inje University): 3,245,000 - 4,952,000 KRW (60,032,500 - 91,612,000 VND) mỗi học kỳ. Địa chỉ: 인제로, 삼방동, 김해시, 경상남도, 50834, 대한민국. Xếp hạng: #200." />
      <meta name="keywords" content="Đại học Inje, học phí Đại học Inje, Inje University, Inje대학교, đại học Sejong" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/mock_uni_177" />
      <meta property="og:title" content="Đại học Inje - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Inje (Inje University): 3,245,000 - 4,952,000 KRW (60,032,500 - 91,612,000 VND) mỗi học kỳ. Địa chỉ: 인제로, 삼방동, 김해시, 경상남도, 50834, 대한민국. Xếp hạng: #200." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/mock_uni_177" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Inje - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Inje (Inje University): 3,245,000 - 4,952,000 KRW (60,032,500 - 91,612,000 VND) mỗi học kỳ. Địa chỉ: 인제로, 삼방동, 김해시, 경상남도, 50834, 대한민국. Xếp hạng: #200." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/mock_uni_177" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Inje",
          "alternateName": "Inje University",
          "url": "https://www.inje.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Sejong"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/mock_uni_177">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'mock_uni_177' }} />;
}
