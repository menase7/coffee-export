"use client";

import React from "react";
import { motion } from "framer-motion";

interface CoffeeMotesProps {
  count?: number;
  className?: string;
}

export const CoffeeMotes: React.FC<CoffeeMotesProps> = ({
  count = 7,
  className = "",
}) => {
  // Predefined organic positions and timings
  const motes = [
    { top: "15%", left: "10%", size: 4, duration: 12, delay: 0 },
    { top: "35%", left: "85%", size: 5, duration: 15, delay: 2 },
    { top: "65%", left: "20%", size: 3, duration: 11, delay: 4 },
    { top: "25%", left: "70%", size: 6, duration: 14, delay: 1 },
    { top: "75%", left: "80%", size: 4, duration: 13, delay: 3 },
    { top: "85%", left: "40%", size: 3, duration: 16, delay: 5 },
    { top: "50%", left: "92%", size: 5, duration: 12, delay: 2.5 },
  ].slice(0, count);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-10 ${className}`}
      aria-hidden="true"
    >
      {motes.map((mote, i) => (
        <motion.div
          key={i}
          initial={{
            y: 0,
            x: 0,
            opacity: 0.15,
          }}
          animate={{
            y: [-15, -45, -15],
            x: [-10, 15, -10],
            opacity: [0.2, 0.65, 0.2],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: mote.duration,
            repeat: Infinity,
            delay: mote.delay,
            ease: "easeInOut",
          }}
          style={{
            top: mote.top,
            left: mote.left,
            width: `${mote.size}px`,
            height: `${mote.size}px`,
          }}
          className="absolute rounded-full bg-gradient-to-tr from-coffee-copper via-coffee-gold to-coffee-crema shadow-[0_0_12px_rgba(201,154,82,0.8)] filter blur-[0.5px]"
        />
      ))}
    </div>
  );
};

export default CoffeeMotes;

