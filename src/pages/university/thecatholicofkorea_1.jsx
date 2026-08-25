import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/thecatholicofkorea_1',
  routeUrl: '/university/thecatholicofkorea_1',
  Head: () => (
    <>
      <title>ĐH Công giáo HQ (CS Bucheon) - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường ĐH Công giáo HQ (CS Bucheon) (The Catholic University of Korea): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #376." />
      <meta name="keywords" content="ĐH Công giáo HQ (CS Bucheon), học phí ĐH Công giáo HQ (CS Bucheon), The Catholic University of Korea, 가톨릭대학교(성심교정), đại học Gyeonggi" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/thecatholicofkorea_1" />
      <meta property="og:title" content="ĐH Công giáo HQ (CS Bucheon) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường ĐH Công giáo HQ (CS Bucheon) (The Catholic University of Korea): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #376." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/thecatholicofkorea_1" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ĐH Công giáo HQ (CS Bucheon) - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường ĐH Công giáo HQ (CS Bucheon) (The Catholic University of Korea): 3,600,000 - 5,800,000 KRW (66,600,000 - 107,300,000 VND) mỗi học kỳ. Địa chỉ: Gyeonggi. Xếp hạng: #376." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/thecatholicofkorea_1" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ĐH Công giáo HQ (CS Bucheon)",
          "alternateName": "The Catholic University of Korea",
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
    return <StaticRouter location="/university/thecatholicofkorea_1">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'thecatholicofkorea_1' }} />;
}
