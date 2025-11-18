// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyStormButton from "@/components/StickyStormButton";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Altair Austin Roofing - Expert Roofing Services in Austin, TX",
  description: "Professional roofing services in Austin, Round Rock, Cedar Park, Georgetown, Lakeway & Buda. Licensed & Insured. 24/7 Emergency Service. Free Estimates.",
  keywords: "roofing austin, roof repair austin, roof replacement austin, roofing contractor austin tx",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        {/* Iconify CDN para resolver CORS en Vercel */}
        <script src="https://code.iconify.design/3/3.1.0/iconify.min.js" defer></script>
      </head>
      <body className={manrope.className}>
        <Header />
        <StickyStormButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}