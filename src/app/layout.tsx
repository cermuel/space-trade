import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "@/providers/AppProvider";

export const metadata: Metadata = {
  title: "SpaceTrade",
  description: "SpaceTrade Application",
  icons: "/images/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
