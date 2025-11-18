// components/Hero.tsx
import ContactForm from "./ContactForm";
import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center py-8 md:py-12 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/roof-video-1.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/30 to-[#003d75]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
          
          {/* Left Side - Content */}
          <div className="text-white space-y-4 md:space-y-5">
            {/* Trust Badge Premium */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/30 shadow-lg">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Icon 
                    key={i} 
                    icon="mdi:star"
                    className="w-4 h-4 text-[#D4AF37]"
                  />
                ))}
              </div>
              <span className="text-white font-semibold text-sm flex items-center gap-1.5">
                <span className="hidden sm:inline">5/5 Star Rated on</span>
                <span className="sm:hidden">5/5</span>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                  alt="Google"
                  className="h-4 sm:h-5"
                />
              </span>
            </div>

            {/* Main Heading con font-display */}
            <div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-4">
                Austin <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B87333] block sm:inline">Roofing Company</span>
              </h1>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl font-light">
                Are you planning to have any construction or roofing done to your home? Then you've come to the right place. Austin Roofing Company – Roof Repair & Replacement is a leading roofing contractor in Austin, TX, offering expert roofing services for your family home or business in the greater Austin area.
              </p>
            </div>

            {/* CTA Buttons Premium */}
            <div className="flex flex-wrap gap-3 pt-2 md:pt-3">
              <a
                href="tel:+15125550123"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#D4AF37] to-[#B87333] hover:from-[#E5C158] hover:to-[#D4AF37] text-white font-bold rounded-xl transition-all hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer text-sm sm:text-base"
              >
                <Icon icon="mdi:phone" className="w-5 h-5" />
                <span className="hidden xs:inline">(512) 555-0123</span>
                <span className="xs:hidden">Call Now</span>
              </a>
            </div>

            {/* Service Areas - Compact con estilo premium */}
            <div className="pt-3 md:pt-4 border-t border-[#D4AF37]/20">
              <div className="flex items-start sm:items-center gap-2 text-xs text-white/80">
                <Icon icon="mdi:map-marker" className="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0 text-[#D4AF37]" />
                <span className="leading-relaxed font-light">
                  <span className="hidden sm:inline">Serving Austin, Round Rock, Cedar Park, Georgetown, Lakeway & Buda</span>
                  <span className="sm:hidden">Serving Austin & surrounding areas</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <ContactForm variant="hero" showPhone={true} />
          </div>
        </div>
      </div>
    </section>
  );
}