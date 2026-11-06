"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-coffee-copper via-coffee-gold to-coffee-crema origin-left z-[60] pointer-events-none shadow-[0_0_12px_rgba(201,154,82,0.6)]"
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;

