// components/ui/button.tsx
import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variantStyles = {
      default: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900",
      primary: "bg-[#00529C] text-white hover:bg-[#003d75] focus:ring-[#00529C]",
      secondary: "bg-[#FFE317] text-[#00529C] hover:bg-[#e5cc15] focus:ring-[#FFE317]",
      accent: "bg-[#E0144C] text-white hover:bg-[#c01141] focus:ring-[#E0144C]",
      outline: "border-2 border-[#00529C] text-[#00529C] hover:bg-[#00529C] hover:text-white focus:ring-[#00529C]",
      ghost: "text-[#00529C] hover:bg-[#00529C]/10 focus:ring-[#00529C]"
    };
    
    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg"
    };
    
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };