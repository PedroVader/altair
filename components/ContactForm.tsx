"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";

interface ContactFormProps {
  variant?: "hero" | "sidebar" | "fullpage" | "modal";
  title?: string;
  subtitle?: string;
  showPhone?: boolean;
  buttonText?: string;
  buttonColor?: "primary" | "secondary" | "accent";
  onSubmit?: (data: FormData) => Promise<void>;
  onSuccess?: () => void; // 👈 NUEVO
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message?: string;
}

const ContactForm = ({
  variant = "hero",
  title = "Get a Quote Today",
  showPhone = false,
  buttonText = "Get a Quote",
  buttonColor = "accent",
  onSubmit,
  onSuccess // 👈 NUEVO
}: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "Roof Repair",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Estilos según variante - MEJORADO PARA MOBILE
  const containerStyles = {
    hero: "bg-white rounded-xl shadow-xl p-4 sm:p-6 w-full max-w-md",
    sidebar: "bg-white rounded-xl shadow-lg p-4 sm:p-5 w-full",
    fullpage: "bg-white rounded-xl shadow-xl p-6 sm:p-8 w-full max-w-2xl mx-auto",
    modal: "bg-white"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        console.log("Form submitted:", formData);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      setSubmitStatus("success");
      setFormData({ 
        name: "", 
        phone: "", 
        email: "", 
        service: "Roof Repair",
        message: "" 
      });

      // 👇 NUEVO: Llamar onSuccess después de mostrar el mensaje de éxito
      setTimeout(() => {
        if (onSuccess) {
          onSuccess();
        }
        setSubmitStatus("idle");
      }, 2000);

    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // 👇 MODIFICADO: Solo reset si hay error
      if (submitStatus === "error") {
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    }
  };

  return (
    <div className={containerStyles[variant]}>
      {/* Header - OPTIMIZADO */}
      <div className="mb-4 sm:mb-5 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#00529C] rounded-full mb-2 sm:mb-3 mt-4">
          <Icon icon="mdi:clipboard-text" className="w-6 h-6 sm:w-7 sm:h-7 text-[#fffff]" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-[#00529C] mb-1 sm:mb-1.5">
          {title}
        </h3>
      </div>

      {/* Form - ESPACIADO MOBILE */}
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3">
        {/* Name */}
        <div>
          <Label htmlFor="name" className="text-gray-700 font-semibold text-xs mb-1.5 flex items-center gap-1.5">
            <Icon icon="mdi:account" className="w-3.5 h-3.5 text-gray-500" />
            Full Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="John Doe"
            required
            className="border border-gray-300 focus:border-[#00529C] focus:ring-1 focus:ring-[#00529C] rounded-md py-2.5 sm:py-2 text-sm transition-all text-gray-900"
          />
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone" className="text-gray-700 font-semibold text-xs mb-1.5 flex items-center gap-1.5">
            <Icon icon="mdi:phone" className="w-3.5 h-3.5 text-gray-500" />
            Phone Number *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="(512) 555-0123"
            required
            className="border border-gray-300 focus:border-[#00529C] focus:ring-1 focus:ring-[#00529C] rounded-md py-2.5 sm:py-2 text-sm transition-all text-gray-900"
          />
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-gray-700 font-semibold text-xs mb-1.5 flex items-center gap-1.5">
            <Icon icon="mdi:email" className="w-3.5 h-3.5 text-gray-500" />
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john@example.com"
            required
            className="border border-gray-300 focus:border-[#00529C] focus:ring-1 focus:ring-[#00529C] rounded-md py-2.5 sm:py-2 text-sm transition-all text-gray-900"
          />
        </div>

        {/* Service */}
        <div>
          <Label htmlFor="service" className="text-gray-700 font-semibold text-xs mb-1.5 flex items-center gap-1.5">
            <Icon icon="mdi:tools" className="w-3.5 h-3.5 text-gray-500" />
            Service Needed *
          </Label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00529C] focus:border-[#00529C] appearance-none bg-white text-gray-900 text-sm transition-all cursor-pointer"
            >
              <option value="Roof Repair">Roof Repair</option>
              <option value="Roof Replacement">Roof Replacement</option>
              <option value="Roof Inspection">Roof Inspection</option>
              <option value="Re-Roof">Re-Roof</option>
              <option value="Emergency Service">Emergency Service</option>
              <option value="Storm Damage">Storm Damage</option>
              <option value="Hail Damage">Hail Damage</option>
              <option value="Wind Damage">Wind Damage</option>
              <option value="Other">Other</option>
            </select>
            <Icon 
              icon="mdi:chevron-down" 
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* Message - Solo en variantes fullpage y modal */}
        {(variant === "fullpage" || variant === "modal") && (
          <div>
            <Label htmlFor="message" className="text-gray-700 font-semibold text-xs mb-1.5 flex items-center gap-1.5">
              <Icon icon="mdi:message-text" className="w-3.5 h-3.5 text-gray-500" />
              Additional Details (Optional)
            </Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us more about your roofing needs..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00529C] focus:border-[#00529C] resize-none text-sm transition-all text-gray-900"
            />
          </div>
        )}

        {/* Submit Button - MOBILE OPTIMIZADO */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#FFE317] hover:bg-[#ffd700] text-[#00529C] font-bold py-3 sm:py-3 text-sm sm:text-base cursor-pointer transition-all disabled:opacity-50 rounded-md flex items-center justify-center gap-2 mt-4 shadow-md hover:shadow-lg"
        >
          {isSubmitting ? (
            <>
              <Icon icon="mdi:loading" className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              <span className="text-sm sm:text-base">Submitting...</span>
            </>
          ) : (
            <>
              <span className="text-sm sm:text-base">{buttonText}</span>
              <Icon icon="mdi:arrow-right" className="w-4 h-4 sm:w-5 sm:h-5" />
            </>
          )}
        </Button>

        {/* Status Messages - MOBILE */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-400 rounded-lg p-3">
            <div className="flex items-center gap-2 justify-center">
              <Icon icon="mdi:check-circle" className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
              <p className="text-green-800 text-xs sm:text-sm font-semibold">
                Thank you! We'll contact you soon.
              </p>
            </div>
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-400 rounded-lg p-3">
            <div className="flex items-center gap-2 justify-center">
              <Icon icon="mdi:alert-circle" className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
              <p className="text-red-800 text-xs sm:text-sm font-semibold">
                Something went wrong. Please try again.
              </p>
            </div>
          </div>
        )}
      </form>

      {/* Phone CTA - MOBILE OPTIMIZADO */}
      {showPhone && (
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-500 mb-2">
              Prefer to talk? Call us now
            </p>
            <a 
              href="tel:+15125550123" 
              className="inline-flex items-center gap-2 text-[#00529C] font-bold text-base sm:text-lg hover:text-[#003d75] transition-colors cursor-pointer"
            >
              <Icon icon="mdi:phone" className="w-4 h-4 sm:w-5 sm:h-5" />
              (512) 555-0123
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;