'use client';

import { Icon } from '@iconify/react';
import { useFormModal } from '@/hooks/useFormModal';
import FormModal from '@/components/FormModal';

interface QuoteButtonModalProps {
  text?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'white' | 'outline';
}

export default function QuoteButtonModal({ 
  text = "Get a Quote",
  className = "",
  variant = 'primary'
}: QuoteButtonModalProps) {
  const { isOpen, openModal, closeModal } = useFormModal();

  const variants = {
    primary: "bg-[#FFE317] hover:bg-[#ffd700] text-[#00529C]",
    secondary: "bg-white hover:bg-gray-100 text-[#00529C]",
    white: "bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30",
    outline: "bg-transparent border-2 border-[#00529C] text-[#00529C] hover:bg-[#00529C] hover:text-white"
  };

  return (
    <>
      <button
        onClick={openModal}
        className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-xl transition-all hover:scale-105 shadow-lg ${variants[variant]} ${className}`}
      >
        {text}
        <Icon icon="mdi:arrow-right" className="w-5 h-5" />
      </button>

      <FormModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}