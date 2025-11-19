'use client';

import { Icon } from '@iconify/react';
import { useState } from 'react';
import QuoteButtonModal from '@/components/QuoteButtonModal';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Austin, TX',
      rating: 5,
      text: 'Altair Austin Roofing did an outstanding job replacing our roof after hail damage. The team was professional, efficient, and cleaned up perfectly. They worked with our insurance and made the whole process stress-free. Highly recommend!',
      service: 'Roof Replacement',
      date: 'October 2024'
    },
    {
      name: 'Michael Rodriguez',
      location: 'Round Rock, TX',
      rating: 5,
      text: 'We had a leak in our roof and called Altair for an emergency repair. They came out the same day and fixed it quickly. The quality of work was excellent and the price was very fair. True professionals!',
      service: 'Roof Repair',
      date: 'September 2024'
    },
    {
      name: 'Jennifer Williams',
      location: 'Cedar Park, TX',
      rating: 5,
      text: 'From the initial inspection to the final installation, everything was perfect. The crew was respectful, answered all our questions, and the new roof looks amazing. Best roofing company in Austin!',
      service: 'Roof Installation',
      date: 'August 2024'
    },
    {
      name: 'David Chen',
      location: 'Georgetown, TX',
      rating: 5,
      text: 'After storm damage, Altair handled everything including working with our insurance company. The communication was excellent throughout the project. Our roof looks better than ever. Thank you!',
      service: 'Storm Damage Repair',
      date: 'July 2024'
    },
    {
      name: 'Lisa Martinez',
      location: 'Lakeway, TX',
      rating: 5,
      text: 'Professional service from start to finish. The free inspection was thorough, the estimate was detailed, and the work was completed on time. We couldn\'t be happier with our new roof!',
      service: 'Re-Roof',
      date: 'June 2024'
    },
    {
      name: 'Robert Thompson',
      location: 'Buda, TX',
      rating: 5,
      text: 'Excellent experience with Altair! They replaced our 20-year-old roof with quality materials and expert craftsmanship. The team was courteous and the job site was always clean. 5 stars!',
      service: 'Roof Replacement',
      date: 'May 2024'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#232323] mb-4">
            Happy <span className="text-[#FFB343]">Customers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base mb-6">
            Austin Roofing Company – Roof Repair & Replacement's reviews are most impressive and encouraging. Our repairs take the shortest time possible, and our free estimate is unbeatable.
          </p>
          <div className="w-24 h-0.5 bg-[#FFB343] mx-auto"></div>
        </div>

        {/* Reviews Carousel with Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => {
              const newIndex = activeIndex === 0 ? testimonials.length - 3 : activeIndex - 1;
              setActiveIndex(newIndex);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white border-2 border-[#FFB343] rounded-full shadow-md hover:bg-[#FFB343] hover:shadow-lg transition-all flex items-center justify-center text-[#232323] hover:text-[#232323] cursor-pointer"
            aria-label="Previous reviews"
          >
            <Icon icon="mdi:chevron-left" className="w-6 h-6" />
          </button>

          {/* Reviews Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${activeIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl border-2 border-[#E2E2E2] hover:border-[#FFB343] hover:shadow-lg transition-all duration-300 p-6 flex flex-col w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex-shrink-0"
                >
                  {/* Header with Name and Google Logo */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-semibold text-[#232323] text-base">
                          {testimonial.name}
                        </h4>
                        <Icon icon="mdi:check-decagram" className="w-4 h-4 text-[#FFB343]" />
                      </div>
                      <p className="text-xs text-gray-600">
                        {testimonial.date}
                      </p>
                    </div>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                      alt="Google"
                      className="h-4 mt-1"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} icon="mdi:star" className="w-5 h-5 text-[#FFB343]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {testimonial.text}
                  </p>

                  {/* Location & Service - Bottom */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#E2E2E2]">
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <Icon icon="mdi:map-marker" className="w-4 h-4 text-[#FFB343]" />
                      <span>{testimonial.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#F6F6F6] px-2.5 py-1 rounded-lg border border-[#E2E2E2]">
                      <Icon icon="mdi:check-circle" className="w-3.5 h-3.5 text-[#FFB343]" />
                      <span className="text-xs text-[#232323] font-medium">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => {
              const newIndex = activeIndex === testimonials.length - 3 ? 0 : activeIndex + 1;
              setActiveIndex(newIndex);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white border-2 border-[#FFB343] rounded-full shadow-md hover:bg-[#FFB343] hover:shadow-lg transition-all flex items-center justify-center text-[#232323] hover:text-[#232323] cursor-pointer"
            aria-label="Next reviews"
          >
            <Icon icon="mdi:chevron-right" className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(testimonials.length - 2)].map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  index === activeIndex 
                    ? 'bg-[#FFB343] w-8' 
                    : 'bg-[#E2E2E2] hover:bg-[#FFB343]/30 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 mb-6">
            Join hundreds of satisfied customers in the Austin area
          </p>
          <QuoteButtonModal 
            text="Get a Quote"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}