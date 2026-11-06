"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedContentProps {
  children: React.ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  delay?: number;
  className?: string;
  threshold?: number;
}

export const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 30,
  direction = "vertical",
  reverse = false,
  duration = 0.6,
  delay = 0,
  className = "",
  threshold = 0.15,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const axis = direction === "vertical" ? "y" : "x";
  const offset = reverse ? -distance : distance;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        [axis]: offset,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              [axis]: 0,
            }
          : {
              opacity: 0,
              [axis]: offset,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
