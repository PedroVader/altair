'use client';

interface ContactFormProps {
  variant?: 'hero' | 'sidebar' | 'fullpage' | 'modal';
  service?: string;
  location?: string;
  buttonText?: string;
  showPhone?: boolean;
}

export default function ContactForm({ 
  variant = 'hero',
  service = '', 
  location = '',
  buttonText = 'Get a Quote',
  showPhone = false
}: ContactFormProps) {
  // Construir la URL con parámetros
  const params = new URLSearchParams();
  if (service) params.append('service', service);
  if (location) params.append('location', location);
  if (buttonText) params.append('buttonText', buttonText);
  if (showPhone) params.append('showPhone', 'true');
  
  // Mostrar mensaje en fullpage y modal
  if (variant === 'fullpage' || variant === 'modal') {
    params.append('showMessage', 'true');
  }
  
  const queryString = params.toString();
  const iframeSrc = queryString ? `/contact-form.html?${queryString}` : '/contact.html';

  // Altura según variante
  const heights = {
    hero: '580px',
    sidebar: '580px',
    fullpage: '680px',
    modal: '650px'
  };

  // Estilos del contenedor según variante
  const containerStyles = {
    hero: "bg-white rounded-2xl shadow-2xl w-full max-w-md border-2 border-[#F6F6F6]",
    sidebar: "bg-white rounded-2xl shadow-xl w-full border-2 border-[#F6F6F6]",
    fullpage: "bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-auto border-2 border-[#F6F6F6]",
    modal: "bg-white rounded-2xl w-full"
  };

  return (
    <div className={containerStyles[variant]}>
      <iframe
        src={iframeSrc}
        className="w-full border-0 rounded-2xl"
        style={{ height: heights[variant] }}
        title="Contact Form"
      />
    </div>
  );
}