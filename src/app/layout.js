import * as React from "react";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard"
});

const ocra = localFont({
  src: "../../public/fonts/OCRAExtended.woff2",
  display: "swap",
  variable: "--font-ocra"
});

export const metadata = {
  title: "GDGoC INHA",
  description: "개발자와 비개발자가 같이 성장하는 즐거움 with Google",
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "GDGoC INHA",
    description: "개발자와 비개발자가 같이 성장하는 즐거움 with Google",
    url: "https://gdgocinha.com",
    siteName: "GDGoC INHA",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "GDGoC INHA 오픈그래프 이미지",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${ocra.variable}`}>
      <head>
        <meta name="description" content="개발자와 비개발자가 같이 성장하는 즐거움 with Google" />
        <meta property="og:title" content="GDGoC INHA" />
        <meta property="og:description" content="개발자와 비개발자가 같이 성장하는 즐거움 with Google" />
        <meta property="og:url" content="https://gdgocinha.com" />
        <meta property="og:site_name" content="GDGoC INHA" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:type" content="website" />
        <script src="https://unpkg.com/type-hangul" async></script>
      </head>
      <body className={pretendard.className}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
