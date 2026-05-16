import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "text";
}

export default function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 text-xs tracking-widest uppercase transition-all duration-300 ease-out overflow-hidden";
  
  const variants = {
    primary: "bg-gold text-ink hover:bg-ember",
    outline: "border border-ink text-ink hover:bg-ink hover:text-cream",
    text: "text-ink hover:text-gold px-0",
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
