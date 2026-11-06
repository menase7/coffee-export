"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { coffeeOrigins, CoffeeOrigin } from "@/data/origins";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShinyText } from "@/components/react-bits/ShinyText";
import { Magnet } from "@/components/react-bits/Magnet";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  Compass,
  Mountain,
  Droplets,
  Calendar,
  Sparkles,
  ArrowRight,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function OriginsPage() {
  const [activeOrigin, setActiveOrigin] = useState<CoffeeOrigin>(coffeeOrigins[0]);

  return (
    <div className="flex flex-col w-full bg-coffee-darkest text-coffee-ivory min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 sm:py-28 bg-coffee-dark border-b border-coffee-border/60 overflow-hidden">
        <div className="absolute inset-0 coffee-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 coffee-radial-glow opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-coffee-card border border-coffee-gold/40 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-coffee-gold" />
              <ShinyText text="TERROIR & REGIONAL GUIDE" className="text-xs uppercase tracking-widest font-semibold" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-coffee-ivory leading-tight mb-4">
              The Historic Coffee Regions of Ethiopia
            </h1>
            <p className="text-base sm:text-lg text-coffee-muted leading-relaxed">
              Explore Ethiopia&rsquo;s celebrated coffee growing zones. From the perfumed floral micro-valleys of Yirgacheffe to the wild tropical fruit canopies of Guji, discover the altitudes, processing traditions, and distinctive sensory signatures of authentic Ethiopian Arabica.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Regional Explorer */}
      <section className="py-16 sm:py-24 bg-coffee-darkest border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block mb-2">
              Interactive Terroir Explorer
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-ivory">
              Select an Origin to View Growing Conditions
            </h2>
          </ScrollReveal>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {coffeeOrigins.map((origin) => {
              const isActive = activeOrigin.id === origin.id;
              return (
                <button
                  key={origin.id}
                  onClick={() => setActiveOrigin(origin)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-coffee-gold text-coffee-darkest font-semibold shadow-gold scale-105"
                      : "bg-coffee-card text-coffee-muted hover:text-coffee-ivory border border-coffee-border hover:border-coffee-gold/40"
                  }`}
                >
                  <span>{origin.name}</span>
                  {origin.amharicName && (
                    <span className="ml-1.5 opacity-70 font-serif text-xs">({origin.amharicName})</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Origin Detailed Spotlight with Animated Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeOrigin.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="rounded-2xl border border-coffee-border bg-coffee-card/85 p-6 sm:p-10 shadow-2xl hover:border-coffee-gold/50 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Photo */}
                <div className="lg:col-span-6 relative">
                  <div className="group relative h-[360px] sm:h-[420px] w-full rounded-2xl overflow-hidden border border-coffee-border">
                    <Image
                      src={activeOrigin.image}
                      alt={`${activeOrigin.name} coffee origin`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee-darkest/90 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="gold" className="text-xs backdrop-blur-md bg-coffee-darkest/90 border border-coffee-gold/40">
                        {activeOrigin.elevation}
                      </Badge>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="text-xs text-coffee-ivory font-serif px-3 py-1 rounded-lg bg-coffee-darkest/85 backdrop-blur-md border border-coffee-border/50">
                        {activeOrigin.zone}
                      </span>
                      {activeOrigin.availableFromCompany ? (
                        <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-emerald-950/90 text-emerald-300 border border-emerald-700/60 backdrop-blur-md shadow-sm">
                          Available in Export Catalog
                        </span>
                      ) : (
                        <span className="text-[11px] font-medium tracking-wider px-2.5 py-1 rounded-lg bg-coffee-darkest/90 text-coffee-subtle border border-coffee-border backdrop-blur-md">
                          Educational Reference
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Details & Specs */}
                <div className="lg:col-span-6 space-y-5">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-ivory">
                        {activeOrigin.name}
                      </h3>
                      {activeOrigin.amharicName && (
                        <span className="font-serif text-xl text-coffee-gold">{activeOrigin.amharicName}</span>
                      )}
                    </div>
                    <p className="text-xs uppercase tracking-wider text-coffee-subtle font-medium">
                      {activeOrigin.zone}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-coffee-muted leading-relaxed">
                    {activeOrigin.description}
                  </p>

                  {/* Terroir & Soil note */}
                  <div className="p-4 rounded-xl bg-coffee-dark/80 border border-coffee-border/70 shadow-sm">
                    <h4 className="text-xs uppercase tracking-wider text-coffee-gold font-semibold mb-1.5 flex items-center space-x-1.5">
                      <Mountain className="w-3.5 h-3.5 text-coffee-gold" />
                      <span>Terroir & Climate Identity</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-coffee-muted leading-relaxed">
                      {activeOrigin.terroirNote}
                    </p>
                  </div>

                  {/* Cup Profile Notes */}
                  <div>
                    <span className="text-xs uppercase tracking-wider text-coffee-subtle block mb-2 font-medium">
                      Common Regional Flavor Characteristics
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeOrigin.flavorProfile.map((note, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-coffee-dark border border-coffee-border text-xs text-coffee-crema font-medium hover:border-coffee-gold/40 transition-colors"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick specs grid */}
                  <div className="grid grid-cols-2 gap-3 text-xs border-t border-coffee-border/50 pt-4">
                    <div>
                      <span className="text-coffee-subtle block text-[10px] uppercase">Harvest Season</span>
                      <span className="text-coffee-ivory font-medium">{activeOrigin.harvestPeriod}</span>
                    </div>
                    <div>
                      <span className="text-coffee-subtle block text-[10px] uppercase">Processing Methods</span>
                      <span className="text-coffee-ivory font-medium">{activeOrigin.processingMethods.join(", ")}</span>
                    </div>
                  </div>

                  {/* Action button */}
                  <div className="pt-2">
                    {activeOrigin.availableFromCompany ? (
                      <Link href={`/coffee?origin=${encodeURIComponent(activeOrigin.name)}`}>
                        <Button variant="primary" size="md" className="gap-2 shadow-gold group">
                          <span>View Available {activeOrigin.name} Lots</span>
                          <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    ) : (
                      <div className="text-xs text-coffee-subtle italic flex items-center space-x-1.5">
                        <AlertCircle className="w-4 h-4 text-coffee-subtle flex-shrink-0" />
                        <span>{activeOrigin.name} coffee profile is presented for educational reference.</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Origin Deep-Dives: All Regions Grid */}
      <section className="py-20 sm:py-28 bg-coffee-dark border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block mb-2">
              Comprehensive Compendium
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-ivory">
              Detailed Origin Profiles
            </h2>
            <p className="text-sm sm:text-base text-coffee-muted mt-2">
              Learn how elevation, micro-valleys, and processing methods shape the unique profile of each origin.
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            {coffeeOrigins.map((origin, idx) => (
              <ScrollReveal
                key={origin.id}
                variant="fade-up"
                delay={idx * 0.08}
                className="scroll-mt-24 p-6 sm:p-8 rounded-2xl border border-coffee-border bg-coffee-card/70 shadow-card hover:border-coffee-gold/60 transition-all duration-300"
              >
                <div id={origin.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4 relative h-64 sm:h-72 w-full rounded-xl overflow-hidden border border-coffee-border group">
                    <Image
                      src={origin.image}
                      alt={origin.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee-darkest/90 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="gold" className="text-xs backdrop-blur-md bg-coffee-darkest/90 border border-coffee-gold/40">
                        {origin.elevation}
                      </Badge>
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-coffee-ivory">
                        {origin.name}{" "}
                        {origin.amharicName && (
                          <span className="text-lg text-coffee-gold font-normal">({origin.amharicName})</span>
                        )}
                      </h3>
                      <span className="text-xs text-coffee-subtle">{origin.zone}</span>
                    </div>

                    <p className="text-sm text-coffee-muted leading-relaxed">
                      {origin.description}
                    </p>

                    <div className="p-4 rounded-xl bg-coffee-dark/80 border border-coffee-border/60 text-xs">
                      <span className="font-semibold text-coffee-gold uppercase tracking-wider block mb-1">
                        Terroir Insight:
                      </span>
                      <p className="text-coffee-muted leading-relaxed">{origin.terroirNote}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs pt-2">
                      <div>
                        <span className="text-coffee-subtle block text-[10px] uppercase">Flavor Profile:</span>
                        <span className="text-coffee-crema font-medium">{origin.flavorProfile.join(" • ")}</span>
                      </div>
                      <div className="border-l border-coffee-border pl-4">
                        <span className="text-coffee-subtle block text-[10px] uppercase">Harvest Season:</span>
                        <span className="text-coffee-ivory">{origin.harvestPeriod}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-coffee-darkest text-center relative overflow-hidden">
        <div className="absolute inset-0 coffee-radial-glow opacity-80 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-ivory mb-4">
              Source Direct From Ethiopian Highlands
            </h2>
            <p className="text-sm sm:text-base text-coffee-muted max-w-xl mx-auto mb-8 leading-relaxed">
              Tell us which growing region best suits your roasting profile. We provide current crop offer samples and quotation terms.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Magnet magnetStrength={0.25}>
                <Link href="/quote">
                  <Button variant="primary" size="lg" className="gap-2 shadow-gold group">
                    <span>Request Origin Quote</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Magnet>
              <Magnet magnetStrength={0.25}>
                <Link href="/coffee">
                  <Button variant="outline" size="lg" className="border-coffee-gold/60 text-coffee-ivory hover:text-coffee-darkest hover:border-coffee-gold">
                    View All Coffee Lots
                  </Button>
                </Link>
              </Magnet>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
