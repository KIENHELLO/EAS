import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreaaerospace',
  routeUrl: '/university/koreaaerospace',
  Head: () => (
    <>
      <title>ĐH Hàng không Vũ trụ Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Hàng không Vũ trụ Hàn Quốc (Korea Aerospace University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #407." />
      <meta name="keywords" content="ĐH Hàng không Vũ trụ Hàn Quốc, học phí ĐH Hàng không Vũ trụ Hàn Quốc, Korea Aerospace University, 한국항공대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreaaerospace" />
      <meta property="og:title" content="ĐH Hàng không Vũ trụ Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Hàng không Vũ trụ Hàn Quốc (Korea Aerospace University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #407." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreaaerospace" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Hàng không Vũ trụ Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Hàng không Vũ trụ Hàn Quốc (Korea Aerospace University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #407." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreaaerospace" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Hàng không Vũ trụ Hàn Quốc",
          "alternateName": "Korea Aerospace University",
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
    return <StaticRouter location="/university/koreaaerospace">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreaaerospace' }} />;
}
