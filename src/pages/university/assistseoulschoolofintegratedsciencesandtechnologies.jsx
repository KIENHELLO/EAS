import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/assistseoulschoolofintegratedsciencesandtechnologies',
  routeUrl: '/university/assistseoulschoolofintegratedsciencesandtechnologies',
  Head: () => (
    <>
      <title>Học viện Sau ĐH Khoa học Tổng hợp Seoul - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Học viện Sau ĐH Khoa học Tổng hợp Seoul (aSSIST - Seoul School of Integrated Sciences and Technologies): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #361." />
      <meta name="keywords" content="Học viện Sau ĐH Khoa học Tổng hợp Seoul, học phí Học viện Sau ĐH Khoa học Tổng hợp Seoul, aSSIST - Seoul School of Integrated Sciences and Technologies, 서울과학종합대학원대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/assistseoulschoolofintegratedsciencesandtechnologies" />
      <meta property="og:title" content="Học viện Sau ĐH Khoa học Tổng hợp Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Học viện Sau ĐH Khoa học Tổng hợp Seoul (aSSIST - Seoul School of Integrated Sciences and Technologies): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #361." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/assistseoulschoolofintegratedsciencesandtechnologies" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Học viện Sau ĐH Khoa học Tổng hợp Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Học viện Sau ĐH Khoa học Tổng hợp Seoul (aSSIST - Seoul School of Integrated Sciences and Technologies): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #361." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/assistseoulschoolofintegratedsciencesandtechnologies" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Học viện Sau ĐH Khoa học Tổng hợp Seoul",
          "alternateName": "aSSIST - Seoul School of Integrated Sciences and Technologies",
          "url": "",
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
    return <StaticRouter location="/university/assistseoulschoolofintegratedsciencesandtechnologies">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'assistseoulschoolofintegratedsciencesandtechnologies' }} />;
}
