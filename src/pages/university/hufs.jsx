import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/hufs',
  routeUrl: '/university/hufs',
  Head: () => (
    <>
      <title>Đại học Ngoại ngữ Hankuk - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Ngoại ngữ Hankuk (Hankuk University of Foreign Studies): 3,620,000 - 4,680,000 KRW (66,970,000 - 86,580,000 VND) mỗi học kỳ. Địa chỉ: 여주집, 81 (이문동,(외대역동8길85)), 외대역동로27길, 이문2동, 동대문구, 서울특별시, 02424, 대한민국. Xếp hạng: #13." />
      <meta name="keywords" content="Đại học Ngoại ngữ Hankuk, học phí Đại học Ngoại ngữ Hankuk, Hankuk University of Foreign Studies, 한국외국어대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/hufs" />
      <meta property="og:title" content="Đại học Ngoại ngữ Hankuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Ngoại ngữ Hankuk (Hankuk University of Foreign Studies): 3,620,000 - 4,680,000 KRW (66,970,000 - 86,580,000 VND) mỗi học kỳ. Địa chỉ: 여주집, 81 (이문동,(외대역동8길85)), 외대역동로27길, 이문2동, 동대문구, 서울특별시, 02424, 대한민국. Xếp hạng: #13." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/hufs" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Ngoại ngữ Hankuk - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Ngoại ngữ Hankuk (Hankuk University of Foreign Studies): 3,620,000 - 4,680,000 KRW (66,970,000 - 86,580,000 VND) mỗi học kỳ. Địa chỉ: 여주집, 81 (이문동,(외대역동8길85)), 외대역동로27길, 이문2동, 동대문구, 서울특별시, 02424, 대한민국. Xếp hạng: #13." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/hufs" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Ngoại ngữ Hankuk",
          "alternateName": "Hankuk University of Foreign Studies",
          "url": "http://www.hufs.ac.kr",
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
    return <StaticRouter location="/university/hufs">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'hufs' }} />;
}
