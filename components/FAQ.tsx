'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00529C] mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {subtitle}
          </p>
        </div>

        {/* FAQ Items - TODAS ABIERTAS */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <Icon
                  icon={openIndex === index ? "mdi:chevron-up" : "mdi:chevron-down"}
                  className="w-6 h-6 flex-shrink-0 text-[#00529C] transition-transform"
                />
              </button>

              {/* SIEMPRE VISIBLE - Solo se oculta si se hace click */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-0 opacity-0' : 'max-h-[1000px] opacity-100'
                }`}
              >
                <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Optional */}
        <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
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
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFD700] hover:bg-[#FFC700] text-[#00529C] font-bold rounded-lg transition-all hover:scale-105 cursor-pointer"
            >
              Contact Us
              <Icon icon="mdi:arrow-right" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}