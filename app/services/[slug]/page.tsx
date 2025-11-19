import { services, Service } from '@/data/services';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import TrustBadgesMinimal from '@/components/TrustBadgesMinimal';
import { locations } from '@/data/locations';
import CTA from '@/components/CTA';
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import QuoteButtonModal from '@/components/QuoteButtonModal';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((srv) => srv.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.name} in Austin, TX | Altair Austin Roofing`,
    description: `${service.shortDescription} Professional roofing services in Austin. Licensed, insured, and trusted by homeowners. Free estimates available.`,
    keywords: `${service.name} Austin, ${service.slug} Austin TX, roofing ${service.name}`,
    openGraph: {
      title: `${service.name} in Austin, TX`,
      description: service.shortDescription,
      type: 'website',
      locale: 'en_US',
      url: `https://altairaustin.com/services/${service.slug}`,
      siteName: 'Altair Austin Roofing',
    },
  };
}

export default async function ServicePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const service = services.find((srv) => srv.slug === slug);

  if (!service) {
    notFound();
  }

  const faqs = [
    {
      question: `How much does ${service.name.toLowerCase()} cost in Austin?`,
      answer: `The cost of ${service.name.toLowerCase()} varies depending on your roof size, materials chosen, and the extent of work needed. We provide free, detailed estimates with transparent pricing and no hidden fees.`
    },
    {
      question: `How long does ${service.name.toLowerCase()} take?`,
      answer: `Most ${service.name.toLowerCase()} projects are completed within 1-3 days, depending on your roof's size and complexity. We'll provide a detailed timeline during your free consultation.`
    },
    {
      question: `Do you offer emergency ${service.name.toLowerCase()}?`,
      answer: `Yes! We offer 24/7 emergency roofing services throughout Austin and surrounding areas. Call us immediately at (512) 555-0123 if you're experiencing a roofing emergency.`
    },
    {
      question: `Is ${service.name.toLowerCase()} covered by insurance?`,
      answer: `Many roofing services, especially storm and hail damage repairs, are often covered by homeowners insurance. We work directly with insurance companies and can help you navigate the claims process.`
    },
    {
      question: `Do you provide a warranty for ${service.name.toLowerCase()}?`,
      answer: `Yes! We offer comprehensive warranties on all our work, including lifetime workmanship warranties and manufacturer warranties on materials. Your investment is fully protected.`
    },
    {
      question: `What areas do you serve for ${service.name.toLowerCase()}?`,
      answer: `We proudly serve Austin and all surrounding areas including Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Kyle, Buda, Lakeway, and Dripping Springs.`
    },
    {
      question: `Are you licensed and insured in Austin?`,
      answer: `Yes, Altair Austin Roofing is fully licensed and insured to operate in Austin and throughout Central Texas. We carry comprehensive liability insurance and workers' compensation coverage.`
    },
    {
      question: `Do you provide free estimates for ${service.name.toLowerCase()}?`,
      answer: `Absolutely! We provide free, no-obligation estimates for all projects. Our experts will visit your property, assess your needs, and provide a detailed quote with transparent pricing.`
    }
  ];

  const serviceSchema = getServiceSchema(
    service.name,
    service.description,
    service.slug
  );
  
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.name, url: `/services/${service.slug}` }
  ]);

  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#FFB343] transition-colors">
                Home
              </Link>
              <Icon icon="mdi:chevron-right" className="w-4 h-4" />
              <Link href="/services" className="hover:text-[#FFB343] transition-colors">
                Services
              </Link>
              <Icon icon="mdi:chevron-right" className="w-4 h-4" />
              <span className="text-[#FFB343] font-semibold">{service.name}</span>
            </div>
          </div>
        </div>

        {/* Hero Section - Video Background */}
        <section className="relative py-12 md:py-16 overflow-hidden">
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

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
              
              <div className="text-white space-y-4 md:space-y-5">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        icon="mdi:star"
                        className="w-3.5 h-3.5 text-[#FFB343]"
                      />
                    ))}
                  </div>
                  <span className="text-white font-medium text-sm flex items-center gap-1.5">
                    <span className="hidden sm:inline">5/5 Star Rated on</span>
                    <span className="sm:hidden">5/5</span>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                      alt="Google"
                      className="h-4 sm:h-5"
                    />
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                    {service.name}
                  </h1>

                  <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <a 
                    href="tel:+15125550123"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFB343] hover:bg-[#FFA520] text-[#232323] font-bold rounded-xl transition-all hover:scale-105 shadow-xl text-sm"
                  >
                    <Icon icon="mdi:phone" className="w-4 h-4" />
                    Call (512) 555-0123
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <ContactForm variant="hero" showPhone={true} />
              </div>
            </div>
          </div>
        </section>

        <TrustBadgesMinimal />

        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                Professional {service.name} in Austin, TX
              </h2>
              <div className="w-24 h-1 bg-[#FFB343] mx-auto"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-[#FFB343] first-letter:mr-1 first-letter:float-left">
                {service.description}
              </p>
              
              {service.additionalInfo?.expertise && (
                <p className="text-base">
                  {service.additionalInfo.expertise}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        {((service.features && service.features.length > 0) || (service.benefits && service.benefits.length > 0)) && (
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                  What Makes Us Different
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Comprehensive {service.name.toLowerCase()} backed by expertise and dedication
                </p>
                <div className="w-24 h-1 bg-[#FFB343] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Features Card */}
                {service.features && service.features.length > 0 && (
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFB343] to-[#FFA520] rounded-2xl transform transition-transform group-hover:scale-[1.02]"></div>
                    <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 h-full">
                      
                      {/* Icon Header */}
                      <div className="flex items-center gap-3 mb-6 pb-6 border-b-2 border-gray-100">
                        <div className="w-14 h-14 bg-[#FFB343] rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon icon="mdi:clipboard-check-outline" className="w-8 h-8 text-[#232323]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#232323]">
                          What We Offer
                        </h3>
                      </div>
                      
                      {/* Features List */}
                      <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 group/item">
                            <div className="w-6 h-6 bg-[#FFB343] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                              <Icon icon="mdi:check-bold" className="w-4 h-4 text-[#232323]" />
                            </div>
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Benefits Card */}
                {service.benefits && service.benefits.length > 0 && (
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#232323] to-[#1a1a1a] rounded-2xl transform transition-transform group-hover:scale-[1.02]"></div>
                    <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 h-full">
                      
                      {/* Icon Header */}
                      <div className="flex items-center gap-3 mb-6 pb-6 border-b-2 border-gray-100">
                        <div className="w-14 h-14 bg-[#232323] rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon icon="mdi:star-circle-outline" className="w-8 h-8 text-[#FFB343]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#232323]">
                          Why Choose Us
                        </h3>
                      </div>
                      
                      {/* Benefits List */}
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3 group/item">
                            <div className="w-6 h-6 bg-[#FFB343] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                              <Icon icon="mdi:star" className="w-4 h-4 text-[#232323]" />
                            </div>
                            <span className="text-gray-700 leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

{/* Additional Sections from additionalInfo */}
{service.additionalInfo?.fullService && (
          <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#232323] mb-6">
                Full-Service Roofing Company
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {service.additionalInfo.fullService}
              </p>
            </div>
          </section>
        )}

        {service.additionalInfo?.customerService && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#232323] mb-6">
                Quality Customer Service
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {service.additionalInfo.customerService}
              </p>
            </div>
          </section>
        )}

        {/* Process */}
        {service.additionalInfo?.process && service.additionalInfo.process.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-8 text-center">
                Our {service.name} Process
              </h2>
              <div className="space-y-4">
                {service.additionalInfo.process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#FFB343] text-[#232323] rounded-full flex items-center justify-center font-bold text-lg">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 pt-1.5 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Specialties */}
        {service.additionalInfo?.specialties && service.additionalInfo.specialties.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-8 text-center">
                Our {service.name} Specialties
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.additionalInfo.specialties.map((specialty, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <Icon icon="mdi:check-bold" className="w-5 h-5 text-[#FFB343] flex-shrink-0" />
                    <span className="text-gray-700">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTA 
          title={`Ready for Professional ${service.name}?`}
          description="Contact us today for a free consultation and detailed estimate from Austin's trusted roofing experts."
        />

        {/* Why Replace / Commitment Section */}
        {(service.additionalInfo?.whyReplace || service.additionalInfo?.commitment) && (
          <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              {service.additionalInfo?.whyReplace && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#232323] mb-6">
                    Why Choose {service.name}?
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {service.additionalInfo.whyReplace}
                  </p>
                </div>
              )}

              {service.additionalInfo?.commitment && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#232323] mb-6">
                    Our Commitment
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {service.additionalInfo.commitment}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                Why Choose Altair for {service.name}?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the difference of working with Austin's most trusted roofing company
              </p>
              <div className="w-24 h-1 bg-[#FFB343] mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'mdi:shield-check',
                  title: 'Licensed & Insured',
                  description: 'Fully certified and insured roofing contractors you can trust'
                },
                {
                  icon: 'mdi:clock-fast',
                  title: '24/7 Emergency Service',
                  description: 'Available anytime for urgent roofing emergencies'
                },
                {
                  icon: 'mdi:certificate',
                  title: 'Lifetime Warranty',
                  description: 'Industry-leading warranties on workmanship and materials'
                },
                {
                  icon: 'mdi:cash-multiple',
                  title: 'Free Estimates',
                  description: 'Transparent pricing with detailed, no-obligation quotes'
                },  
                {
                  icon: 'mdi:account-group',
                  title: 'Expert Team',
                  description: '15+ years of experience serving the Austin community'
                },
                {
                  icon: 'mdi:file-document',
                  title: 'Insurance Help',
                  description: 'We work directly with insurance companies on claims'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-[#FFB343]">
                  <div className="w-14 h-14 bg-[#FFB343] rounded-xl flex items-center justify-center mb-4">
                    <Icon icon={item.icon} className="w-7 h-7 text-[#232323]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                What Our Customers Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Read reviews from satisfied Austin homeowners
              </p>
              <div className="w-24 h-1 bg-[#FFB343] mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Sarah M.',
                  location: 'Austin, TX',
                  rating: 5,
                  date: 'October 2024',
                  text: 'Excellent service! The team was professional, efficient, and cleaned up everything perfectly. Our new roof looks amazing!'
                },
                {
                  name: 'John D.',
                  location: 'Round Rock, TX',
                  rating: 5,
                  date: 'September 2024',
                  text: 'Called them for emergency storm damage. They came out the same day and had us protected within hours. Highly recommend!'
                },
                {
                  name: 'Maria G.',
                  location: 'Cedar Park, TX',
                  rating: 5,
                  date: 'August 2024',
                  text: 'Best roofing company in Austin! Fair pricing, quality work, and great communication throughout the entire process.'
                }
              ].map((review, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="font-bold text-gray-900 text-base">{review.name}</p>
                          <Icon icon="mdi:check-decagram" className="w-4 h-4 text-[#FFB343]" />
                        </div>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                      alt="Google"
                      className="h-4 mt-1"
                    />
                  </div>

                  <div className="flex gap-0.5 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} icon="mdi:star" className="w-4 h-4 text-[#FFB343]" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {review.text}
                  </p>

                  <div className="flex items-center gap-1 text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <Icon icon="mdi:map-marker" className="w-3.5 h-3.5" />
                    <span>{review.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                All Roofing Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Complete roofing solutions for every need
              </p>
              <div className="w-24 h-1 bg-[#FFB343] mx-auto mt-4"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {services.map((serviceItem) => (
                <Link
                  key={serviceItem.slug}
                  href={`/services/${serviceItem.slug}`}
                  className="group"
                >
                  <div className="h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#FFB343] overflow-hidden">
                    <div className="p-6 sm:p-8 text-center flex flex-col items-center min-h-[280px]">
                      <div className="mb-4 text-gray-700 group-hover:text-[#FFB343] transition-colors duration-300">
                        <Icon icon={serviceItem.icon} className="w-14 h-14 sm:w-16 sm:h-16" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FFB343] transition-colors duration-300">
                        {serviceItem.name}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                        {serviceItem.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-[#FFB343] font-semibold text-sm group-hover:gap-3 transition-all duration-300 mt-4">
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

        <CTA 
          title={`Ready for Professional ${service.name}?`}
          description="Contact us today for a free consultation and detailed estimate from Austin's trusted roofing experts."
        />

        {/* Locations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {service.name} Throughout <span className="text-[#FFB343]">Austin</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Professional roofing services throughout the greater Austin area
              </p>
              <div className="w-24 h-1 bg-[#FFB343] mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}/${service.slug}`}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all border-2 border-gray-200 hover:border-[#FFB343] group"
                >
                  <Icon icon="mdi:map-marker" className="w-8 h-8 text-[#FFB343] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-[#FFB343] transition-colors">{location.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{location.zip}</p>
                </Link>
              ))}
            </div>

            <div className="mt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  We Proudly Serve the Greater Austin Area
                </h3>
                <p className="text-gray-600">
                  Austin homeowners trust Altair Austin Roofing
                </p>
              </div>

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

        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Common questions about {service.name.toLowerCase()} in Austin
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started with {service.name}?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact Altair Austin Roofing today for a free inspection and estimate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15125550123"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFB343] hover:bg-[#FFA520] text-[#232323] font-bold rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                <Icon icon="mdi:phone" className="w-5 h-5" />
                Call (512) 555-0123
              </a>
              <QuoteButtonModal 
                text="Get Free Estimate"
                variant="secondary"
                className='cursor-pointer' 
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}