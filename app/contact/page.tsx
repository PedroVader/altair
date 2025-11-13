// app/contact/page.tsx
import { Metadata } from 'next';
import { Icon } from '@iconify/react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Altair Austin Roofing - Get Free Estimate',
  description: 'Contact Altair Austin Roofing for a free roof inspection and estimate. Call (512) 555-0123 or fill out our form. Available 24/7 for emergency roofing services in Austin, TX.',
  keywords: 'contact Austin roofer, free roof estimate Austin, roofing quote Austin, emergency roof repair',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00529C] to-[#003d75] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Altair Austin Roofing
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get your free roof inspection and estimate today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#00529C] mb-8">
                Get In Touch
              </h2>

              {/* Contact Methods */}
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00529C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:phone" className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+15125550123" className="text-lg text-[#00529C] hover:text-[#FFD700] transition-colors">
                      (512) 555-0123
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00529C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:email" className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@altairaustin.com" className="text-lg text-[#00529C] hover:text-[#FFD700] transition-colors">
                      info@altairaustin.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00529C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:map-marker" className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Service Area</h3>
                    <p className="text-gray-700">
                      Austin, TX 78701<br />
                      Serving Greater Austin Area
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00529C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:clock" className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 7:00 AM - 7:00 PM<br />
                      Saturday: 8:00 AM - 5:00 PM<br />
                      Sunday: Emergency Service Only<br />
                      <span className="text-[#E0144C] font-semibold">24/7 Emergency Available</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon icon="mdi:map-marker-radius" className="w-5 h-5 text-[#00529C]" />
                  Areas We Serve
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>• Austin</div>
                  <div>• Round Rock</div>
                  <div>• Cedar Park</div>
                  <div>• Georgetown</div>
                  <div>• Lakeway</div>
                  <div>• Buda</div>
                  <div>• Pflugerville</div>
                  <div>• Leander</div>
                  <div>• Kyle</div>
                  <div>• Dripping Springs</div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#00529C] mb-6">
                  Request Your Free Estimate
                </h2>
                <ContactForm 
                  variant="fullpage"
                  title="Fill out the form below"
                  showPhone={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#00529C] mb-4">
              Find Us in Austin
            </h2>
            <p className="text-gray-600">
              Proudly serving the Greater Austin area
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441113.09114674534!2d-98.0357904!3d30.307182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Austin, TX Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#00529C] mb-8">
            Common Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition-colors">
              <summary className="font-bold text-gray-900 cursor-pointer">
                How quickly can you respond to an emergency?
              </summary>
              <p className="mt-3 text-gray-700">
                We offer 24/7 emergency service and can typically arrive within 2-4 hours for urgent situations like storm damage or active leaks.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition-colors">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Do you offer free estimates?
              </summary>
              <p className="mt-3 text-gray-700">
                Yes! We provide free, no-obligation roof inspections and estimates for all services. There's no pressure to commit.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition-colors">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Do you work with insurance companies?
              </summary>
              <p className="mt-3 text-gray-700">
                Absolutely. We have extensive experience working with insurance companies and can help you navigate the claims process for storm or hail damage.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition-colors">
              <summary className="font-bold text-gray-900 cursor-pointer">
                What areas do you serve?
              </summary>
              <p className="mt-3 text-gray-700">
                We serve all of Greater Austin including Austin, Round Rock, Cedar Park, Georgetown, Lakeway, Buda, Pflugerville, Leander, Kyle, and Dripping Springs.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-[#00529C] to-[#003d75] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Call us now or schedule your free inspection online
          </p>
          <a
            href="tel:+15125550123"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFD700] hover:bg-[#FFC700] text-[#00529C] font-bold rounded-lg transition-all hover:scale-105 shadow-xl cursor-pointer"
          >
            <Icon icon="mdi:phone" className="w-5 h-5" />
            Call (512) 555-0123 Now
          </a>
        </div>
      </section>
    </main>
  );
}