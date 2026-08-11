import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/hockhoahocjeonb',
  routeUrl: '/university/hockhoahocjeonb',
  Head: () => (
    <>
      <title>Đại học học Khoa học Jeonbuk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học học Khoa học Jeonbuk (Đại học học Khoa học Jeonbuk (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 전북과학대학교, 정읍사로, 교암동, 초산동, 정읍시, 전북특별자치도, 56190, 대한민국. Xếp hạng: #210." />
      <meta name="keywords" content="Đại học học Khoa học Jeonbuk, học phí Đại học học Khoa học Jeonbuk, Đại học học Khoa học Jeonbuk (Korea), Đại học học Khoa học Jeonbuk, đại học Jeollabuk-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/hockhoahocjeonb" />
      <meta property="og:title" content="Đại học học Khoa học Jeonbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học học Khoa học Jeonbuk (Đại học học Khoa học Jeonbuk (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 전북과학대학교, 정읍사로, 교암동, 초산동, 정읍시, 전북특별자치도, 56190, 대한민국. Xếp hạng: #210." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/hockhoahocjeonb" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học học Khoa học Jeonbuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học học Khoa học Jeonbuk (Đại học học Khoa học Jeonbuk (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 전북과학대학교, 정읍사로, 교암동, 초산동, 정읍시, 전북특별자치도, 56190, 대한민국. Xếp hạng: #210." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/hockhoahocjeonb" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học học Khoa học Jeonbuk",
          "alternateName": "Đại học học Khoa học Jeonbuk (Korea)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Jeollabuk-do"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/hockhoahocjeonb">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'hockhoahocjeonb' }} />;
}
