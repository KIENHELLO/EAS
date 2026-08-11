import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/catholic',
  routeUrl: '/university/catholic',
  Head: () => (
    <>
      <title>Đại học Phim ảnh Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Phim ảnh Hàn Quốc (Catholic University of Korea): 3,800,000 - 6,200,000 KRW (70,300,000 - 114,700,000 VND) mỗi học kỳ. Địa chỉ: 한국영상대학교, 사덕골길, 장군면, 세종특별자치시, 30065, 대한민국. Xếp hạng: #31." />
      <meta name="keywords" content="Đại học Phim ảnh Hàn Quốc, học phí Đại học Phim ảnh Hàn Quốc, Catholic University of Korea, 가톨릭대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/catholic" />
      <meta property="og:title" content="Đại học Phim ảnh Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Phim ảnh Hàn Quốc (Catholic University of Korea): 3,800,000 - 6,200,000 KRW (70,300,000 - 114,700,000 VND) mỗi học kỳ. Địa chỉ: 한국영상대학교, 사덕골길, 장군면, 세종특별자치시, 30065, 대한민국. Xếp hạng: #31." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/catholic" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Phim ảnh Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Phim ảnh Hàn Quốc (Catholic University of Korea): 3,800,000 - 6,200,000 KRW (70,300,000 - 114,700,000 VND) mỗi học kỳ. Địa chỉ: 한국영상대학교, 사덕골길, 장군면, 세종특별자치시, 30065, 대한민국. Xếp hạng: #31." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/catholic" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Phim ảnh Hàn Quốc",
          "alternateName": "Catholic University of Korea",
          "url": "https://www.catholic.ac.kr",
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
    return <StaticRouter location="/university/catholic">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'catholic' }} />;
}
