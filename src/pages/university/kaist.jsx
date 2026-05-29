import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kaist',
  routeUrl: '/university/kaist',
  Head: () => (
    <>
      <title>Viện Khoa học & Công nghệ Tiên tiến Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Viện Khoa học & Công nghệ Tiên tiến Hàn Quốc (KAIST (Korea Advanced Institute of Science and Technology)): 3,060,000 - 4,250,000 KRW (56,610,000 - 78,625,000 VND) mỗi học kỳ. Địa chỉ: 291 Daehak-ro, Yuseong-gu, Daejeon. Xếp hạng: #2." />
      <meta name="keywords" content="Viện Khoa học & Công nghệ Tiên tiến Hàn Quốc, học phí Viện Khoa học & Công nghệ Tiên tiến Hàn Quốc, KAIST (Korea Advanced Institute of Science and Technology), 한국과학기술원, đại học Daejeon" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kaist" />
      <meta property="og:title" content="Viện Khoa học & Công nghệ Tiên tiến Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Viện Khoa học & Công nghệ Tiên tiến Hàn Quốc (KAIST (Korea Advanced Institute of Science and Technology)): 3,060,000 - 4,250,000 KRW (56,610,000 - 78,625,000 VND) mỗi học kỳ. Địa chỉ: 291 Daehak-ro, Yuseong-gu, Daejeon. Xếp hạng: #2." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kaist" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Viện Khoa học & Công nghệ Tiên tiến Hàn Quốc - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Viện Khoa học & Công nghệ Tiên tiến Hàn Quốc (KAIST (Korea Advanced Institute of Science and Technology)): 3,060,000 - 4,250,000 KRW (56,610,000 - 78,625,000 VND) mỗi học kỳ. Địa chỉ: 291 Daehak-ro, Yuseong-gu, Daejeon. Xếp hạng: #2." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kaist" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Viện Khoa học & Công nghệ Tiên tiến Hàn Quốc",
          "alternateName": "KAIST (Korea Advanced Institute of Science and Technology)",
          "url": "https://www.kaist.ac.kr",
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
    return <StaticRouter location="/university/kaist">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kaist' }} />;
}
