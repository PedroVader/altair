'use client';

import { Icon } from '@iconify/react';
import QuoteButtonModal from '@/components/QuoteButtonModal';

export default function ResidentialRoofing() {
  const services = [
    {
      title: 'Roof Installation',
      icon: 'mdi:hammer-wrench',
      description: 'Professional residential roof installation services in Austin with over 15 years of experience. Whether you need asphalt shingles, metal roofing, or tile installation, our expert team delivers quality craftsmanship that enhances your home\'s curb appeal and protects your investment for decades to come.'
    },
    {
      title: 'Roof Repairs',
      icon: 'mdi:tools',
      description: 'Fast and reliable roof repair services for Austin homeowners. From minor leak repairs to extensive damage restoration, our licensed contractors fix all types of residential roofing problems. Don\'t wait until small issues become major expenses – get your roof repaired quickly and affordably by our experienced team.'
    },
    {
      title: 'Re-Roofing Services',
      icon: 'mdi:autorenew',
      description: 'Complete re-roofing solutions for Austin homes with worn or outdated roofs. Our professional re-roofing process includes removing old shingles, inspecting the deck, and installing a brand new roofing system. Transform your home with a fresh, durable roof that provides superior protection and energy efficiency.'
    },
    {
      title: 'Roof Replacement',
      icon: 'mdi:home-roof',
      description: 'Expert roof replacement services for Austin residential properties. When repairs aren\'t enough, trust our team to replace your entire roofing system with high-quality materials and expert installation. We handle projects of all sizes, from small homes to large estates, with transparent pricing and professional results.'
    },
    {
      title: 'Storm Damage Repair',
      icon: 'mdi:weather-lightning',
      description: 'Emergency storm damage repair services available 24/7 for Austin homeowners. Our team responds quickly to assess wind, hail, and weather-related roof damage. We work directly with insurance companies to streamline your claim process and restore your roof to pre-storm condition efficiently.'
    },
    {
      title: 'Hail Damage Restoration',
      icon: 'mdi:weather-hail',
      description: 'Specialized hail damage inspection and repair services in Austin, TX. Our experts identify even minor hail damage that could lead to future problems. We provide detailed documentation for insurance claims and complete restoration services to protect your home and maintain its value.'
    }
  ];

  return (
    <>
      {/* Central Texas Best Roofing Company Section - PRIMERA */}
      <div className="relative py-16 overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/worker-repairing-roof.jpg" 
            alt="Roofing background"
            className="w-full h-full object-cover blur-[2px]"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              Central Texas <span className="text-[#FFE317]">Best Roofing Company</span>
            </h2>
            
            <div className="space-y-6 text-white text-lg leading-relaxed text-left md:text-center drop-shadow-md">
              <p>
                Are you looking for information on what the best roofing company in central Texas is? We're happy you found us! We've been in the roofing and construction business within Austin, Texas, for a long time. <strong className="text-[#FFE317]">We have helped over 25,000 customers</strong> with their roofing concerns. With that kind of experience, we're confident we can help you too!
              </p>
              
              <p>
                Roofing is our business! If you are looking for the best roofer Austin has to offer, then you have come to the right place. Our local service team at Austin will provide you with the <strong className="text-white">Best Roofing in Austin, TX</strong>.
              </p>
              
              <p>
                <strong className="text-[#FFE317]">Austin Roofing Company – Roof Repair & Replacement</strong> will provide you with a high-standard roof. We are a top-notch roofing company in Austin offering the Austin community commercial and industrial roofing solutions. You will enjoy a roof that lasts your entire life at an affordable price.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-6">
              Local Roof Repair Contractors
            </h2>
            <div className="w-24 h-1 bg-[#FFE317] mx-auto mb-8"></div>
          </div>

          {/* Intro Text */}
          <div className="max-w-4xl mx-auto mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Is your roof leaking? Does your home have missing shingles? Have you meant to repair that hole for a while now, but it continues to grow as you put off the work? Let us help! <strong>Austin Roofing Company – Roof Repair & Replacement</strong> understands a roof is a critical part of your home. We get the job done right!
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#00529C] to-[#003d75] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon icon={service.icon} className="w-8 h-8 text-white" />
              </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00529C] transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Text */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-gray-700 leading-relaxed text-lg">
              When your roof starts to leak or some wind-damaged shingles, call us for the best solutions. We will give your Austin home a high-standard shelter with a classy outer appearance once again. <strong className="text-[#00529C]">We provide a free estimate to all customers in the Austin area.</strong>
            </p>
          </div>

        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-[#FFE317]">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#00529C]">
                Why Choose Austin Roofing Company?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#00529C] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Licensed & Insured</h4>
                    <p className="text-gray-600 text-sm">Fully certified roofing contractors in Austin, TX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#00529C] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Free Roof Inspections</h4>
                    <p className="text-gray-600 text-sm">Comprehensive assessment at no cost to you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#00529C] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Lifetime Warranties</h4>
                    <p className="text-gray-600 text-sm">Industry-leading protection on workmanship</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#00529C] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">24/7 Emergency Service</h4>
                    <p className="text-gray-600 text-sm">Available when you need us most</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#00529C] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Insurance Assistance</h4>
                    <p className="text-gray-600 text-sm">We help navigate your insurance claims</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#00529C] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Local Austin Experts</h4>
                    <p className="text-gray-600 text-sm">We understand Texas weather challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-6">
              Ready to protect your home with professional roofing services?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15125550123"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFE317] hover:bg-[#ffd700] text-[#00529C] font-bold rounded-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
              >
                <Icon icon="mdi:phone" className="w-5 h-5" />
                Call (512) 555-0123
              </a>
              <QuoteButtonModal 
  text="Get a Quote"
  variant="primary"
  className="cursor-pointer"
/>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Austin Roofing Section - AL FINAL */}
      <section className="py-16 bg-gradient-to-r from-[#0074C7] to-[#00529C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Premium Austin Roofing
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Are you looking for premium Austin roofing? We are highly experienced roofers and known experts in custom roofing. Over the years, we have successfully handled many projects in the greater Austin area; Get only the best Austin roofing service from our company.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}