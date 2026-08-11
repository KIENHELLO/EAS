import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kyungin_523',
  routeUrl: '/university/kyungin_523',
  Head: () => (
    <>
      <title>Đại học Nữ Kyungin - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Nữ Kyungin (Đại học Nữ Kyungin (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 경인여자대학부속유치원, 계양산로, 계산2동, 계양구, 인천광역시, 21038, 대한민국. Xếp hạng: #169." />
      <meta name="keywords" content="Đại học Nữ Kyungin, học phí Đại học Nữ Kyungin, Đại học Nữ Kyungin (Imported), Đại học Nữ Kyungin, đại học Incheon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kyungin_523" />
      <meta property="og:title" content="Đại học Nữ Kyungin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Nữ Kyungin (Đại học Nữ Kyungin (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 경인여자대학부속유치원, 계양산로, 계산2동, 계양구, 인천광역시, 21038, 대한민국. Xếp hạng: #169." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kyungin_523" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Nữ Kyungin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Nữ Kyungin (Đại học Nữ Kyungin (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 경인여자대학부속유치원, 계양산로, 계산2동, 계양구, 인천광역시, 21038, 대한민국. Xếp hạng: #169." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kyungin_523" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Nữ Kyungin",
          "alternateName": "Đại học Nữ Kyungin (Imported)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Incheon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/kyungin_523">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kyungin_523' }} />;
}
