// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyStormButton from "@/components/StickyStormButton";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <StickyStormButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}