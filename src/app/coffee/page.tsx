"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { coffeeProducts, CoffeeProduct } from "@/data/products";
import { ProductCard } from "@/components/sections/ProductCard";
import { Button } from "@/components/ui/button";
import { ShinyText } from "@/components/react-bits/ShinyText";
import { Magnet } from "@/components/react-bits/Magnet";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Search, Filter, RotateCcw, ArrowRight, Sparkles } from "lucide-react";

export default function CoffeeCatalogPage() {
  const [selectedProcess, setSelectedProcess] = useState<string>("All");
  const [selectedOrigin, setSelectedOrigin] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const origins = ["All", "Yirgacheffe", "Sidama", "Guji", "Limu", "Jimma"];
  const processes = ["All", "Washed", "Natural", "Anaerobic Experimental", "Commercial Green"];

  const filteredProducts = useMemo(() => {
    return coffeeProducts.filter((product) => {
      const matchOrigin =
        selectedOrigin === "All" || product.origin.toLowerCase().includes(selectedOrigin.toLowerCase());
      const matchProcess =
        selectedProcess === "All" || product.processingMethod === selectedProcess;
      const matchSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.cuppingNotes.some((note) => note.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchOrigin && matchProcess && matchSearch;
    });
  }, [selectedOrigin, selectedProcess, searchQuery]);

  const handleResetFilters = () => {
    setSelectedOrigin("All");
    setSelectedProcess("All");
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col w-full bg-coffee-darkest text-coffee-ivory min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 sm:py-24 bg-coffee-dark border-b border-coffee-border/60 overflow-hidden">
        <div className="absolute inset-0 coffee-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 coffee-radial-glow opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-coffee-card border border-coffee-gold/40 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-coffee-gold" />
              <ShinyText text="EXPORT CATALOG • 2024/2025 HARVEST" className="text-xs uppercase tracking-widest font-semibold" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-coffee-ivory leading-tight mb-4">
              Ethiopian Green Coffee Offerings
            </h1>
            <p className="text-base sm:text-lg text-coffee-muted leading-relaxed">
              Explore our current export availability of washed, natural, and anaerobic micro-lots alongside dependable commercial Arabica container volumes. All lots prepared to strict moisture, screen size, and physical defect thresholds.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-[61px] z-30 bg-[#17110E]/95 backdrop-blur-xl border-b border-coffee-border py-4 shadow-[0_8px_25px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-coffee-muted pointer-events-none" />
              <input
                type="text"
                placeholder="Search coffee by name, origin, or flavor note..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-coffee-card/90 border border-coffee-border text-coffee-ivory placeholder:text-coffee-subtle focus:outline-none focus:border-coffee-gold focus:ring-1 focus:ring-coffee-gold transition-all"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Origin Dropdown/Pills */}
              <div className="flex items-center space-x-1 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
                <span className="text-xs text-coffee-subtle uppercase tracking-wider mr-1 hidden sm:inline">
                  Origin:
                </span>
                {origins.map((origin) => (
                  <button
                    key={origin}
                    onClick={() => setSelectedOrigin(origin)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      selectedOrigin === origin
                        ? "bg-coffee-gold text-coffee-darkest font-semibold shadow-gold scale-105"
                        : "bg-coffee-card text-coffee-muted hover:text-coffee-ivory border border-coffee-border hover:border-coffee-gold/40"
                    }`}
                  >
                    {origin}
                  </button>
                ))}
              </div>

              {/* Reset Filters button */}
              {(selectedOrigin !== "All" || selectedProcess !== "All" || searchQuery !== "") && (
                <button
                  onClick={handleResetFilters}
                  className="px-3 py-1.5 rounded-full text-xs text-coffee-gold hover:text-coffee-goldHover inline-flex items-center space-x-1.5 bg-coffee-card/80 border border-coffee-gold/40 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Processing method filter pills */}
          <div className="flex items-center space-x-1.5 mt-3 pt-3 border-t border-coffee-border/40 overflow-x-auto scrollbar-none text-xs">
            <span className="text-coffee-subtle uppercase tracking-wider mr-1 flex-shrink-0">
              Processing:
            </span>
            {processes.map((proc) => (
              <button
                key={proc}
                onClick={() => setSelectedProcess(proc)}
                className={`px-3 py-1 rounded-lg text-xs transition-all duration-200 flex-shrink-0 ${
                  selectedProcess === proc
                    ? "bg-coffee-copper text-coffee-ivory font-semibold shadow-sm"
                    : "bg-coffee-card/60 text-coffee-muted hover:text-coffee-ivory border border-coffee-border/50 hover:border-coffee-border"
                }`}
              >
                {proc}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 text-xs text-coffee-muted">
          <div>
            Showing <span className="font-semibold text-coffee-gold">{filteredProducts.length}</span>{" "}
            available export lots
          </div>
          <div className="text-coffee-subtle hidden sm:inline">
            All prices subject to volume, Incoterm (FOB/CIF), and market differential.
          </div>
        </div>

        {/* Product Cards with AnimatePresence */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="flex"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-24 border border-dashed border-coffee-border rounded-2xl bg-coffee-card/30">
            <p className="font-serif text-2xl font-bold text-coffee-ivory mb-2">
              No matching coffee lots found
            </p>
            <p className="text-sm text-coffee-muted max-w-md mx-auto mb-6">
              Try adjusting your origin or processing filters, or contact our export desk directly for specialized lot sourcing.
            </p>
            <Button variant="secondary" size="md" onClick={handleResetFilters}>
              Clear All Filters
            </Button>
          </div>
        )}
      </section>

      {/* Catalog CTA Banner */}
      <section className="py-16 sm:py-20 bg-coffee-dark border-t border-coffee-border text-center relative overflow-hidden">
        <div className="absolute inset-0 coffee-radial-glow opacity-80 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-ivory mb-3">
              Looking for a Specific Ethiopian Micro-Lot or Volume Specification?
            </h2>
            <p className="text-sm sm:text-base text-coffee-muted max-w-xl mx-auto mb-8 leading-relaxed">
              Our sourcing team on the ground in Yirgacheffe, Sidama, and Guji can coordinate specialized processing, lot separation, and forward-booking harvest contracts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Magnet magnetStrength={0.25}>
                <Link href="/quote">
                  <Button variant="primary" size="lg" className="gap-2 shadow-gold group">
                    <span>Request Custom Lot Quotation</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Magnet>
              <Magnet magnetStrength={0.25}>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-coffee-gold/60 text-coffee-ivory hover:text-coffee-darkest hover:border-coffee-gold">
                    Speak With Coffee Trader
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
