import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/hapdongtheologicalseminary',
  routeUrl: '/university/hapdongtheologicalseminary',
  Head: () => (
    <>
      <title>Học viện Sau ĐH Thần học Hợp Đồng - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Học viện Sau ĐH Thần học Hợp Đồng (Hapdong Theological Seminary): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #478." />
      <meta name="keywords" content="Học viện Sau ĐH Thần học Hợp Đồng, học phí Học viện Sau ĐH Thần học Hợp Đồng, Hapdong Theological Seminary, 합동신학대학원대학교, đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/hapdongtheologicalseminary" />
      <meta property="og:title" content="Học viện Sau ĐH Thần học Hợp Đồng - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Học viện Sau ĐH Thần học Hợp Đồng (Hapdong Theological Seminary): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #478." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/hapdongtheologicalseminary" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Học viện Sau ĐH Thần học Hợp Đồng - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Học viện Sau ĐH Thần học Hợp Đồng (Hapdong Theological Seminary): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #478." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/hapdongtheologicalseminary" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Học viện Sau ĐH Thần học Hợp Đồng",
          "alternateName": "Hapdong Theological Seminary",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeonggi"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/hapdongtheologicalseminary">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'hapdongtheologicalseminary' }} />;
}
