'use client';

import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

export default function StickyStormButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Sticky Button - Más pequeño con botón X visible */}
      {isButtonVisible && (
        <div className="fixed bottom-6 left-6 z-50 flex items-start gap-2">
          {/* Botón de cerrar */}
          <button
            onClick={() => setIsButtonVisible(false)}
            className="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-110 border border-gray-300"
            aria-label="Close emergency button"
            title="Close"
          >
            <Icon icon="mdi:close" className="w-4 h-4" />
          </button>

          {/* Botón principal - ROJO (mantiene el estilo de emergencia) */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-2 bg-gradient-to-r from-[#E0144C] to-[#c01141] hover:from-[#c01141] hover:to-[#a01038] text-white px-4 py-2.5 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-pulse-subtle"
          >
            <div className="relative">
              <Icon 
                icon="mdi:weather-lightning" 
                className="w-5 h-5" 
              />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#FFB343] rounded-full animate-ping"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xs font-bold leading-tight">Emergency Storm Damage?</div>
              <div className="text-[10px] opacity-90">24/7 Service Available</div>
            </div>
            <Icon 
              icon="mdi:arrow-right" 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
            />
          </button>

          {/* Botón de llamada móvil - NARANJA */}
          <a
            href="tel:+15125550123"
            className="sm:hidden fixed bottom-20 left-6 flex items-center gap-2 bg-[#FFB343] hover:bg-[#FFA520] text-[#232323] px-3 py-2 rounded-full shadow-lg transition-all hover:scale-105 text-xs font-bold"
          >
            <Icon icon="mdi:phone" className="w-4 h-4" />
            <span>Call</span>
          </a>
        </div>
      )}

      {/* Modal con Formulario */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop con Blur */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-modal-appear">
            {/* Header - ROJO (mantiene emergencia) */}
            <div className="sticky top-0 z-20 bg-gradient-to-r from-[#E0144C] to-[#c01141] text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon icon="mdi:weather-lightning" className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-bold">Emergency Storm Damage</h3>
                  <p className="text-sm opacity-90">Get immediate assistance - 24/7 available</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <Icon icon="mdi:close" className="w-6 h-6" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {/* Alert Box */}
              <div className="mb-6">
                <div className="flex items-start gap-3 p-4 bg-red-50 border-l-4 border-[#E0144C] rounded-lg">
                  <Icon icon="mdi:alert-circle" className="w-6 h-6 text-[#E0144C] flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-1">Storm damage requires immediate attention!</p>
                    <p>Fill out the form below and our emergency response team will contact you within 30 minutes.</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm variant="modal" />

              {/* Call Button - NARANJA */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-600 mb-4">
                  Need immediate assistance? Call us now:
                </p>
                <a
                  href="tel:+15125550123"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#FFB343] hover:bg-[#FFA520] text-[#232323] font-bold rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  <Icon icon="mdi:phone" className="w-5 h-5" />
                  (512) 555-0123
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}