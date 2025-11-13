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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Roof Repair <span className="text-[#00529C]">Company in</span> in Austin TX
          </h2>
          <div className="w-20 h-1 bg-[#00529C] mx-auto mb-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <Link 
              key={service.slug} 
              href={`/services/${service.slug}`}
              className="group"
            >
              <div className="h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#00529C] overflow-hidden">
                <div className="p-6 sm:p-8 text-center flex flex-col items-center min-h-[280px]">
                  
                  {/* Icon */}
                  <div className="mb-4 sm:mb-5 text-gray-700 group-hover:text-[#00529C] transition-colors duration-300">
                    <Icon icon={service.icon} className="w-14 h-14 sm:w-16 sm:h-16" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00529C] transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* View Service Link */}
                  <div className="flex items-center gap-2 text-[#00529C] font-semibold text-sm group-hover:gap-3 transition-all duration-300 mt-4">
                    <span>View Service</span>
                    <Icon icon="mdi:arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}