'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import QuoteButtonModal from './QuoteButtonModal';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "How much does a new roof cost in Austin?",
    answer: "The cost of a new roof in Austin depends on several factors including roof size, materials chosen (asphalt shingles, metal, tile), pitch, complexity, and any necessary repairs. Every home is unique, which is why we offer free, no-obligation estimates. Contact us today for an accurate quote tailored to your specific home and needs."
  },
  {
    question: "How long does a roof replacement take?",
    answer: "Most residential roof replacements in Austin can be completed in 1-3 days for an average-sized home. The timeline depends on roof size, complexity, weather conditions, and the type of roofing material being installed."
  },
  {
    question: "Do you work with insurance companies?",
    answer: "Yes! We have extensive experience working with all major insurance companies for storm damage, hail damage, and wind damage claims. We can help you navigate the insurance process and ensure you receive fair compensation."
  },
  {
    question: "What type of roofing material is best for Austin's climate?",
    answer: "Austin's hot climate requires materials that can withstand intense heat and UV exposure. Popular choices include architectural asphalt shingles, metal roofing, and clay or concrete tiles. We'll help you choose the best option for your home and budget."
  },
  {
    question: "How often should I have my roof inspected?",
    answer: "We recommend professional roof inspections at least once a year, preferably in spring or fall. Additionally, schedule an inspection after severe weather events. We offer free roof inspections to help maintain your roof's integrity."
  },
  {
    question: "What are signs that I need a new roof?",
    answer: "Common signs include: missing or curling shingles, granules in gutters, daylight through roof boards, sagging areas, water stains on ceilings, roof age over 20 years, and increased energy bills. Contact us for a free inspection if you notice any of these signs."
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes! We offer a lifetime warranty on workmanship for roof replacements. Additionally, roofing materials come with manufacturer warranties ranging from 25 to 50 years depending on the product chosen."
  },
  {
    question: "Can you help with emergency roof repairs?",
    answer: "Absolutely! We offer 24/7 emergency roof repair services throughout the Austin area. Call us immediately at (512) 555-0123 for urgent situations. We typically respond within 2-4 hours for emergencies."
  }
];

export default function FAQ({ 
  faqs = defaultFAQs, 
  title = "Frequently Asked Questions", 
  subtitle = "Everything you need to know about our roofing services" 
}: FAQProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    Array.from({ length: faqs.length }, (_, i) => i)
  );

  const toggleFAQ = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {subtitle}
          </p>
          <div className="w-24 h-1 bg-[#FFE317] mx-auto mt-4"></div>
        </div>

        {/* FAQ Items - Grid 2 columnas, todas abiertas por defecto */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            
            return (
              <details key={index} open className="bg-white rounded-xl shadow-sm border-2 border-gray-200 overflow-hidden hover:border-[#00529C] transition">
                <summary 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFAQ(index);
                  }}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition cursor-pointer list-none"
                >
                  <h3 className="font-bold text-gray-900 text-lg pr-4">{faq.question}</h3>
                  <Icon 
                    icon="mdi:chevron-down" 
                    className={`w-6 h-6 text-[#00529C] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </summary>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </details>
            );
          })}
        </div>

        {/* CTA Optional */}
        <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Contact us for personalized answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15125550123"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00529C] hover:bg-[#003d75] text-white font-bold rounded-lg transition-all hover:scale-105 cursor-pointer"
            >
              <Icon icon="mdi:phone" className="w-5 h-5" />
              Call (512) 555-0123
            </a>
            <QuoteButtonModal 
  text="Contact Us"
  variant="primary"  // ✅ Correcto - amarillo con azul
/>
          </div>
        </div>
      </div>
    </section>
  );
}