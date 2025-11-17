'use client';

import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import ContactForm from './ContactForm';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal - CON MAX-HEIGHT Y SCROLL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - FIXED */}
          <button
            onClick={onClose}
            className="sticky top-2 right-2 ml-auto z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors float-right mr-2"
            aria-label="Close modal"
          >
            <Icon icon="mdi:close" className="w-5 h-5 text-gray-600" />
          </button>
          {/* Form - SIN HEADER DUPLICADO */}
          <div className="px-6 pb-6">
            <ContactForm 
              variant="modal" 
              showPhone={false}
              onSuccess={onClose}
            />
          </div>
        </div>
      </div>
    </>
  );
}