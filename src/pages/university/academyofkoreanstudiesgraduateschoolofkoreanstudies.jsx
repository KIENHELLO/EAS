import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/academyofkoreanstudiesgraduateschoolofkoreanstudies',
  routeUrl: '/university/academyofkoreanstudiesgraduateschoolofkoreanstudies',
  Head: () => (
    <>
      <title>Học viện Hàn Quốc học - AKS - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Học viện Hàn Quốc học - AKS (Academy of Korean Studies - Graduate School of Korean Studies): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #477." />
      <meta name="keywords" content="Học viện Hàn Quốc học - AKS, học phí Học viện Hàn Quốc học - AKS, Academy of Korean Studies - Graduate School of Korean Studies, 한국학중앙연구원 한국학대학원, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/academyofkoreanstudiesgraduateschoolofkoreanstudies" />
      <meta property="og:title" content="Học viện Hàn Quốc học - AKS - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Học viện Hàn Quốc học - AKS (Academy of Korean Studies - Graduate School of Korean Studies): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #477." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/academyofkoreanstudiesgraduateschoolofkoreanstudies" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Học viện Hàn Quốc học - AKS - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Học viện Hàn Quốc học - AKS (Academy of Korean Studies - Graduate School of Korean Studies): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #477." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/academyofkoreanstudiesgraduateschoolofkoreanstudies" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Học viện Hàn Quốc học - AKS",
          "alternateName": "Academy of Korean Studies - Graduate School of Korean Studies",
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
    return <StaticRouter location="/university/academyofkoreanstudiesgraduateschoolofkoreanstudies">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'academyofkoreanstudiesgraduateschoolofkoreanstudies' }} />;
}
