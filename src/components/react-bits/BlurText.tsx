"use client";

import React from "react";
import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 100,
  className = "",
  animateBy = "words",
  direction = "bottom",
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <span className={`inline-block flex-wrap ${className}`}>
      {elements.map((segment, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
            filter: "blur(8px)",
            y: direction === "bottom" ? 15 : -15,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: (i * delay) / 1000,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {segment}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;
