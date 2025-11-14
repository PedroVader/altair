'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [roofTypesOpen, setRoofTypesOpen] = useState(false);

  const services = [
    { name: 'Roof Inspection', href: '/services/roof-inspection', icon: 'mdi:clipboard-search' },
    { name: 'Roof Estimate', href: '/services/roof-estimate', icon: 'mdi:calculator' },
    { name: 'Roof Repair', href: '/services/roof-repair', icon: 'mdi:tools' },
    { name: 'Re-Roof', href: '/services/re-roof', icon: 'mdi:autorenew' },
    { name: 'Roof Replacement', href: '/services/roof-replacement', icon: 'mdi:home-roof' },
    { name: 'Roof Installation', href: '/services/roof-installation', icon: 'mdi:hammer-wrench' },
    { name: 'Storm Damage', href: '/services/storm-damage', icon: 'mdi:weather-lightning' },
    { name: 'Hail Damage', href: '/services/hail-damage', icon: 'mdi:weather-hail' },
    { name: 'Wind Damage', href: '/services/wind-damage', icon: 'mdi:weather-windy' },
  ];

  const roofTypes = [
    { name: 'Asphalt Shingles Roof', href: '/roof-types/asphalt-shingles-roof', icon: 'mdi:layers' },
    { name: 'Fiberglass Roof Panels', href: '/roof-types/fiberglass-roof-panels', icon: 'mdi:crop-square' },
    { name: 'Clay / Concrete Roof Tiles', href: '/roof-types/clay-concrete-roof-tiles', icon: 'mdi:texture-box' },
    { name: 'Metal Roofing', href: '/roof-types/metal-roofing', icon: 'mdi:iron' },
  ];

  return (
    <header className="bg-white text-[#00529C] shadow-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-[#00529C] hover:text-[#FFD700] transition-colors cursor-pointer flex-shrink-0">
            <Icon icon="mdi:home-roof" className="w-7 h-7" />
            <span className="hidden sm:inline">Altair Austin Roofing</span>
            <span className="sm:hidden">Altair</span>
          </Link>

          {/* Desktop Navigation + CTA - Right */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-5">
              <li>
                <Link href="/" className="text-[#00529C] hover:text-[#FFD700] transition-colors font-semibold text-sm cursor-pointer">
                  HOME
                </Link>
              </li>

              {/* Services Dropdown */}
              <li 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-0.5 text-[#00529C] hover:text-[#FFD700] transition-colors font-semibold text-sm">
                  SERVICES
                  <Icon 
                    icon="mdi:chevron-down" 
                    className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <div 
                  className={`absolute top-full left-0 mt-1 w-60 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-200 border border-gray-200 ${
                    servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="py-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center gap-2.5 px-4 py-2 hover:bg-[#00529C] hover:text-white transition-colors group cursor-pointer"
                      >
                        <Icon icon={service.icon} className="w-4 h-4 text-[#00529C] group-hover:text-[#FFD700]" />
                        <span className="text-xs font-medium">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Roof Types Dropdown */}
              <li 
                className="relative"
                onMouseEnter={() => setRoofTypesOpen(true)}
                onMouseLeave={() => setRoofTypesOpen(false)}
              >
                <button className="flex items-center gap-0.5 text-[#00529C] hover:text-[#FFD700] transition-colors font-semibold text-sm">
                  ROOF TYPES
                  <Icon 
                    icon="mdi:chevron-down" 
                    className={`w-4 h-4 transition-transform ${roofTypesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <div 
                  className={`absolute top-full left-0 mt-1 w-60 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-200 border border-gray-200 ${
                    roofTypesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="py-1">
                    {roofTypes.map((type) => (
                      <Link
                        key={type.name}
                        href={type.href}
                        className="flex items-center gap-2.5 px-4 py-2 hover:bg-[#00529C] hover:text-white transition-colors group cursor-pointer"
                      >
                        <Icon icon={type.icon} className="w-4 h-4 text-[#00529C] group-hover:text-[#FFD700]" />
                        <span className="text-xs font-medium">{type.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Service Areas - Direct Link (NO DROPDOWN) */}
              <li>
                <Link href="/locations" className="text-[#00529C] hover:text-[#FFD700] transition-colors font-semibold text-sm cursor-pointer whitespace-nowrap">
                  SERVICE AREAS
                </Link>
              </li>

              <li>
                <Link href="/about" className="text-[#00529C] hover:text-[#FFD700] transition-colors font-semibold text-sm cursor-pointer">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#00529C] hover:text-[#FFD700] transition-colors font-semibold text-sm cursor-pointer">
                  CONTACT
                </Link>
              </li>
            </ul>

            {/* Phone Button */}
            <button 
              onClick={() => window.location.href = 'tel:+15125550123'}
              className="flex items-center gap-2 px-4 py-2 bg-[#FFD700] hover:bg-[#FFC700] text-[#00529C] rounded-lg transition-all hover:scale-105 cursor-pointer shadow-md flex-shrink-0"
            >
              <Icon icon="mdi:phone" className="w-4 h-4" />
              <span className="font-bold text-sm">(512) 555-0123</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#00529C] hover:text-[#FFD700] transition-colors cursor-pointer"
          >
            <Icon 
              icon={mobileMenuOpen ? "mdi:close" : "mdi:menu"} 
              className="w-6 h-6" 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="space-y-1 pt-2">
            <li>
              <Link 
                href="/" 
                className="block px-3 py-2 text-[#00529C] hover:bg-[#00529C]/10 rounded-lg transition-colors text-sm cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Mobile Services */}
            <li>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-[#00529C] hover:bg-[#00529C]/10 rounded-lg transition-colors text-sm cursor-pointer"
              >
                <span>Services</span>
                <Icon 
                  icon="mdi:chevron-down" 
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                <ul className="ml-4 mt-1 space-y-0.5">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#00529C] hover:bg-[#00529C]/10 rounded-lg transition-colors cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon icon={service.icon} className="w-3.5 h-3.5" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Mobile Roof Types */}
            <li>
              <button 
                onClick={() => setRoofTypesOpen(!roofTypesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-[#00529C] hover:bg-[#00529C]/10 rounded-lg transition-colors text-sm cursor-pointer"
              >
                <span>Roof Types</span>
                <Icon 
                  icon="mdi:chevron-down" 
                  className={`w-4 h-4 transition-transform ${roofTypesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${roofTypesOpen ? 'max-h-64' : 'max-h-0'}`}>
                <ul className="ml-4 mt-1 space-y-0.5">
                  {roofTypes.map((type) => (
                    <li key={type.name}>
                      <Link
                        href={type.href}
                        className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#00529C] hover:bg-[#00529C]/10 rounded-lg transition-colors cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon icon={type.icon} className="w-3.5 h-3.5" />
                        {type.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Mobile Service Areas - Direct Link */}
            <li>
              <Link 
                href="/locations" 
                className="block px-3 py-2 text-[#00529C] hover:bg-[#00529C]/10 rounded-lg transition-colors text-sm cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Service Areas
              </Link>
            </li>

            <li>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-[#00529C] hover:bg-[#00529C]/10 rounded-lg transition-colors text-sm cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-[#00529C] hover:bg-[#00529C]/10 rounded-lg transition-colors text-sm cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>

            {/* Mobile Phone */}
            <li className="pt-2">
              <button 
                onClick={() => window.location.href = 'tel:+15125550123'}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#FFD700] hover:bg-[#FFC700] text-[#00529C] rounded-lg transition-colors cursor-pointer"
              >
                <Icon icon="mdi:phone" className="w-4 h-4" />
                <span className="font-bold text-sm">(512) 555-0123</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}