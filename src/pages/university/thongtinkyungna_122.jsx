import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/thongtinkyungna_122',
  routeUrl: '/university/thongtinkyungna_122',
  Head: () => (
    <>
      <title>Đại học Thông tin Kyungnam - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Thông tin Kyungnam (Đại học Thông tin Kyungnam (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 경남정보대학교, 주례로, 주례2동, 사상구, 부산광역시, 47007, 대한민국. Xếp hạng: #173." />
      <meta name="keywords" content="Đại học Thông tin Kyungnam, học phí Đại học Thông tin Kyungnam, Đại học Thông tin Kyungnam (Imported), Đại học Thông tin Kyungnam, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/thongtinkyungna_122" />
      <meta property="og:title" content="Đại học Thông tin Kyungnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Thông tin Kyungnam (Đại học Thông tin Kyungnam (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 경남정보대학교, 주례로, 주례2동, 사상구, 부산광역시, 47007, 대한민국. Xếp hạng: #173." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/thongtinkyungna_122" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Thông tin Kyungnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Thông tin Kyungnam (Đại học Thông tin Kyungnam (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 경남정보대학교, 주례로, 주례2동, 사상구, 부산광역시, 47007, 대한민국. Xếp hạng: #173." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/thongtinkyungna_122" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Thông tin Kyungnam",
          "alternateName": "Đại học Thông tin Kyungnam (Imported)",
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
    return <StaticRouter location="/university/thongtinkyungna_122">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'thongtinkyungna_122' }} />;
}
