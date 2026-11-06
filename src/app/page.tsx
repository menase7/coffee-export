import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyConfig } from "@/data/company";
import { coffeeProducts } from "@/data/products";
import { coffeeOrigins } from "@/data/origins";
import { exportServices } from "@/data/services";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductCard } from "@/components/sections/ProductCard";
import { OriginCard } from "@/components/sections/OriginCard";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ShinyText } from "@/components/react-bits/ShinyText";
import { BlurText } from "@/components/react-bits/BlurText";
import { AnimatedContent } from "@/components/react-bits/AnimatedContent";
import { CountUp } from "@/components/react-bits/CountUp";
import { Magnet } from "@/components/react-bits/Magnet";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  Leaf,
  Globe2,
  CheckCircle2,
  Scale,
  Sparkles,
  Coffee,
  Ship,
  FileCheck,
  Container,
  FlaskConical,
  Handshake,
  TrendingUp,
  MapPin,
} from "lucide-react";

const serviceIcons: Record<string, React.ElementType> = {
  Bean: Coffee,
  Container: Container,
  FlaskConical: FlaskConical,
  FileCheck: FileCheck,
  Ship: Ship,
  Handshake: Handshake,
};

export default function HomePage() {
  const featuredProducts = coffeeProducts.filter((p) => p.featured).slice(0, 3);
  const featuredOrigins = coffeeOrigins.slice(0, 3);

  return (
    <div className="flex flex-col w-full bg-coffee-darkest text-coffee-ivory">
      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: INTRODUCTION */}
      <section className="py-20 sm:py-28 bg-coffee-dark relative border-b border-coffee-border/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left editorial column */}
            <ScrollReveal variant="fade-up" className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-coffee-gold bg-coffee-card/80 px-3.5 py-1 rounded-full border border-coffee-gold/30">
                <Sparkles className="w-3.5 h-3.5 text-coffee-gold animate-pulse" />
                <span>Our Export Mission</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-coffee-ivory leading-tight">
                Bridging Ethiopia&rsquo;s Ancient Coffee Lands with the World&rsquo;s Leading Roasters.
              </h2>

              <p className="text-sm sm:text-base text-coffee-muted leading-relaxed">
                Ethiopia is not simply a coffee producer—it is the biological birthplace of Coffea Arabica.
                At <span className="text-coffee-ivory font-semibold">{companyConfig.name}</span>, we honor this heritage by pairing deep relationships across highland smallholder washing stations with the stringent technical standards demanded by international green coffee importers.
              </p>

              {/* 5 Core Priorities */}
              <div className="space-y-3 pt-2">
                {[
                  {
                    title: "Authentic Ethiopian Terroirs",
                    desc: "Single-origin lots exhibiting distinctive regional cup profiles without blending compromise.",
                  },
                  {
                    title: "Direct Sourcing Partnerships",
                    desc: "Close collaboration with primary cooperatives and private washing stations across the highlands.",
                  },
                  {
                    title: "Quality-Focused Lot Preparation",
                    desc: "Meticulous optical sorting, moisture monitoring, and GrainPro hermetic packing.",
                  },
                  {
                    title: "Transparent B2B Communication",
                    desc: "Accurate pre-shipment cupping scores, rapid physical samples, and real-time shipping milestones.",
                  },
                  {
                    title: "Long-Term Commercial Relationships",
                    desc: "Forward-booking crop security and stable commercial pricing for international buyers.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm group/item">
                    <CheckCircle2 className="w-4 h-4 text-coffee-gold flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <div>
                      <span className="font-semibold text-coffee-ivory group-hover/item:text-coffee-gold transition-colors">{item.title}:</span>{" "}
                      <span className="text-coffee-muted">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link href="/about">
                  <Button variant="secondary" size="md" className="gap-2 group shadow-sm hover:border-coffee-gold/60">
                    <span>Learn About Our Company</span>
                    <ArrowRight className="w-4 h-4 text-coffee-gold transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Right photographic composition */}
            <ScrollReveal variant="scale-up" delay={0.2} className="lg:col-span-6 relative">
              <div className="group relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden border border-coffee-border shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80"
                  alt="Ethiopian coffee cherries drying on raised African beds in the highlands"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-darkest/95 via-transparent to-transparent" />

                {/* Floating highlight card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-coffee-darkest/92 border border-coffee-gold/40 backdrop-blur-md shadow-card group-hover:border-coffee-gold transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-coffee-card border border-coffee-border flex items-center justify-center text-coffee-gold flex-shrink-0 shadow-sm">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-coffee-gold font-semibold">
                        ECTA Export Standard
                      </p>
                      <p className="text-xs text-coffee-muted">
                        Export-grade Arabica certified for purity, moisture balance, and SCA cup criteria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR COFFEE COLLECTION */}
      <section className="py-20 sm:py-28 bg-coffee-darkest border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block mb-2">
                  Export Catalog
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-coffee-ivory">
                  Featured Specialty & Commercial Lots
                </h2>
                <p className="text-sm sm:text-base text-coffee-muted mt-3">
                  Grade 1 and Grade 2 washed and natural Arabica coffees prepared for international specialty roasters, alongside dependable commercial Arabica container volumes.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <Link href="/coffee">
                  <Button variant="outline" size="md" className="gap-2 group border-coffee-gold/60 text-coffee-ivory hover:text-coffee-darkest hover:border-coffee-gold">
                    <span>View Full Catalog ({coffeeProducts.length} Lots)</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Product Cards Grid with Stagger */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <ScrollReveal key={product.id} variant="fade-up" delay={idx * 0.12}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom note on product specifications */}
          <div className="mt-12 text-center text-xs text-coffee-subtle max-w-xl mx-auto">
            * Moisture levels and cupping scores are independently verified at dry mill pre-shipment. Contact us for lot-specific offer sheets and 250g green sample requests.
          </div>
        </div>
      </section>

      {/* SECTION 4: ETHIOPIAN COFFEE ORIGINS */}
      <section className="py-20 sm:py-28 bg-coffee-dark border-b border-coffee-border/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block mb-2">
                  Terroirs of Ethiopia
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-coffee-ivory">
                  Celebrated Growing Regions
                </h2>
                <p className="text-sm sm:text-base text-coffee-muted mt-3">
                  Each Ethiopian coffee zone possesses an unmistakable microclimate, soil composition, and heirloom variety heritage resulting in distinct sensory signatures.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <Link href="/origins">
                  <Button variant="primary" size="md" className="gap-2 shadow-gold group">
                    <span>Explore Coffee Origins</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Origins Grid with Stagger */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredOrigins.map((origin, idx) => (
              <ScrollReveal key={origin.id} variant="fade-up" delay={idx * 0.12}>
                <OriginCard origin={origin} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY ETHIOPIAN COFFEE */}
      <section className="py-20 sm:py-28 bg-coffee-darkest border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block mb-2">
              The Origin Advantage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-coffee-ivory">
              Why Ethiopian Arabica Stands Apart
            </h2>
            <p className="text-sm sm:text-base text-coffee-muted mt-3">
              Nowhere else on the planet offers the wild genetic biodiversity, ancient volcanic soils, and deep-seated cultural reverence for coffee found in the Ethiopian highlands.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Wild Arabica Genetic Diversity",
                desc: "Thousands of uncatalogued indigenous heirloom landraces grow natively in Ethiopia's misty forest ecosystems, creating flavor complexities impossible to replicate elsewhere.",
              },
              {
                icon: Layers,
                title: "Extreme Altitude Slow-Maturation",
                desc: "High elevations between 1,750m and 2,300m above sea level subject cherries to cool mountain nights, developing exceptionally dense, sugar-rich beans with bright acidity.",
              },
              {
                icon: Coffee,
                title: "Traditional Ceremony & Cultural Care",
                desc: "Coffee is not merely an export commodity in Ethiopia—it is the fabric of daily life. The traditional Jebena ceremony reflects the cultural respect smallholders pour into every harvest.",
              },
              {
                icon: ShieldCheck,
                title: "Strictly Shade-Grown Agroforestry",
                desc: "Over 90% of Ethiopian coffee is produced in garden and semi-forest systems shaded by false banana (Ensete) and indigenous forest canopies without synthetic agrochemicals.",
              },
              {
                icon: Award,
                title: "Iconic Regional Sensory Profiles",
                desc: "From the crystalline bergamot and jasmine of Yirgacheffe to the wild blueberry wine of Hambela Guji, Ethiopian cups command the highest acclaim in international cupping competitions.",
              },
              {
                icon: Globe2,
                title: "Enduring Global Market Demand",
                desc: "Ethiopian single-origins remain the most universally requested coffees on specialty roaster menus across the United States, Europe, East Asia, and the Middle East.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal
                  key={idx}
                  variant="fade-up"
                  delay={idx * 0.08}
                  className="group rounded-2xl border border-coffee-border bg-coffee-card/75 p-7 shadow-card hover:border-coffee-gold/60 hover:bg-coffee-cardHover hover:shadow-[0_10px_35px_-5px_rgba(201,154,82,0.18)] hover:-translate-y-1 transition-all duration-400 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-coffee-dark border border-coffee-border flex items-center justify-center text-coffee-gold mb-5 group-hover:border-coffee-gold/60 group-hover:bg-coffee-gold group-hover:text-coffee-darkest group-hover:shadow-gold transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-coffee-ivory mb-2.5 group-hover:text-coffee-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-coffee-muted leading-relaxed">
                    {feature.desc}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: EXPORT SERVICES */}
      <section className="py-20 sm:py-28 bg-coffee-dark border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block mb-2">
              B2B Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-coffee-ivory">
              Tailored Export Solutions for Global Buyers
            </h2>
            <p className="text-sm sm:text-base text-coffee-muted mt-3">
              We bridge the distance between Ethiopian highland washing stations and international ports with rigorous logistics, complete export compliance, and professional communication.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exportServices.map((service, idx) => {
              const Icon = serviceIcons[service.iconName] || Coffee;
              return (
                <ScrollReveal
                  key={service.id}
                  variant="fade-up"
                  delay={idx * 0.08}
                  className="group rounded-2xl border border-coffee-border bg-coffee-card/85 p-7 shadow-card hover:border-coffee-gold/70 hover:bg-coffee-cardHover hover:shadow-[0_12px_40px_-8px_rgba(201,154,82,0.22)] hover:-translate-y-1.5 transition-all duration-400 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-coffee-dark border border-coffee-gold/40 flex items-center justify-center text-coffee-gold group-hover:bg-coffee-gold group-hover:text-coffee-darkest group-hover:shadow-gold transition-all duration-300 mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-coffee-ivory mb-3 group-hover:text-coffee-gold transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-coffee-muted leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <ul className="mt-auto space-y-2 pt-4 border-t border-coffee-border/50 text-xs text-coffee-subtle">
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start space-x-2">
                        <span className="text-coffee-gold font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-5 mt-4 border-t border-coffee-border/30">
                    <Link
                      href={`/services#${service.id}`}
                      className="text-xs font-semibold text-coffee-gold hover:text-coffee-goldHover uppercase tracking-wider inline-flex items-center space-x-1.5 group/link"
                    >
                      <span>Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Link href="/services">
              <Button variant="outline" size="md" className="gap-2 group border-coffee-gold/60 text-coffee-ivory hover:text-coffee-darkest hover:border-coffee-gold">
                <span>View Complete Service Specifications</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: QUALITY & TRACEABILITY */}
      <section className="py-20 sm:py-28 bg-coffee-darkest border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal variant="scale-up" className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="group relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden border border-coffee-border shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1200&q=80"
                  alt="Quality inspection of Ethiopian green coffee beans"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-darkest/95 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-coffee-darkest/92 border border-coffee-gold/40 backdrop-blur-md shadow-card">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-coffee-card flex items-center justify-center text-coffee-gold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-coffee-ivory">
                        Batch-Level Lot Identification
                      </h4>
                      <p className="text-xs text-coffee-muted">
                        Each lot tracked by washing station, harvest week, moisture reading, and bag mark.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2} className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-coffee-gold bg-coffee-card/80 px-3.5 py-1 rounded-full border border-coffee-gold/30">
                <ShieldCheck className="w-3.5 h-3.5 text-coffee-gold" />
                <span>Technical Rigor</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-coffee-ivory">
                Quality Assurance From Washing Station to Container Stuffing
              </h2>
              <p className="text-sm sm:text-base text-coffee-muted leading-relaxed">
                We safeguard buyer investments through disciplined quality protocols. Before any contract is finalized, every export candidate lot undergoes physical grading for moisture, screen size distribution, and defect counts, followed by certified Q-grader cupping.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-coffee-card/80 border border-coffee-border hover:border-coffee-gold/50 transition-colors">
                  <span className="text-coffee-gold font-serif text-lg font-bold block mb-1">
                    Moisture & Water Activity
                  </span>
                  <p className="text-xs text-coffee-muted">
                    Strict export parameters: moisture measured between 10.5% and 11.5% with water activity below 0.60 aw.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-coffee-card/80 border border-coffee-border hover:border-coffee-gold/50 transition-colors">
                  <span className="text-coffee-gold font-serif text-lg font-bold block mb-1">
                    Optical & Gravity Sorting
                  </span>
                  <p className="text-xs text-coffee-muted">
                    Advanced bichromatic color sorters and gravity tables eliminate unripes, quakers, and foreign matter.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-coffee-card/80 border border-coffee-border hover:border-coffee-gold/50 transition-colors">
                  <span className="text-coffee-gold font-serif text-lg font-bold block mb-1">
                    GrainPro Hermetic Liners
                  </span>
                  <p className="text-xs text-coffee-muted">
                    Specialty lots packed in 60kg multi-layer barrier liners to block humidity changes during sea transit.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-coffee-card/80 border border-coffee-border hover:border-coffee-gold/50 transition-colors">
                  <span className="text-coffee-gold font-serif text-lg font-bold block mb-1">
                    Sensory Cupping Reports
                  </span>
                  <p className="text-xs text-coffee-muted">
                    Transparent SCA protocol scoring sheets provided with fragrance, acidity, body, and balance metrics.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/quality">
                  <Button variant="secondary" size="md" className="gap-2 group hover:border-coffee-gold/60">
                    <span>Explore Quality & Traceability Protocols</span>
                    <ArrowRight className="w-4 h-4 text-coffee-gold transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 8: OUR EXPORT PROCESS */}
      <section className="py-20 sm:py-28 bg-coffee-dark border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block mb-2">
              Buyer Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-coffee-ivory">
              Our 5-Step Export Workflow
            </h2>
            <p className="text-sm sm:text-base text-coffee-muted mt-3">
              A transparent, predictable process designed for international green coffee buyers, from initial sensory evaluation to sea container discharge.
            </p>
          </ScrollReveal>

          <ProcessTimeline />

          <div className="mt-14 text-center">
            <Link href="/quote">
              <Button variant="primary" size="lg" className="gap-2 shadow-gold group">
                <span>Start Step 1: Submit Your Inquiry</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: COMPANY STATS & VERIFIED FACTS */}
      <section className="py-16 sm:py-20 bg-coffee-darkest border-b border-coffee-border/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {companyConfig.stats.map((stat, idx) => (
              <ScrollReveal
                key={idx}
                variant="fade-up"
                delay={idx * 0.1}
                className="group text-center p-6 sm:p-7 rounded-2xl border border-coffee-border bg-coffee-card/75 shadow-card hover:border-coffee-gold/60 hover:bg-coffee-cardHover hover:shadow-gold hover:-translate-y-1 transition-all duration-400"
              >
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-gold mb-2 group-hover:text-coffee-crema transition-colors">
                  {stat.numeric ? (
                    <CountUp to={stat.numeric} suffix={stat.suffix || ""} />
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-coffee-ivory mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-coffee-muted">
                  {stat.description}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: SUSTAINABILITY & RESPONSIBLE SOURCING */}
      <section className="py-20 sm:py-28 bg-coffee-dark border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal variant="fade-up" className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-coffee-gold bg-coffee-card/80 px-3.5 py-1 rounded-full border border-coffee-gold/30">
                <Leaf className="w-3.5 h-3.5 text-coffee-gold" />
                <span>Responsible Sourcing</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-coffee-ivory">
                Honoring the Smallholder Farming Communities of Ethiopia
              </h2>
              <p className="text-sm sm:text-base text-coffee-muted leading-relaxed">
                Ethiopian specialty coffee exists because of generations of smallholder farming families who tend to garden plots averaging less than two hectares. We treat these communities as our most vital partners.
              </p>

              <div className="space-y-4 pt-2 text-xs sm:text-sm text-coffee-muted">
                <div className="flex items-start space-x-3 group/leaf">
                  <Leaf className="w-4 h-4 text-coffee-gold flex-shrink-0 mt-0.5 group-hover/leaf:scale-110 transition-transform" />
                  <div>
                    <span className="font-semibold text-coffee-ivory">Native Agroforestry Conservation:</span>{" "}
                    Coffee naturally thrives beneath indigenous shade trees, preserving local biodiversity and water catchment systems in the highlands.
                  </div>
                </div>
                <div className="flex items-start space-x-3 group/award">
                  <Award className="w-4 h-4 text-coffee-gold flex-shrink-0 mt-0.5 group-hover/award:scale-110 transition-transform" />
                  <div>
                    <span className="font-semibold text-coffee-ivory">Quality Cherry Premiums:</span>{" "}
                    We partner with washing stations that incentivize meticulous hand-picking through cash premiums paid for ripe red cherry delivery.
                  </div>
                </div>
                <div className="flex items-start space-x-3 group/shield">
                  <ShieldCheck className="w-4 h-4 text-coffee-gold flex-shrink-0 mt-0.5 group-hover/shield:scale-110 transition-transform" />
                  <div>
                    <span className="font-semibold text-coffee-ivory">Water Recycling at Wet Mills:</span>{" "}
                    Promoting eco-pulpers and sedimentation stabilization ponds to protect pristine highland rivers in Gedeo and Sidama.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/about#sourcing-philosophy">
                  <Button variant="secondary" size="md" className="gap-2 group hover:border-coffee-gold/60">
                    <span>Read Our Sourcing Philosophy</span>
                    <ArrowRight className="w-4 h-4 text-coffee-gold transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="scale-up" delay={0.2} className="lg:col-span-6 relative">
              <div className="group relative h-[400px] sm:h-[450px] w-full rounded-2xl overflow-hidden border border-coffee-border shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&q=80"
                  alt="Coffee farming community in the Ethiopian highlands"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-darkest/90 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 11: BUYER INQUIRY CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-coffee-darkest via-coffee-dark to-coffee-darkest relative overflow-hidden text-center">
        <div className="absolute inset-0 coffee-radial-glow opacity-90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-coffee-card/90 border border-coffee-gold/50 mb-6 shadow-gold">
              <ShinyText text="COMMERCIAL & SPECIALTY EXPORT INQUIRIES" className="text-xs uppercase tracking-widest font-semibold" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-coffee-ivory leading-tight mb-6">
              Let&rsquo;s Bring Ethiopian Coffee to Your Market.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-coffee-muted max-w-2xl mx-auto leading-relaxed mb-10">
              Tell us about your coffee requirements, target origin, processing method, and expected volume. Our export team will provide current spot availability, cupping scores, and quotation terms.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Magnet magnetStrength={0.25}>
                <Link href="/quote" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 shadow-gold text-base group">
                    <span>Request a Quote</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Magnet>

              <Magnet magnetStrength={0.25}>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-base border-coffee-gold/60 text-coffee-ivory hover:text-coffee-darkest hover:border-coffee-gold">
                    Contact Export Team
                  </Button>
                </Link>
              </Magnet>
            </div>

            <p className="mt-8 text-xs text-coffee-subtle">
              Inquiries answered within 24 business hours • Express green coffee offer samples available globally
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
