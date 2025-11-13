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
  subtitle = "Fill out the form and we'll get back to you within 24 hours",
  showPhone = false,
  buttonText = "Get a Quote",
  buttonColor = "accent",
  onSubmit
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

  // Estilos según variante
  const containerStyles = {
    hero: "bg-white rounded-xl shadow-xl p-6 w-full max-w-md",
    sidebar: "bg-white rounded-xl shadow-lg p-5 w-full",
    fullpage: "bg-white rounded-xl shadow-xl p-8 w-full max-w-2xl mx-auto",
    modal: "bg-white p-5 w-full rounded-xl"
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
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <div className={containerStyles[variant]}>
      {/* Header */}
      <div className="mb-5 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-[#00529C] rounded-full mb-3">
          <Icon icon="mdi:clipboard-text" className="w-7 h-7 text-[#FFE317]" />
        </div>
        <h3 className="text-xl font-bold text-[#00529C] mb-1.5">
          {title}
        </h3>
        <p className="text-gray-600 text-xs">
          {subtitle}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
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
            placeholder=""
            required
            className="border border-gray-300 focus:border-[#00529C] focus:ring-1 focus:ring-[#00529C] rounded-md py-2 text-sm transition-all"
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
            placeholder=""
            required
            className="border border-gray-300 focus:border-[#00529C] focus:ring-1 focus:ring-[#00529C] rounded-md py-2 text-sm transition-all"
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
            placeholder=""
            required
            className="border border-gray-300 focus:border-[#00529C] focus:ring-1 focus:ring-[#00529C] rounded-md py-2 text-sm transition-all"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00529C] focus:border-[#00529C] appearance-none bg-white text-gray-700 text-sm transition-all cursor-pointer"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00529C] focus:border-[#00529C] resize-none text-sm transition-all"
            />
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1a1a2e] hover:bg-black text-white font-bold py-3 text-sm cursor-pointer transition-all disabled:opacity-50 rounded-md flex items-center justify-center gap-2 mt-4"
        >
          {isSubmitting ? (
            <>
              <Icon icon="mdi:loading" className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              {buttonText}
              <Icon icon="mdi:arrow-right" className="w-4 h-4" />
            </>
          )}
        </Button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-400 rounded-lg p-3">
            <div className="flex items-center gap-2 justify-center">
              <Icon icon="mdi:check-circle" className="w-4 h-4 text-green-600" />
              <p className="text-green-800 text-xs font-semibold">
                Thank you! We'll contact you soon.
              </p>
            </div>
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-400 rounded-lg p-3">
            <div className="flex items-center gap-2 justify-center">
              <Icon icon="mdi:alert-circle" className="w-4 h-4 text-red-600" />
              <p className="text-red-800 text-xs font-semibold">
                Something went wrong. Please try again.
              </p>
            </div>
          </div>
        )}
      </form>

      {/* Phone CTA - Opcional */}
      {showPhone && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">
              Prefer to talk? Call us now
            </p>
            <a 
              href="tel:+15125550123" 
              className="inline-flex items-center gap-2 text-[#00529C] font-bold text-lg hover:text-[#003d75] transition-colors cursor-pointer"
            >
              <Icon icon="mdi:phone" className="w-5 h-5" />
              (512) 555-0123
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;