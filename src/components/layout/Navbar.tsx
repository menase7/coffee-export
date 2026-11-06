"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { companyConfig, navItems, NavItem } from "@/data/company";
import {
  Menu,
  X,
  ArrowRight,
  Coffee,
  Globe,
  Sparkles,
  ChevronDown,
  Layers,
  MapPin,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Magnet } from "@/components/react-bits/Magnet";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    "Our Coffee": true,
    "Export & Quality": true,
  });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleMobileGroup = (label: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const getSubmenuIcon = (href: string) => {
    if (href.includes("/coffee")) return <Coffee className="w-4 h-4 text-coffee-gold" />;
    if (href.includes("/origins")) return <MapPin className="w-4 h-4 text-coffee-gold" />;
    if (href.includes("/services")) return <Truck className="w-4 h-4 text-coffee-gold" />;
    if (href.includes("/quality")) return <ShieldCheck className="w-4 h-4 text-coffee-gold" />;
    return <Layers className="w-4 h-4 text-coffee-gold" />;
  };

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#17110E]/94 backdrop-blur-xl border-b border-coffee-border/80 shadow-[0_12px_30px_rgba(0,0,0,0.65)] py-3"
            : "bg-gradient-to-b from-[#17110E]/95 via-[#17110E]/75 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Identity */}
            <Link
              href="/"
              className="group flex items-center space-x-3 text-left focus:outline-none"
              aria-label={`${companyConfig.name} - Home`}
            >
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-coffee-gold via-coffee-copper to-coffee-border flex items-center justify-center p-0.5 shadow-gold group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(201,154,82,0.4)] transition-all duration-300">
                <div className="w-full h-full bg-coffee-darkest rounded-full flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-coffee-gold transition-colors duration-300 group-hover:text-coffee-crema group-hover:rotate-12 transform" />
                </div>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-coffee-ivory group-hover:text-coffee-gold transition-colors duration-300 leading-none">
                  {companyConfig.name.split(" ")[0]}
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-coffee-muted font-medium mt-1 group-hover:text-coffee-crema transition-colors">
                  Ethiopian Coffee Exports
                </span>
              </div>
            </Link>

            {/* Pro-Level Desktop Navigation: 4 Core Pillars with Dropdowns */}
            <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3" aria-label="Main Navigation">
              {navItems.map((item) => {
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isDirectActive = item.href === pathname;
                const isChildActive = Boolean(
                  item.children?.some(
                    (child) => pathname === child.href || (child.href !== "/" && pathname.startsWith(child.href))
                  )
                );
                const isActive = isDirectActive || isChildActive;
                const isDropdownOpen = activeDropdown === item.label;

                if (!hasChildren && item.href) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`relative px-4 py-2 text-xs xl:text-sm font-medium tracking-wide transition-all duration-300 rounded-md group ${
                        isActive
                          ? "text-coffee-gold font-semibold"
                          : "text-coffee-muted hover:text-coffee-ivory hover:bg-coffee-card/40"
                      }`}
                    >
                      <span className="relative z-10 transition-transform duration-200 inline-block group-hover:-translate-y-0.5">
                        {item.label}
                      </span>

                      {/* Active sliding indicator */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-coffee-copper via-coffee-gold to-coffee-crema rounded-full shadow-[0_0_8px_rgba(201,154,82,0.8)]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}

                      {!isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-coffee-gold/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                      )}
                    </Link>
                  );
                }

                // Dropdown Item (e.g. Our Coffee or Export & Quality)
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveDropdown(isDropdownOpen ? null : item.label)}
                      className={`relative flex items-center space-x-1.5 px-4 py-2 text-xs xl:text-sm font-medium tracking-wide transition-all duration-300 rounded-md group focus:outline-none ${
                        isActive || isDropdownOpen
                          ? "text-coffee-gold font-semibold"
                          : "text-coffee-muted hover:text-coffee-ivory hover:bg-coffee-card/40"
                      }`}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span className="relative z-10 transition-transform duration-200 inline-block group-hover:-translate-y-0.5">
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180 text-coffee-gold" : "text-coffee-muted group-hover:text-coffee-gold"
                        }`}
                      />

                      {/* Active sliding indicator */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-coffee-copper via-coffee-gold to-coffee-crema rounded-full shadow-[0_0_8px_rgba(201,154,82,0.8)]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}

                      {!isActive && !isDropdownOpen && (
                        <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-coffee-gold/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                      )}
                    </button>

                    {/* Dropdown Card */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-80 xl:w-96"
                        >
                          <div className="relative bg-[#1C1410]/98 backdrop-blur-2xl border border-coffee-border/90 rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(201,154,82,0.12)]">
                            {/* Decorative top accent line */}
                            <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-coffee-gold/60 to-transparent" />

                            <div className="space-y-1">
                              {item.children?.map((child) => {
                                const isCurrentChild = pathname === child.href;
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={`group flex items-start space-x-3.5 p-3 rounded-xl transition-all duration-200 ${
                                      isCurrentChild
                                        ? "bg-coffee-card/90 border border-coffee-gold/30 shadow-inner"
                                        : "hover:bg-coffee-card/60 hover:border hover:border-coffee-border/70 border border-transparent"
                                    }`}
                                  >
                                    <div className="p-2 rounded-lg bg-coffee-dark border border-coffee-border/80 group-hover:border-coffee-gold/50 group-hover:bg-coffee-darkest transition-colors flex-shrink-0 mt-0.5">
                                      {getSubmenuIcon(child.href)}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between">
                                        <span className="font-serif text-sm font-semibold text-coffee-ivory group-hover:text-coffee-gold transition-colors">
                                          {child.label}
                                        </span>
                                        {child.badge && (
                                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-coffee-gold/15 text-coffee-gold border border-coffee-gold/30">
                                            {child.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-coffee-muted group-hover:text-coffee-crema transition-colors mt-0.5 line-clamp-2 leading-relaxed">
                                        {child.description}
                                      </p>
                                    </div>

                                    <ArrowRight className="w-3.5 h-3.5 text-coffee-muted/40 group-hover:text-coffee-gold group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Right Side: CTA & Trade Indicator */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="hidden xl:flex items-center text-xs text-coffee-muted space-x-1.5 border-r border-coffee-border/80 pr-4">
                <Globe className="w-3.5 h-3.5 text-coffee-gold animate-pulse-slow" />
                <span className="tracking-wider">ENG / FOB-CIF</span>
              </div>

              <Magnet magnetStrength={0.25}>
                <Link href="/quote">
                  <Button
                    variant="primary"
                    size="sm"
                    className="gap-2 shadow-gold hover:shadow-[0_0_25px_rgba(201,154,82,0.45)] group transition-all duration-300"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Magnet>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden space-x-2">
              <Link href="/quote" className="sm:inline-block">
                <Button variant="primary" size="sm" className="text-xs px-3 py-1.5">
                  Quote
                </Button>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-coffee-ivory hover:text-coffee-gold hover:bg-coffee-card/80 border border-coffee-border/60 transition-colors focus:outline-none focus:ring-2 focus:ring-coffee-gold"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5 text-coffee-gold" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Animated Drawer Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:hidden bg-[#17110E]/98 backdrop-blur-2xl border-t border-coffee-border/80 overflow-hidden shadow-2xl"
            >
              <div className="p-6 max-w-lg mx-auto">
                <nav className="flex flex-col space-y-3 pt-2">
                  {navItems.map((item, idx) => {
                    const hasChildren = Boolean(item.children && item.children.length > 0);
                    const isDirectActive = item.href === pathname;
                    const isExpanded = mobileExpanded[item.label] ?? true;

                    if (!hasChildren && item.href) {
                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04, duration: 0.25 }}
                        >
                          <Link
                            href={item.href}
                            className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all ${
                              isDirectActive
                                ? "bg-coffee-card text-coffee-gold border-l-4 border-coffee-gold font-semibold shadow-sm"
                                : "text-coffee-ivory hover:bg-coffee-card/50 hover:text-coffee-gold"
                            }`}
                          >
                            <span>{item.label}</span>
                            <ArrowRight
                              className={`w-4 h-4 transition-transform ${
                                isDirectActive ? "text-coffee-gold translate-x-0.5" : "text-coffee-muted"
                              }`}
                            />
                          </Link>
                        </motion.div>
                      );
                    }

                    // Mobile item with sub-links (e.g. Our Coffee or Export & Quality)
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04, duration: 0.25 }}
                        className="rounded-xl bg-coffee-card/40 border border-coffee-border/60 overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => toggleMobileGroup(item.label)}
                          className="w-full flex items-center justify-between p-3 text-left font-serif text-sm font-semibold text-coffee-ivory hover:text-coffee-gold transition-colors"
                        >
                          <span className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-coffee-gold" />
                            <span>{item.label}</span>
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-coffee-gold transition-transform duration-250 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="px-3 pb-3 space-y-1.5 border-t border-coffee-border/40 pt-2 bg-coffee-dark/30"
                            >
                              {item.children?.map((child) => {
                                const isCurrentChild = pathname === child.href;
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={`flex items-center justify-between p-2.5 rounded-lg text-xs font-medium transition-all ${
                                      isCurrentChild
                                        ? "bg-coffee-gold/15 text-coffee-gold font-semibold border border-coffee-gold/30"
                                        : "text-coffee-muted hover:text-coffee-ivory hover:bg-coffee-card/60"
                                    }`}
                                  >
                                    <div className="flex items-center space-x-2.5">
                                      {getSubmenuIcon(child.href)}
                                      <span>{child.label}</span>
                                    </div>
                                    {child.badge && (
                                      <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-coffee-card text-coffee-gold border border-coffee-border">
                                        {child.badge}
                                      </span>
                                    )}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="mt-6 pt-5 border-t border-coffee-border/60 space-y-4">
                  <div className="text-xs text-coffee-muted bg-coffee-dark/60 p-3.5 rounded-xl border border-coffee-border/50">
                    <p className="font-semibold text-coffee-ivory mb-1 flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-coffee-gold" />
                      <span>Direct Origin Export Sales:</span>
                    </p>
                    <p className="text-coffee-muted">{companyConfig.contact.email}</p>
                    <p className="text-coffee-gold font-medium mt-0.5">{companyConfig.contact.phone}</p>
                  </div>
                  <Link href="/quote" className="block w-full">
                    <Button variant="primary" size="lg" className="w-full justify-center gap-2 shadow-gold text-sm">
                      <span>Request Commercial Quotation</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;