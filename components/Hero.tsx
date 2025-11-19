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
          <source src="/videos/roof-video-1-hd.mp4" type="video/mp4" />
        </video>
        
        {/* Blur lateral izquierdo */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-1/3 backdrop-blur-sm"
          style={{
            maskImage: 'linear-gradient(to right, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, black, transparent)'
          }}
        ></div>
        
        {/* Blur lateral derecho */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-1/3 backdrop-blur-sm"
          style={{
            maskImage: 'linear-gradient(to left, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to left, black, transparent)'
          }}
        ></div>
        
        {/* Overlay gris oscuro */}
        <div className="absolute inset-0 bg-[#232323]/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
          
          {/* Left Side - Content */}
          <div className="text-white space-y-4 md:space-y-5">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-[#FFB343]/30 shadow-lg">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Icon 
                    key={i} 
                    icon="mdi:star"
                    className="w-4 h-4 text-[#FFB343]"
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

            {/* Main Heading */}
            <div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Austin Roofing Company
              </h1>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                Are you planning to have any construction or roofing done to your home? Then you've come to the right place. Austin Roofing Company – Roof Repair & Replacement is a leading roofing contractor in Austin, TX, offering expert roofing services for your family home or business in the greater Austin area.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-3 pt-2 md:pt-3">
              <a
                href="tel:+15125550123"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFB343] hover:bg-[#FFA520] text-[#ffffff] font-bold rounded-lg transition-all shadow-lg hover:shadow-xl cursor-pointer text-base"
              >
                <Icon icon="mdi:phone" className="w-5 h-5" />
                <span className="hidden xs:inline">(512) 555-0123</span>
                <span className="xs:hidden">Call Now</span>
              </a>
            </div>

    
            {/* Service Areas */}
            <div className="pt-3 md:pt-4 border-t border-white/20">
              <div className="flex items-start sm:items-center gap-2 text-sm text-white/80">
                <Icon icon="mdi:map-marker" className="w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0 text-[#FFB343]" />
                <span className="leading-relaxed">
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