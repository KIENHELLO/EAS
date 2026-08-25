import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/gyeongbukofhealth',
  routeUrl: '/university/gyeongbukofhealth',
  Head: () => (
    <>
      <title>Cao đẳng Gyeongbuk College of Health - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Gyeongbuk College of Health (Gyeongbuk College of Health): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Gyeongbuk. Xếp hạng: #596." />
      <meta name="keywords" content="Cao đẳng Gyeongbuk College of Health, học phí Cao đẳng Gyeongbuk College of Health, Gyeongbuk College of Health, 경북보건대학교, đại học Gyeongbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/gyeongbukofhealth" />
      <meta property="og:title" content="Cao đẳng Gyeongbuk College of Health - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Gyeongbuk College of Health (Gyeongbuk College of Health): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Gyeongbuk. Xếp hạng: #596." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/gyeongbukofhealth" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Gyeongbuk College of Health - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Gyeongbuk College of Health (Gyeongbuk College of Health): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Gyeongbuk. Xếp hạng: #596." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/gyeongbukofhealth" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Gyeongbuk College of Health",
          "alternateName": "Gyeongbuk College of Health",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeongbuk"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/gyeongbukofhealth">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'gyeongbukofhealth' }} />;
}
