'use client';

import { Icon } from '@iconify/react';
import QuoteButtonModal from './QuoteButtonModal';

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  feature1?: string;
  feature2?: string;
}

export default function CTA({
  title = "Ready for a Perfect Roof?",
  description = "Contact us today and experience the difference. Get a free estimate in minutes!",
  primaryButtonText = "Call (512) 555-0123",
  primaryButtonHref = "tel:+15125550123",
  secondaryButtonText = "Get Free Estimate",
  feature1 = "24/7 Emergency Service",
  feature2 = "100% Satisfaction Guarantee"
}: CTAProps) {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/roof-images/roof-luxury-3.jpg" 
          alt="Luxury roofing background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          {/* Yellow-Orange Call Button */}
          <a
            href={primaryButtonHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFB343] hover:bg-[#FFA520] text-[#232323] text-base font-bold rounded-xl transition-all hover:scale-105 shadow-xl"
          >
            <Icon icon="mdi:phone" className="w-5 h-5" />
            {primaryButtonText}
          </a>

          {/* White Quote Button - CON MODAL */}
          <QuoteButtonModal 
            text={secondaryButtonText}
            variant="secondary"
            className="cursor-pointer"
          />
        </div>

        {/* Features */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm drop-shadow-md">
          <div className="flex items-center gap-2">
            <Icon icon="mdi:check" className="w-5 h-5 text-[#FFB343]" />
            <span>{feature1}</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 bg-white/40 rounded-full"></div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:check" className="w-5 h-5 text-[#FFB343]" />
            <span>{feature2}</span>
          </div>
        </div>
      </div>
    </section>
  );
}