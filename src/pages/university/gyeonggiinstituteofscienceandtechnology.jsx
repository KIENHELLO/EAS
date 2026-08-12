import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/gyeonggiinstituteofscienceandtechnology',
  routeUrl: '/university/gyeonggiinstituteofscienceandtechnology',
  Head: () => (
    <>
      <title>CĐ KHKT Gyeonggi - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ KHKT Gyeonggi (Gyeonggi Institute of Science and Technology): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #425." />
      <meta name="keywords" content="CĐ KHKT Gyeonggi, học phí CĐ KHKT Gyeonggi, Gyeonggi Institute of Science and Technology, 경기과학기술대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/gyeonggiinstituteofscienceandtechnology" />
      <meta property="og:title" content="CĐ KHKT Gyeonggi - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ KHKT Gyeonggi (Gyeonggi Institute of Science and Technology): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #425." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/gyeonggiinstituteofscienceandtechnology" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ KHKT Gyeonggi - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ KHKT Gyeonggi (Gyeonggi Institute of Science and Technology): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #425." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/gyeonggiinstituteofscienceandtechnology" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ KHKT Gyeonggi",
          "alternateName": "Gyeonggi Institute of Science and Technology",
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
    return <StaticRouter location="/university/gyeonggiinstituteofscienceandtechnology">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'gyeonggiinstituteofscienceandtechnology' }} />;
}
