// app/about/page.tsx
import { Metadata } from 'next';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import TrustBadgesMinimal from '@/components/TrustBadgesMinimal';

export const metadata: Metadata = {
  title: 'About Us | Altair Austin Roofing - Professional Roofing Contractors',
  description: 'Learn about Altair Austin Roofing. Over 15 years of experience providing quality residential roofing services in Austin and surrounding areas. Licensed, insured, and trusted by hundreds of homeowners.',
  keywords: 'about Altair roofing, Austin roofing company, residential roofing contractors, licensed roofers Austin',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/worker-repairing-roof.jpg"
            alt="Altair Austin Roofing Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <Icon icon="mdi:shield-check" className="w-5 h-5 text-[#FFE317]" />
              <span className="text-white font-medium text-sm">Licensed & Insured Since 2008</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Austin's Most Trusted Roofing Company
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Over 15 years of excellence in residential roofing. Protecting homes and families throughout Central Texas with quality craftsmanship and unmatched customer service.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+15125550123"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFE317] hover:bg-[#ffd700] text-[#00529C] font-bold rounded-xl transition-all hover:scale-105 shadow-xl"
              >
                <Icon icon="mdi:phone" className="w-5 h-5" />
                Call (512) 555-0123
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold rounded-xl transition-all border-2 border-white/30"
              >
                Get Free Estimate
                <Icon icon="mdi:arrow-right" className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadgesMinimal />

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Founded in 2008, <strong>Altair Austin Roofing</strong> has been serving the Greater Austin area with dedication and excellence for over 15 years. What started as a small family business has grown into one of the most trusted roofing companies in Central Texas.
                </p>
                <p>
                  Our commitment to <strong>quality workmanship</strong>, honest pricing, and exceptional customer service has earned us hundreds of five-star reviews and the trust of homeowners throughout Austin, Round Rock, Cedar Park, Georgetown, and beyond.
                </p>
                <p>
                  We understand that your roof is one of the most important investments in your home. That's why we treat every project with the same care and attention we would give to our own homes.
                </p>
              </div>

              {/* Mission Statement Box */}
              <div className="mt-8 bg-gray-50 border-l-4 border-[#FFE317] p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-700 italic">
                  "To protect Austin families by providing the highest quality roofing services with integrity, expertise, and a commitment to excellence that stands the test of time."
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
                  alt="Altair Austin Roofing Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-2 border-[#FFE317]">
  <div className="flex items-center gap-4">
    <div>
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Icon key={i} icon="mdi:star" className="w-5 h-5 text-[#FFE317]" />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
          alt="Google"
          className="h-5"
        />
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
            <div className="w-24 h-1 bg-[#FFE317] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070"
                  alt="Integrity"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Integrity
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in honest assessments, transparent pricing, and doing what's right for our customers, even when no one is watching.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
                  alt="Quality"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quality
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We use only premium materials and proven installation techniques to ensure your roof stands the test of time.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074"
                  alt="Customer Care"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Customer Care
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
              Why Choose Altair Austin Roofing?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The advantages of partnering with Central Texas's premier roofing company
            </p>
            <div className="w-24 h-1 bg-[#FFE317] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'mdi:certificate',
                title: 'Licensed & Insured',
                description: 'Fully certified and insured for your protection and peace of mind.'
              },
              {
                icon: 'mdi:clock-fast',
                title: '15+ Years Experience',
                description: 'Over a decade of proven expertise in residential roofing.'
              },
              {
                icon: 'mdi:shield-star',
                title: 'Lifetime Warranties',
                description: 'Industry-leading warranties on workmanship and materials.'
              },
              {
                icon: 'mdi:phone-alert',
                title: '24/7 Emergency Service',
                description: 'Available around the clock for urgent roofing needs.'
              },
              {
                icon: 'mdi:clipboard-check',
                title: 'Free Inspections',
                description: 'Comprehensive roof assessments at no cost to you.'
              },
              {
                icon: 'mdi:map-marker',
                title: 'Local Experts',
                description: 'We understand Texas weather and local building codes.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00529C] to-[#003d75] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon icon={item.icon} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to protecting your home
            </p>
            <div className="w-24 h-1 bg-[#FFE317] mx-auto mt-4"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Expert Craftsmen, Exceptional Service
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our team consists of highly trained, licensed professionals who take pride in every project. Each crew member undergoes rigorous training and continues education to stay current with the latest roofing techniques and materials.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  When you choose Altair Austin Roofing, you're getting a team that treats your home with the respect it deserves and delivers results that exceed expectations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                    <Icon icon="mdi:account-group" className="w-5 h-5 text-[#00529C]" />
                    <span className="text-sm font-semibold text-gray-700">50+ Team Members</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                    <Icon icon="mdi:school" className="w-5 h-5 text-[#00529C]" />
                    <span className="text-sm font-semibold text-gray-700">Certified Experts</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
                  alt="Altair Roofing Team at Work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-[#00529C] to-[#003d75]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Austin's Best?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your free roof inspection and estimate today. Experience the Altair difference.
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
              Get Free Estimate
              <Icon icon="mdi:arrow-right" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}