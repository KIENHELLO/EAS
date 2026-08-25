import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/yonsei_1',
  routeUrl: '/university/yonsei_1',
  Head: () => (
    <>
      <title>ĐH Yonsei (CS Quốc tế) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Yonsei (CS Quốc tế) (Yonsei University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #416." />
      <meta name="keywords" content="ĐH Yonsei (CS Quốc tế), học phí ĐH Yonsei (CS Quốc tế), Yonsei University, 연세대학교(국제캠퍼스), đại học Incheon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/yonsei_1" />
      <meta property="og:title" content="ĐH Yonsei (CS Quốc tế) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Yonsei (CS Quốc tế) (Yonsei University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #416." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/yonsei_1" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Yonsei (CS Quốc tế) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Yonsei (CS Quốc tế) (Yonsei University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #416." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/yonsei_1" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Yonsei (CS Quốc tế)",
          "alternateName": "Yonsei University",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Incheon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/yonsei_1">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'yonsei_1' }} />;
}
