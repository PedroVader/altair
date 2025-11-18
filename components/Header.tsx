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
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-[#F6F6F6]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 bg-[#232323] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon icon="mdi:home-roof" className="w-6 h-6 text-[#0CEBD2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-[#232323] group-hover:text-[#0CEBD2] transition-colors leading-tight hidden sm:block">
                Altair Austin Roofing
              </span>
              <span className="font-display text-xl font-bold text-[#232323] group-hover:text-[#0CEBD2] transition-colors sm:hidden">
                Altair
              </span>
              <span className="text-xs text-gray-600 font-medium tracking-wide hidden sm:block">
                Austin's Premier Roofing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation + CTA - Right */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              <li>
                <Link href="/" className="text-[#232323] hover:text-[#0CEBD2] transition-colors font-semibold text-sm cursor-pointer relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0CEBD2] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>

              {/* Services Dropdown */}
              <li 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-[#232323] hover:text-[#0CEBD2] transition-colors font-semibold text-sm group">
                  Services
                  <Icon 
                    icon="mdi:chevron-down" 
                    className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0CEBD2] group-hover:w-full transition-all duration-300"></span>
                </button>

                <div 
                  className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-200 border-2 border-[#F6F6F6] ${
                    servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[#9AF4E5]/20 hover:text-[#232323] transition-all group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#F6F6F6] flex items-center justify-center group-hover:bg-[#0CEBD2] transition-colors">
                          <Icon icon={service.icon} className="w-4 h-4 text-[#232323]" />
                        </div>
                        <span className="text-sm font-medium text-gray-600 group-hover:text-[#232323]">{service.name}</span>
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
                <button className="flex items-center gap-1 text-[#232323] hover:text-[#0CEBD2] transition-colors font-semibold text-sm group">
                  Roof Types
                  <Icon 
                    icon="mdi:chevron-down" 
                    className={`w-4 h-4 transition-transform ${roofTypesOpen ? 'rotate-180' : ''}`}
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0CEBD2] group-hover:w-full transition-all duration-300"></span>
                </button>

                <div 
                  className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-200 border-2 border-[#F6F6F6] ${
                    roofTypesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="py-2">
                    {roofTypes.map((type) => (
                      <Link
                        key={type.name}
                        href={type.href}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[#9AF4E5]/20 hover:text-[#232323] transition-all group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#F6F6F6] flex items-center justify-center group-hover:bg-[#0CEBD2] transition-colors">
                          <Icon icon={type.icon} className="w-4 h-4 text-[#232323]" />
                        </div>
                        <span className="text-sm font-medium text-gray-600 group-hover:text-[#232323]">{type.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Service Areas */}
              <li>
                <Link href="/locations" className="text-[#232323] hover:text-[#0CEBD2] transition-colors font-semibold text-sm cursor-pointer whitespace-nowrap relative group">
                  Service Areas
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0CEBD2] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>

              <li>
                <Link href="/about" className="text-[#232323] hover:text-[#0CEBD2] transition-colors font-semibold text-sm cursor-pointer relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0CEBD2] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#232323] hover:text-[#0CEBD2] transition-colors font-semibold text-sm cursor-pointer relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0CEBD2] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>

            {/* Phone Button */}
            <button 
              onClick={() => window.location.href = 'tel:+15125550123'}
              className="flex items-center gap-2 px-6 py-3 bg-[#0CEBD2] hover:bg-[#0ad4bf] text-[#232323] rounded-lg transition-all hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl font-bold text-sm flex-shrink-0"
            >
              <Icon icon="mdi:phone" className="w-5 h-5" />
              <span>(512) 555-0123</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#232323] hover:text-[#0CEBD2] transition-colors cursor-pointer"
          >
            <Icon 
              icon={mobileMenuOpen ? "mdi:close" : "mdi:menu"} 
              className="w-7 h-7" 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-[700px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="space-y-2 pt-4">
            <li>
              <Link 
                href="/" 
                className="block px-4 py-3 text-[#232323] hover:bg-[#9AF4E5]/20 hover:text-[#232323] rounded-xl transition-all text-base font-semibold cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Mobile Services */}
            <li>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-[#232323] hover:bg-[#F6F6F6] rounded-xl transition-colors text-base font-semibold cursor-pointer"
              >
                <span>Services</span>
                <Icon 
                  icon="mdi:chevron-down" 
                  className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                <ul className="ml-4 mt-2 space-y-1">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-[#F6F6F6] rounded-lg transition-colors cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon icon={service.icon} className="w-4 h-4 text-[#0CEBD2]" />
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
                className="w-full flex items-center justify-between px-4 py-3 text-[#232323] hover:bg-[#F6F6F6] rounded-xl transition-colors text-base font-semibold cursor-pointer"
              >
                <span>Roof Types</span>
                <Icon 
                  icon="mdi:chevron-down" 
                  className={`w-5 h-5 transition-transform ${roofTypesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${roofTypesOpen ? 'max-h-64' : 'max-h-0'}`}>
                <ul className="ml-4 mt-2 space-y-1">
                  {roofTypes.map((type) => (
                    <li key={type.name}>
                      <Link
                        href={type.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-[#F6F6F6] rounded-lg transition-colors cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon icon={type.icon} className="w-4 h-4 text-[#0CEBD2]" />
                        {type.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Mobile Service Areas */}
            <li>
              <Link 
                href="/locations" 
                className="block px-4 py-3 text-[#232323] hover:bg-[#F6F6F6] rounded-xl transition-colors text-base font-semibold cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Service Areas
              </Link>
            </li>

            <li>
              <Link 
                href="/about" 
                className="block px-4 py-3 text-[#232323] hover:bg-[#F6F6F6] rounded-xl transition-colors text-base font-semibold cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-[#232323] hover:bg-[#F6F6F6] rounded-xl transition-colors text-base font-semibold cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>

            {/* Mobile Phone */}
            <li className="pt-4">
              <button 
                onClick={() => window.location.href = 'tel:+15125550123'}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#0CEBD2] hover:bg-[#0ad4bf] text-[#232323] rounded-xl transition-all shadow-lg font-bold text-base cursor-pointer"
              >
                <Icon icon="mdi:phone" className="w-5 h-5" />
                <span>(512) 555-0123</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}