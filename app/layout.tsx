import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-inter",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Premium Vale Hizmeti | Güvenli Otopark Çözümleri",
    template: "%s | Premium Vale Hizmeti"
  },
  description:
    "Restoran, otel, etkinlik ve kurumsal otoparklar için güvenli, hızlı ve profesyonel premium vale hizmetleri.",
  keywords: [
    "premium vale",
    "vale hizmeti",
    "otopark yönetimi",
    "otel vale",
    "restoran vale",
    "etkinlik vale"
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Premium Vale Hizmeti",
    description:
      "Araç tesliminden otopark yönetimine kadar güvenli, hızlı ve profesyonel çözümler.",
    type: "website",
    locale: "tr_TR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
