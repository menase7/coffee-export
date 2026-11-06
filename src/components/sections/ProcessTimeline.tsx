"use client";

import React from "react";
import { motion } from "framer-motion";
import { exportProcessSteps } from "@/data/services";
import { MessageSquare, Layers, FlaskConical, FileText, Ship, CheckCircle2 } from "lucide-react";

const stepIcons = [MessageSquare, Layers, FlaskConical, FileText, Ship];

export const ProcessTimeline: React.FC = () => {
  return (
    <div className="relative">
      {/* Connecting desktop animated glowing line */}
      <div className="hidden lg:block absolute top-14 left-16 right-16 h-[2px] bg-gradient-to-r from-coffee-border via-coffee-gold/60 to-coffee-border z-0 shadow-[0_0_10px_rgba(201,154,82,0.4)]" />

      {/* Grid of 5 steps with staggered entrance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 relative z-10">
        {exportProcessSteps.map((step, idx) => {
          const Icon = stepIcons[idx] || CheckCircle2;
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative flex flex-col rounded-2xl border border-coffee-border bg-coffee-card/85 p-6 shadow-card transition-all duration-400 hover:border-coffee-gold/70 hover:bg-coffee-cardHover hover:shadow-[0_10px_35px_-5px_rgba(201,154,82,0.2)] hover:-translate-y-1.5"
            >
              {/* Top golden shimmer accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-coffee-gold/0 to-transparent group-hover:via-coffee-gold transition-all duration-500 rounded-t-2xl" />

              {/* Step Number & Icon Indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-coffee-dark border border-coffee-gold/40 flex items-center justify-center text-coffee-gold group-hover:bg-coffee-gold group-hover:text-coffee-darkest group-hover:shadow-gold transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-serif text-3xl font-bold text-coffee-border/80 group-hover:text-coffee-gold/60 transition-colors duration-300">
                  0{step.step}
                </span>
              </div>

              {/* Tagline */}
              <span className="text-[10px] uppercase tracking-widest text-coffee-gold font-semibold mb-1">
                {step.tagline}
              </span>

              {/* Title */}
              <h3 className="font-serif text-lg font-bold text-coffee-ivory mb-2 group-hover:text-coffee-gold transition-colors duration-300 leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-coffee-muted leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Bullets */}
              <ul className="mt-auto space-y-1.5 pt-3.5 border-t border-coffee-border/40 text-[11px] text-coffee-subtle">
                {step.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start space-x-1.5">
                    <span className="text-coffee-gold mt-0.5 font-bold">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessTimeline;
