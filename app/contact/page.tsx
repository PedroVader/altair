// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import { locations } from '@/data/locations';
import { getOrganizationSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';

const faqs = [
  {
    question: 'How quickly can you respond to an emergency?',
    answer: 'We offer 24/7 emergency service and can typically arrive within 2-4 hours for urgent situations like storm damage or active leaks.'
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes! We provide free, no-obligation roof inspections and estimates for all services. There\'s no pressure to commit.'
  },
  {
    question: 'Do you work with insurance companies?',
    answer: 'Absolutely. We have extensive experience working with insurance companies and can help you navigate the claims process for storm or hail damage.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve all of Greater Austin including Austin, Round Rock, Cedar Park, Georgetown, Lakeway, Buda, Pflugerville, Leander, Kyle, and Dripping Springs.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, Altair Austin Roofing is fully licensed and insured to operate in Austin and throughout Central Texas. We carry comprehensive liability insurance and workers\' compensation coverage.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, checks, and offer financing options to make your roofing project affordable.'
  }
];

function FAQAccordion() {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    Array.from({ length: faqs.length }, (_, i) => i)
  );

  const toggleFAQ = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndexes.includes(index);
        
        return (
          <div key={index} className="bg-white rounded-xl shadow-sm border-2 border-gray-200 overflow-hidden hover:border-[#FFB343] transition">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
            >
              <h3 className="font-bold text-gray-900 text-lg pr-4">{faq.question}</h3>
              <Icon 
                icon="mdi:chevron-down" 
                className={`w-6 h-6 text-[#FFB343] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ContactPage() {
  // Generar schemas
  const organizationSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' }
  ]);
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Hero Section with Form */}
        <section className="relative min-h-[600px] flex items-center py-12 md:py-16 overflow-hidden">
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
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
      
      {/* Left - Content */}
      <div className="text-white">
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 mb-6">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} icon="mdi:star" className="w-4 h-4 text-[#FFB343]" />
            ))}
          </div>
          <span className="text-white font-medium text-sm">5/5 Star Rated on</span>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
            alt="Google"
            className="h-4"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Contact Altair Austin Roofing
        </h1>
        
        <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/90">
          Get your free roof inspection and estimate today. Available 24/7 for emergency roofing services.
        </p>

        {/* Quick Contact */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="tel:+15125550123"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFB343] hover:bg-[#FFA520] text-[#232323] font-bold rounded-xl transition-all hover:scale-105 shadow-xl"
          >
            <Icon icon="mdi:phone" className="w-5 h-5" />
            Call (512) 555-0123
          </a>
        </div>

        {/* Quick Info */}
        <div className="space-y-3 text-sm text-white/90">
          <div className="flex items-center gap-2">
            <Icon icon="mdi:check-circle" className="w-5 h-5 text-[#FFB343]" />
            <span>24/7 Emergency Service Available</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:check-circle" className="w-5 h-5 text-[#FFB343]" />
            <span>Free Roof Inspections & Estimates</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:check-circle" className="w-5 h-5 text-[#FFB343]" />
            <span>Licensed & Insured Professionals</span>
          </div>
        </div>
      </div>

      {/* Right - Contact Form */}
      <div className="w-full">
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
    <iframe
      src="/contact.html?showPhone=true"
      className="w-full border-0"
      style={{ 
        height: '550px',
        display: 'block',
        width: '100%'
      }}
      title="Contact Form"
    />
  </div>
      </div>
    </div>
  </div>
</section>

        {/* Contact Info Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're here to help! Reach out through any of these channels.
              </p>
              <div className="w-24 h-1 bg-[#FFB343] mx-auto mt-4"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              
              {/* Phone */}
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-[#FFB343] transition text-center">
                <div className="w-16 h-16 bg-[#FFB343] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon="mdi:phone" className="w-8 h-8 text-[#232323]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone</h3>
                <a href="tel:+15125550123" className="text-[#FFB343] hover:text-[#FFA520] transition font-semibold block mb-2 text-lg">
                  (512) 555-0123
                </a>
                <p className="text-sm text-gray-600">
                  Available 24/7<br />
                  for emergencies
                </p>
              </div>

              {/* Email */}
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-[#FFB343] transition text-center">
                <div className="w-16 h-16 bg-[#FFB343] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon="mdi:email" className="w-8 h-8 text-[#232323]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                <a href="mailto:info@altairaustin.com" className="text-sm text-[#FFB343] hover:text-[#FFA520] transition font-semibold block mb-2">
                  info@altairaustin.com
                </a>
                <p className="text-sm text-gray-600">
                  Response within<br />
                  24 hours
                </p>
              </div>

              {/* Service Area */}
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-[#FFB343] transition text-center">
                <div className="w-16 h-16 bg-[#FFB343] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon="mdi:map-marker" className="w-8 h-8 text-[#232323]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Service Area</h3>
                <p className="text-gray-700 font-semibold mb-2">
                  Greater Austin Area
                </p>
                <p className="text-sm text-gray-600">
                  Austin & surrounding<br />
                  communities
                </p>
              </div>

              {/* Hours */}
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-[#FFB343] transition text-center">
                <div className="w-16 h-16 bg-[#FFB343] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon="mdi:clock" className="w-8 h-8 text-[#232323]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Hours</h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p className="font-medium">Mon-Fri: 7AM-7PM</p>
                  <p className="font-medium">Sat: 8AM-5PM</p>
                  <p className="text-[#FFB343] font-bold">24/7 Emergency</p>
                </div>
              </div>

            </div>

            {/* Trust Badges */}
            <div className="mt-12 max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="font-bold text-gray-900 mb-6 text-center text-xl">Why Choose Altair Austin Roofing?</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Licensed & Insured',
                  '15+ Years Experience',
                  'Lifetime Warranties',
                  '24/7 Emergency Service',
                  'Free Inspections',
                  '100% Satisfaction Guarantee'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200">
                    <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#FFB343] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Locations We Serve - Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Roofing Services Throughout <span className="text-[#FFB343]">Austin</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Professional roofing services throughout the greater Austin area
              </p>
              <div className="w-24 h-1 bg-[#FFB343] mx-auto"></div>
            </div>

            {/* Grid de Locations */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all border-2 border-gray-200 hover:border-[#FFB343] group"
                >
                  <Icon icon="mdi:map-marker" className="w-8 h-8 text-[#FFB343] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-[#FFB343] transition-colors">{location.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{location.zip}</p>
                </Link>
              ))}
            </div>

            {/* Map Section */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  We Proudly Serve the Greater Austin Area
                </h3>
                <p className="text-gray-600">
                  Austin homeowners trust Altair Austin Roofing
                </p>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221094.07598632718!2d-97.9428734!3d30.307182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Austin Service Area Map"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Find answers to common questions about our roofing services
              </p>
              <div className="w-24 h-1 bg-[#FFB343] mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, idx) => (
                <details key={idx} open className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#FFB343] shadow-sm group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <Icon icon="mdi:chevron-down" className="w-6 h-6 text-[#FFB343] group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-[#232323] to-[#1a1a1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Call us now or schedule your inspection online
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15125550123"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFB343] hover:bg-[#FFA520] text-[#232323] font-bold rounded-lg transition-all hover:scale-105 shadow-xl"
              >
                <Icon icon="mdi:phone" className="w-5 h-5" />
                Call (512) 555-0123
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-[#232323] font-bold rounded-lg transition-all hover:scale-105 shadow-xl cursor-pointer"
              >
                Get a Quote
                <Icon icon="mdi:arrow-right" className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}