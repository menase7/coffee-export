import React from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import { coffeeOrigins } from "@/data/origins";
import { Coffee, Mail, Phone, MapPin, ShieldCheck, ArrowUpRight, ArrowRight } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#130E0B] border-t border-coffee-border pt-16 pb-12 overflow-hidden text-coffee-muted">
      {/* Refined Ethiopian decorative gold-copper gradient accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] ethiopian-accent-bar opacity-90 shadow-[0_0_12px_rgba(201,154,82,0.4)]" />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-coffee-gold/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-coffee-border/60">
          {/* Brand Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="group inline-flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coffee-gold to-coffee-copper flex items-center justify-center p-0.5 shadow-gold group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-coffee-darkest rounded-full flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-coffee-gold group-hover:text-coffee-crema transition-colors" />
                </div>
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-tight text-coffee-ivory group-hover:text-coffee-gold transition-colors duration-300">
                  {companyConfig.name}
                </span>
                <span className="block text-[11px] uppercase tracking-widest text-coffee-gold font-medium">
                  Ethiopian Green Coffee Exporter
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-coffee-muted max-w-md">
              {companyConfig.shortDescription}
            </p>

            {/* Traditional Ethiopian Amharic Cultural Respect Note */}
            <div className="pt-2 text-xs text-coffee-subtle flex items-center space-x-2 bg-coffee-dark/50 p-2.5 rounded-lg border border-coffee-border/40 max-w-md">
              <span className="text-coffee-gold font-serif font-semibold text-sm">ቡና የኛ ነው</span>
              <span className="text-coffee-muted text-[11px] leading-snug">
                — &ldquo;Coffee is our heritage.&rdquo; Born in the Ethiopian highlands, cultivated for the world.
              </span>
            </div>

            {/* Export Guarantee */}
            <div className="pt-2 flex items-center space-x-2 text-xs text-coffee-crema">
              <ShieldCheck className="w-4 h-4 text-coffee-gold flex-shrink-0" />
              <span>ECTA Registered Exporter • Port of Djibouti Transit</span>
            </div>
          </div>

          {/* Column 2: Coffee Origins */}
          <div>
            <h4 className="font-serif text-base font-semibold text-coffee-ivory uppercase tracking-wider mb-4 border-b border-coffee-border/40 pb-2">
              Coffee Origins
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {coffeeOrigins.map((origin) => (
                <li key={origin.id}>
                  <Link
                    href={`/origins#${origin.id}`}
                    className="hover:text-coffee-gold transition-colors inline-flex items-center space-x-1.5 group/item"
                  >
                    <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">{origin.name}</span>
                    <span className="text-[10px] text-coffee-subtle">({origin.zone.split(",")[0]})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation & Services */}
          <div>
            <h4 className="font-serif text-base font-semibold text-coffee-ivory uppercase tracking-wider mb-4 border-b border-coffee-border/40 pb-2">
              Export Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { href: "/services#green-coffee-supply", label: "Green Coffee Supply" },
                { href: "/services#bulk-wholesale-orders", label: "FCL & Bulk Supply" },
                { href: "/services#sample-evaluation", label: "Green Sample Dispatch" },
                { href: "/services#export-documentation", label: "Export Documentation" },
                { href: "/services#international-shipping", label: "Djibouti Port Logistics" },
                { href: "/quality", label: "Quality & Traceability" },
              ].map((srv, idx) => (
                <li key={idx}>
                  <Link
                    href={srv.href}
                    className="hover:text-coffee-gold transition-colors inline-flex items-center space-x-1 group/item"
                  >
                    <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">{srv.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Commercial Hub */}
          <div>
            <h4 className="font-serif text-base font-semibold text-coffee-ivory uppercase tracking-wider mb-4 border-b border-coffee-border/40 pb-2">
              Export Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-coffee-gold flex-shrink-0 mt-0.5" />
                <span>
                  {companyConfig.headquarters.address}, {companyConfig.headquarters.city},{" "}
                  {companyConfig.headquarters.country}
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-coffee-gold flex-shrink-0" />
                <a
                  href={`mailto:${companyConfig.contact.email}`}
                  className="hover:text-coffee-gold transition-colors break-all"
                >
                  {companyConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-coffee-gold flex-shrink-0" />
                <a
                  href={`tel:${companyConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-coffee-gold transition-colors"
                >
                  {companyConfig.contact.phone}
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/quote"
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-coffee-gold hover:text-coffee-goldHover space-x-1.5 group/quote transition-colors"
                >
                  <span>Request Export Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover/quote:translate-x-0.5 group-hover/quote:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-coffee-subtle space-y-4 sm:space-y-0">
          <p>
            &copy; {currentYear} {companyConfig.name}. All rights reserved. Authentic Ethiopian Arabica Coffee Exports.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-coffee-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-coffee-gold transition-colors">
              Contact Us
            </Link>
            <span className="text-[10px] text-coffee-border">|</span>
            <span className="text-[11px] text-coffee-subtle">ECX / ECTA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
