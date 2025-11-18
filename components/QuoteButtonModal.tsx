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
    primary: "bg-[#0CEBD2] hover:bg-[#0ad4bf] text-white",
    secondary: "bg-[#232323] hover:bg-[#1a1a1a] text-white",
    white: "bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30",
    outline: "bg-transparent border-2 border-[#0CEBD2] text-[#0CEBD2] hover:bg-[#0CEBD2] hover:text-white"
  };

  return (
    <>
      <button
        onClick={openModal}
        className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-lg transition-all shadow-lg hover:shadow-xl ${variants[variant]} ${className}`}
      >
        {text}
        <Icon icon="mdi:arrow-right" className="w-5 h-5" />
      </button>

      <FormModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}