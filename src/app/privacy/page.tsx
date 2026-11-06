import React from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import { ShinyText } from "@/components/react-bits/ShinyText";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Sparkles, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Commercial Export Inquiries",
  description:
    "Privacy Policy for commercial green coffee inquiries, quotation processing, and B2B international communication.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2024";

  return (
    <div className="flex flex-col w-full bg-coffee-darkest text-coffee-ivory min-h-screen">
      {/* Header Banner */}
      <section className="py-20 sm:py-24 bg-coffee-dark border-b border-coffee-border/60 relative overflow-hidden">
        <div className="absolute inset-0 coffee-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 coffee-radial-glow opacity-60 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-coffee-card border border-coffee-gold/40 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-coffee-gold" />
              <ShinyText text="LEGAL & COMMERCIAL TRANSPARENCY" className="text-xs uppercase tracking-widest font-semibold" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-coffee-ivory leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-coffee-muted">
              Last Updated: {lastUpdated} • {companyConfig.name}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow text-sm sm:text-base text-coffee-muted leading-relaxed space-y-10">
        <ScrollReveal variant="fade-up" delay={0.1}>
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-2xl font-bold text-coffee-ivory mb-3">1. Overview</h2>
              <p>
                {companyConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates this website to provide information about our Ethiopian green coffee export capabilities and facilitate business-to-business (B2B) inquiries from international coffee importers, roasters, wholesale distributors, and commercial partners. This Privacy Policy details how we collect, utilize, and protect commercial inquiry information submitted through this platform.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-coffee-ivory mb-3">2. Information We Collect</h2>
              <p className="mb-3">
                Because this website operates primarily as a B2B export gateway, we collect information submitted directly by business representatives inquiring about green coffee supply, quotations, or sample evaluation:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li><strong className="text-coffee-ivory">Contact Information:</strong> Full name, corporate email address, telephone/WhatsApp number, country, and company name.</li>
                <li><strong className="text-coffee-ivory">Export Specifications:</strong> Coffee origin interest (e.g. Yirgacheffe, Sidama, Guji), target processing methods, grade specifications, estimated volumes, packaging preferences, and discharge port.</li>
                <li><strong className="text-coffee-ivory">Commercial Communications:</strong> Notes, courier delivery addresses for green coffee samples, and contractual correspondence.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-coffee-ivory mb-3">3. How We Use Commercial Inquiry Information</h2>
              <p className="mb-3">We utilize submitted business data exclusively for lawful international commerce purposes, including:</p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>Preparing official Proforma Invoices, commercial offer sheets, and export pricing schedules.</li>
                <li>Coordinating DHL express courier delivery of physical green coffee samples.</li>
                <li>Facilitating statutory export documentation with the Ethiopian Coffee & Tea Authority (ECTA), National Bank of Ethiopia, and maritime carriers.</li>
                <li>Communicating vessel transit updates, shipping documents (Bills of Lading), and cupping lab reports.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-coffee-ivory mb-3">4. Information Sharing & Third Parties</h2>
              <p>
                We do not sell, rent, or trade your corporate contact information to third-party marketing companies. Information is shared only with verified logistics partners (such as international shipping lines, freight forwarders, and courier services) strictly as required to fulfill sample dispatches or cargo shipments.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-coffee-ivory mb-3">5. Data Retention & Security</h2>
              <p>
                We maintain technical and organizational safeguards to protect commercial inquiry records from unauthorized access, loss, or alteration. Inactive inquiries are purged according to our statutory commercial retention policies under Ethiopian commercial trade law.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-coffee-ivory mb-3">6. Contact & Inquiries</h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to update or delete your contact records from our export database, please reach out directly:
              </p>
              <div className="p-5 rounded-2xl bg-coffee-card border border-coffee-border mt-3 text-xs sm:text-sm space-y-1.5 shadow-sm">
                <p className="font-semibold text-coffee-ivory">{companyConfig.name}</p>
                <p>{companyConfig.headquarters.address}, {companyConfig.headquarters.city}, {companyConfig.headquarters.country}</p>
                <p>Email: <a href={`mailto:${companyConfig.contact.email}`} className="text-coffee-gold hover:underline">{companyConfig.contact.email}</a></p>
                <p>Phone: {companyConfig.contact.phone}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
