import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/uni_5',
  routeUrl: '/university/uni_5',
  Head: () => (
    <>
      <title>Đại học Quốc gia Pukyong - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Pukyong (Pukyong University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: 대학본부 (A11), 45, 정문광장, 대연3동, 남구, 부산광역시, 48498, 대한민국. Xếp hạng: #97." />
      <meta name="keywords" content="Đại học Quốc gia Pukyong, học phí Đại học Quốc gia Pukyong, Pukyong University, 부경대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/uni_5" />
      <meta property="og:title" content="Đại học Quốc gia Pukyong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Pukyong (Pukyong University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: 대학본부 (A11), 45, 정문광장, 대연3동, 남구, 부산광역시, 48498, 대한민국. Xếp hạng: #97." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/uni_5" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Pukyong - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Pukyong (Pukyong University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: 대학본부 (A11), 45, 정문광장, 대연3동, 남구, 부산광역시, 48498, 대한민국. Xếp hạng: #97." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/uni_5" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Pukyong",
          "alternateName": "Pukyong University",
          "url": "http://www.uni_5.ac.kr",
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
    return <StaticRouter location="/university/uni_5">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'uni_5' }} />;
}
