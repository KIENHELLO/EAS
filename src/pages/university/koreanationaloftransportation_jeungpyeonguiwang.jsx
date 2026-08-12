import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreanationaloftransportation_jeungpyeonguiwang',
  routeUrl: '/university/koreanationaloftransportation_jeungpyeonguiwang',
  Head: () => (
    <>
      <title>Đại học Quốc gia Giao thông Hàn Quốc (KNUT) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Giao thông Hàn Quốc (KNUT) (Korea National University of Transportation): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Chungbuk. Xếp hạng: #536." />
      <meta name="keywords" content="Đại học Quốc gia Giao thông Hàn Quốc (KNUT), học phí Đại học Quốc gia Giao thông Hàn Quốc (KNUT), Korea National University of Transportation, 한국교통대학교, đại học Chungbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreanationaloftransportation_jeungpyeonguiwang" />
      <meta property="og:title" content="Đại học Quốc gia Giao thông Hàn Quốc (KNUT) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Giao thông Hàn Quốc (KNUT) (Korea National University of Transportation): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Chungbuk. Xếp hạng: #536." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreanationaloftransportation_jeungpyeonguiwang" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Giao thông Hàn Quốc (KNUT) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Giao thông Hàn Quốc (KNUT) (Korea National University of Transportation): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Chungbuk. Xếp hạng: #536." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreanationaloftransportation_jeungpyeonguiwang" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Giao thông Hàn Quốc (KNUT)",
          "alternateName": "Korea National University of Transportation",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/koreanationaloftransportation_jeungpyeonguiwang">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreanationaloftransportation_jeungpyeonguiwang' }} />;
}
