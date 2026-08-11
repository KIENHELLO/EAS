import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/khoahoculsan',
  routeUrl: '/university/khoahoculsan',
  Head: () => (
    <>
      <title>Đại học Khoa học Ulsan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Khoa học Ulsan (Đại học Khoa học Ulsan (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 울산과학대학교동부캠퍼스, 101, 봉수로, 방어동, 동구, 울산광역시, 44073, 대한민국. Xếp hạng: #214." />
      <meta name="keywords" content="Đại học Khoa học Ulsan, học phí Đại học Khoa học Ulsan, Đại học Khoa học Ulsan (Korea), Đại học Khoa học Ulsan, đại học Ulsan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/khoahoculsan" />
      <meta property="og:title" content="Đại học Khoa học Ulsan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Khoa học Ulsan (Đại học Khoa học Ulsan (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 울산과학대학교동부캠퍼스, 101, 봉수로, 방어동, 동구, 울산광역시, 44073, 대한민국. Xếp hạng: #214." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/khoahoculsan" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Khoa học Ulsan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Khoa học Ulsan (Đại học Khoa học Ulsan (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 울산과학대학교동부캠퍼스, 101, 봉수로, 방어동, 동구, 울산광역시, 44073, 대한민국. Xếp hạng: #214." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/khoahoculsan" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Khoa học Ulsan",
          "alternateName": "Đại học Khoa học Ulsan (Korea)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Ulsan"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/khoahoculsan">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'khoahoculsan' }} />;
}
