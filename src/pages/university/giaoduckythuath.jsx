import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/giaoduckythuath',
  routeUrl: '/university/giaoduckythuath',
  Head: () => (
    <>
      <title>Đại học KOREATECH (Kỹ thuật Công nghệ) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học KOREATECH (Kỹ thuật Công nghệ) (Korea University of Technology and Education): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #177." />
      <meta name="keywords" content="Đại học KOREATECH (Kỹ thuật Công nghệ), học phí Đại học KOREATECH (Kỹ thuật Công nghệ), Korea University of Technology and Education, 한국기술교육대학교, đại học Chungnam" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/giaoduckythuath" />
      <meta property="og:title" content="Đại học KOREATECH (Kỹ thuật Công nghệ) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học KOREATECH (Kỹ thuật Công nghệ) (Korea University of Technology and Education): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #177." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/giaoduckythuath" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học KOREATECH (Kỹ thuật Công nghệ) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học KOREATECH (Kỹ thuật Công nghệ) (Korea University of Technology and Education): 2,400,000 - 3,100,000 KRW (44,400,000 - 57,350,000 VND) mỗi học kỳ. Địa chỉ: Chungnam. Xếp hạng: #177." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/giaoduckythuath" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học KOREATECH (Kỹ thuật Công nghệ)",
          "alternateName": "Korea University of Technology and Education",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Chungnam"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/giaoduckythuath">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'giaoduckythuath' }} />;
}
