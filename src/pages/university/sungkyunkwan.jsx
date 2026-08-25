import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/sungkyunkwan',
  routeUrl: '/university/sungkyunkwan',
  Head: () => (
    <>
      <title>ĐH Sungkyunkwan (CS KHTN) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Sungkyunkwan (CS KHTN) (Sungkyunkwan University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #391." />
      <meta name="keywords" content="ĐH Sungkyunkwan (CS KHTN), học phí ĐH Sungkyunkwan (CS KHTN), Sungkyunkwan University, 성균관대학교(자연과학캠퍼스), đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/sungkyunkwan" />
      <meta property="og:title" content="ĐH Sungkyunkwan (CS KHTN) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Sungkyunkwan (CS KHTN) (Sungkyunkwan University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #391." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/sungkyunkwan" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Sungkyunkwan (CS KHTN) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Sungkyunkwan (CS KHTN) (Sungkyunkwan University): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #391." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/sungkyunkwan" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Sungkyunkwan (CS KHTN)",
          "alternateName": "Sungkyunkwan University",
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
    return <StaticRouter location="/university/sungkyunkwan">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'sungkyunkwan' }} />;
}
