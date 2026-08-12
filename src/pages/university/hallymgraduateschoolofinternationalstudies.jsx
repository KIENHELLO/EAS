import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/hallymgraduateschoolofinternationalstudies',
  routeUrl: '/university/hallymgraduateschoolofinternationalstudies',
  Head: () => (
    <>
      <title>Học viện Sau ĐH Quốc tế Hallym - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Học viện Sau ĐH Quốc tế Hallym (Hallym Graduate School of International Studies): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #373." />
      <meta name="keywords" content="Học viện Sau ĐH Quốc tế Hallym, học phí Học viện Sau ĐH Quốc tế Hallym, Hallym Graduate School of International Studies, 한림국제대학원대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/hallymgraduateschoolofinternationalstudies" />
      <meta property="og:title" content="Học viện Sau ĐH Quốc tế Hallym - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Học viện Sau ĐH Quốc tế Hallym (Hallym Graduate School of International Studies): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #373." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/hallymgraduateschoolofinternationalstudies" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Học viện Sau ĐH Quốc tế Hallym - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Học viện Sau ĐH Quốc tế Hallym (Hallym Graduate School of International Studies): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #373." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/hallymgraduateschoolofinternationalstudies" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Học viện Sau ĐH Quốc tế Hallym",
          "alternateName": "Hallym Graduate School of International Studies",
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
    return <StaticRouter location="/university/hallymgraduateschoolofinternationalstudies">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'hallymgraduateschoolofinternationalstudies' }} />;
}
