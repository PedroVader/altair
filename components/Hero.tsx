// components/Hero.tsx
import ContactForm from "./ContactForm";
import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center py-8 md:py-12">
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
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
          
         {/* Left Side - Content */}
<div className="text-white space-y-4 md:space-y-5">
  {/* Trust Badge */}
  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Icon 
          key={i} 
          icon="mdi:star"
          className="w-3.5 h-3.5 text-[#FFE317]"
        />
      ))}
    </div>
    <span className="text-white font-medium text-sm flex items-center gap-1.5">
      <span className="hidden sm:inline">5/5 Star Rated on</span>
      <span className="sm:hidden">5/5</span>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
        alt="Google"
        className="h-4 sm:h-5"
      />
    </span>
  </div>
            {/* Main Heading */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-4">
                Austin <span className="text-[#FFE317] block sm:inline">Roofing Company</span>
              </h1>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl">
                Are you planning to have any construction or roofing done to your home? Then you've come to the right place. Austin Roofing Company – Roof Repair & Replacement is a leading roofing contractor in Austin, TX, offering expert roofing services for your family home or business in the greater Austin area.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2 md:pt-3">
              <a
                href="tel:+15125550123"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-lg transition-all border-2 border-white/30 cursor-pointer text-sm sm:text-base"
              >
                <Icon icon="mdi:phone" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden xs:inline">(512) 555-0123</span>
                <span className="xs:hidden">Call Now</span>
              </a>
            </div>

            {/* Service Areas - Compact */}
            <div className="pt-3 md:pt-4 border-t border-white/20">
              <div className="flex items-start sm:items-center gap-2 text-xs text-white/80">
                <Icon icon="mdi:map-marker" className="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="leading-relaxed">
                  <span className="hidden sm:inline">Serving Austin, Round Rock, Cedar Park, Georgetown, Lakeway & Buda</span>
                  <span className="sm:hidden">Serving Austin & surrounding areas</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <ContactForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}