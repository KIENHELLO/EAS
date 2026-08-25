import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreapolytechnicspecialized',
  routeUrl: '/university/koreapolytechnicspecialized',
  Head: () => (
    <>
      <title>CĐ Polytech Chuyên biệt (Bán dẫn) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Polytech Chuyên biệt (Bán dẫn) (Korea Polytechnic Specialized College): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #463." />
      <meta name="keywords" content="CĐ Polytech Chuyên biệt (Bán dẫn), học phí CĐ Polytech Chuyên biệt (Bán dẫn), Korea Polytechnic Specialized College, 한국폴리텍특성화대학(반도체), đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreapolytechnicspecialized" />
      <meta property="og:title" content="CĐ Polytech Chuyên biệt (Bán dẫn) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Polytech Chuyên biệt (Bán dẫn) (Korea Polytechnic Specialized College): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #463." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreapolytechnicspecialized" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Polytech Chuyên biệt (Bán dẫn) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Polytech Chuyên biệt (Bán dẫn) (Korea Polytechnic Specialized College): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #463." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreapolytechnicspecialized" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Polytech Chuyên biệt (Bán dẫn)",
          "alternateName": "Korea Polytechnic Specialized College",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeonggi"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/koreapolytechnicspecialized">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreapolytechnicspecialized' }} />;
}
