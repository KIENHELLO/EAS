import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/busaninstituteofscienceandtechnology',
  routeUrl: '/university/busaninstituteofscienceandtechnology',
  Head: () => (
    <>
      <title>Cao đẳng KH&CN Busan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng KH&CN Busan (Busan Institute of Science and Technology): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #580." />
      <meta name="keywords" content="Cao đẳng KH&CN Busan, học phí Cao đẳng KH&CN Busan, Busan Institute of Science and Technology, 부산과학기술대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/busaninstituteofscienceandtechnology" />
      <meta property="og:title" content="Cao đẳng KH&CN Busan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng KH&CN Busan (Busan Institute of Science and Technology): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #580." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/busaninstituteofscienceandtechnology" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng KH&CN Busan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng KH&CN Busan (Busan Institute of Science and Technology): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #580." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/busaninstituteofscienceandtechnology" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng KH&CN Busan",
          "alternateName": "Busan Institute of Science and Technology",
          "url": "",
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
    return <StaticRouter location="/university/busaninstituteofscienceandtechnology">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'busaninstituteofscienceandtechnology' }} />;
}
