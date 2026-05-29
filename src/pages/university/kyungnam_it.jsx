import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kyungnam_it',
  routeUrl: '/university/kyungnam_it',
  Head: () => (
    <>
      <title>Cao đẳng CNTT Kyungnam - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng CNTT Kyungnam (Kyungnam College of Information & Technology): 3,468,000 KRW (64,158,000 VND) mỗi học kỳ. Địa chỉ: 45 Jurye-ro, Sasang-gu, Busan. Xếp hạng: #60." />
      <meta name="keywords" content="Cao đẳng CNTT Kyungnam, học phí Cao đẳng CNTT Kyungnam, Kyungnam College of Information & Technology, 경남정보대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kyungnam_it" />
      <meta property="og:title" content="Cao đẳng CNTT Kyungnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng CNTT Kyungnam (Kyungnam College of Information & Technology): 3,468,000 KRW (64,158,000 VND) mỗi học kỳ. Địa chỉ: 45 Jurye-ro, Sasang-gu, Busan. Xếp hạng: #60." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kyungnam_it" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng CNTT Kyungnam - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng CNTT Kyungnam (Kyungnam College of Information & Technology): 3,468,000 KRW (64,158,000 VND) mỗi học kỳ. Địa chỉ: 45 Jurye-ro, Sasang-gu, Busan. Xếp hạng: #60." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kyungnam_it" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng CNTT Kyungnam",
          "alternateName": "Kyungnam College of Information & Technology",
          "url": "https://www.kit.ac.kr",
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
    return <StaticRouter location="/university/kyungnam_it">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kyungnam_it' }} />;
}
