import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreamaritimeocean',
  routeUrl: '/university/koreamaritimeocean',
  Head: () => (
    <>
      <title>Đại học Quốc gia Hàng hải Korea - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Quốc gia Hàng hải Korea (Korea Maritime & Ocean University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #504." />
      <meta name="keywords" content="Đại học Quốc gia Hàng hải Korea, học phí Đại học Quốc gia Hàng hải Korea, Korea Maritime & Ocean University, 한국해양대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreamaritimeocean" />
      <meta property="og:title" content="Đại học Quốc gia Hàng hải Korea - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Quốc gia Hàng hải Korea (Korea Maritime & Ocean University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #504." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreamaritimeocean" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Quốc gia Hàng hải Korea - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Quốc gia Hàng hải Korea (Korea Maritime & Ocean University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #504." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreamaritimeocean" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Quốc gia Hàng hải Korea",
          "alternateName": "Korea Maritime & Ocean University",
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
    return <StaticRouter location="/university/koreamaritimeocean">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreamaritimeocean' }} />;
}
