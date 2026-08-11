import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/khoahoc&congngh_879',
  routeUrl: '/university/khoahoc&congngh_879',
  Head: () => (
    <>
      <title>Đại học Khoa học & Công nghệ Busan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Khoa học & Công nghệ Busan (Đại học Khoa học & Công nghệ Busan (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 시랑로106번길, 구포동, 구포3동, 북구, 부산광역시, 46644, 대한민국. Xếp hạng: #174." />
      <meta name="keywords" content="Đại học Khoa học & Công nghệ Busan, học phí Đại học Khoa học & Công nghệ Busan, Đại học Khoa học & Công nghệ Busan (Imported), Đại học Khoa học & Công nghệ Busan, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/khoahoc&congngh_879" />
      <meta property="og:title" content="Đại học Khoa học & Công nghệ Busan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Khoa học & Công nghệ Busan (Đại học Khoa học & Công nghệ Busan (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 시랑로106번길, 구포동, 구포3동, 북구, 부산광역시, 46644, 대한민국. Xếp hạng: #174." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/khoahoc&congngh_879" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Khoa học & Công nghệ Busan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Khoa học & Công nghệ Busan (Đại học Khoa học & Công nghệ Busan (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 시랑로106번길, 구포동, 구포3동, 북구, 부산광역시, 46644, 대한민국. Xếp hạng: #174." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/khoahoc&congngh_879" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Khoa học & Công nghệ Busan",
          "alternateName": "Đại học Khoa học & Công nghệ Busan (Imported)",
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
    return <StaticRouter location="/university/khoahoc&congngh_879">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'khoahoc&congngh_879' }} />;
}
