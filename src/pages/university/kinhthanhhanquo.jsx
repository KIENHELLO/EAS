import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kinhthanhhanquo',
  routeUrl: '/university/kinhthanhhanquo',
  Head: () => (
    <>
      <title>ĐH Kinh Thánh Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Kinh Thánh Hàn Quốc (Korean Bible University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #162." />
      <meta name="keywords" content="ĐH Kinh Thánh Hàn Quốc, học phí ĐH Kinh Thánh Hàn Quốc, Korean Bible University, 한국성서대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kinhthanhhanquo" />
      <meta property="og:title" content="ĐH Kinh Thánh Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Kinh Thánh Hàn Quốc (Korean Bible University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #162." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kinhthanhhanquo" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Kinh Thánh Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Kinh Thánh Hàn Quốc (Korean Bible University): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #162." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kinhthanhhanquo" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Kinh Thánh Hàn Quốc",
          "alternateName": "Korean Bible University",
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
    return <StaticRouter location="/university/kinhthanhhanquo">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kinhthanhhanquo' }} />;
}
