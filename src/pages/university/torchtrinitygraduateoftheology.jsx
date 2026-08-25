import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/torchtrinitygraduateoftheology',
  routeUrl: '/university/torchtrinitygraduateoftheology',
  Head: () => (
    <>
      <title>Học viện Sau ĐH Thần học Torch Trinity - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Học viện Sau ĐH Thần học Torch Trinity (Torch Trinity Graduate University of Theology): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #374." />
      <meta name="keywords" content="Học viện Sau ĐH Thần học Torch Trinity, học phí Học viện Sau ĐH Thần học Torch Trinity, Torch Trinity Graduate University of Theology, 촛불트리니티신학대학원대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/torchtrinitygraduateoftheology" />
      <meta property="og:title" content="Học viện Sau ĐH Thần học Torch Trinity - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Học viện Sau ĐH Thần học Torch Trinity (Torch Trinity Graduate University of Theology): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #374." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/torchtrinitygraduateoftheology" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Học viện Sau ĐH Thần học Torch Trinity - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Học viện Sau ĐH Thần học Torch Trinity (Torch Trinity Graduate University of Theology): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #374." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/torchtrinitygraduateoftheology" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Học viện Sau ĐH Thần học Torch Trinity",
          "alternateName": "Torch Trinity Graduate University of Theology",
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
    return <StaticRouter location="/university/torchtrinitygraduateoftheology">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'torchtrinitygraduateoftheology' }} />;
}
