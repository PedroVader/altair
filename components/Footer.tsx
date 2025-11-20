// components/Footer.tsx
import Link from 'next/link';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { roofTypes } from '@/data/roofTypes';
import { Icon } from '@iconify/react';

export default function Footer() {
  const halfLength = Math.ceil(locations.length / 2);
  const firstColumnLocations = locations.slice(0, halfLength);
  const secondColumnLocations = locations.slice(halfLength);
  
  return (
    <footer className="bg-white border-t-2 border-[#E2E2E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
       {/* Logo y Descripción - Centrado */}
<div className="text-center mb-8 sm:mb-12 pb-6 sm:pb-8 border-b-2 border-[#E2E2E2]">
  <Link href="/" className="inline-flex items-center justify-center mb-4 group">
    <div className="relative w-auto group-hover:scale-105 transition-transform">
      <img
        src="/logos/logo-altair.png"
        alt="Altair Austin Roofing - Austin's Premier Roofing Company"
        className="h-45 w-auto object-contain"
      />
    </div>
  </Link>
  <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-4 px-4">
    Professional roofing services across Austin and Central Texas. Trusted by thousands of satisfied homeowners since 2008.
  </p>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-8">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#232323] mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-sm sm:text-base text-gray-600 hover:text-[#FFB343] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm sm:text-base text-gray-600 hover:text-[#FFB343] transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-sm sm:text-base text-gray-600 hover:text-[#FFB343] transition">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm sm:text-base text-gray-600 hover:text-[#FFB343] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#232323] mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-sm text-gray-600 hover:text-[#FFB343] transition"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Roof Types */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#232323] mb-4 sm:mb-6">Roof Types</h3>
            <ul className="space-y-2 sm:space-y-3">
              {roofTypes.map((type) => (
                <li key={type.slug}>
                  <Link 
                    href={`/roof-types/${type.slug}`}
                    className="text-sm text-gray-600 hover:text-[#FFB343] transition"
                  >
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations - Column 1 */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#232323] mb-4 sm:mb-6">Locations</h3>
            <ul className="space-y-2 sm:space-y-3">
              {firstColumnLocations.map((location) => (
                <li key={location.slug}>
                  <Link 
                    href={`/locations/${location.slug}`}
                    className="text-sm text-gray-600 hover:text-[#FFB343] transition"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations - Column 2 */}
          <div>
            {/* Título invisible en desktop para alineación */}
            <div className="hidden lg:block">
              <h3 className="text-xl font-semibold text-[#232323] mb-6 invisible">Locations</h3>
            </div>
            <ul className="space-y-2 sm:space-y-3">
              {secondColumnLocations.map((location) => (
                <li key={location.slug}>
                  <Link 
                    href={`/locations/${location.slug}`}
                    className="text-sm text-gray-600 hover:text-[#FFB343] transition"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#232323] mb-4 sm:mb-6">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Icon icon="mdi:phone" className="w-5 h-5 text-[#FFB343] flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+15125550123" className="text-sm text-[#232323] hover:text-[#FFB343] transition font-semibold">
                    (512) 555-0123
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="mdi:email" className="w-5 h-5 text-[#FFB343] flex-shrink-0 mt-1" />
                <div>
                  <a href="mailto:info@austinroofingcompany.com" className="text-sm text-[#232323] hover:text-[#FFB343] transition">
                    info@austinroofingcompany.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="mdi:map-marker" className="w-5 h-5 text-[#FFB343] flex-shrink-0 mt-1" />
                <div>
                <div className="text-sm text-gray-600 space-y-0.5">
                <p>807 Brazos Street</p>
                <p>STE 403</p>
                <p>Austin, TX 78701</p>
              </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="mdi:clock" className="w-5 h-5 text-[#FFB343] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-600">
                    Mon - Sun<br />
                    24/7 Emergency Service
                  </p>
                </div>
              </li>
            </ul>

            {/* Google Map Preview */}
<div className="mt-6 rounded-lg overflow-hidden border-2 border-[#E2E2E2] hover:border-[#FFB343] transition">
  <a 
    href="https://www.google.com/maps/dir//807+Brazos+Street+STE+403+Austin+TX+78701" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
    <iframe
      src="https://www.google.com/maps?q=807+Brazos+Street+STE+403+Austin+TX+78701&output=embed"
      width="100%"
      height="200"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Altair Austin Roofing - 807 Brazos St, Austin TX 78701"
    />
  </a>
</div>
          </div>

        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2 border-[#E2E2E2]">
          <a 
            href="https://facebook.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#F6F6F6] hover:bg-[#FFB343] text-[#232323] hover:text-[#232323] rounded-lg flex items-center justify-center transition"
            aria-label="Facebook"
          >
            <Icon icon="mdi:facebook" className="w-5 h-5" />
          </a>
          <a 
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#F6F6F6] hover:bg-[#FFB343] text-[#232323] hover:text-[#232323] rounded-lg flex items-center justify-center transition"
            aria-label="Instagram"
          >
            <Icon icon="mdi:instagram" className="w-5 h-5" />
          </a>
          <a 
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#F6F6F6] hover:bg-[#FFB343] text-[#232323] hover:text-[#232323] rounded-lg flex items-center justify-center transition"
            aria-label="Google"
          >
            <Icon icon="mdi:google" className="w-5 h-5" />
          </a>
          <a 
            href="https://yelp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#F6F6F6] hover:bg-[#FFB343] text-[#232323] hover:text-[#232323] rounded-lg flex items-center justify-center transition"
            aria-label="Yelp"
          >
            <Icon icon="simple-icons:yelp" className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom Bar - Con enlaces legales */}
<div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t-2 border-[#E2E2E2]">
  <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
    <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
      © {new Date().getFullYear()} Altair Austin Roofing. All rights reserved.
    </p>
    
    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
      <Link 
        href="/privacy-policy" 
        className="text-gray-500 hover:text-[#FFB343] transition-colors"
      >
        Privacy Policy
      </Link>
    </div>
  </div>
</div>
      </div>
    </footer>
  );
}