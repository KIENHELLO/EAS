import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/westminstergraduateschooloftheology',
  routeUrl: '/university/westminstergraduateschooloftheology',
  Head: () => (
    <>
      <title>Học viện Sau ĐH Thần học Westminster - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Học viện Sau ĐH Thần học Westminster (Westminster Graduate School of Theology): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #475." />
      <meta name="keywords" content="Học viện Sau ĐH Thần học Westminster, học phí Học viện Sau ĐH Thần học Westminster, Westminster Graduate School of Theology, 웨스트민스터신학대학원대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/westminstergraduateschooloftheology" />
      <meta property="og:title" content="Học viện Sau ĐH Thần học Westminster - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Học viện Sau ĐH Thần học Westminster (Westminster Graduate School of Theology): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #475." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/westminstergraduateschooloftheology" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Học viện Sau ĐH Thần học Westminster - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Học viện Sau ĐH Thần học Westminster (Westminster Graduate School of Theology): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #475." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/westminstergraduateschooloftheology" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Học viện Sau ĐH Thần học Westminster",
          "alternateName": "Westminster Graduate School of Theology",
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
    return <StaticRouter location="/university/westminstergraduateschooloftheology">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'westminstergraduateschooloftheology' }} />;
}
