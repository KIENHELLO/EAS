import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/uni_2',
  routeUrl: '/university/uni_2',
  Head: () => (
    <>
      <title>Đại học Dankook - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Dankook (Dankook University): 3,600,000 - 6,400,000 KRW (66,600,000 - 118,400,000 VND) mỗi học kỳ. Địa chỉ: 152, 죽전로, 죽전동, 신봉동, 수지구, 용인시, 경기도, 16890, 대한민국. Xếp hạng: #94." />
      <meta name="keywords" content="Đại học Dankook, học phí Đại học Dankook, Dankook University, 단국대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/uni_2" />
      <meta property="og:title" content="Đại học Dankook - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Dankook (Dankook University): 3,600,000 - 6,400,000 KRW (66,600,000 - 118,400,000 VND) mỗi học kỳ. Địa chỉ: 152, 죽전로, 죽전동, 신봉동, 수지구, 용인시, 경기도, 16890, 대한민국. Xếp hạng: #94." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/uni_2" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Dankook - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Dankook (Dankook University): 3,600,000 - 6,400,000 KRW (66,600,000 - 118,400,000 VND) mỗi học kỳ. Địa chỉ: 152, 죽전로, 죽전동, 신봉동, 수지구, 용인시, 경기도, 16890, 대한민국. Xếp hạng: #94." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/uni_2" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Dankook",
          "alternateName": "Dankook University",
          "url": "http://www.uni_2.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeonggi"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/uni_2">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'uni_2' }} />;
}
