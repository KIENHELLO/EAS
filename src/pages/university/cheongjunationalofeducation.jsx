import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/cheongjunationalofeducation',
  routeUrl: '/university/cheongjunationalofeducation',
  Head: () => (
    <>
      <title>Đại học Sư phạm Quốc gia Cheongju - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Sư phạm Quốc gia Cheongju (Cheongju National University of Education): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Chungbuk. Xếp hạng: #564." />
      <meta name="keywords" content="Đại học Sư phạm Quốc gia Cheongju, học phí Đại học Sư phạm Quốc gia Cheongju, Cheongju National University of Education, 청주교육대학교, đại học Chungbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/cheongjunationalofeducation" />
      <meta property="og:title" content="Đại học Sư phạm Quốc gia Cheongju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Sư phạm Quốc gia Cheongju (Cheongju National University of Education): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Chungbuk. Xếp hạng: #564." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/cheongjunationalofeducation" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Sư phạm Quốc gia Cheongju - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Sư phạm Quốc gia Cheongju (Cheongju National University of Education): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Chungbuk. Xếp hạng: #564." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/cheongjunationalofeducation" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Sư phạm Quốc gia Cheongju",
          "alternateName": "Cheongju National University of Education",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/cheongjunationalofeducation">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'cheongjunationalofeducation' }} />;
}
