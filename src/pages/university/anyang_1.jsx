import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/anyang_1',
  routeUrl: '/university/anyang_1',
  Head: () => (
    <>
      <title>ĐH Anyang (CS Ganghwa) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Anyang (CS Ganghwa) (Anyang University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #415." />
      <meta name="keywords" content="ĐH Anyang (CS Ganghwa), học phí ĐH Anyang (CS Ganghwa), Anyang University, 안양대학교(강화캠퍼스), đại học Incheon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/anyang_1" />
      <meta property="og:title" content="ĐH Anyang (CS Ganghwa) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Anyang (CS Ganghwa) (Anyang University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #415." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/anyang_1" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Anyang (CS Ganghwa) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Anyang (CS Ganghwa) (Anyang University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #415." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/anyang_1" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Anyang (CS Ganghwa)",
          "alternateName": "Anyang University",
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
    return <StaticRouter location="/university/anyang_1">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'anyang_1' }} />;
}
