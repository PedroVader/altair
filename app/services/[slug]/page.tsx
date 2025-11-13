import { services, Service } from '@/data/services';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Generar rutas estáticas para todos los servicios
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generar metadata dinámica para SEO
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
    description: service.shortDescription,
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

  // Servicios relacionados
  const relatedServices = services.filter(s => s.slug !== service.slug).slice(0, 4);

  // FAQs dinámicas
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
    }
  ];

  const neighborhoods = [
    'Downtown Austin', 'East Austin', 'South Congress', 'Zilker',
    'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville',
    'Leander', 'Kyle', 'Buda', 'Lakeway',
    'Dripping Springs', 'Manor', 'Hutto', 'Bee Cave'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00529C] to-[#003d75] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
            <Icon icon={service.icon} className="w-10 h-10 text-[#FFE317]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {service.name} in Austin, TX
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {service.shortDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15125550123"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFE317] hover:bg-[#ffd700] text-[#00529C] font-bold rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              <Icon icon="mdi:phone" className="w-5 h-5" />
              Call (512) 555-0123
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all border-2 border-white/30"
            >
              Get Free Estimate
              <Icon icon="mdi:arrow-right" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Are you looking for professional <strong>{service.name.toLowerCase()}</strong> in Austin, TX? 
              Altair Austin Roofing is your trusted partner for all your roofing needs. With over 15 years of experience 
              serving the Austin area, we've helped thousands of homeowners protect their most valuable investment.
            </p>
            <p>
              {service.description}
            </p>
            <p>
              Our team of licensed and insured roofing professionals is committed to delivering exceptional results on every project. 
              Whether you need emergency repairs or planned maintenance, we're here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Add-On Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
              Related Roofing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your roofing project with our additional professional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((relatedService) => (
              <Link
                key={relatedService.slug}
                href={`/services/${relatedService.slug}`}
                className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-[#FFE317] text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00529C] to-[#003d75] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon icon={relatedService.icon} className="w-8 h-8 text-[#FFE317]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#00529C] transition-colors">
                  {relatedService.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {relatedService.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
              Why Choose Altair for {service.name}?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference of working with Austin's most trusted roofing company
            </p>
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
              <div key={idx} className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00529C] to-[#003d75] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon icon={item.icon} className="w-7 h-7 text-[#FFE317]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process & Guarantee */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
              Our Roofing Process & Guarantee
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure your complete satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: '1',
                title: 'Free Inspection',
                description: 'Comprehensive roof assessment with detailed documentation'
              },
              {
                step: '2',
                title: 'Detailed Estimate',
                description: 'Transparent pricing with multiple options to fit your budget'
              },
              {
                step: '3',
                title: 'Expert Installation',
                description: 'Professional work by licensed contractors using premium materials'
              },
              {
                step: '4',
                title: 'Final Walkthrough',
                description: 'Quality assurance and lifetime warranty on all workmanship'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center border-2 border-gray-200">
                <div className="w-12 h-12 bg-[#FFE317] rounded-full flex items-center justify-center mx-auto mb-4 text-[#00529C] font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Guarantee Box */}
          <div className="bg-gradient-to-br from-[#00529C] to-[#003d75] rounded-2xl p-8 md:p-12 text-white text-center">
            <Icon icon="mdi:shield-star" className="w-16 h-16 mx-auto mb-4 text-[#FFE317]" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our 100% Satisfaction Guarantee</h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              We stand behind every job we complete. If you're not completely satisfied with our work, 
              we'll make it right. That's our promise to you and why thousands of Austin homeowners trust 
              Altair Austin Roofing for all their roofing needs.
            </p>
            <a
              href="tel:+15125550123"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFE317] hover:bg-[#ffd700] text-[#00529C] font-bold rounded-lg transition-all hover:scale-105"
            >
              <Icon icon="mdi:phone" className="w-5 h-5" />
              Call Now for Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read reviews from satisfied Austin homeowners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                location: 'Austin, TX',
                rating: 5,
                text: 'Excellent service! The team was professional, efficient, and cleaned up everything perfectly. Our new roof looks amazing!'
              },
              {
                name: 'John D.',
                location: 'Round Rock, TX',
                rating: 5,
                text: 'Called them for emergency storm damage. They came out the same day and had us protected within hours. Highly recommend!'
              },
              {
                name: 'Maria G.',
                location: 'Cedar Park, TX',
                rating: 5,
                text: 'Best roofing company in Austin! Fair pricing, quality work, and great communication throughout the entire process.'
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} icon="mdi:star" className="w-5 h-5 text-[#FFE317]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00529C] to-[#003d75] rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
              {service.name} Available in the Neighborhoods
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly serve homeowners throughout Austin and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {neighborhoods.map((neighborhood, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow border border-gray-200">
                <Icon icon="mdi:map-marker" className="w-6 h-6 text-[#00529C] mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">{neighborhood}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Don't see your area listed?</p>
            <a
              href="tel:+15125550123"
              className="inline-flex items-center gap-2 text-[#00529C] hover:text-[#003d75] font-bold"
            >
              Call us at (512) 555-0123
              <Icon icon="mdi:arrow-right" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions about {service.name.toLowerCase()} in Austin
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <Icon icon="mdi:chevron-down" className="w-6 h-6 text-[#00529C] group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-[#00529C] to-[#003d75]">
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFE317] hover:bg-[#ffd700] text-[#00529C] font-bold rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              <Icon icon="mdi:phone" className="w-5 h-5" />
              Call (512) 555-0123
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-[#00529C] font-bold rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              Request Free Estimate
              <Icon icon="mdi:arrow-right" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}