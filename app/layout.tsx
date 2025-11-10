import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Altair Austin Roofing Company - Residential Roofing Experts",
  description: "Professional residential roofing services in Austin, TX. Expert roof repairs, installations, replacements, and maintenance. Quality workmanship guaranteed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased font-sans`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}