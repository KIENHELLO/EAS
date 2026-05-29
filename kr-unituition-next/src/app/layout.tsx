import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ExchangeRateProvider } from "../context/ExchangeRateContext";

export const metadata: Metadata = {
  title: "KR-UniTuition - Tra cứu học phí đại học Hàn Quốc",
  description: "Hệ thống tra cứu, chuyển đổi tỷ giá và so sánh học phí chi tiết các trường đại học tại Hàn Quốc. Hỗ trợ tiền Won (KRW) và Việt Nam Đồng (VND).",
  keywords: "học phí hàn quốc, du học hàn quốc, đại học hàn quốc, tỷ giá won, so sánh học phí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" data-theme="light">
      <head>
        {/* Leaflet CSS CDN */}
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" 
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" 
          crossOrigin="" 
        />
      </head>
      <body>
        {/* Leaflet JS CDN loaded before interactive components */}
        <Script 
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" 
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" 
          crossOrigin=""
          strategy="beforeInteractive"
        />
        
        <ExchangeRateProvider>
          {children}
        </ExchangeRateProvider>
      </body>
    </html>
  );
}
