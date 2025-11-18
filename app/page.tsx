// app/page.tsx
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadgesMinimal';
import AboutSection from '@/components/AboutUsComponent';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import RoofTypesGrid from '@/components/RoofTypesGrid';
import { getOrganizationSchema } from '@/lib/schema';
import type { Metadata } from 'next';
import CertificatesCarousel from '@/components/CertificatesCarousel';

export const metadata: Metadata = {
  title: 'Altair Austin Roofing | Professional Roofing Services in Austin, TX',
  description: 'Professional roofing services in Austin, TX. Residential roof repair, replacement, and installation. Licensed, insured, and trusted since 2008. Free estimates available.',
  keywords: 'Austin roofing, roof repair Austin, roof replacement Austin, roofing contractor Austin TX, emergency roof repair, storm damage roofing',
  authors: [{ name: 'Altair Austin Roofing' }],
  openGraph: {
    title: 'Altair Austin Roofing | Professional Roofing Services',
    description: 'Professional roofing services in Austin, TX. Licensed, insured, and trusted since 2008.',
    type: 'website',
    locale: 'en_US',
    url: 'https://altairaustin.com',
    siteName: 'Altair Austin Roofing',
    images: [
      {
        url: 'https://altairaustin.com/worker-repairing-roof.jpg',
        width: 1200,
        height: 630,
        alt: 'Altair Austin Roofing - Professional Roofing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altair Austin Roofing | Professional Roofing Services',
    description: 'Professional roofing services in Austin, TX. Licensed, insured, and trusted since 2008.',
    images: ['https://altairaustin.com/worker-repairing-roof.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-aqui', // Agregar después
  },
};

export default function Home() {
  const organizationSchema = getOrganizationSchema();

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Trust Badges */}
        <TrustBadges />

        <CertificatesCarousel />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Services Grid */}
        <ServicesGrid />
        
        {/* Why Choose Us */}
        <WhyChooseUs />
        
        {/* Roof Types Grid */}
        <RoofTypesGrid />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* FAQ */}
        <FAQ />
      </main>
    </>
  );
}