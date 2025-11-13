// app/about/page.tsx
import { Metadata } from 'next';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Altair Austin Roofing - Professional Roofing Contractors',
  description: 'Learn about Altair Austin Roofing. Over 15 years of experience providing quality residential roofing services in Austin and surrounding areas. Licensed, insured, and trusted by hundreds of homeowners.',
  keywords: 'about Altair roofing, Austin roofing company, residential roofing contractors, licensed roofers Austin',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/worker-repairing-roof-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00529C]/90 to-[#003d75]/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About Altair Austin Roofing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Your trusted roofing partner in Austin, Texas since 2008
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#00529C] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2008, Altair Austin Roofing has been serving the Greater Austin area with dedication and excellence for over 15 years. What started as a small family business has grown into one of the most trusted roofing companies in Central Texas.
                </p>
                <p>
                  Our commitment to quality workmanship, honest pricing, and exceptional customer service has earned us hundreds of five-star reviews and the trust of homeowners throughout Austin, Round Rock, Cedar Park, Georgetown, and beyond.
                </p>
                <p>
                  We understand that your roof is one of the most important investments in your home. That's why we treat every project with the same care and attention we would give to our own homes.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
                alt="Altair Austin Roofing Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#00529C] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070"
                  alt="Integrity - Professional roofing standards"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  We believe in honest assessments, transparent pricing, and doing what's right for our customers, even when no one is watching.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
                  alt="Quality - Premium roofing materials"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quality
                </h3>
                <p className="text-gray-600">
                  We use only premium materials and proven installation techniques to ensure your roof stands the test of time.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074"
                  alt="Customer Care - Dedicated roofing team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Customer Care
                </h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We're available 24/7 for emergencies and always put your needs first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#00529C] mb-4">
              Why Choose Altair Austin Roofing?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm">Fully certified and insured for your protection and peace of mind.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">15+ Years Experience</h3>
                <p className="text-gray-600 text-sm">Over a decade of proven expertise in residential roofing.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Lifetime Warranties</h3>
                <p className="text-gray-600 text-sm">Industry-leading warranties on workmanship and materials.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">24/7 Emergency Service</h3>
                <p className="text-gray-600 text-sm">Available around the clock for urgent roofing needs.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Free Inspections</h3>
                <p className="text-gray-600 text-sm">Comprehensive roof assessments at no cost to you.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Icon icon="mdi:check-circle" className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Local Experts</h3>
                <p className="text-gray-600 text-sm">We understand Texas weather and local building codes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get your free roof inspection and estimate today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15125550123"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFD700] hover:bg-[#FFC700] text-[#00529C] font-bold rounded-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              <Icon icon="mdi:phone" className="w-5 h-5" />
              Call (512) 555-0123
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00529C] hover:bg-[#003d75] text-white font-bold rounded-lg transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              Get Free Estimate
              <Icon icon="mdi:arrow-right" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}