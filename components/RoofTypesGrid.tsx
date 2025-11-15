'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { roofTypes } from '@/data/roofTypes';

interface RoofTypesGridProps {
  title?: string;
  subtitle?: string;
  showAll?: boolean;
}

export default function RoofTypesGrid({ 
  title = "Premium Roofing Materials",
  subtitle = "in Austin TX",
  showAll = true 
}: RoofTypesGridProps) {
  
  const displayRoofTypes = showAll ? roofTypes : roofTypes.slice(0, 4);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title} <span className="text-[#00529C]">{subtitle}</span>
          </h2>
          <div className="w-20 h-1 bg-[#FFE317] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Expert installation of premium roofing materials designed for Central Texas climate
          </p>
        </div>

        {/* Roof Types Grid - 2x2 para 4 items */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {displayRoofTypes.map((roofType) => (
            <Link 
              key={roofType.slug} 
              href={`/roof-types/${roofType.slug}`}
              className="group"
            >
              <div className="h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#00529C] overflow-hidden">
                <div className="p-6 sm:p-8 text-center flex flex-col items-center min-h-[320px]">
                  
                  {/* Icon */}
                  <div className="mb-4 sm:mb-5 text-gray-700 group-hover:text-[#00529C] transition-colors duration-300">
                    <Icon icon={roofType.icon} className="w-14 h-14 sm:w-16 sm:h-16" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00529C] transition-colors duration-300">
                    {roofType.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow mb-4">
                    {roofType.shortDescription}
                  </p>

                  {/* Additional Info */}
                  {(roofType.averageLifespan || roofType.averageCost) && (
                    <div className="flex flex-wrap gap-3 justify-center mb-4 text-xs">
                      {roofType.averageLifespan && (
                        <div className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full">
                          <Icon icon="mdi:clock-outline" className="w-4 h-4 text-[#00529C]" />
                          <span className="text-gray-700 font-medium">{roofType.averageLifespan}</span>
                        </div>
                      )}
                      {roofType.averageCost && (
                        <div className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full">
                          <Icon icon="mdi:currency-usd" className="w-4 h-4 text-[#00529C]" />
                          <span className="text-gray-700 font-medium">{roofType.averageCost}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* View Details Link */}
                  <div className="flex items-center gap-2 text-[#00529C] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>View Details</span>
                    <Icon icon="mdi:arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA si no muestra todos */}
        {!showAll && roofTypes.length > 4 && (
          <div className="text-center mt-12">
            <Link
              href="/roof-types"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00529C] hover:bg-[#003d75] text-white font-bold rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              View All Roof Types
              <Icon icon="mdi:arrow-right" className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}