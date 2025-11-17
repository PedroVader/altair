// app/locations/page.tsx
import { locations } from '@/data/locations';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { Metadata } from 'next';
import TrustBadges from '@/components/TrustBadgesMinimal';
import { getOrganizationSchema, getBreadcrumbSchema } from '@/lib/schema';
import QuoteButtonModal from '@/components/QuoteButtonModal';

export const metadata: Metadata = {
  title: 'Service Areas | Altair Austin Roofing - Professional Roofing in Central Texas',
  description: 'Professional roofing services across Austin, Round Rock, Cedar Park, Georgetown, and surrounding Central Texas areas. Find your local roofing experts.',
  keywords: 'Austin roofing areas, Round Rock roofer, Cedar Park roofing, Georgetown roofing services, Central Texas roofer',
  openGraph: {
    title: 'Service Areas | Altair Austin Roofing',
    description: 'Professional roofing services across Central Texas. Serving 10+ neighborhoods.',
    type: 'website',
    url: 'https://altairaustin.com/locations',
  },
};

export default function LocationsPage() {
  const organizationSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' }
  ]);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center py-12">
          {/* Background Image con overlay */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white space-y-6">
              {/* Badge - Serving Austin */}
              <div className="inline-block">
                <span className="bg-[#FFE317]/20 backdrop-blur-sm text-[#FFE317] px-5 py-2 rounded-full text-sm font-semibold border border-[#FFE317]/30">
                  Serving Central Texas
                </span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Areas We <span className="text-[#FFE317]">Serve</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Professional roofing services across Central Texas and surrounding areas. We proudly serve residents in over 10 neighborhoods with expert craftsmanship and reliable service.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
              <QuoteButtonModal 
                text="Get a Quote"
                variant="primary"  // ✅ Correcto - amarillo con azul
                 className='cursor-pointer'
              />
              </div>
            </div>
          </div>
        </section>

        <TrustBadges />

        {/* Locations Grid */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="inline-block border-b-4 border-[#FFE317] pb-2 mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00529C] px-2">
                  Find Your Neighborhood
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 mt-4 px-4">
                Click on your location to learn more about our roofing services in your area
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="group bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border-2 border-gray-200 hover:border-[#FFE317]"
                >
                  <div className="flex items-start gap-3">
                    <Icon 
                      icon="mdi:map-marker" 
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#00529C] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" 
                    />
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-[#00529C] transition mb-1">
                        {location.name}
                      </h3>
                      {location.zip && (
                        <p className="text-xs text-gray-500">
                          ZIP: {location.zip}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proudly Serving the <span className="text-[#00529C]">Greater Austin Area</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From downtown Austin to surrounding communities, we're your local roofing experts
              </p>
              <div className="w-24 h-1 bg-[#FFE317] mx-auto mt-4"></div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221094.07598632718!2d-97.9428734!3d30.307182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Altair Austin Roofing Service Area Map"
                className="w-full"
              ></iframe>
            </div>

            {/* Service Area Description */}
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Comprehensive Coverage Across Central Texas
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our service area extends throughout the Greater Austin region, ensuring that quality roofing services are never far from home. Whether you're in the heart of downtown Austin or in the surrounding suburbs, our experienced team is ready to serve you.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We understand the unique roofing challenges that Central Texas weather presents, from intense summer heat to sudden hailstorms. Our local expertise ensures your roof is built to withstand it all.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Our Service Promise</h4>
                  <div className="space-y-3">
                    {[
                      'Same-day emergency response',
                      'Free inspections & estimates',
                      'Licensed & insured professionals',
                      'Lifetime warranty on workmanship',
                      'Local family-owned business',
                      'A+ BBB rating'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Icon icon="mdi:check-circle" className="w-5 h-5 text-[#FFE317] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#00529C] to-[#003d75] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Area?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We may still be able to help! Contact us to discuss your roofing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15125550123"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFE317] hover:bg-[#ffd700] text-[#00529C] font-bold rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                <Icon icon="mdi:phone" className="w-5 h-5" />
                Call (512) 555-0123
              </a>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-[#00529C] font-bold rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                
                <Icon icon="mdi:arrow-right" className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}