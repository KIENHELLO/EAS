import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/postech',
  routeUrl: '/university/postech',
  Head: () => (
    <>
      <title>Đại học Khoa học và Công nghệ Pohang - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Khoa học và Công nghệ Pohang (POSTECH (Pohang University of Science and Technology)): 3,200,000 KRW (59,200,000 VND) mỗi học kỳ. Địa chỉ: 77 Cheongam-ro, Nam-gu, Pohang, Gyeongsangbuk-do. Xếp hạng: #20." />
      <meta name="keywords" content="Đại học Khoa học và Công nghệ Pohang, học phí Đại học Khoa học và Công nghệ Pohang, POSTECH (Pohang University of Science and Technology), 포항공과대학교, đại học Gyeongbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/postech" />
      <meta property="og:title" content="Đại học Khoa học và Công nghệ Pohang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Khoa học và Công nghệ Pohang (POSTECH (Pohang University of Science and Technology)): 3,200,000 KRW (59,200,000 VND) mỗi học kỳ. Địa chỉ: 77 Cheongam-ro, Nam-gu, Pohang, Gyeongsangbuk-do. Xếp hạng: #20." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/postech" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Khoa học và Công nghệ Pohang - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Khoa học và Công nghệ Pohang (POSTECH (Pohang University of Science and Technology)): 3,200,000 KRW (59,200,000 VND) mỗi học kỳ. Địa chỉ: 77 Cheongam-ro, Nam-gu, Pohang, Gyeongsangbuk-do. Xếp hạng: #20." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/postech" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Khoa học và Công nghệ Pohang",
          "alternateName": "POSTECH (Pohang University of Science and Technology)",
          "url": "https://www.postech.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/postech">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'postech' }} />;
}
