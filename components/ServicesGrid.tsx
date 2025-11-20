'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';

interface ServicesGridProps {
  location?: {
    slug: string;
    name: string;
  };
  showAll?: boolean;
  title?: string;
  subtitle?: string;
}

export default function ServicesGrid({ 
  location, 
  showAll = true,
  title,
  subtitle
}: ServicesGridProps) {
  const services = [
    {
      slug: 'roof-repair',
      name: 'Roof Repair',
      icon: 'mdi:tools',
      description: 'Expert repairs for leaks, damaged shingles, and structural issues to restore your roof.',
    },
    {
      slug: 'roof-replacement',
      name: 'Roof Replacement',
      icon: 'mdi:home-roof',
      description: 'Complete roof replacement with high-quality materials and professional installation.',
    },
    {
      slug: 'roof-inspection',
      name: 'Roof Inspection',
      icon: 'mdi:clipboard-search',
      description: 'Thorough inspection to identify potential problems and extend your roof\'s lifespan.',
    },
    {
      slug: 're-roof',
      name: 'Re-Roof',
      icon: 'mdi:autorenew',
      description: 'Complete roof renovation to give your home a fresh, durable protective layer.',
    },
    {
      slug: 'storm-damage',
      name: 'Storm Damage',
      icon: 'mdi:weather-lightning',
      description: 'Emergency repairs and restoration for storm and weather-related roof damage.',
    },
    {
      slug: 'hail-damage',
      name: 'Hail Damage',
      icon: 'mdi:weather-hail',
      description: 'Specialized repairs for hail damage with insurance claim assistance available.',
    },
  ];

  const displayServices = showAll ? services : services.slice(0, 6);

  // Generar título dinámico
  const defaultTitle = location 
    ? `All Roofing Services in ${location.name}`
    : 'Roof Repair Company in Austin TX';
  
  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || 'Professional roofing services backed by 15+ years of experience';

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#232323] mb-4">
            {location ? (
              <>All Roofing Services in <span className="text-[#FFB343]">{location.name}</span></>
            ) : (
              <>Roof Repair Company in <span className="text-[#FFB343]">Austin TX</span></>
            )}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            {displaySubtitle}
          </p>
          <div className="w-24 h-0.5 bg-[#FFB343] mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => {
            // ✅ URL dinámica según contexto
            const serviceUrl = location 
              ? `/locations/${location.slug}/${service.slug}`
              : `/services/${service.slug}`;

            return (
              <Link 
                key={service.slug} 
                href={serviceUrl}
                className="group"
              >
                {/* Card NEGRA con hover naranja en border */}
                <div className="h-full bg-[#232323] rounded-xl border-2 border-[#232323] hover:border-[#FFB343] hover:shadow-xl transition-all duration-300 p-8">
                  
                  {/* Icon - NARANJA */}
                  <div className="w-16 h-16 rounded-lg bg-[#FFB343] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon 
                      icon={service.icon} 
                      className="w-8 h-8"
                      style={{ color: '#232323' }}
                    />
                  </div>

                  {/* Title - BLANCO */}
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#FFB343] transition-colors">
                    {service.name}
                  </h3>

                  {/* Description - BLANCO con opacidad */}
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* View Service Link - NARANJA */}
                  <div className="flex items-center gap-2 text-[#FFB343] font-semibold text-sm">
                    <span>Learn More</span>
                    <Icon icon="mdi:arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Bottom */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Don't see what you're looking for?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFB343] hover:bg-[#FFA520] text-[#232323] font-bold rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            <span>Contact Us Today</span>
            <Icon icon="mdi:arrow-right" className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}