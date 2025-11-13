// components/Hero.tsx
import ContactForm from "./ContactForm";
import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center py-12">
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
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Side - Content */}
          <div className="text-white space-y-5">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Icon 
                    key={i} 
                    icon="mdi:star"
                    className="w-3.5 h-3.5 text-[#FFE317]"
                  />
                ))}
              </div>
              <span className="text-white/90 font-medium text-sm flex items-center gap-1.5">
                5/5 Star Rated on
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                  alt="Google"
                  className="h-5"
                />
              </span>
            </div>

            {/* Main Heading */}
            <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 whitespace-nowrap">
  Austin <span className="text-[#FFE317]">Roofing Company</span>
</h1>
  <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-3xl">
    Are you planning to have any construction or roofing done to your home? Then you've come to the right place. Austin Roofing Company – Roof Repair & Replacement is a leading roofing contractor in Austin, TX, offering expert roofing services for your family home or business in the greater Austin area. Another top Austin roofing company, WDR, to which we refer business, can be found here. We have a trusted business alliance with them.
  </p>
</div>

            {/* Key Features - Simplified
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:shield-check" className="w-5 h-5 text-[#FFE317]" />
                <span className="text-sm font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:clock-fast" className="w-5 h-5 text-[#FFE317]" />
                <span className="text-sm font-semibold">24/7 Emergency</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:certificate" className="w-5 h-5 text-[#FFE317]" />
                <span className="text-sm font-semibold">Lifetime Warranty</span>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href="tel:+15125550123"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-lg transition-all border-2 border-white/30 cursor-pointer"
              >
                <Icon icon="mdi:phone" className="w-5 h-5" />
                (512) 555-0123
              </a>
            </div>

            {/* Service Areas - Compact */}
            <div className="pt-4 border-t border-white/20">
              <div className="flex items-center gap-2 text-xs text-white/80">
                <Icon icon="mdi:map-marker" className="w-4 h-4" />
                <span>Serving Austin, Round Rock, Cedar Park, Georgetown, Lakeway & Buda</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex justify-center lg:justify-end">
            <ContactForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}