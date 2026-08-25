import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/thecatholicofkorea',
  routeUrl: '/university/thecatholicofkorea',
  Head: () => (
    <>
      <title>ĐH Công giáo Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Công giáo Hàn Quốc (The Catholic University of Korea): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #300." />
      <meta name="keywords" content="ĐH Công giáo Hàn Quốc, học phí ĐH Công giáo Hàn Quốc, The Catholic University of Korea, 가톨릭대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/thecatholicofkorea" />
      <meta property="og:title" content="ĐH Công giáo Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Công giáo Hàn Quốc (The Catholic University of Korea): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #300." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/thecatholicofkorea" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Công giáo Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Công giáo Hàn Quốc (The Catholic University of Korea): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #300." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/thecatholicofkorea" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Công giáo Hàn Quốc",
          "alternateName": "The Catholic University of Korea",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Seoul"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/thecatholicofkorea">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'thecatholicofkorea' }} />;
}
