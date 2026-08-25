import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/chosunnursing',
  routeUrl: '/university/chosunnursing',
  Head: () => (
    <>
      <title>Cao đẳng Điều dưỡng Chosun - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Điều dưỡng Chosun (Chosun Nursing College): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #604." />
      <meta name="keywords" content="Cao đẳng Điều dưỡng Chosun, học phí Cao đẳng Điều dưỡng Chosun, Chosun Nursing College, 조선간호대학교, đại học Gwangju" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/chosunnursing" />
      <meta property="og:title" content="Cao đẳng Điều dưỡng Chosun - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Điều dưỡng Chosun (Chosun Nursing College): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #604." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/chosunnursing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Điều dưỡng Chosun - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Điều dưỡng Chosun (Chosun Nursing College): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Gwangju. Xếp hạng: #604." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/chosunnursing" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Điều dưỡng Chosun",
          "alternateName": "Chosun Nursing College",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gwangju"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/chosunnursing">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'chosunnursing' }} />;
}
