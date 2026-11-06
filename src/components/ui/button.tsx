import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "copper" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee-gold focus-visible:ring-offset-2 focus-visible:ring-offset-coffee-darkest disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none rounded-md";

    const variants = {
      primary:
        "bg-coffee-gold text-coffee-darkest font-semibold hover:bg-coffee-goldHover hover:shadow-gold shadow-sm",
      secondary:
        "bg-coffee-card text-coffee-ivory border border-coffee-border hover:border-coffee-gold hover:text-white",
      outline:
        "border border-coffee-gold text-coffee-gold hover:bg-coffee-gold hover:text-coffee-darkest",
      copper:
        "bg-coffee-copper text-coffee-ivory hover:bg-[#B87443] shadow-sm",
      ghost:
        "text-coffee-ivory hover:bg-coffee-card hover:text-coffee-gold",
    };

    const sizes = {
      sm: "h-9 px-3.5 text-xs uppercase tracking-wider",
      md: "h-11 px-6 text-sm uppercase tracking-wider",
      lg: "h-13 px-8 text-base uppercase tracking-wider font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
