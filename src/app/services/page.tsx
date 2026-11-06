import React from "react";
import Link from "next/link";
import Image from "next/image";
import { exportServices, exportProcessSteps } from "@/data/services";
import { companyConfig } from "@/data/company";
import { Button } from "@/components/ui/button";
import { ShinyText } from "@/components/react-bits/ShinyText";
import { Magnet } from "@/components/react-bits/Magnet";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import {
  Coffee,
  Container,
  FlaskConical,
  FileCheck,
  Ship,
  Handshake,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Train,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Export Services & Shipping Logistics | Port of Djibouti Transit",
  description:
    "Comprehensive green coffee export capabilities: FCL ocean freight, GrainPro packing, ECTA statutory documentation, ICO origin certificates, and express sample coordination.",
};

const serviceIcons: Record<string, React.ElementType> = {
  Bean: Coffee,
  Container: Container,
  FlaskConical: FlaskConical,
  FileCheck: FileCheck,
  Ship: Ship,
  Handshake: Handshake,
};

export default function ServicesPage() {
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
              <ShinyText text="INTERNATIONAL LOGISTICS & COMMERCIAL EXECUTION" className="text-xs uppercase tracking-widest font-semibold" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-coffee-ivory leading-tight mb-4">
              End-to-End Green Coffee Export Services
            </h1>
            <p className="text-base sm:text-lg text-coffee-muted leading-relaxed">
              We manage the entire export chain: from highland washing station lot allocation and dry-mill grading in Addis Ababa to certified export documentation and secure electric rail transit to the Port of Djibouti.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Breakdown Grid */}
      <section className="py-20 sm:py-28 bg-coffee-darkest border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block mb-2">
              Our Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-ivory">
              Services Designed for International Coffee Importers
            </h2>
            <p className="text-sm sm:text-base text-coffee-muted mt-2">
              Learn what you can expect at each stage and how we ensure cargo integrity across thousands of nautical miles.
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            {exportServices.map((service, index) => {
              const Icon = serviceIcons[service.iconName] || Coffee;
              return (
                <ScrollReveal
                  key={service.id}
                  variant="fade-up"
                  delay={index * 0.08}
                  className="scroll-mt-24 p-6 sm:p-10 rounded-2xl border border-coffee-border bg-coffee-card/75 shadow-card hover:border-coffee-gold/60 transition-all duration-300"
                >
                  <div id={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-coffee-dark border border-coffee-gold/50 flex items-center justify-center text-coffee-gold shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-coffee-ivory">
                        {service.title}
                      </h3>
                      <p className="text-sm text-coffee-muted leading-relaxed">
                        {service.fullDescription}
                      </p>
                    </div>

                    <div className="lg:col-span-7 space-y-5 lg:border-l lg:border-coffee-border/60 lg:pl-8">
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-coffee-gold font-semibold mb-3">
                          Key Deliverables & Specifications
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-coffee-muted">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start space-x-2">
                              <CheckCircle2 className="w-4 h-4 text-coffee-gold flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl bg-coffee-dark border border-coffee-border">
                        <span className="text-[11px] uppercase tracking-wider text-coffee-subtle block mb-1 font-semibold">
                          What We Need to Get Started:
                        </span>
                        <p className="text-xs text-coffee-ivory">
                          {service.buyerRequirements}
                        </p>
                      </div>

                      <div className="pt-2">
                        <Link href={`/quote?service=${encodeURIComponent(service.title)}`}>
                          <Button variant="primary" size="sm" className="gap-2 shadow-gold text-xs group">
                            <span>Inquire for {service.title.split("&")[0]}</span>
                            <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Port of Djibouti Logistics Special Spotlight */}
      <section className="py-20 sm:py-24 bg-coffee-dark border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal variant="fade-up" className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block">
                The Export Corridor
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-coffee-ivory">
                Addis Ababa to Port of Djibouti Corridor
              </h2>
              <p className="text-sm sm:text-base text-coffee-muted leading-relaxed">
                Ethiopia&rsquo;s dry port logistics have been transformed by the modern standard-gauge electrified railway connecting the capital to the Doraleh Container Terminal in Djibouti.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-coffee-muted">
                <div className="flex items-start space-x-3">
                  <Train className="w-4 h-4 text-coffee-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-coffee-ivory">Electric Rail Transit:</span>{" "}
                    Fast, low-carbon container rail transit cuts overland transit times from days to hours, mitigating road vibration and rain exposure.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-4 h-4 text-coffee-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-coffee-ivory">Moisture & Desiccant Protection:</span>{" "}
                    Every ocean container is fitted with specialized industrial desiccants (calcium chloride) and Kraft paper liners to prevent container rain during sea voyage.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileCheck className="w-4 h-4 text-coffee-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-coffee-ivory">Seamless Document Handover:</span>{" "}
                    Original Bill of Lading, Phytosanitary, and ICO certificates surrendered via courier or digital bank Letter of Credit presentation without delay.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/quote">
                  <Button variant="outline" size="md" className="border-coffee-gold/60 text-coffee-ivory hover:text-coffee-darkest hover:border-coffee-gold">
                    Discuss Shipping & Delivery Terms
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="scale-up" delay={0.2} className="lg:col-span-6 relative">
              <div className="group relative h-[380px] sm:h-[440px] w-full rounded-2xl overflow-hidden border border-coffee-border shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=1200&q=80"
                  alt="Green coffee export sacks prepared for container loading"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-darkest/95 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-coffee-darkest/92 border border-coffee-gold/40 backdrop-blur-md shadow-card">
                  <p className="text-xs uppercase tracking-wider text-coffee-gold font-semibold">Standard Container Capacity</p>
                  <p className="text-xs text-coffee-muted mt-0.5">
                    1 x 20ft Full Container Load (FCL) = 320 bags (60kg each) ≈ 19,200 kg net green coffee.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5-Step Export Workflow Section */}
      <section className="py-20 sm:py-28 bg-coffee-darkest border-b border-coffee-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-coffee-gold block mb-2">
              Buying Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-ivory">
              How International Buyers Work With Us
            </h2>
            <p className="text-sm sm:text-base text-coffee-muted mt-2">
              From the initial specification review to customs clearance at your destination port.
            </p>
          </ScrollReveal>

          <ProcessTimeline />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-coffee-dark text-center relative overflow-hidden">
        <div className="absolute inset-0 coffee-radial-glow opacity-80 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-ivory mb-4">
              Request an Export Price Quotation
            </h2>
            <p className="text-sm sm:text-base text-coffee-muted max-w-xl mx-auto mb-8 leading-relaxed">
              Let us know your target coffee grade, preferred origin, volume, and discharge port. We will prepare commercial pricing and dispatch offer samples.
            </p>
            <Magnet magnetStrength={0.25}>
              <Link href="/quote">
                <Button variant="primary" size="lg" className="gap-2 shadow-gold group">
                  <span>Submit Export Requirements</span>
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
