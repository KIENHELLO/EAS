import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/woongjiaccountingtax',
  routeUrl: '/university/woongjiaccountingtax',
  Head: () => (
    <>
      <title>CĐ Kế toán-Thuế Woongji - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Kế toán-Thuế Woongji (Woongji Accounting & Tax University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #451." />
      <meta name="keywords" content="CĐ Kế toán-Thuế Woongji, học phí CĐ Kế toán-Thuế Woongji, Woongji Accounting & Tax University, 웅지세무대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/woongjiaccountingtax" />
      <meta property="og:title" content="CĐ Kế toán-Thuế Woongji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Kế toán-Thuế Woongji (Woongji Accounting & Tax University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #451." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/woongjiaccountingtax" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Kế toán-Thuế Woongji - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Kế toán-Thuế Woongji (Woongji Accounting & Tax University): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #451." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/woongjiaccountingtax" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Kế toán-Thuế Woongji",
          "alternateName": "Woongji Accounting & Tax University",
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
    return <StaticRouter location="/university/woongjiaccountingtax">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'woongjiaccountingtax' }} />;
}
