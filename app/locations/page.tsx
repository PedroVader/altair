import { locations } from '@/data/locations';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { Metadata } from 'next';
import TrustBadges from '@/components/TrustBadgesMinimal';

export const metadata: Metadata = {
  title: 'Service Areas | Austin Roofing Company',
  description: 'Professional roofing services across Austin and surrounding areas. Find your local roofing experts.',
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Same style as main hero */}
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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFE317] hover:bg-[#ffd700] text-[#00529C] font-bold rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                Get a Quote
                <Icon icon="mdi:arrow-right" className="w-5 h-5" />
              </Link>
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

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Don't See Your Area?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00529C] hover:bg-[#003d75] text-white font-bold rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              Get a Quote
              <Icon icon="mdi:arrow-right" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}