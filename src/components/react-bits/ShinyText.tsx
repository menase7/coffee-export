"use client";

import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 4,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent font-medium ${
        disabled
          ? "text-[#C99A52]"
          : "bg-gradient-to-r from-[#C99A52] via-[#F5EFE6] to-[#C99A52] bg-[length:200%_auto] animate-shiny-text"
      } ${className}`}
      style={{
        animationDuration: disabled ? undefined : animationDuration,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
