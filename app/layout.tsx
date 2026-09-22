import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apps by Eagle",
  description: "讓生活簡單一點，也可愛一點。Apps by Eagle — 依糕 Eagle 的 App 創作。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={caveat.variable}>{children}</body>
    </html>
  );
}
