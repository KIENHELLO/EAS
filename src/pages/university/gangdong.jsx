import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/gangdong',
  routeUrl: '/university/gangdong',
  Head: () => (
    <>
      <title>Cao đẳng Gangdong (Chungbuk) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Cao đẳng Gangdong (Chungbuk) (Gangdong College): 2,200,000 - 3,300,000 KRW (40,700,000 - 61,050,000 VND) mỗi học kỳ. Địa chỉ: 278 Daehak-ro, Saenggeuk-myeon, Eumseong-gun, Chungcheongbuk-do. Xếp hạng: #80." />
      <meta name="keywords" content="Cao đẳng Gangdong (Chungbuk), học phí Cao đẳng Gangdong (Chungbuk), Gangdong College, 강동대학교, đại học Chungbuk" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/gangdong" />
      <meta property="og:title" content="Cao đẳng Gangdong (Chungbuk) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Cao đẳng Gangdong (Chungbuk) (Gangdong College): 2,200,000 - 3,300,000 KRW (40,700,000 - 61,050,000 VND) mỗi học kỳ. Địa chỉ: 278 Daehak-ro, Saenggeuk-myeon, Eumseong-gun, Chungcheongbuk-do. Xếp hạng: #80." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/gangdong" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cao đẳng Gangdong (Chungbuk) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Cao đẳng Gangdong (Chungbuk) (Gangdong College): 2,200,000 - 3,300,000 KRW (40,700,000 - 61,050,000 VND) mỗi học kỳ. Địa chỉ: 278 Daehak-ro, Saenggeuk-myeon, Eumseong-gun, Chungcheongbuk-do. Xếp hạng: #80." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/gangdong" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Cao đẳng Gangdong (Chungbuk)",
          "alternateName": "Gangdong College",
          "url": "https://www.gangdong.ac.kr",
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
    return <StaticRouter location="/university/gangdong">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'gangdong' }} />;
}
