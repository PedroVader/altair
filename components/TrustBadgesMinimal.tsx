'use client';

import { Icon } from '@iconify/react';

export default function TrustBadges() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile: Stacked */}
        <div className="lg:hidden text-center mb-6">
          <h3 className="text-lg font-bold text-[#00529C] mb-1">
            Trusted by Austin Homeowners
          </h3>
          <p className="text-xs text-gray-600">5-star rated on all platforms</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-16">
          
          {/* Desktop: Left Text */}
          <div className="hidden lg:block flex-shrink-0">
            <h3 className="text-xl font-bold text-black mb-1">
              Trusted by Austin Homeowners
            </h3>
            <p className="text-sm text-gray-600">5-star rated service</p>
          </div>

          {/* Badges - More space */}
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            
            {/* Google */}
            <div className="flex flex-col items-center gap-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                alt="Google" 
                className="h-8 md:h-10"
              />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} icon="mdi:star" className="w-4 h-4 md:w-5 md:h-5 text-[#FFE317]" />
                ))}
              </div>
            </div>

            {/* Facebook */}
            <div className="flex flex-col items-center gap-2">
              <Icon icon="logos:facebook" className="w-8 h-8 md:w-10 md:h-10" />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} icon="mdi:star" className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                ))}
              </div>
            </div>

            {/* Yelp */}
            <div className="flex flex-col items-center gap-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg" 
                alt="Yelp" 
                className="h-8 md:h-10"
              />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} icon="mdi:star" className="w-4 h-4 md:w-5 md:h-5 text-[#E0144C]" />
                ))}
              </div>
            </div>

            {/* Thumbtack */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-lg md:text-xl font-bold text-gray-900">Thumbtack</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} icon="mdi:star" className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
                ))}
              </div>
            </div>

            {/* Nextdoor */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-lg md:text-xl font-bold text-[#8BC540]">nextdoor</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} icon="mdi:star" className="w-4 h-4 md:w-5 md:h-5 text-[#8BC540]" />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}