import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from 'next/script';

// 导入调度器以初始化定时任务
import '../scripts/scheduler';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Z-Library Latest Links | Daily Updates | Free E-book Downloads",
  description: "Find the latest working Z-Library links, updated daily, with complete access guides and tutorials. Download academic literature and e-books for free.",
  keywords: "Z-Library, Z-Library links, free e-books, academic literature, e-book downloads, Z-Lib, Zlibrary, latest links, access guide, tutorials",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://www.aiforai.xyz/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
        {/* Google Analytics 官方推荐用法 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CHMFSLL64M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CHMFSLL64M');
          `}
        </Script>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GT-M3S236PS');
          `,
        }} />
      </head>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GT-M3S236PS" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}