'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function ServicesGrid() {
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

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#232323] mb-4">
            Roof Repair Company in <span className="text-[#FFB343]">Austin TX</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Professional roofing services backed by 15+ years of experience
          </p>
          <div className="w-24 h-0.5 bg-[#FFB343] mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.slug} 
              href={`/services/${service.slug}`}
              className="group"
            >
              <div className="h-full bg-white rounded-xl border-2 border-[#E2E2E2] hover:border-[#FFB343] hover:shadow-xl transition-all duration-300 p-8">
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-lg bg-[#232323] flex items-center justify-center mb-6 group-hover:bg-[#FFB343] transition-colors">
                  <Icon icon={service.icon} className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-[#232323] mb-3 group-hover:text-[#FFB343] transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* View Service Link */}
                <div className="flex items-center gap-2 text-[#FFB343] font-semibold text-sm">
                  <span>Learn More</span>
                  <Icon icon="mdi:arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
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