import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/yeungnamcollege',
  routeUrl: '/university/yeungnamcollege',
  Head: () => (
    <>
      <title>Đại học Yeungnam College - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Yeungnam College (Đại học Yeungnam College (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 영남이공대학교, 170, 현충로, 대명3동, 남구, 대구광역시, 42415, 대한민국. Xếp hạng: #213." />
      <meta name="keywords" content="Đại học Yeungnam College, học phí Đại học Yeungnam College, Đại học Yeungnam College (Korea), Đại học Yeungnam College, đại học Daegu" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/yeungnamcollege" />
      <meta property="og:title" content="Đại học Yeungnam College - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Yeungnam College (Đại học Yeungnam College (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 영남이공대학교, 170, 현충로, 대명3동, 남구, 대구광역시, 42415, 대한민국. Xếp hạng: #213." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/yeungnamcollege" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Yeungnam College - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Yeungnam College (Đại học Yeungnam College (Korea)): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: 영남이공대학교, 170, 현충로, 대명3동, 남구, 대구광역시, 42415, 대한민국. Xếp hạng: #213." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/yeungnamcollege" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Yeungnam College",
          "alternateName": "Đại học Yeungnam College (Korea)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daegu"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/yeungnamcollege">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'yeungnamcollege' }} />;
}
