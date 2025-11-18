'use client';

import Image from 'next/image';

export default function CertificatesCarousel() {
  const logos = [
    { src: '/certificates-logos/brand-certainteed-master-shingle.png', alt: 'CertainTeed Master Shingle Applicator' },
    { src: '/certificates-logos/brand-certainteed.png', alt: 'CertainTeed' },
    { src: '/certificates-logos/brand-gaf-coatings.png', alt: 'GAF Coatings' },
    { src: '/certificates-logos/brand-iko.png', alt: 'IKO' },
    { src: '/certificates-logos/brand-master-elite.png', alt: 'GAF Master Elite' },
    { src: '/certificates-logos/brand-sheffield-metals.png', alt: 'Sheffield Metals' },
    { src: '/certificates-logos/brand-verisco.png', alt: 'Verisco' },
  ];

  // Duplicar los logos para efecto infinito
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="font-display text-xl font-bold text-[#001F3F] mb-2">
            Certified & Trusted Partners
          </h3>
          <p className="text-sm text-[#334155]">
            We work with the industry's leading manufacturers
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays para efecto fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling logos */}
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                style={{ width: '180px', height: '80px' }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={80}
                  className="object-contain max-h-full opacity-80 hover:opacity-100 transition-opacity"
                  priority={index < 7}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}