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
  onSuccess?: () => void;
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
  onSuccess
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

  // Estilos según variante - COMPACTO
  const containerStyles = {
    hero: "bg-white rounded-2xl shadow-2xl p-5 w-full max-w-md border-2 border-gray-100",
    sidebar: "bg-white rounded-2xl shadow-xl p-4 w-full border-2 border-gray-100",
    fullpage: "bg-white rounded-2xl shadow-2xl p-6 w-full max-w-2xl mx-auto border-2 border-gray-100",
    modal: "bg-white rounded-2xl p-5"
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
      if (submitStatus === "error") {
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    }
  };

  return (
    <div className={containerStyles[variant]}>
      {/* Header - COMPACTO */}
      <div className="mb-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#001F3F] to-[#003d75] rounded-xl mb-2 shadow-lg">
          <Icon icon="mdi:clipboard-text" className="w-6 h-6 text-[#D4AF37]" />
        </div>
        <h3 className="font-display text-lg font-bold text-[#001F3F]">
          {title}
        </h3>
      </div>

      {/* Form - COMPACTO */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name */}
        <div>
          <Label htmlFor="name" className="text-[#001F3F] font-semibold text-xs mb-1 flex items-center gap-1.5">
            <Icon icon="mdi:account" className="w-3.5 h-3.5 text-[#D4AF37]" />
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
            className="border-2 border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 rounded-lg py-2 text-sm transition-all text-gray-900 placeholder:text-gray-400 h-10"
          />
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone" className="text-[#001F3F] font-semibold text-xs mb-1 flex items-center gap-1.5">
            <Icon icon="mdi:phone" className="w-3.5 h-3.5 text-[#D4AF37]" />
            Phone *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="(512) 555-0123"
            required
            className="border-2 border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 rounded-lg py-2 text-sm transition-all text-gray-900 placeholder:text-gray-400 h-10"
          />
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-[#001F3F] font-semibold text-xs mb-1 flex items-center gap-1.5">
            <Icon icon="mdi:email" className="w-3.5 h-3.5 text-[#D4AF37]" />
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john@example.com"
            required
            className="border-2 border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 rounded-lg py-2 text-sm transition-all text-gray-900 placeholder:text-gray-400 h-10"
          />
        </div>

        {/* Service */}
        <div>
          <Label htmlFor="service" className="text-[#001F3F] font-semibold text-xs mb-1 flex items-center gap-1.5">
            <Icon icon="mdi:tools" className="w-3.5 h-3.5 text-[#D4AF37]" />
            Service *
          </Label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] appearance-none bg-white text-gray-900 text-sm transition-all cursor-pointer h-10"
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
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37] pointer-events-none"
            />
          </div>
        </div>

        {/* Message - Solo en variantes fullpage y modal */}
        {(variant === "fullpage" || variant === "modal") && (
          <div>
            <Label htmlFor="message" className="text-[#001F3F] font-semibold text-xs mb-1 flex items-center gap-1.5">
              <Icon icon="mdi:message-text" className="w-3.5 h-3.5 text-[#D4AF37]" />
              Details (Optional)
            </Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us more..."
              rows={3}
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] resize-none text-sm transition-all text-gray-900 placeholder:text-gray-400"
            />
          </div>
        )}

        {/* Submit Button - COMPACTO */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B87333] hover:from-[#E5C158] hover:to-[#D4AF37] text-white font-bold py-2.5 text-sm cursor-pointer transition-all disabled:opacity-50 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 h-11"
        >
          {isSubmitting ? (
            <>
              <Icon icon="mdi:loading" className="w-4 h-4 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>{buttonText}</span>
              <Icon icon="mdi:arrow-right" className="w-4 h-4" />
            </>
          )}
        </Button>

        {/* Status Messages - COMPACTO */}
        {submitStatus === "success" && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-400 rounded-lg p-2.5">
            <div className="flex items-center gap-2 justify-center">
              <Icon icon="mdi:check-circle" className="w-4 h-4 text-green-600 flex-shrink-0" />
              <p className="text-green-800 text-xs font-semibold">
                Thank you! We'll contact you soon.
              </p>
            </div>
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-400 rounded-lg p-2.5">
            <div className="flex items-center gap-2 justify-center">
              <Icon icon="mdi:alert-circle" className="w-4 h-4 text-red-600 flex-shrink-0" />
              <p className="text-red-800 text-xs font-semibold">
                Something went wrong. Try again.
              </p>
            </div>
          </div>
        )}
      </form>

      {/* Phone CTA - COMPACTO */}
      {showPhone && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs text-[#334155] mb-2">
              Prefer to talk?
            </p>
            <a 
              href="tel:+15125550123" 
              className="inline-flex items-center gap-2 text-[#001F3F] font-bold text-base hover:text-[#D4AF37] transition-colors cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                <Icon icon="mdi:phone" className="w-4 h-4 text-[#D4AF37] group-hover:text-white transition-colors" />
              </div>
              <span>(512) 555-0123</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;