import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/gyeonginnationalofeducation_1',
  routeUrl: '/university/gyeonginnationalofeducation_1',
  Head: () => (
    <>
      <title>ĐH Sư phạm QG Gyeongin (CS Incheon) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Sư phạm QG Gyeongin (CS Incheon) (Gyeongin National University of Education): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #414." />
      <meta name="keywords" content="ĐH Sư phạm QG Gyeongin (CS Incheon), học phí ĐH Sư phạm QG Gyeongin (CS Incheon), Gyeongin National University of Education, 경인교육대학교(인천캠퍼스), đại học Incheon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/gyeonginnationalofeducation_1" />
      <meta property="og:title" content="ĐH Sư phạm QG Gyeongin (CS Incheon) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Sư phạm QG Gyeongin (CS Incheon) (Gyeongin National University of Education): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #414." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/gyeonginnationalofeducation_1" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Sư phạm QG Gyeongin (CS Incheon) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Sư phạm QG Gyeongin (CS Incheon) (Gyeongin National University of Education): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Incheon. Xếp hạng: #414." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/gyeonginnationalofeducation_1" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Sư phạm QG Gyeongin (CS Incheon)",
          "alternateName": "Gyeongin National University of Education",
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
    return <StaticRouter location="/university/gyeonginnationalofeducation_1">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'gyeonginnationalofeducation_1' }} />;
}
