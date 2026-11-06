import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "gold" | "copper" | "crema" | "outline" | "subtle";
}

export function Badge({
  className,
  variant = "gold",
  ...props
}: BadgeProps) {
  const variants = {
    gold: "bg-coffee-gold/15 text-coffee-gold border-coffee-gold/30",
    copper: "bg-coffee-copper/20 text-[#D99A6B] border-coffee-copper/40",
    crema: "bg-coffee-crema/15 text-coffee-crema border-coffee-crema/30",
    outline: "bg-transparent text-coffee-muted border-coffee-border",
    subtle: "bg-coffee-card text-coffee-muted border-coffee-border/50",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export default Badge;
