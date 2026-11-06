"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

export type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-in"
  | "scale-up"
  | "slide-left"
  | "slide-right";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  duration?: number;
  delay?: number;
  className?: string;
  threshold?: number;
  staggerChildren?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = "fade-up",
  duration = 0.7,
  delay = 0,
  className = "",
  threshold = 0.15,
  staggerChildren,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const getVariants = (): Variants => {
    switch (variant) {
      case "fade-down":
        return {
          hidden: { opacity: 0, y: -25 },
          visible: { opacity: 1, y: 0 },
        };
      case "fade-in":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "scale-up":
        return {
          hidden: { opacity: 0, scale: 0.94 },
          visible: { opacity: 1, scale: 1 },
        };
      case "slide-left":
        return {
          hidden: { opacity: 0, x: -35 },
          visible: { opacity: 1, x: 0 },
        };
      case "slide-right":
        return {
          hidden: { opacity: 0, x: 35 },
          visible: { opacity: 1, x: 0 },
        };
      case "fade-up":
      default:
        return {
          hidden: { opacity: 0, y: 35 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const containerVariants: Variants = {
    hidden: getVariants().hidden,
    visible: {
      ...getVariants().visible,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
        when: "beforeChildren",
        staggerChildren: staggerChildren || 0,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

