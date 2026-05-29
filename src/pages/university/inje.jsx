import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/inje',
  routeUrl: '/university/inje',
  Head: () => (
    <>
      <title>Đại học Inje (Gimhae) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Inje (Gimhae) (Inje University): 3,195,000 - 5,680,000 KRW (59,107,500 - 105,080,000 VND) mỗi học kỳ. Địa chỉ: 197 Inje-ro, Gimhae, Gyeongsangnam-do. Xếp hạng: #42." />
      <meta name="keywords" content="Đại học Inje (Gimhae), học phí Đại học Inje (Gimhae), Inje University, 인제대학교, đại học Gyeongnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/inje" />
      <meta property="og:title" content="Đại học Inje (Gimhae) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Inje (Gimhae) (Inje University): 3,195,000 - 5,680,000 KRW (59,107,500 - 105,080,000 VND) mỗi học kỳ. Địa chỉ: 197 Inje-ro, Gimhae, Gyeongsangnam-do. Xếp hạng: #42." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/inje" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Inje (Gimhae) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Inje (Gimhae) (Inje University): 3,195,000 - 5,680,000 KRW (59,107,500 - 105,080,000 VND) mỗi học kỳ. Địa chỉ: 197 Inje-ro, Gimhae, Gyeongsangnam-do. Xếp hạng: #42." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/inje" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Inje (Gimhae)",
          "alternateName": "Inje University",
          "url": "https://www.inje.ac.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/inje">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'inje' }} />;
}
