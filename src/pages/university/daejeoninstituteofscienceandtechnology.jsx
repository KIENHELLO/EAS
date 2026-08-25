import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/daejeoninstituteofscienceandtechnology',
  routeUrl: '/university/daejeoninstituteofscienceandtechnology',
  Head: () => (
    <>
      <title>CĐ KHCN Daejeon - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ KHCN Daejeon (Daejeon Institute of Science and Technology): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #494." />
      <meta name="keywords" content="CĐ KHCN Daejeon, học phí CĐ KHCN Daejeon, Daejeon Institute of Science and Technology, 대전과학기술대학교, đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/daejeoninstituteofscienceandtechnology" />
      <meta property="og:title" content="CĐ KHCN Daejeon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ KHCN Daejeon (Daejeon Institute of Science and Technology): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #494." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/daejeoninstituteofscienceandtechnology" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ KHCN Daejeon - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ KHCN Daejeon (Daejeon Institute of Science and Technology): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Daejeon. Xếp hạng: #494." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/daejeoninstituteofscienceandtechnology" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ KHCN Daejeon",
          "alternateName": "Daejeon Institute of Science and Technology",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Daejeon"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/daejeoninstituteofscienceandtechnology">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'daejeoninstituteofscienceandtechnology' }} />;
}
