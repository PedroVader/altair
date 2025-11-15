// app/page.tsx
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadgesMinimal';
import AboutSection from '@/components/AboutUsComponent';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import RoofTypesGrid from '@/components/RoofTypesGrid';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      
      {/* Trust Badges */}
      <TrustBadges />
      
      {/* About Section */}
      <AboutSection />
      <ServicesGrid />
      <WhyChooseUs />
      <RoofTypesGrid />
      <Testimonials />
      <FAQ />
      {/* Próximas secciones */}
      {/* 
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      */}
    </main>
  );
}