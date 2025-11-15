import { roofTypes, RoofType } from '@/data/roofTypes';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import TrustBadgesMinimal from '@/components/TrustBadgesMinimal';
import { locations } from '@/data/locations';
import CTA from '@/components/CTA';
import { getRoofTypeSchema, getBreadcrumbSchema } from '@/lib/schema';

// Generar rutas estáticas para todos los tipos de techo
export async function generateStaticParams() {
  return roofTypes.map((roofType) => ({
    slug: roofType.slug,
  }));
}

// Generar metadata dinámica para SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const roofType = roofTypes.find((rt) => rt.slug === slug);
  
  if (!roofType) {
    return {
      title: 'Roof Type Not Found',
    };
  }

  return {
    title: `${roofType.name} in Austin, TX | Altair Austin Roofing`,
    description: `${roofType.shortDescription} Professional installation, repair, and maintenance services in Austin. ${roofType.averageLifespan ? `Lasts ${roofType.averageLifespan}.` : ''} Free estimates available.`,
    openGraph: {
      title: `${roofType.name} in Austin, TX`,
      description: roofType.shortDescription,
      type: 'website',
      locale: 'en_US',
    },
  };
}

export default async function RoofTypePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const roofType = roofTypes.find((rt) => rt.slug === slug);

  if (!roofType) {
    notFound();
  }

  // Otros tipos de techo para mostrar al final
  const otherRoofTypes = roofTypes.filter(rt => rt.slug !== roofType.slug);

  // ⬇️ AGREGAR ESTO AQUÍ ⬇️
  // Generar schemas
  const roofTypeSchema = getRoofTypeSchema(
    roofType.name,
    roofType.description,
    roofType.slug,
    roofType.averageLifespan,
    roofType.averageCost
  );
  
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Roof Types', url: '/roof-types' },
    { name: roofType.name, url: `/roof-types/${roofType.slug}` }
  ]);

  const services = [
    {
      title: 'Installation',
      icon: 'mdi:hammer-wrench',
      description: `Professional ${roofType.name.toLowerCase()} installation services in Austin. Quality craftsmanship for your home.`
    },
    {
      title: 'Repairs',
      icon: 'mdi:tools',
      description: `Fast and reliable ${roofType.name.toLowerCase()} repair services for Austin homeowners.`
    },
    {
      title: 'Replacement',
      icon: 'mdi:home-roof',
      description: `Complete ${roofType.name.toLowerCase()} replacement services with premium materials.`
    },
    {
      title: 'Inspection',
      icon: 'mdi:clipboard-check',
      description: `Free ${roofType.name.toLowerCase()} inspections. Comprehensive assessment by experts.`
    },
    {
      title: 'Maintenance',
      icon: 'mdi:wrench',
      description: `Regular maintenance services to extend your ${roofType.name.toLowerCase()} lifespan.`
    },
    {
      title: 'Emergency Service',
      icon: 'mdi:weather-lightning',
      description: `24/7 emergency repair services for ${roofType.name.toLowerCase()} damage.`
    },
  ];

  return (
    <>
    {/* ⬇️ AGREGAR ESTO ⬇️ */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(roofTypeSchema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#00529C] transition-colors">
              Home
            </Link>
            <Icon icon="mdi:chevron-right" className="w-4 h-4" />
            <span className="text-[#00529C] font-semibold">{roofType.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Form - H1 AQUÍ */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/worker-repairing-roof.jpg" 
            alt={roofType.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
            
            {/* Left Side - Content */}
            <div className="text-white space-y-4 md:space-y-5">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      icon="mdi:star"
                      className="w-3.5 h-3.5 text-[#FFE317]"
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

              {/* Main Content */}
              <div className="space-y-3">
                {/* H1 - ÚNICO EN LA PÁGINA */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  {roofType.name}
                </h1>

                <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
                  {roofType.shortDescription}
                </p>
              </div>

              {/* Key Features - Como texto */}
              <div className="flex flex-wrap gap-4 pt-2 text-sm text-white/90">
                {roofType.averageLifespan && (
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:clock-outline" className="w-4 h-4 text-[#FFE317]" />
                    <span>Lifespan: <strong className="text-white">{roofType.averageLifespan}</strong></span>
                  </div>
                )}
                {roofType.averageCost && (
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:currency-usd" className="w-4 h-4 text-[#FFE317]" />
                    <span>Cost: <strong className="text-white">{roofType.averageCost}</strong></span>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="tel:+15125550123"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFE317] hover:bg-[#ffd700] text-[#00529C] font-bold rounded-xl transition-all hover:scale-105 shadow-xl text-sm"
                >
                  <Icon icon="mdi:phone" className="w-4 h-4" />
                  Call (512) 555-0123
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold rounded-xl transition-all border-2 border-white/30 text-sm"
                >
                  Get Free Estimate
                  <Icon icon="mdi:arrow-right" className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex justify-center lg:justify-end">
              <ContactForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadgesMinimal />

      {/* Intro Text Section - H2 */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00529C] mb-6">
            About {roofType.name}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Have you been considering <strong>{roofType.name.toLowerCase()}</strong> for your home? If you've been searching for the best quality roofing company to install this premium roofing material, then look no further than <strong>Altair Austin Roofing</strong>.
            </p>
            <p>
              {roofType.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - H2 con H3 para cada servicio */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
              Our {roofType.name} Services
            </h2>
            <div className="w-24 h-1 bg-[#FFE317] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-[#FFE317] group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00529C] to-[#003d75] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon icon={service.icon} className="w-7 h-7 text-white" />
                </div>
                {/* H3 para cada servicio */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00529C] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Specifications - H2 */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#00529C] mb-6">
            Key Specifications
          </h2>
          <div className="space-y-3">
            {roofType.averageLifespan && (
              <div className="flex items-start gap-3">
                <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#00529C] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900">Average Lifespan: </span>
                  <span className="text-gray-700">{roofType.averageLifespan}</span>
                </div>
              </div>
            )}
            {roofType.averageCost && (
              <div className="flex items-start gap-3">
                <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#00529C] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900">Installation Cost: </span>
                  <span className="text-gray-700">{roofType.averageCost}</span>
                </div>
              </div>
            )}
            {roofType.maintenance && (
              <div className="flex items-start gap-3">
                <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#00529C] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900">Maintenance: </span>
                  <span className="text-gray-700">{roofType.maintenance}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Advantages and Considerations - H2 con H3 */}
      {(roofType.pros || roofType.cons) && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#00529C] mb-8 text-center">
              Advantages and Considerations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pros */}
              {roofType.pros && roofType.pros.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-[#00529C] mb-6">
                    Advantages
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {roofType.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-3 text-[#00529C] font-bold">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Cons */}
              {roofType.cons && roofType.cons.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-[#00529C] mb-6">
                    Considerations
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {roofType.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-3 text-[#00529C] font-bold">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section - H2 */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/worker-roofing-altair.jpg" 
            alt="Roofing background"
            className="w-full h-full object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
            Why Choose Altair Austin Roofing?
          </h2>
          
          <div className="prose prose-lg max-w-none text-white leading-relaxed space-y-4 drop-shadow-md">
            <p>
              If you are a resident of <strong className="text-[#FFE317]">Texas</strong>, then odds are you're already aware of just how much damage the weather conditions can be to your home or property. This is something that we keep in mind when it comes to installing {roofType.name.toLowerCase()} in <strong className="text-[#FFE317]">Austin and surrounding areas</strong>.
            </p>
            <p>
              We have an experienced team specialized in {roofType.name.toLowerCase()} in which we can put your mind at ease knowing you are getting the highest quality roofing that is available in your area. Our professionals understand the unique requirements of this roofing material and how it performs in Central Texas weather conditions.
            </p>
            <p>
              So what are you waiting for? If you are based in <strong className="text-[#FFE317]">Austin</strong> then do not hesitate to get in touch with our team at <strong className="text-[#FFE317]">Altair Austin Roofing</strong> today. To discuss all of your {roofType.name.toLowerCase()} needs, simply give us a call to speak with one of our team members. What's more, we even offer a <strong className="text-[#FFE317]">free estimate service</strong> so that you can get an idea of what you need before the work begins on your roofing project.
            </p>
          </div>
        </div>
      </section>

{/* All Roof Types - H2 con H3 para cada card */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
        All Roof Types We Install
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Discover the perfect roofing material for your Austin home
      </p>
      <div className="w-24 h-1 bg-[#FFE317] mx-auto mt-4"></div>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
      {roofTypes.map((roofTypeItem) => (
        <Link
          key={roofTypeItem.slug}
          href={`/roof-types/${roofTypeItem.slug}`}
          className="group"
        >
          <div className="h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#00529C] overflow-hidden">
            <div className="p-6 sm:p-8 text-center flex flex-col items-center min-h-[280px]">
              
              {/* Icon */}
              <div className="mb-4 text-gray-700 group-hover:text-[#00529C] transition-colors duration-300">
                <Icon icon={roofTypeItem.icon} className="w-14 h-14 sm:w-16 sm:h-16" />
              </div>

              {/* Title - H3 */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00529C] transition-colors duration-300">
                {roofTypeItem.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                {roofTypeItem.shortDescription}
              </p>

              {/* View Link */}
              <div className="flex items-center gap-2 text-[#00529C] font-semibold text-sm group-hover:gap-3 transition-all duration-300 mt-4">
                <span>View Details</span>
                <Icon icon="mdi:arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* CTA Component - Debe tener H2 interno */}
      <CTA 
        title={`Ready for ${roofType.name}?`}
        description="Contact us today for a free consultation and detailed estimate from Austin's trusted roofing experts."
      />

      {/* Locations We Serve - H2 con H3 para map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {roofType.name} Installation Throughout <span className="text-[#00529C]">Austin</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Professional roofing services throughout the greater Austin area
            </p>
            <div className="w-24 h-1 bg-[#FFE317] mx-auto"></div>
          </div>

          {/* Grid de Locations */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all border-2 border-gray-200 hover:border-[#00529C] group"
              >
                <Icon icon="mdi:map-marker" className="w-8 h-8 text-[#00529C] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-gray-900 text-sm group-hover:text-[#00529C] transition-colors">{location.name}</p>
                <p className="text-xs text-gray-500 mt-1">{location.zip}</p>
              </Link>
            ))}
          </div>

          {/* Map Section - H3 */}
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

      {/* FAQ Section - H2 con H3 para cada pregunta */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600">
        How can we help?
      </p>
      <div className="w-24 h-1 bg-[#FFE317] mx-auto mt-4"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {/* FAQ 1 */}
      <details open className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm group">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h3 className="text-lg font-bold text-gray-900 pr-4">
            How much does {roofType.name.toLowerCase()} cost in Austin?
          </h3>
          <Icon icon="mdi:chevron-down" className="w-6 h-6 text-[#00529C] group-open:rotate-180 transition-transform flex-shrink-0" />
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed text-sm">
          The cost of {roofType.name.toLowerCase()} varies depending on the size of your roof, materials chosen, and extent of work needed. {roofType.averageCost && `On average, installation costs ${roofType.averageCost}.`} We offer free estimates to provide you with an accurate quote for your specific project.
        </p>
      </details>

      {/* FAQ 2 */}
      <details open className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm group">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h3 className="text-lg font-bold text-gray-900 pr-4">
            How long does {roofType.name.toLowerCase()} last?
          </h3>
          <Icon icon="mdi:chevron-down" className="w-6 h-6 text-[#00529C] group-open:rotate-180 transition-transform flex-shrink-0" />
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed text-sm">
          {roofType.averageLifespan ? `${roofType.name} typically lasts ${roofType.averageLifespan} with proper maintenance.` : `The lifespan of ${roofType.name.toLowerCase()} depends on several factors including installation quality, maintenance, and weather conditions.`} Regular inspections and maintenance can help maximize your roof's lifespan.
        </p>
      </details>

      {/* FAQ 3 */}
      <details open className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm group">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h3 className="text-lg font-bold text-gray-900 pr-4">
            Is {roofType.name.toLowerCase()} suitable for Austin's climate?
          </h3>
          <Icon icon="mdi:chevron-down" className="w-6 h-6 text-[#00529C] group-open:rotate-180 transition-transform flex-shrink-0" />
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed text-sm">
          {roofType.name} performs well in Austin's climate with its hot summers and occasional severe weather. Our team has extensive experience installing {roofType.name.toLowerCase()} in Central Texas and can provide specific recommendations based on your property's location and exposure.
        </p>
      </details>

      {/* FAQ 4 */}
      <details open className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm group">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h3 className="text-lg font-bold text-gray-900 pr-4">
            Do you offer warranties on {roofType.name.toLowerCase()} installation?
          </h3>
          <Icon icon="mdi:chevron-down" className="w-6 h-6 text-[#00529C] group-open:rotate-180 transition-transform flex-shrink-0" />
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed text-sm">
          Yes! We offer comprehensive warranties on all our {roofType.name.toLowerCase()} installations, including lifetime workmanship warranties and manufacturer warranties on materials. Your investment is fully protected, and we stand behind the quality of our work.
        </p>
      </details>

      {/* FAQ 5 */}
      <details open className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm group">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h3 className="text-lg font-bold text-gray-900 pr-4">
            How long does {roofType.name.toLowerCase()} installation take?
          </h3>
          <Icon icon="mdi:chevron-down" className="w-6 h-6 text-[#00529C] group-open:rotate-180 transition-transform flex-shrink-0" />
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed text-sm">
          Most {roofType.name.toLowerCase()} installations are completed within 1-3 days, depending on your roof's size and complexity. We'll provide a detailed timeline during your free consultation and keep you informed throughout the entire process.
        </p>
      </details>

      {/* FAQ 6 */}
      <details open className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm group">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h3 className="text-lg font-bold text-gray-900 pr-4">
            What maintenance does {roofType.name.toLowerCase()} require?
          </h3>
          <Icon icon="mdi:chevron-down" className="w-6 h-6 text-[#00529C] group-open:rotate-180 transition-transform flex-shrink-0" />
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed text-sm">
          {roofType.maintenance || `${roofType.name} requires regular maintenance including annual inspections, keeping gutters clear, and addressing any minor issues promptly. We offer comprehensive maintenance services to help extend your roof's lifespan and maintain its warranty coverage.`}
        </p>
      </details>

      {/* FAQ 7 */}
      <details open className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm group">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h3 className="text-lg font-bold text-gray-900 pr-4">
            Do you provide free estimates for {roofType.name.toLowerCase()}?
          </h3>
          <Icon icon="mdi:chevron-down" className="w-6 h-6 text-[#00529C] group-open:rotate-180 transition-transform flex-shrink-0" />
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed text-sm">
          Absolutely! We provide free, no-obligation estimates for all {roofType.name.toLowerCase()} projects. Our experts will visit your property, assess your needs, and provide a detailed quote with transparent pricing. There are no hidden fees or surprises.
        </p>
      </details>

      {/* FAQ 8 */}
      <details open className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm group">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h3 className="text-lg font-bold text-gray-900 pr-4">
            Are you licensed and insured in Austin?
          </h3>
          <Icon icon="mdi:chevron-down" className="w-6 h-6 text-[#00529C] group-open:rotate-180 transition-transform flex-shrink-0" />
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed text-sm">
          Yes, Altair Austin Roofing is fully licensed and insured to operate in Austin and throughout Central Texas. We carry comprehensive liability insurance and workers' compensation coverage to protect you and your property throughout the entire roofing process.
        </p>
      </details>
    </div>
  </div>
</section>

      {/* Final CTA Section - H2 */}
      <section className="py-16 bg-gradient-to-br from-[#00529C] to-[#003d75]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started with {roofType.name}?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free inspection and estimate.
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
              Get a Quote
              <Icon icon="mdi:arrow-right" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </> 
  );
}