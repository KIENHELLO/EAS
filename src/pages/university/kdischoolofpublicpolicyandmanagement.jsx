import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/kdischoolofpublicpolicyandmanagement',
  routeUrl: '/university/kdischoolofpublicpolicyandmanagement',
  Head: () => (
    <>
      <title>Học viện Sau ĐH Chính sách Quốc tế KDI - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Học viện Sau ĐH Chính sách Quốc tế KDI (KDI School of Public Policy and Management): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Sejong. Xếp hạng: #501." />
      <meta name="keywords" content="Học viện Sau ĐH Chính sách Quốc tế KDI, học phí Học viện Sau ĐH Chính sách Quốc tế KDI, KDI School of Public Policy and Management, 한국개발연구원 국제정책대학원대학교, đại học Sejong" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/kdischoolofpublicpolicyandmanagement" />
      <meta property="og:title" content="Học viện Sau ĐH Chính sách Quốc tế KDI - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Học viện Sau ĐH Chính sách Quốc tế KDI (KDI School of Public Policy and Management): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Sejong. Xếp hạng: #501." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/kdischoolofpublicpolicyandmanagement" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Học viện Sau ĐH Chính sách Quốc tế KDI - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Học viện Sau ĐH Chính sách Quốc tế KDI (KDI School of Public Policy and Management): 0 KRW (0 VND) mỗi học kỳ. Địa chỉ: Sejong. Xếp hạng: #501." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/kdischoolofpublicpolicyandmanagement" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Học viện Sau ĐH Chính sách Quốc tế KDI",
          "alternateName": "KDI School of Public Policy and Management",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Sejong"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/kdischoolofpublicpolicyandmanagement">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'kdischoolofpublicpolicyandmanagement' }} />;
}
