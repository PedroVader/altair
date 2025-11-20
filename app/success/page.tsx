import { Icon } from '@iconify/react';
import Link from 'next/link';

export const metadata = {
  title: 'Thank You - Altair Austin Roofing',
  description: 'Thank you for contacting Altair Austin Roofing. We will get back to you soon.',
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gray-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 max-w-lg w-full text-center">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <Icon icon="mdi:check-circle" className="w-12 h-12 text-green-600" />
          </div>
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-2">
          We've received your request and will contact you shortly.
        </p>
        <p className="text-gray-500 text-sm mb-6 sm:mb-8">
          Our team typically responds within 24 hours.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 sm:mb-0">
          <Link 
            href="/" 
            className="inline-block bg-[#FFB343] hover:bg-[#FFA520] text-[#232323] font-bold py-3 px-6 rounded-xl transition shadow-lg active:scale-95"
          >
            Back to Home
          </Link>
        </div>
        
        {/* Contact Info */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Need immediate assistance?</p>
          <a 
            href="tel:+15125550123" 
            className="text-[#FFB343] hover:text-[#FFA520] font-semibold text-base sm:text-lg transition inline-flex items-center gap-2 justify-center"
          >
            <Icon icon="mdi:phone" className="w-5 h-5" />
            (512) 555-0123
          </a>
        </div>
      </div>
    </div>
  );
}