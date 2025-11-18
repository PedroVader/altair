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

  const containerStyles = {
    hero: "bg-white rounded-2xl shadow-2xl p-5 w-full max-w-md border-2 border-[#F6F6F6]",
    sidebar: "bg-white rounded-2xl shadow-xl p-4 w-full border-2 border-[#F6F6F6]",
    fullpage: "bg-white rounded-2xl shadow-2xl p-6 w-full max-w-2xl mx-auto border-2 border-[#F6F6F6]",
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
      {/* Header */}
      <div className="mb-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-[#232323] rounded-xl mb-2 shadow-lg">
          <Icon icon="mdi:clipboard-text" className="w-6 h-6 text-[#FF570A]" />
        </div>
        <h3 className="font-display text-lg font-bold text-[#232323]">
          {title}
        </h3>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name */}
        <div>
          <Label htmlFor="name" className="text-[#232323] font-semibold text-xs mb-1 flex items-center gap-1.5">
            <Icon icon="mdi:account" className="w-3.5 h-3.5 text-[#FF570A]" />
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
            className="border-2 border-[#E2E2E2] focus:border-[#FF570A] focus:ring-1 focus:ring-[#FF570A]/20 rounded-lg py-2 text-sm transition-all text-gray-900 placeholder:text-gray-400 h-10"
          />
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone" className="text-[#232323] font-semibold text-xs mb-1 flex items-center gap-1.5">
            <Icon icon="mdi:phone" className="w-3.5 h-3.5 text-[#FF570A]" />
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
            className="border-2 border-[#E2E2E2] focus:border-[#FF570A] focus:ring-1 focus:ring-[#FF570A]/20 rounded-lg py-2 text-sm transition-all text-gray-900 placeholder:text-gray-400 h-10"
          />
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-[#232323] font-semibold text-xs mb-1 flex items-center gap-1.5">
            <Icon icon="mdi:email" className="w-3.5 h-3.5 text-[#FF570A]" />
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
            className="border-2 border-[#E2E2E2] focus:border-[#FF570A] focus:ring-1 focus:ring-[#FF570A]/20 rounded-lg py-2 text-sm transition-all text-gray-900 placeholder:text-gray-400 h-10"
          />
        </div>

        {/* Service */}
        <div>
          <Label htmlFor="service" className="text-[#232323] font-semibold text-xs mb-1 flex items-center gap-1.5">
            <Icon icon="mdi:tools" className="w-3.5 h-3.5 text-[#FF570A]" />
            Service *
          </Label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border-2 border-[#E2E2E2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FF570A]/20 focus:border-[#FF570A] appearance-none bg-white text-gray-900 text-sm transition-all cursor-pointer h-10"
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
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF570A] pointer-events-none"
            />
          </div>
        </div>

        {/* Message */}
        {(variant === "fullpage" || variant === "modal") && (
          <div>
            <Label htmlFor="message" className="text-[#232323] font-semibold text-xs mb-1 flex items-center gap-1.5">
              <Icon icon="mdi:message-text" className="w-3.5 h-3.5 text-[#FF570A]" />
              Details (Optional)
            </Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us more..."
              rows={3}
              className="w-full px-3 py-2 border-2 border-[#E2E2E2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FF570A]/20 focus:border-[#FF570A] resize-none text-sm transition-all text-gray-900 placeholder:text-gray-400"
            />
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#FF570A] hover:bg-[#E64D09] text-white font-bold py-2.5 text-sm cursor-pointer transition-all disabled:opacity-50 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl h-11"
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

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-400 rounded-lg p-2.5">
            <div className="flex items-center gap-2 justify-center">
              <Icon icon="mdi:check-circle" className="w-4 h-4 text-green-600 flex-shrink-0" />
              <p className="text-green-800 text-xs font-semibold">
                Thank you! We'll contact you soon.
              </p>
            </div>
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-400 rounded-lg p-2.5">
            <div className="flex items-center gap-2 justify-center">
              <Icon icon="mdi:alert-circle" className="w-4 h-4 text-red-600 flex-shrink-0" />
              <p className="text-red-800 text-xs font-semibold">
                Something went wrong. Try again.
              </p>
            </div>
          </div>
        )}
      </form>

      {/* Phone CTA */}
      {showPhone && (
        <div className="mt-4 pt-4 border-t border-[#E2E2E2]">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              Prefer to talk?
            </p>
            <a 
              href="tel:+15125550123" 
              className="inline-flex items-center gap-2 text-[#232323] font-bold text-base hover:text-[#FF570A] transition-colors cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-full bg-[#FF570A]/20 flex items-center justify-center group-hover:bg-[#FF570A] transition-colors">
                <Icon icon="mdi:phone" className="w-4 h-4 text-[#FF570A] group-hover:text-white transition-colors" />
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