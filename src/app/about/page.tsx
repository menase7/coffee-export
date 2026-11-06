import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import { Button } from "@/components/ui/button";
import { ShinyText } from "@/components/react-bits/ShinyText";
import { Magnet } from "@/components/react-bits/Magnet";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  ShieldCheck,
  Award,
  Globe2,
  HeartHandshake,
  CheckCircle2,
  Coffee,
  ArrowRight,
  MapPin,
  Calendar,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "About Our Company | Authentic Ethiopian Coffee Export",
  description:
    "Learn about our Ethiopian coffee export enterprise, sourcing philosophy across Yirgacheffe, Sidama, and Guji, and our commitment to reliable international roaster partnerships.",
};

export default function AboutPage() {
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
              <ShinyText text="CORPORATE PROFILE & HERITAGE" className="text-xs uppercase tracking-widest font-semibold" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-coffee-ivory leading-tight mb-6">
              Rooted in the Soil of Ethiopia, Committed to Global Excellence.
            </h1>
            <p className="text-base sm:text-lg text-coffee-muted leading-relaxed">
              Founded in Addis Ababa, {companyConfig.name} is a licensed green coffee exporter dedicated to bridging Ethiopia&rsquo;s historic highland coffee traditions with discerning international coffee importers, wholesale buyers, and specialty roasters worldwide.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Heritage & Mission Section */}
      <section className="py-20 sm:py-28 bg-coffee-darkest border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal variant="scale-up" className="lg:col-span-6 relative">
              <div className="group relative h-[450px] w-full rounded-2xl overflow-hidden border border-coffee-border shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80"
                  alt="Ethiopian coffee ceremony traditional Jebena pot"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-darkest/95 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-coffee-darkest/92 border border-coffee-gold/40 backdrop-blur-md shadow-card">
                  <p className="font-serif text-lg font-bold text-coffee-ivory">The Cultural Cradle of Arabica</p>
                  <p className="text-xs text-coffee-muted mt-1 leading-relaxed">
                    Coffee in Ethiopia is not merely an export product; it is an enduring cultural heritage celebrating community, hospitality, and respect.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2} className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block">
                Our Foundation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-coffee-ivory">
                Mission, Vision & Core Values
              </h2>
              <p className="text-sm sm:text-base text-coffee-muted leading-relaxed">
                We believe dependable international trade is built upon transparent communication, unwavering quality verification, and mutually rewarding long-term partnerships with both Ethiopian producers and international buyers.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-coffee-card/80 border border-coffee-border hover:border-coffee-gold/50 transition-colors shadow-sm">
                  <h3 className="font-serif text-lg font-bold text-coffee-gold mb-1.5">Our Mission</h3>
                  <p className="text-xs sm:text-sm text-coffee-muted leading-relaxed">
                    To deliver pristine, traceable Ethiopian Arabica green coffee to international markets with consistent grade execution, competitive export logistics, and uncompromising commercial integrity.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-coffee-card/80 border border-coffee-border hover:border-coffee-gold/50 transition-colors shadow-sm">
                  <h3 className="font-serif text-lg font-bold text-coffee-gold mb-1.5">Our Vision</h3>
                  <p className="text-xs sm:text-sm text-coffee-muted leading-relaxed">
                    To be the most trusted origin partner for green coffee buyers worldwide, elevating the value of Ethiopian coffee while supporting sustainable livelihoods across highland farming communities.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-coffee-card/80 border border-coffee-border hover:border-coffee-gold/50 transition-colors shadow-sm">
                  <h3 className="font-serif text-lg font-bold text-coffee-gold mb-2">Core Values</h3>
                  <div className="grid grid-cols-2 gap-2 text-xs text-coffee-ivory pt-1">
                    <span className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-coffee-gold flex-shrink-0" />
                      <span>Traceability & Truth</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-coffee-gold flex-shrink-0" />
                      <span>Sensory Consistency</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-coffee-gold flex-shrink-0" />
                      <span>Respect for Farmers</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-coffee-gold flex-shrink-0" />
                      <span>Logistical Reliability</span>
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sourcing Philosophy Section */}
      <section id="sourcing-philosophy" className="py-20 sm:py-28 bg-coffee-dark border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block mb-2">
              Origin Commitment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-coffee-ivory">
              Our Sourcing Philosophy
            </h2>
            <p className="text-sm sm:text-base text-coffee-muted mt-3">
              We source directly through cooperative unions and verified private washing stations in Ethiopia&rsquo;s most celebrated coffee zones.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: "Highland Terroir Selection",
                desc: "We focus on microclimates situated between 1,800 and 2,300 meters above sea level where slow bean maturation yields dense Arabica with vivid cup complexity.",
              },
              {
                icon: HeartHandshake,
                title: "Direct Producer Ties",
                desc: "By maintaining continuous on-the-ground communication during harvest season, we ensure transparent pricing, consistent red-cherry sorting, and fair washing station premiums.",
              },
              {
                icon: ShieldCheck,
                title: "Dry-Mill Quality Oversight",
                desc: "Every parchment batch transported to our partner dry mills in Addis Ababa undergoes mechanical hulling, gravity grading, bichromatic optical sorting, and final hand inspection.",
              },
            ].map((phil, idx) => {
              const Icon = phil.icon;
              return (
                <ScrollReveal
                  key={idx}
                  variant="fade-up"
                  delay={idx * 0.12}
                  className="group p-7 rounded-2xl border border-coffee-border bg-coffee-card/75 shadow-card hover:border-coffee-gold/60 hover:bg-coffee-cardHover hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-coffee-dark border border-coffee-gold/40 flex items-center justify-center text-coffee-gold group-hover:bg-coffee-gold group-hover:text-coffee-darkest group-hover:shadow-gold transition-all duration-300 mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-coffee-ivory mb-2 group-hover:text-coffee-gold transition-colors">{phil.title}</h3>
                  <p className="text-xs sm:text-sm text-coffee-muted leading-relaxed">
                    {phil.desc}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership & Export Desk */}
      <section className="py-20 sm:py-28 bg-coffee-darkest border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block mb-2">
              Operations & Governance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-coffee-ivory">
              Export Operations Desk
            </h2>
            <p className="text-sm sm:text-base text-coffee-muted mt-3">
              Our export management team coordinates statutory export licensing with the Ethiopian Coffee & Tea Authority, dry-mill processing schedules, and international sea carriage to major world destinations.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                tag: "Commercial Office",
                title: "Addis Ababa Export Hub",
                desc: "Oversees international contract execution, buyer relations, commercial proforma issuance, and bank Letter of Credit coordination.",
                subIcon: MapPin,
                subText: "Bole Export Trade Zone, Addis Ababa",
              },
              {
                tag: "Sensory & Milling Desk",
                title: "Quality & Cupping Lab",
                desc: "Conducts pre-shipment sample drawing, moisture level validation, defect counting, and Q-grader cupping assessments.",
                subIcon: Award,
                subText: "SCA Cupping Protocols & Calibration",
              },
              {
                tag: "Freight & Port Desk",
                title: "Logistics & Rail Dispatch",
                desc: "Manages container stuffing at Kality Dry Port, GrainPro lining, electric rail transit, and Port of Djibouti vessel loading.",
                subIcon: Globe2,
                subText: "FOB Djibouti & CIF Global Ports",
              },
            ].map((desk, idx) => {
              const SubIcon = desk.subIcon;
              return (
                <ScrollReveal
                  key={idx}
                  variant="fade-up"
                  delay={idx * 0.12}
                  className="group p-7 rounded-2xl border border-coffee-border bg-coffee-card/80 hover:border-coffee-gold/60 hover:bg-coffee-cardHover hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-[10px] uppercase tracking-widest text-coffee-gold font-semibold block mb-1">
                    {desk.tag}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-coffee-ivory mb-3 group-hover:text-coffee-gold transition-colors">
                    {desk.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-coffee-muted leading-relaxed mb-5">
                    {desk.desc}
                  </p>
                  <div className="text-xs text-coffee-subtle flex items-center space-x-2 border-t border-coffee-border/40 pt-3.5">
                    <SubIcon className="w-3.5 h-3.5 text-coffee-gold flex-shrink-0" />
                    <span>{desk.subText}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-coffee-dark text-center relative overflow-hidden">
        <div className="absolute inset-0 coffee-radial-glow opacity-80 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-coffee-ivory mb-4">
              Partner With a Dedicated Ethiopian Coffee Exporter
            </h2>
            <p className="text-sm sm:text-base text-coffee-muted max-w-xl mx-auto mb-8 leading-relaxed">
              Whether you require an exclusive micro-lot for specialty roasting or full container loads for wholesale distribution, our export desk is ready to support your requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Magnet magnetStrength={0.25}>
                <Link href="/quote">
                  <Button variant="primary" size="lg" className="gap-2 shadow-gold group">
                    <span>Request a Quotation</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Magnet>
              <Magnet magnetStrength={0.25}>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-coffee-gold/60 text-coffee-ivory hover:text-coffee-darkest hover:border-coffee-gold">
                    Contact Our Team
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
