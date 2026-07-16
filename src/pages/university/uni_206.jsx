import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/uni_206',
  routeUrl: '/university/uni_206',
  Head: () => (
    <>
      <title>포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường 포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH) (포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH) (English)): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul, South Korea. Xếp hạng: #100." />
      <meta name="keywords" content="포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH), học phí 포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH), 포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH) (English), 포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH) (Korean), đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/uni_206" />
      <meta property="og:title" content="포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường 포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH) (포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH) (English)): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul, South Korea. Xếp hạng: #100." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/uni_206" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường 포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH) (포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH) (English)): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul, South Korea. Xếp hạng: #100." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/uni_206" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH)",
          "alternateName": "포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH) (English)",
          "url": "https://google.com",
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
    return <StaticRouter location="/university/uni_206">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'uni_206' }} />;
}
