import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/seoulwomensofnursing',
  routeUrl: '/university/seoulwomensofnursing',
  Head: () => (
    <>
      <title>CĐ Điều dưỡng Nữ sinh Seoul - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường CĐ Điều dưỡng Nữ sinh Seoul (Seoul Women's College of Nursing): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #346." />
      <meta name="keywords" content="CĐ Điều dưỡng Nữ sinh Seoul, học phí CĐ Điều dưỡng Nữ sinh Seoul, Seoul Women's College of Nursing, 서울여자간호대학교, đại học Seoul" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/seoulwomensofnursing" />
      <meta property="og:title" content="CĐ Điều dưỡng Nữ sinh Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường CĐ Điều dưỡng Nữ sinh Seoul (Seoul Women's College of Nursing): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #346." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/seoulwomensofnursing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CĐ Điều dưỡng Nữ sinh Seoul - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường CĐ Điều dưỡng Nữ sinh Seoul (Seoul Women's College of Nursing): 2,500,000 - 3,600,000 KRW (46,250,000 - 66,600,000 VND) mỗi học kỳ. Địa chỉ: Seoul. Xếp hạng: #346." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/seoulwomensofnursing" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "CĐ Điều dưỡng Nữ sinh Seoul",
          "alternateName": "Seoul Women's College of Nursing",
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
    return <StaticRouter location="/university/seoulwomensofnursing">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'seoulwomensofnursing' }} />;
}
