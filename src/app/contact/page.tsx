"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import { Button } from "@/components/ui/button";
import { ShinyText } from "@/components/react-bits/ShinyText";
import { Magnet } from "@/components/react-bits/Magnet";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "General Export Inquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
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
              <ShinyText text="DIRECT ORIGIN EXPORT DESK" className="text-xs uppercase tracking-widest font-semibold" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-coffee-ivory leading-tight mb-4">
              Contact Our Commercial Team
            </h1>
            <p className="text-base sm:text-lg text-coffee-muted leading-relaxed">
              Connect directly with our export operations desk in Addis Ababa for green coffee offers, sample dispatch schedules, contract terms, or origin visit coordination.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content: Info & Quick Inquiry Form */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Details Cards */}
          <ScrollReveal variant="fade-up" className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl border border-coffee-border bg-coffee-card/85 space-y-6 shadow-card hover:border-coffee-gold/50 transition-colors">
              <h2 className="font-serif text-2xl font-bold text-coffee-ivory border-b border-coffee-border/60 pb-3">
                Headquarters & Export Office
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-coffee-dark border border-coffee-gold/40 flex items-center justify-center text-coffee-gold flex-shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-coffee-subtle block font-semibold">
                      Physical Address
                    </span>
                    <p className="text-coffee-ivory font-medium">
                      {companyConfig.headquarters.address}
                    </p>
                    <p className="text-coffee-muted text-xs">
                      {companyConfig.headquarters.city}, {companyConfig.headquarters.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-coffee-dark border border-coffee-gold/40 flex items-center justify-center text-coffee-gold flex-shrink-0 mt-0.5 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-coffee-subtle block font-semibold">
                      Export Inquiries Email
                    </span>
                    <a
                      href={`mailto:${companyConfig.contact.email}`}
                      className="text-coffee-gold hover:underline font-medium break-all"
                    >
                      {companyConfig.contact.email}
                    </a>
                    <p className="text-xs text-coffee-muted mt-0.5">Sales: {companyConfig.contact.salesEmail}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-coffee-dark border border-coffee-gold/40 flex items-center justify-center text-coffee-gold flex-shrink-0 mt-0.5 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-coffee-subtle block font-semibold">
                      Direct Telephone & WhatsApp
                    </span>
                    <a
                      href={`tel:${companyConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-coffee-ivory hover:text-coffee-gold font-medium block"
                    >
                      {companyConfig.contact.phone}
                    </a>
                    <span className="text-xs text-coffee-muted">WhatsApp: {companyConfig.contact.whatsapp}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-coffee-dark border border-coffee-gold/40 flex items-center justify-center text-coffee-gold flex-shrink-0 mt-0.5 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-coffee-subtle block font-semibold">
                      Business Hours
                    </span>
                    <p className="text-coffee-ivory font-medium">{companyConfig.contact.hours}</p>
                    <p className="text-xs text-coffee-muted">{companyConfig.contact.timezone}</p>
                  </div>
                </div>
              </div>

              {/* Notice */}
              <div className="p-4 rounded-xl bg-coffee-dark border border-coffee-border/70 text-xs text-coffee-muted space-y-1">
                <span className="font-semibold text-coffee-gold flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Looking for Bulk Volume Quotation?</span>
                </span>
                <p>
                  For container-load orders (19.2 MT) or customized micro-lot contracts, we recommend our specialized quote form.
                </p>
                <div className="pt-2">
                  <Link href="/quote" className="text-coffee-gold hover:underline font-semibold inline-flex items-center space-x-1">
                    <span>Open Request a Quote Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Quick Inquiry Form */}
          <ScrollReveal variant="fade-up" delay={0.2} className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl border border-coffee-border bg-coffee-card/85 shadow-card hover:border-coffee-gold/50 transition-colors">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-coffee-ivory mb-2">
                Send a Direct Message
              </h2>
              <p className="text-xs sm:text-sm text-coffee-muted mb-8">
                Fill in the details below and a coffee export coordinator will respond within 24 business hours.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-coffee-dark border border-coffee-gold/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-coffee-card border border-coffee-gold flex items-center justify-center text-coffee-gold mx-auto shadow-gold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-coffee-ivory">Message Sent Successfully</h3>
                  <p className="text-xs sm:text-sm text-coffee-muted max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your inquiry has been received. Our export desk in Addis Ababa will review your requirements and respond shortly.
                  </p>
                  <Button variant="secondary" size="sm" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Elena Rostova"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-sm text-coffee-ivory placeholder:text-coffee-subtle focus:outline-none focus:border-coffee-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. elena@roastery.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-sm text-coffee-ivory placeholder:text-coffee-subtle focus:outline-none focus:border-coffee-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                        Company / Roastery Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alpine Coffee Works"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-sm text-coffee-ivory placeholder:text-coffee-subtle focus:outline-none focus:border-coffee-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-sm text-coffee-ivory focus:outline-none focus:border-coffee-gold transition-colors"
                      >
                        <option value="General Export Inquiry">General Export Inquiry</option>
                        <option value="Sample Request Coordination">Sample Request Coordination</option>
                        <option value="FOB / CIF Price Inquiry">FOB / CIF Ocean Pricing Inquiry</option>
                        <option value="Forward Harvest Contract">Forward Harvest Contract Discussion</option>
                        <option value="Origin Visit Arrangement">Origin Visit Arrangement (Nov–Jan)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please share details regarding your inquiry, preferred coffee origin, volumes, or target shipping timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-sm text-coffee-ivory placeholder:text-coffee-subtle focus:outline-none focus:border-coffee-gold resize-y transition-colors"
                    />
                  </div>

                  <Magnet magnetStrength={0.2}>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto gap-2 shadow-gold group"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </Magnet>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
