import { locations, Location } from '@/data/locations';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

// Generar rutas estáticas para todas las ubicaciones
export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

// Generar metadata dinámica para SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((loc) => loc.slug === slug);
  
  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  return {
    title: `${location.name} Roofing Services | Austin Roofing Company`,
    description: location.description,
  };
}

export default async function LocationPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const location = locations.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  const services = [
    {
      title: 'Roof Installation',
      icon: 'mdi:hammer-wrench',
      description: `Professional roof installation services in ${location.name}. Quality craftsmanship for your home.`
    },
    {
      title: 'Roof Repairs',
      icon: 'mdi:tools',
      description: `Fast and reliable roof repair services for ${location.name} homeowners.`
    },
    {
      title: 'Storm Damage',
      icon: 'mdi:weather-lightning',
      description: `Emergency storm damage repair available 24/7 in ${location.name}.`
    },
    {
      title: 'Roof Replacement',
      icon: 'mdi:home-roof',
      description: `Complete roof replacement services in ${location.name} with quality materials.`
    },
    {
      title: 'Inspections',
      icon: 'mdi:clipboard-check',
      description: `Free roof inspections for ${location.name} residents. Comprehensive assessment.`
    },
    {
      title: 'Maintenance',
      icon: 'mdi:wrench',
      description: `Regular roof maintenance services to protect your ${location.name} home.`
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#00529C] transition-colors">
              Home
            </Link>
            <Icon icon="mdi:chevron-right" className="w-4 h-4" />
            <Link href="/locations" className="hover:text-[#00529C] transition-colors">
              Locations
            </Link>
            <Icon icon="mdi:chevron-right" className="w-4 h-4" />
            <span className="text-[#00529C] font-semibold">{location.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Form */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/worker-repairing-roof.jpg" 
            alt={`Roofing services in ${location.name}`}
            className="w-full h-full object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Left Side - Content */}
            <div className="text-white space-y-5">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      icon="mdi:star"
                      className="w-3.5 h-3.5 text-[#FFE317]"
                    />
                  ))}
                </div>
                <span className="text-white/90 font-medium text-sm flex items-center gap-1.5">
                  5/5 Star Rated on
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                    alt="Google"
                    className="h-5"
                  />
                </span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  {location.name} <span className="text-[#FFE317]">Roofing Company</span>
                </h1>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  {location.description}
                </p>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:map-marker" className="w-5 h-5 text-[#FFE317]" />
                  <span className="text-sm font-semibold">{location.name}, TX {location.zip}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:clock" className="w-5 h-5 text-[#FFE317]" />
                  <span className="text-sm font-semibold">24/7 Emergency</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-wrap gap-3 pt-3">
                <a
                  href="tel:+15125550123"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-lg transition-all border-2 border-white/30 cursor-pointer"
                >
                  <Icon icon="mdi:phone" className="w-5 h-5" />
                  (512) 555-0123
                </a>
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
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile: Stacked */}
          <div className="lg:hidden text-center mb-6">
            <h3 className="text-lg font-bold text-[#00529C] mb-1">
              Trusted by {location.name} Homeowners
            </h3>
            <p className="text-xs text-gray-600">5-star rated on all platforms</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-16">
            
            {/* Desktop: Left Text */}
            <div className="hidden lg:block flex-shrink-0">
              <h3 className="text-xl font-bold text-[#00529C] mb-1">
                Trusted by {location.name} Homeowners
              </h3>
              <p className="text-sm text-gray-600">5-star rated service</p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
              
              {/* Google */}
              <div className="flex flex-col items-center gap-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                  alt="Google" 
                  className="h-8 md:h-10"
                />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon="mdi:star" className="w-4 h-4 md:w-5 md:h-5 text-[#FFE317]" />
                  ))}
                </div>
              </div>

              {/* Facebook */}
              <div className="flex flex-col items-center gap-2">
                <Icon icon="logos:facebook" className="w-8 h-8 md:w-10 md:h-10" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon="mdi:star" className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  ))}
                </div>
              </div>

              {/* Yelp */}
              <div className="flex flex-col items-center gap-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg" 
                  alt="Yelp" 
                  className="h-8 md:h-10"
                />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon="mdi:star" className="w-4 h-4 md:w-5 md:h-5 text-[#E0144C]" />
                  ))}
                </div>
              </div>

              {/* Thumbtack */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-lg md:text-xl font-bold text-gray-900">Thumbtack</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon="mdi:star" className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
                  ))}
                </div>
              </div>

              {/* Nextdoor */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-lg md:text-xl font-bold text-[#8BC540]">nextdoor</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon="mdi:star" className="w-4 h-4 md:w-5 md:h-5 text-[#8BC540]" />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Have you been trying to find a reliable roofer in <strong>{location.name}, TX</strong>? If you have been searching high and low for the best quality roofing company near you, then look no further than <strong>Austin Roofing Company – Roof Repair & Replacement</strong>.
            </p>
            <p>
              We offer several services to our clients, including roof inspection, roof estimate, roof repair, roof replacement, roof installation and re-roof services. We also offer storm damage roofing, hail damage roofing and wind damage roofing.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
              Our Services in {location.name}
            </h2>
            <div className="w-24 h-1 bg-[#FFE317] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-[#FFE317] group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00529C] to-[#003d75] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon icon={service.icon} className="w-7 h-7 text-[#FFE317]" />
                </div>
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

      {/* Why Choose Us Section */}
<section className="relative py-16 overflow-hidden">
  {/* Background Image with Blur */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/worker-roofing-altair.jpg" 
      alt="Roofing background"
      className="w-full h-full object-cover blur-[2px]"
    />
    {/* Dark overlay for text readability */}
    <div className="absolute inset-0 bg-black/60"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
      Why Choose Us?
    </h2>
    
    <div className="prose prose-lg max-w-none text-white leading-relaxed space-y-4 drop-shadow-md">
      <p>
        If you are a resident of <strong className="text-[#FFE317]">Texas</strong>, then odds are you're already aware of just how much damage the weather conditions can be to your home or property. This is something that we keep in mind when it comes to repairing, installing, or replacing your roof in <strong className="text-[#FFE317]">{location.name}</strong>.
      </p>
      <p>
        We have an experienced team in which we can put your mind at ease knowing you are getting the highest quality roofing that is available in your area. What's more, we even offer a <strong className="text-[#FFE317]">free estimate service</strong> so that you can get an idea of what you need before the work begins on your new roofing project.
      </p>
      <p>
        So what are you waiting for? If you are based in <strong className="text-[#FFE317]">{location.name}</strong> then do not hesitate to get in touch with our team at <strong className="text-[#FFE317]">Austin Roofing Company – Roof Repair & Replacement</strong> today. To discuss all of your roofing needs, simply give us a call to speak with one of our team members. Alternatively, if you would like further details on our services, then you can find out more about our company and arrange your free estimate over on our website.
      </p>
    </div>
  </div>
</section>
      {/* Neighborhoods Section */}
      {location.neighborhoods && location.neighborhoods.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
                Neighborhoods We Serve in {location.name}
              </h2>
              <div className="w-24 h-1 bg-[#FFE317] mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {location.neighborhoods.map((neighborhood, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-[#FFE317]">
                  <Icon icon="mdi:home-city" className="w-8 h-8 text-[#00529C] mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">{neighborhood}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#00529C] to-[#003d75]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started in {location.name}?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free roof inspection and estimate.
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
  );
}