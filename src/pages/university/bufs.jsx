import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/bufs',
  routeUrl: '/university/bufs',
  Head: () => (
    <>
      <title>Đại học Ngoại ngữ Busan - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Ngoại ngữ Busan (Busan University of Foreign Studies): 3,200,000 - 3,800,000 KRW (59,200,000 - 70,300,000 VND) mỗi học kỳ. Địa chỉ: 부산외국어대학교 만오기념관, 65, 금샘로485번길, 남산동, 금정구, 부산광역시, 46234, 대한민국. Xếp hạng: #44." />
      <meta name="keywords" content="Đại học Ngoại ngữ Busan, học phí Đại học Ngoại ngữ Busan, Busan University of Foreign Studies, 부산외국어대학교, đại học Busan" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/bufs" />
      <meta property="og:title" content="Đại học Ngoại ngữ Busan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Ngoại ngữ Busan (Busan University of Foreign Studies): 3,200,000 - 3,800,000 KRW (59,200,000 - 70,300,000 VND) mỗi học kỳ. Địa chỉ: 부산외국어대학교 만오기념관, 65, 금샘로485번길, 남산동, 금정구, 부산광역시, 46234, 대한민국. Xếp hạng: #44." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/bufs" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Ngoại ngữ Busan - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Ngoại ngữ Busan (Busan University of Foreign Studies): 3,200,000 - 3,800,000 KRW (59,200,000 - 70,300,000 VND) mỗi học kỳ. Địa chỉ: 부산외국어대학교 만오기념관, 65, 금샘로485번길, 남산동, 금정구, 부산광역시, 46234, 대한민국. Xếp hạng: #44." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/bufs" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Ngoại ngữ Busan",
          "alternateName": "Busan University of Foreign Studies",
          "url": "https://www.bufs.ac.kr",
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
    return <StaticRouter location="/university/bufs">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'bufs' }} />;
}
