"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShinyText } from "@/components/react-bits/ShinyText";
import { SplitText } from "@/components/react-bits/SplitText";
import { Magnet } from "@/components/react-bits/Magnet";
import { CoffeeMotes } from "@/components/animations/CoffeeMotes";
import { ArrowRight, ChevronDown, Award, Shield, Compass, Sparkles, Coffee } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-coffee-darkest pt-24 pb-16">
      {/* Background Hero Image with Ken-Burns and Espresso Atmosphere */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns opacity-70 filter brightness-[0.7] contrast-[1.15]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=2200&q=88')`,
        }}
      />

      {/* Layered gradients for maximum contrast, deep espresso warmth & editorial mood */}
      <div className="absolute inset-0 bg-gradient-to-t from-coffee-darkest via-coffee-darkest/80 to-coffee-darkest/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-darkest/90 via-transparent to-coffee-darkest/90" />
      <div className="absolute inset-0 coffee-radial-glow opacity-80" />
      <div className="absolute inset-0 coffee-grid-pattern opacity-25" />
      <div className="absolute inset-0 coffee-vignette pointer-events-none" />

      {/* Ambient floating coffee motes */}
      <CoffeeMotes count={8} />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Supporting Label Badge with React Bits ShinyText */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-coffee-card/90 border border-coffee-gold/50 shadow-gold backdrop-blur-md mb-6 hover:border-coffee-gold transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5 text-coffee-gold animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-coffee-gold">
            <ShinyText text="ETHIOPIAN COFFEE EXPORTS • B2B ORIGIN PARTNER" speed={3.2} />
          </span>
        </motion.div>

        {/* Main Headline with React Bits SplitText */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-coffee-ivory leading-[1.08] mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            <SplitText
              text="From the Birthplace of Coffee to the World."
              className="text-coffee-ivory font-serif"
              delay={35}
            />
          </h1>
        </motion.div>

        {/* Supporting Narrative Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-base sm:text-lg md:text-xl text-coffee-muted max-w-2xl font-light leading-relaxed mb-10 text-balance"
        >
          Discover authentic Ethiopian green coffee, sourced from distinctive highland origins
          and prepared for international importers, roasters, and distributors with uncompromising quality, traceability, and dependable export execution.
        </motion.p>

        {/* CTAs with React Bits Magnet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Magnet magnetStrength={0.25}>
            <Link href="/coffee" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto gap-2.5 shadow-gold hover:shadow-[0_0_30px_rgba(201,154,82,0.5)] text-sm sm:text-base group transition-all duration-300"
              >
                <span>Explore Our Coffee</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5" />
              </Button>
            </Link>
          </Magnet>

          <Magnet magnetStrength={0.25}>
            <Link href="/quote" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base border-coffee-gold/70 text-coffee-ivory hover:text-coffee-darkest hover:bg-coffee-gold hover:border-coffee-gold transition-all duration-300 shadow-sm"
              >
                Request a Quote
              </Button>
            </Link>
          </Magnet>
        </motion.div>

        {/* Quick verified credentials bar with staggered reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-16 pt-8 border-t border-coffee-border/60 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl text-left"
        >
          {[
            {
              icon: Compass,
              title: "6 Highland Origins",
              subtitle: "Yirgacheffe, Sidama, Guji & more",
            },
            {
              icon: Award,
              title: "Grade 1 & 2 Specialty",
              subtitle: "SCA 86–90+ cupping scores",
            },
            {
              icon: Shield,
              title: "GrainPro Hermetic",
              subtitle: "60kg export protective packaging",
            },
            {
              icon: ArrowRight,
              title: "FOB & CIF Logistics",
              subtitle: "Direct Port of Djibouti rail dispatch",
            },
          ].map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={idx}
                className="group/cred p-3 rounded-xl bg-coffee-card/40 border border-coffee-border/40 hover:border-coffee-gold/50 hover:bg-coffee-card/80 transition-all duration-300 flex items-start space-x-3"
              >
                <div className="w-8 h-8 rounded-lg bg-coffee-dark/80 border border-coffee-border flex items-center justify-center text-coffee-gold group-hover/cred:border-coffee-gold/50 group-hover/cred:shadow-gold transition-all flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-coffee-ivory uppercase tracking-wider group-hover/cred:text-coffee-gold transition-colors">
                    {cred.title}
                  </div>
                  <div className="text-[11px] text-coffee-muted">
                    {cred.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Animated subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-col items-center group cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight * 0.85, behavior: "smooth" });
          }}
        >
          <span className="text-[10px] uppercase tracking-widest text-coffee-subtle mb-1.5 transition-colors group-hover:text-coffee-gold">
            Scroll to Explore
          </span>
          <div className="w-5 h-8 rounded-full border border-coffee-gold/50 flex items-start justify-center p-1 shadow-sm">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-2 rounded-full bg-coffee-gold"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
