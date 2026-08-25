import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/koreanacademyoffilmarts_seouloffice',
  routeUrl: '/university/koreanacademyoffilmarts_seouloffice',
  Head: () => (
    <>
      <title>Học viện Điện ảnh Hàn Quốc (KAFA) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Học viện Điện ảnh Hàn Quốc (KAFA) (Korean Academy of Film Arts): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #630." />
      <meta name="keywords" content="Học viện Điện ảnh Hàn Quốc (KAFA), học phí Học viện Điện ảnh Hàn Quốc (KAFA), Korean Academy of Film Arts, 한국영화아카데미, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/koreanacademyoffilmarts_seouloffice" />
      <meta property="og:title" content="Học viện Điện ảnh Hàn Quốc (KAFA) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Học viện Điện ảnh Hàn Quốc (KAFA) (Korean Academy of Film Arts): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #630." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/koreanacademyoffilmarts_seouloffice" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Học viện Điện ảnh Hàn Quốc (KAFA) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Học viện Điện ảnh Hàn Quốc (KAFA) (Korean Academy of Film Arts): 2,000,000 - 3,400,000 KRW (37,000,000 - 62,900,000 VND) mỗi học kỳ. Địa chỉ: Busan. Xếp hạng: #630." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/koreanacademyoffilmarts_seouloffice" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Học viện Điện ảnh Hàn Quốc (KAFA)",
          "alternateName": "Korean Academy of Film Arts",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Busan"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/koreanacademyoffilmarts_seouloffice">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'koreanacademyoffilmarts_seouloffice' }} />;
}
