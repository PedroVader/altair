'use client';

import Image from 'next/image';
import { Icon } from '@iconify/react';
import QuoteButtonModal from '@/components/QuoteButtonModal';

export default function ResidentialRoofing() {
  const services = [
    {
      title: 'Roof Installation',
      image: '/roof-images/roof-luxury-14.jpg',
      description: 'Professional residential roof installation services in Austin with over 15 years of experience. Whether you need asphalt shingles, metal roofing, or tile installation, our expert team delivers quality craftsmanship that enhances your home\'s curb appeal and protects your investment for decades to come.'
    },
    {
      title: 'Roof Repairs',
      image: '/roof-images/roof-luxury-7.jpg',
      description: 'Fast and reliable roof repair services for Austin homeowners. From minor leak repairs to extensive damage restoration, our licensed contractors fix all types of residential roofing problems. Don\'t wait until small issues become major expenses – get your roof repaired quickly and affordably by our experienced team.'
    },
    {
      title: 'Re-Roofing Services',
      image: '/roof-images/roof-luxury-3.jpg',
      description: 'Complete re-roofing solutions for Austin homes with worn or outdated roofs. Our professional re-roofing process includes removing old shingles, inspecting the deck, and installing a brand new roofing system. Transform your home with a fresh, durable roof that provides superior protection and energy efficiency.'
    },
    {
      title: 'Roof Replacement',
      image: '/roof-images/roof-luxury-4.jpg',
      description: 'Expert roof replacement services for Austin residential properties. When repairs aren\'t enough, trust our team to replace your entire roofing system with high-quality materials and expert installation. We handle projects of all sizes, from small homes to large estates, with transparent pricing and professional results.'
    },
    {
      title: 'Storm Damage Repair',
      image: '/roof-images/roof-10.jpg',
      description: 'Emergency storm damage repair services available 24/7 for Austin homeowners. Our team responds quickly to assess wind, hail, and weather-related roof damage. We work directly with insurance companies to streamline your claim process and restore your roof to pre-storm condition efficiently.'
    },
    {
      title: 'Hail Damage Restoration',
      image: '/roof-images/roof-luxury.jpg',
      description: 'Specialized hail damage inspection and repair services in Austin, TX. Our experts identify even minor hail damage that could lead to future problems. We provide detailed documentation for insurance claims and complete restoration services to protect your home and maintain its value.'
    }
  ];

  return (
    <>
      {/* Central Texas Best Roofing Company Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/worker-repairing-roof.jpg" 
            alt="Roofing background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#232323]/95 to-[#232323]/85"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Central Texas <span className="text-[#FFB343]">Best Roofing Company</span>
            </h2>
            
            <div className="space-y-6 text-white/90 text-lg leading-relaxed">
              <p>
                Are you looking for information on what the best roofing company in central Texas is? We're happy you found us! We've been in the roofing and construction business within Austin, Texas, for a long time. <strong className="text-[#FFB343]">We have helped over 25,000 customers</strong> with their roofing concerns. With that kind of experience, we're confident we can help you too!
              </p>
              
              <p>
                Roofing is our business! If you are looking for the best roofer Austin has to offer, then you have come to the right place. Our local service team at Austin will provide you with the <strong className="text-white">Best Roofing in Austin, TX</strong>.
              </p>
              
              <p>
                <strong className="text-[#FFB343]">Austin Roofing Company – Roof Repair & Replacement</strong> will provide you with a high-standard roof. We are a top-notch roofing company in Austin offering the Austin community commercial and industrial roofing solutions. You will enjoy a roof that lasts your entire life at an affordable price.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#232323] mb-4">
              Local Roof Repair Contractors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Professional roofing services for Austin homeowners
            </p>
            <div className="w-24 h-0.5 bg-[#FFB343] mx-auto mt-6"></div>
          </div>

          {/* Intro Text */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Is your roof leaking? Does your home have missing shingles? Have you meant to repair that hole for a while now, but it continues to grow as you put off the work? Let us help! <strong className="text-[#232323]">Austin Roofing Company – Roof Repair & Replacement</strong> understands a roof is a critical part of your home. We get the job done right!
            </p>
          </div>

          {/* Services Grid - CON IMÁGENES LUXURY */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-[#E2E2E2] hover:border-[#FFB343] hover:shadow-xl transition-all duration-300 overflow-hidden group">
                
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#232323]/70 to-transparent"></div>
                  
                  {/* Title over image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Text */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-gray-600 leading-relaxed text-lg">
              When your roof starts to leak or some wind-damaged shingles, call us for the best solutions. We will give your Austin home a high-standard shelter with a classy outer appearance once again. <strong className="text-[#232323]">We provide a free estimate to all customers in the Austin area.</strong>
            </p>
          </div>

        </div>

        {/* Why Choose Us Section - MINIMALISTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-[#F6F6F6] rounded-2xl p-8 md:p-12 border-2 border-[#E2E2E2]">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center text-[#232323]">
                Why Choose Austin Roofing Company?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Licensed & Insured',
                    description: 'Fully certified roofing contractors in Austin, TX'
                  },
                  {
                    title: 'Free Roof Inspections',
                    description: 'Comprehensive assessment at no cost to you'
                  },
                  {
                    title: 'Lifetime Warranties',
                    description: 'Industry-leading protection on workmanship'
                  },
                  {
                    title: '24/7 Emergency Service',
                    description: 'Available when you need us most'
                  },
                  {
                    title: 'Insurance Assistance',
                    description: 'We help navigate your insurance claims'
                  },
                  {
                    title: 'Local Austin Experts',
                    description: 'We understand Texas weather challenges'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FFB343] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon icon="mdi:check" className="w-4 h-4 text-[#232323]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#232323] mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-6">
              Ready to protect your home with professional roofing services?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15125550123"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFB343] hover:bg-[#FFA520] text-[#232323] font-bold rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                <Icon icon="mdi:phone" className="w-5 h-5" />
                Call (512) 555-0123
              </a>
              <QuoteButtonModal 
  text="Get a Quote"
  variant="primary"
  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFB343] hover:bg-[#FFA520] text-[#232323] font-bold rounded-lg transition-all shadow-lg hover:shadow-xl cursor-pointer"
/>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Austin Roofing Section with Laurel Award */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/roof-video-1-hd.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#232323]/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Premium Austin Roofing
            </h2>
            
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Are you looking for premium Austin roofing? We are highly experienced roofers and known experts in custom roofing. Over the years, we have successfully handled many projects in the greater Austin area. Get only the best Austin roofing service from our company.
            </p>

            {/* Award Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-full border-2 border-[#FFB343]/50">
              <Icon icon="mdi:star" className="w-6 h-6 text-[#FFB343]" />
              <span className="text-white font-bold text-lg">Best Roofing Company in Austin 2024</span>
              <Icon icon="mdi:star" className="w-6 h-6 text-[#FFB343]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}