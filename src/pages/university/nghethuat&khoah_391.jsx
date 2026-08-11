import React from 'react';
import { Island } from 'vite-plugin-ssg/browser';

export const ssgOptions = {
  slug: 'university/nghethuat&khoah_391',
  routeUrl: '/university/nghethuat&khoah_391',
  Head: () => (
    <>
      <title>Đại học Nghệ thuật & Khoa học Yongin - Học Phí & Thông Tin Tuyển Sinh 2025 | KR-UniTuition</title>
      <meta name="description" content="Học phí trường Đại học Nghệ thuật & Khoa học Yongin (Đại học Nghệ thuật & Khoa học Yongin (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 용인예술과학대학 도서관, 61, 동부로, 마평동, 처인구, 용인시, 경기도, 17145, 대한민국. Xếp hạng: #171." />
      <meta name="keywords" content="Đại học Nghệ thuật & Khoa học Yongin, học phí Đại học Nghệ thuật & Khoa học Yongin, Đại học Nghệ thuật & Khoa học Yongin (Imported), Đại học Nghệ thuật & Khoa học Yongin, đại học Gyeonggi-do" />
      <link rel="canonical" href="https://eas-tuition.onrender.com/university/nghethuat&khoah_391" />
      <meta property="og:title" content="Đại học Nghệ thuật & Khoa học Yongin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta property="og:description" content="Học phí trường Đại học Nghệ thuật & Khoa học Yongin (Đại học Nghệ thuật & Khoa học Yongin (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 용인예술과학대학 도서관, 61, 동부로, 마평동, 처인구, 용인시, 경기도, 17145, 대한민국. Xếp hạng: #171." />
      <meta property="og:url" content="https://eas-tuition.onrender.com/university/nghethuat&khoah_391" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Đại học Nghệ thuật & Khoa học Yongin - Học Phí & Thông Tin Tuyển Sinh 2025" />
      <meta name="twitter:description" content="Học phí trường Đại học Nghệ thuật & Khoa học Yongin (Đại học Nghệ thuật & Khoa học Yongin (Imported)): 2,500,000 - 3,200,000 KRW (46,250,000 - 59,200,000 VND) mỗi học kỳ. Địa chỉ: 용인예술과학대학 도서관, 61, 동부로, 마평동, 처인구, 용인시, 경기도, 17145, 대한민국. Xếp hạng: #171." />
      <meta name="twitter:image" content="https://eas-tuition.onrender.com/og-image.png" />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hreflang="vi" href="https://eas-tuition.onrender.com/university/nghethuat&khoah_391" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Đại học Nghệ thuật & Khoa học Yongin",
          "alternateName": "Đại học Nghệ thuật & Khoa học Yongin (Imported)",
          "url": "https://www.studyinkorea.go.kr",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": "Gyeonggi-do"
          }
        }`}
      </script>
    </>
  ),
  context: async (children) => {
    const { StaticRouter } = await import('react-router');
    return <StaticRouter location="/university/nghethuat&khoah_391">{children}</StaticRouter>;
  }
};

export default function UniversityDetailPage() {
  return <Island component="components/UniversityDetailApp" props={{ schoolId: 'nghethuat&khoah_391' }} />;
}
