import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apps by Eagle",
  description: "把生活裡「要是有個 App 就好了」的瞬間，真的做出來。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
