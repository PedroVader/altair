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
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">
            {title} <span className="text-[#D4AF37]">{subtitle}</span>
          </h2>
          <p className="text-[#334155] max-w-2xl mx-auto text-lg mb-6">
            Expert installation of premium roofing materials designed for Central Texas climate
          </p>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto"></div>
        </div>

        {/* Roof Types Grid - 2x2 para 4 items */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {displayRoofTypes.map((roofType) => (
            <Link 
              key={roofType.slug} 
              href={`/roof-types/${roofType.slug}`}
              className="group"
            >
              <div className="h-full bg-white rounded-xl border border-gray-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 p-8">
                
                {/* Icon */}
                <div className="w-14 h-14 bg-[#001F3F] rounded-lg flex items-center justify-center mb-6">
                  <Icon icon={roofType.icon} className="w-7 h-7 text-[#D4AF37]" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-[#001F3F] mb-3">
                  {roofType.name}
                </h3>

                {/* Description */}
                <p className="text-[#334155] text-sm leading-relaxed mb-4">
                  {roofType.shortDescription}
                </p>

                {/* Additional Info */}
                {(roofType.averageLifespan || roofType.averageCost) && (
                  <div className="flex flex-wrap gap-3 mb-6 text-xs">
                    {roofType.averageLifespan && (
                      <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                        <Icon icon="mdi:clock-outline" className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-[#334155] font-medium">{roofType.averageLifespan}</span>
                      </div>
                    )}
                    {roofType.averageCost && (
                      <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                        <Icon icon="mdi:currency-usd" className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-[#334155] font-medium">{roofType.averageCost}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* View Details Link */}
                <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-sm">
                  <span>View Details</span>
                  <Icon icon="mdi:arrow-right" className="w-4 h-4" />
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#001F3F] hover:bg-[#003d75] text-white font-semibold rounded-lg transition-colors"
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