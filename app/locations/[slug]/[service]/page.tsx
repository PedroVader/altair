import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { roofTypes, RoofType } from '@/data/roofTypes';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';
import { getLocationServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import QuoteButtonModal from '@/components/QuoteButtonModal';

// Type guard para verificar si es RoofType
function isRoofType(item: any): item is RoofType {
  return 'averageLifespan' in item || 'averageCost' in item;
}

// Generar todas las combinaciones: location + service Y location + roofType
export async function generateStaticParams() {
  const params: { slug: string; service: string }[] = [];
  
  locations.forEach((location) => {
    // Agregar todos los services
    services.forEach((service) => {
      params.push({
        slug: location.slug,
        service: service.slug,
      });
    });
    
    // Agregar todos los roof types
    roofTypes.forEach((roofType) => {
      params.push({
        slug: location.slug,
        service: roofType.slug,
      });
    });
  });
  
  return params;
}

// Metadata dinámica
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string; service: string }> 
}): Promise<Metadata> {
  const { slug, service: serviceSlug } = await params;
  const location = locations.find((l) => l.slug === slug);
  
  // Buscar en ambos arrays
  const service = services.find((s) => s.slug === serviceSlug);
  const roofType = roofTypes.find((rt) => rt.slug === serviceSlug);
  const item = service || roofType;
  
  if (!location || !item) {
    return { title: 'Not Found' };
  }

  const isRoof = isRoofType(item);
  const title = `${item.name} in ${location.name}, TX | Altair Austin Roofing`;
  const description = `Professional ${item.name.toLowerCase()} ${isRoof ? 'installation' : 'services'} in ${location.name}, TX. ${item.shortDescription} Licensed, insured, and trusted by ${location.name} homeowners.`;

  return {
    title,
    description,
    keywords: `${item.name} ${location.name}, ${location.name} ${item.slug}, ${item.name} ${location.zip}, roofing ${location.name} TX`,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      url: `https://altairaustin.com/locations/${location.slug}/${serviceSlug}`,
      siteName: 'Altair Austin Roofing',
      images: [
        {
          url: 'https://altairaustin.com/worker-repairing-roof.jpg',
          width: 1200,
          height: 630,
          alt: `${item.name} in ${location.name}, TX`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function LocationServicePage({ 
  params 
}: { 
  params: Promise<{ slug: string; service: string }> 
}) {
  const { slug, service: serviceSlug } = await params;
  const location = locations.find((l) => l.slug === slug);
  
  // Buscar en ambos arrays
  const service = services.find((s) => s.slug === serviceSlug);
  const roofType = roofTypes.find((rt) => rt.slug === serviceSlug);
  const item = service || roofType;

  if (!location || !item) {
    notFound();
  }

  const isRoof = isRoofType(item);

  // Generar schemas
  const locationServiceSchema = getLocationServiceSchema(
    location.name,
    location.zip,
    location.slug,
    item.name,
    item.description,
    serviceSlug
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: location.name, url: `/locations/${location.slug}` },
    { name: item.name, url: `/locations/${location.slug}/${serviceSlug}` }
  ]);

  // Obtener TODOS los items (sin filtrar)
  const allServices = services;
  const allRoofTypes = roofTypes;
  const allLocations = locations;

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationServiceSchema) }}
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
              <Link href="/" className="hover:text-[#FFB343] transition-colors">
                Home
              </Link>
              <Icon icon="mdi:chevron-right" className="w-4 h-4" />
              <Link href={`/locations/${location.slug}`} className="hover:text-[#FFB343] transition-colors">
                {location.name}
              </Link>
              <Icon icon="mdi:chevron-right" className="w-4 h-4" />
              <span className="text-[#FFB343] font-semibold">{item.name}</span>
            </div>
          </div>
        </div>

        {/* Hero Section with Form - Video Background */}
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
              
              {/* Left Side - Content */}
              <div className="text-white space-y-4">
                {/* Trust Badge */}
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

                {/* Main Content */}
                <div className="space-y-3">
                  {/* H1 */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                    {item.name} in {location.name}
                  </h1>

                  <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
                    Professional {item.name.toLowerCase()} {isRoof ? 'installation' : 'services'} in {location.name}, TX. {item.shortDescription}
                  </p>
                </div>

                {/* Key Features - Solo para roof types */}
                {isRoof && (
                  <div className="flex flex-wrap gap-4 pt-2 text-sm text-white/90">
                    {item.averageLifespan && (
                      <div className="flex items-center gap-2">
                        <Icon icon="mdi:clock-outline" className="w-4 h-4 text-[#FFB343]" />
                        <span>Lifespan: <strong className="text-white">{item.averageLifespan}</strong></span>
                      </div>
                    )}
                    {item.averageCost && (
                      <div className="flex items-center gap-2">
                        <Icon icon="mdi:currency-usd" className="w-4 h-4 text-[#FFB343]" />
                        <span>Cost: <strong className="text-white">{item.averageCost}</strong></span>
                      </div>
                    )}
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href="tel:+15125550123"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFB343] hover:bg-[#FFA520] text-[#232323] font-bold rounded-xl transition-all hover:scale-105 shadow-xl text-sm"
                  >
                    <Icon icon="mdi:phone" className="w-4 h-4" />
                    Call (512) 555-0123
                  </a>
                  <QuoteButtonModal 
                    text="Get Free Estimate"
                    variant="primary"  
                    className='cursor-pointer'
                  />
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="flex justify-center lg:justify-end">
                <ContactForm variant="hero" showPhone={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section - Contenido más rico */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-8">
              Expert {item.name} {isRoof ? 'Installation' : 'Services'} in {location.name}, Texas
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                When it comes to <strong>{item.name.toLowerCase()}</strong> in {location.name}, TX, Altair Austin Roofing is your trusted local partner. 
                We've been proudly serving homeowners in {location.name} and throughout the {location.zip} area for over 15 years, building a reputation for excellence, integrity, and outstanding customer service.
              </p>
              
              <p>
                {item.description}
              </p>

              {isRoof ? (
                <>
                  <p>
                    Our experienced team specializes in {item.name.toLowerCase()} installation for residential properties throughout {location.name}. 
                    We understand that your roof is one of the most critical components of your home, protecting your family and possessions from Central Texas's challenging weather conditions—from intense summer heat and UV exposure to severe storms and occasional hail.
                  </p>
                  <p>
                    What sets us apart in the {location.name} community is our commitment to using only premium-grade materials combined with expert craftsmanship. 
                    Every {item.name.toLowerCase()} installation we complete is backed by comprehensive warranties and our guarantee of quality workmanship. 
                    We take pride in treating your home as if it were our own, ensuring meticulous attention to detail from start to finish.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    As a locally-owned and operated roofing company, we understand the unique challenges that {location.name} homeowners face. 
                    The Texas climate can be particularly demanding on roofing systems, which is why we offer comprehensive {item.name.toLowerCase()} designed to extend the life of your roof and protect your investment.
                  </p>
                  <p>
                    Our team of licensed and insured professionals brings decades of combined experience to every project in {location.name}. 
                    We use state-of-the-art equipment and proven techniques to deliver results that exceed industry standards. 
                    Whether you need routine maintenance, emergency repairs, or a complete roof overhaul, we're committed to providing honest assessments, transparent pricing, and exceptional service from your first call to project completion.
                  </p>
                </>
              )}

              <p>
                Located right here in the Austin area, we're just minutes away from {location.name}, ensuring fast response times for emergencies and convenient scheduling for planned projects. 
                Our proximity means we can provide the personalized, attentive service that larger national chains simply can't match. 
                When you choose Altair Austin Roofing, you're choosing a neighbor who cares about the quality of work we deliver and the relationships we build in the community.
              </p>

              <div className="bg-[#FFB343]/10 border-l-4 border-[#FFB343] p-6 rounded-r-lg mt-8">
                <p className="text-[#FFB343] font-semibold mb-2">
                  Ready to get started with {item.name.toLowerCase()} in {location.name}?
                </p>
                <p className="text-gray-700 mb-0">
                  Contact us today for a free, no-obligation consultation and estimate. We'll assess your specific needs, answer all your questions, and provide you with a detailed proposal. 
                  Experience the difference that local expertise and genuine customer care can make.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                Why {location.name} Homeowners Choose Altair Austin Roofing
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The advantages of working with your local roofing experts
              </p>
              <div className="w-24 h-1 bg-[#FFB343] mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'mdi:map-marker-radius',
                  title: 'Local to Your Area',
                  description: `Based in the Austin area and serving ${location.name} (${location.zip}) with fast response times and personalized service.`
                },
                {
                  icon: 'mdi:clock-fast',
                  title: '24/7 Emergency Service',
                  description: 'Available around the clock for urgent roofing needs. We understand emergencies don\'t wait for business hours.'
                },
                {
                  icon: 'mdi:certificate',
                  title: 'Licensed & Insured',
                  description: 'Fully certified and insured with comprehensive coverage for your complete protection and peace of mind.'
                },
                {
                  icon: 'mdi:account-group',
                  title: '15+ Years Experience',
                  description: 'Over a decade of proven expertise serving the Austin community with hundreds of satisfied customers.'
                },
                {
                  icon: 'mdi:cash-multiple',
                  title: 'Free Estimates',
                  description: 'Transparent, detailed pricing with no-obligation quotes. We believe in honest assessments and fair pricing.'
                },
                {
                  icon: 'mdi:shield-star',
                  title: 'Lifetime Warranties',
                  description: 'Industry-leading warranties on both workmanship and materials. We stand behind every job we complete.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-[#FFB343]">
                  <div className="w-14 h-14 bg-[#FFB343] rounded-xl flex items-center justify-center mb-4">
                    <Icon icon={item.icon} className="w-7 h-7 text-[#232323]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
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
                All Roofing Services in {location.name}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive roofing solutions for every need
              </p>
              <div className="w-24 h-1 bg-[#FFB343] mx-auto mt-4"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {allServices.map((serviceItem) => (
                <Link
                  key={serviceItem.slug}
                  href={`/locations/${location.slug}/${serviceItem.slug}`}
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
                        <span>Learn More</span>
                        <Icon icon="mdi:arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Roof Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                All Roof Types We Install in {location.name}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Expert installation of every roofing system
              </p>
              <div className="w-24 h-1 bg-[#FFB343] mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {allRoofTypes.map((roofTypeItem) => (
                <Link
                  key={roofTypeItem.slug}
                  href={`/locations/${location.slug}/${roofTypeItem.slug}`}
                  className="group"
                >
                  <div className="h-full bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#FFB343] overflow-hidden">
                    <div className="p-4 sm:p-6 text-center flex flex-col items-center min-h-[220px]">
                      <div className="mb-3 text-gray-700 group-hover:text-[#FFB343] transition-colors duration-300">
                        <Icon icon={roofTypeItem.icon} className="w-10 h-10 sm:w-12 sm:h-12" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FFB343] transition-colors duration-300">
                        {roofTypeItem.name}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow line-clamp-3">
                        {roofTypeItem.shortDescription}
                      </p>
                      <div className="flex items-center gap-1 text-[#FFB343] font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all duration-300 mt-3">
                        <span>Learn More</span>
                        <Icon icon="mdi:arrow-right" className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Locations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                {item.name} Throughout the Austin Area
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Professional roofing services in your neighborhood
              </p>
              <div className="w-24 h-1 bg-[#FFB343] mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {allLocations.map((locationItem) => (
                <Link
                  key={locationItem.slug}
                  href={`/locations/${locationItem.slug}/${item.slug}`}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all border-2 border-gray-200 hover:border-[#FFB343] group"
                >
                  <Icon icon="mdi:map-marker" className="w-8 h-8 text-[#FFB343] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-[#FFB343] transition-colors">{locationItem.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{locationItem.zip}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTA 
          title={`Ready for ${item.name} in ${location.name}?`}
          description="Contact us today for a free consultation and detailed estimate from Austin's trusted roofing experts."
        />
      </div>
    </>
  );
}