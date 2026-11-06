import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShinyText } from "@/components/react-bits/ShinyText";
import { Magnet } from "@/components/react-bits/Magnet";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  ShieldCheck,
  Scale,
  Award,
  Leaf,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  Eye,
  Droplets,
  Layers,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Quality Standards & Traceability Protocols | Ethiopian Specialty Coffee",
  description:
    "Our rigorous physical and sensory quality control protocols for Ethiopian green coffee exports. Batch-level traceability, GrainPro packing, and responsible sourcing.",
};

export default function QualityPage() {
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
              <ShinyText text="TECHNICAL RIGOR & ORIGIN INTEGRITY" className="text-xs uppercase tracking-widest font-semibold" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-coffee-ivory leading-tight mb-4">
              Quality Assurance & Sourcing Traceability
            </h1>
            <p className="text-base sm:text-lg text-coffee-muted leading-relaxed">
              We apply uncompromising standards from the washing station raised bed to the dry-mill grading tables in Addis Ababa. Discover how we protect physical bean health, cup score consistency, and supply chain transparency.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4 Pillars of Quality Control */}
      <section className="py-20 sm:py-28 bg-coffee-darkest border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block mb-2">
              Our Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-coffee-ivory">
              The Four Pillars of Export Quality
            </h2>
            <p className="text-sm sm:text-base text-coffee-muted mt-3">
              Every export consignment is tested at our dry-mill partner cupping lab against strict physical and organoleptic benchmarks.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Scale,
                title: "1. Physical Grading",
                desc: "Moisture is confirmed between 10.5% and 11.5% using calibrated capacitance meters. Water activity is held strictly under 0.60 aw. Screen sizes (15/16/17+) are sorted via vibrating perforated sieves.",
                bullets: ["Standard 350g sample count", "Zero primary defects for G1", "Bean density verification"],
              },
              {
                icon: Eye,
                title: "2. Optical Sorting",
                desc: "After mechanical hulling and density grading, green coffee passes through bichromatic high-resolution optical color sorters that eject unripened quakers, discolored beans, and insect-damaged beans.",
                bullets: ["Bichromatic optical sorting", "Final conveyor hand-sorting", "Consistent jade-green appearance"],
              },
              {
                icon: FlaskConical,
                title: "3. Sensory Cupping",
                desc: "Conducted strictly under Specialty Coffee Association (SCA) cupping protocol. Fragrance, flavor clarity, acidity, body, balance, clean cup, and sweetness are calibrated across 5 sample cups per lot.",
                bullets: ["Certified Q-grader oversight", "Blind cupping confirmation", "Detailed SCA score sheets"],
              },
              {
                icon: ShieldCheck,
                title: "4. Transit Protection",
                desc: "High-grade specialty lots are sealed in original GrainPro multi-barrier hermetic liners before being placed into natural jute export sacks, locking in freshness during sea transit to buyer ports.",
                bullets: ["GrainPro hermetic protection", "60kg export jute packaging", "Container Kraft paper & desiccant"],
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal
                  key={idx}
                  variant="fade-up"
                  delay={idx * 0.1}
                  className="group p-7 rounded-2xl border border-coffee-border bg-coffee-card/80 shadow-card hover:border-coffee-gold/60 hover:bg-coffee-cardHover hover:shadow-gold hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-coffee-dark border border-coffee-gold/40 flex items-center justify-center text-coffee-gold group-hover:bg-coffee-gold group-hover:text-coffee-darkest group-hover:shadow-gold transition-all duration-300 mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-coffee-ivory mb-2 group-hover:text-coffee-gold transition-colors">{pillar.title}</h3>
                  <p className="text-xs text-coffee-muted leading-relaxed mb-4">
                    {pillar.desc}
                  </p>
                  <ul className="mt-auto space-y-1.5 pt-3 border-t border-coffee-border/40 text-[11px] text-coffee-subtle">
                    {pillar.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center space-x-1.5">
                        <span className="text-coffee-gold font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Batch-Level Traceability Section */}
      <section className="py-20 sm:py-28 bg-coffee-dark border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal variant="scale-up" className="lg:col-span-6 relative">
              <div className="group relative h-[420px] w-full rounded-2xl overflow-hidden border border-coffee-border shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
                  alt="Coffee cupping evaluation and sample inspection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-darkest/95 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-coffee-darkest/92 border border-coffee-gold/40 backdrop-blur-md shadow-card">
                  <p className="text-xs uppercase tracking-wider text-coffee-gold font-semibold">
                    ECTA & ECX Verification
                  </p>
                  <p className="text-xs text-coffee-muted mt-1">
                    Every export batch is registered with the Ethiopian Coffee & Tea Authority with official lot coding.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2} className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block">
                Origin Transparency
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-coffee-ivory">
                Batch-Level Traceability You Can Share With Your Customers
              </h2>
              <p className="text-sm sm:text-base text-coffee-muted leading-relaxed">
                Modern consumers and specialty roasters demand to know where their coffee originates. For every specialty lot we export, we document the regional zone, woreda, kebele, washing station name, and harvest timeline.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-coffee-muted">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-coffee-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-coffee-ivory">Woreda & Kebele Identification:</span>{" "}
                    Pinpointing the specific municipal jurisdiction and highland micro-terroir.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-coffee-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-coffee-ivory">Processing Station Details:</span>{" "}
                    Documentation of whether the coffee was wet-fermented or sun-dried on African raised bamboo beds.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-coffee-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-coffee-ivory">Harvest Week & Moisture Log:</span>{" "}
                    Historical data of parchment arrival, drying duration, and dry mill warehouse storage conditions.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Magnet magnetStrength={0.25}>
                  <Link href="/quote?type=sample">
                    <Button variant="primary" size="md" className="gap-2 shadow-gold group">
                      <span>Request Sample with Cupping Sheet</span>
                      <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </Magnet>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Responsible Producer Relationships */}
      <section className="py-20 sm:py-28 bg-coffee-darkest border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block mb-2">
              Community & Sustainability
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-ivory">
              Ethical Sourcing & Farming Community Respect
            </h2>
            <p className="text-sm sm:text-base text-coffee-muted mt-2">
              We operate with genuine respect for the smallholder coffee farmers who are the custodians of Ethiopia&rsquo;s heirloom Arabica trees.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal variant="fade-up" delay={0.1} className="group p-7 rounded-2xl border border-coffee-border bg-coffee-card hover:border-coffee-gold/60 hover:shadow-gold hover:-translate-y-1 transition-all duration-300">
              <Leaf className="w-8 h-8 text-coffee-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-xl font-bold text-coffee-ivory mb-2 group-hover:text-coffee-gold transition-colors">Native Forest Agroforestry</h3>
              <p className="text-xs sm:text-sm text-coffee-muted leading-relaxed">
                Ethiopian coffee naturally flourishes beneath native shade trees. This preserves crucial bird habitats, conserves topsoil, and eliminates the need for intensive synthetic fertilizers.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2} className="group p-7 rounded-2xl border border-coffee-border bg-coffee-card hover:border-coffee-gold/60 hover:shadow-gold hover:-translate-y-1 transition-all duration-300">
              <Award className="w-8 h-8 text-coffee-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-xl font-bold text-coffee-ivory mb-2 group-hover:text-coffee-gold transition-colors">Fair Washing Station Premiums</h3>
              <p className="text-xs sm:text-sm text-coffee-muted leading-relaxed">
                Quality begins at harvest. We support washing stations that compensate pickers for selective harvesting, ensuring farmers receive tangible rewards for only delivering ripe red cherries.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.3} className="group p-7 rounded-2xl border border-coffee-border bg-coffee-card hover:border-coffee-gold/60 hover:shadow-gold hover:-translate-y-1 transition-all duration-300">
              <Droplets className="w-8 h-8 text-coffee-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-xl font-bold text-coffee-ivory mb-2 group-hover:text-coffee-gold transition-colors">Water Protection at Wet Mills</h3>
              <p className="text-xs sm:text-sm text-coffee-muted leading-relaxed">
                Encouraging responsible wastewater sedimentation and water recycling practices at highland wet mills prevents acid fermentation discharge into local community rivers and streams.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-coffee-dark text-center relative overflow-hidden">
        <div className="absolute inset-0 coffee-radial-glow opacity-80 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-ivory mb-4">
              Evaluate Our Quality First-Hand
            </h2>
            <p className="text-sm sm:text-base text-coffee-muted max-w-xl mx-auto mb-8 leading-relaxed">
              We will gladly dispatch 250g or 500g green offer samples from current harvest lots directly to your cupping laboratory via express DHL courier.
            </p>
            <Magnet magnetStrength={0.25}>
              <Link href="/quote?type=sample">
                <Button variant="primary" size="lg" className="gap-2 shadow-gold group">
                  <span>Request Evaluation Samples</span>
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </Magnet>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
