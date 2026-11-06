"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { companyConfig } from "@/data/company";
import { Button } from "@/components/ui/button";
import { ShinyText } from "@/components/react-bits/ShinyText";
import { Magnet } from "@/components/react-bits/Magnet";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Coffee,
  Globe,
  Mail,
  Building,
  Phone,
  FileCheck,
  Sparkles,
} from "lucide-react";

function QuoteForm() {
  const searchParams = useSearchParams();
  const prefillCoffee = searchParams.get("coffee") || "";
  const prefillOrigin = searchParams.get("origin") || "";
  const prefillType = searchParams.get("type") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    country: "",
    phoneOrWhatsApp: "",
    coffeeType: prefillCoffee ? prefillCoffee : "Specialty Grade 1 & 2 Washed/Natural",
    preferredOrigin: prefillOrigin ? prefillOrigin : "Yirgacheffe",
    processingMethod: "Washed",
    gradeSpecification: "Grade 1 Specialty (SCA 87+)",
    estimatedQuantity: "19.2",
    quantityUnit: "metric tons",
    packagingPreference: "60 kg Jute Bag with GrainPro Liner",
    destinationPort: "",
    intendedUse: "Specialty Roasting",
    targetDeliveryPeriod: "Next Available Vessel (Prompt)",
    message: prefillType === "sample" ? "Please arrange 250g green coffee offer samples for our lab cupping evaluation." : "",
    preferredContactMethod: "Email",
    agreeToPrivacy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.companyName.trim()) errs.companyName = "Company name is required";
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errs.businessEmail = "Please enter a valid business email address";
    }
    if (!formData.country.trim()) errs.country = "Country is required";
    if (!formData.estimatedQuantity.trim() || Number(formData.estimatedQuantity) <= 0) {
      errs.estimatedQuantity = "Please enter a valid estimated quantity";
    }
    if (!formData.agreeToPrivacy) {
      errs.agreeToPrivacy = "You must agree to the Privacy Policy to submit an export inquiry";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 300, behavior: "smooth" });
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 100, behavior: "smooth" });
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full bg-coffee-darkest text-coffee-ivory min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 bg-coffee-dark border-b border-coffee-border/60 overflow-hidden">
        <div className="absolute inset-0 coffee-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 coffee-radial-glow opacity-60 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="fade-up">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-coffee-card border border-coffee-gold/40 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-coffee-gold" />
              <ShinyText text="B2B COMMERCIAL EXPORT INQUIRY" className="text-xs uppercase tracking-widest font-semibold" />
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-coffee-ivory leading-tight mb-4">
              Request an Export Price Quotation
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-coffee-muted max-w-2xl mx-auto leading-relaxed">
              Tell us about your green coffee requirements, target origin, processing method, and intended volume. Our export sales desk in Addis Ababa will prepare official offer sheets, current spot availability, and shipping terms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        {isSubmitted ? (
          /* Confirmation State */
          <ScrollReveal variant="scale-up" className="rounded-2xl border border-coffee-gold/40 bg-coffee-card/95 p-8 sm:p-12 text-center shadow-2xl space-y-6">
            <div className="w-16 h-16 rounded-full bg-coffee-dark border border-coffee-gold flex items-center justify-center text-coffee-gold mx-auto shadow-gold">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-ivory">
              Export Quotation Request Received
            </h2>

            <p className="text-sm sm:text-base text-coffee-muted max-w-xl mx-auto leading-relaxed">
              Thank you, <span className="text-coffee-ivory font-semibold">{formData.fullName}</span> from{" "}
              <span className="text-coffee-ivory font-semibold">{formData.companyName}</span>. Your inquiry for{" "}
              <span className="text-coffee-gold font-semibold">{formData.coffeeType}</span> ({formData.estimatedQuantity} {formData.quantityUnit}) has been routed directly to our Addis Ababa commercial export desk.
            </p>

            <div className="p-5 rounded-xl bg-coffee-dark border border-coffee-border max-w-lg mx-auto text-left text-xs sm:text-sm text-coffee-muted space-y-2">
              <div className="flex justify-between border-b border-coffee-border/40 pb-2">
                <span className="text-coffee-subtle">Target Destination:</span>
                <span className="text-coffee-ivory font-medium">{formData.destinationPort || formData.country}</span>
              </div>
              <div className="flex justify-between border-b border-coffee-border/40 pb-2">
                <span className="text-coffee-subtle">Preferred Contact Method:</span>
                <span className="text-coffee-ivory font-medium">{formData.preferredContactMethod} ({formData.businessEmail})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-coffee-subtle">Expected Response Window:</span>
                <span className="text-coffee-gold font-semibold">Within 24 business hours</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/coffee">
                <Button variant="outline" size="md" className="border-coffee-gold/60 text-coffee-ivory hover:text-coffee-darkest hover:border-coffee-gold">
                  Browse More Coffee Lots
                </Button>
              </Link>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData((prev) => ({ ...prev, fullName: "", message: "" }));
                }}
              >
                Submit Another Inquiry
              </Button>
            </div>

            <p className="text-[11px] text-coffee-subtle max-w-md mx-auto pt-2">
              * Notice: Submitting this inquiry form initiates commercial discussions and does not constitute a confirmed purchase contract or financial obligation.
            </p>
          </ScrollReveal>
        ) : (
          /* The Interactive Form */
          <ScrollReveal variant="fade-up">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-coffee-border bg-coffee-card/85 p-6 sm:p-10 shadow-2xl space-y-10 hover:border-coffee-gold/40 transition-colors">
              {/* Step 1: Buyer Information */}
              <div className="space-y-6">
                <div className="border-b border-coffee-border/60 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-coffee-ivory">
                      1. Buyer & Company Information
                    </h3>
                    <p className="text-xs text-coffee-muted mt-0.5">
                      Please provide your verified corporate contact details.
                    </p>
                  </div>
                  <Building className="w-5 h-5 text-coffee-gold" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                      Full Name <span className="text-coffee-gold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Marcus Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border text-sm text-coffee-ivory placeholder:text-coffee-subtle focus:outline-none transition-colors ${
                        errors.fullName ? "border-red-500 focus:border-red-500" : "border-coffee-border focus:border-coffee-gold"
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                      Company / Roastery Name <span className="text-coffee-gold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nordic Specialty Coffee Importers Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border text-sm text-coffee-ivory placeholder:text-coffee-subtle focus:outline-none transition-colors ${
                        errors.companyName ? "border-red-500 focus:border-red-500" : "border-coffee-border focus:border-coffee-gold"
                      }`}
                    />
                    {errors.companyName && <p className="text-[11px] text-red-400 mt-1">{errors.companyName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                      Business Email <span className="text-coffee-gold">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. procurement@company.com"
                      value={formData.businessEmail}
                      onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border text-sm text-coffee-ivory placeholder:text-coffee-subtle focus:outline-none transition-colors ${
                        errors.businessEmail ? "border-red-500 focus:border-red-500" : "border-coffee-border focus:border-coffee-gold"
                      }`}
                    />
                    {errors.businessEmail && <p className="text-[11px] text-red-400 mt-1">{errors.businessEmail}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                      Country of Operation <span className="text-coffee-gold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Germany, United States, Japan"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border text-sm text-coffee-ivory placeholder:text-coffee-subtle focus:outline-none transition-colors ${
                        errors.country ? "border-red-500 focus:border-red-500" : "border-coffee-border focus:border-coffee-gold"
                      }`}
                    />
                    {errors.country && <p className="text-[11px] text-red-400 mt-1">{errors.country}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +49 170 1234567"
                      value={formData.phoneOrWhatsApp}
                      onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-sm text-coffee-ivory placeholder:text-coffee-subtle focus:outline-none focus:border-coffee-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                      Intended Business Role
                    </label>
                    <select
                      value={formData.intendedUse}
                      onChange={(e) => setFormData({ ...formData, intendedUse: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-sm text-coffee-ivory focus:outline-none focus:border-coffee-gold transition-colors"
                    >
                      <option value="Green Coffee Importer">Green Coffee Importer</option>
                      <option value="Specialty Roasting">Specialty Coffee Roastery</option>
                      <option value="Wholesale Distributor">Wholesale Distributor</option>
                      <option value="Commercial Roasting / Blending">Commercial Roasting / Blending</option>
                      <option value="Hospitality / Retail Group">Hospitality / Retail Enterprise</option>
                      <option value="Other">Other Business</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Product Requirements */}
              <div className="space-y-6">
                <div className="border-b border-coffee-border/60 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-coffee-ivory">
                      2. Coffee Product & Lot Specifications
                    </h3>
                    <p className="text-xs text-coffee-muted mt-0.5">
                      Specify the origin, processing method, and grading requirements for your shipment.
                    </p>
                  </div>
                  <Coffee className="w-5 h-5 text-coffee-gold" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                      Preferred Origin Region
                    </label>
                    <select
                      value={formData.preferredOrigin}
                      onChange={(e) => setFormData({ ...formData, preferredOrigin: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-sm text-coffee-ivory focus:outline-none focus:border-coffee-gold transition-colors"
                    >
                      <option value="Yirgacheffe">Yirgacheffe (Floral & Bergamot)</option>
                      <option value="Sidama">Sidama (Berry & Cane Sugar)</option>
                      <option value="Guji">Guji (Tropical & Wild Strawberry)</option>
                      <option value="Limu">Limu (Citrus & Caramel)</option>
                      <option value="Jimma">Jimma (Commercial Arabica Base)</option>
                      <option value="Multi-Origin Consolidated">Multi-Origin Consolidated Container</option>
                      <option value="Open to Recommendation">Open to Recommendation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                      Processing Method
                    </label>
                    <select
                      value={formData.processingMethod}
                      onChange={(e) => setFormData({ ...formData, processingMethod: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-sm text-coffee-ivory focus:outline-none focus:border-coffee-gold transition-colors"
                    >
                      <option value="Washed">Fully Washed (Clean & Floral)</option>
                      <option value="Natural">Sun-Dried Natural (Fruity & Full Body)</option>
                      <option value="Anaerobic Experimental">Anaerobic / Experimental Micro-Lot</option>
                      <option value="Both Washed & Natural">Mix of Washed & Natural</option>
                      <option value="Commercial Unwashed">Commercial Natural (Djimmah Grade 5)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                      Target Grade / Cupping Standard
                    </label>
                    <select
                      value={formData.gradeSpecification}
                      onChange={(e) => setFormData({ ...formData, gradeSpecification: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-sm text-coffee-ivory focus:outline-none focus:border-coffee-gold transition-colors"
                    >
                      <option value="Grade 1 Specialty (SCA 87–90+)">Grade 1 Specialty (SCA 87–90+)</option>
                      <option value="Grade 2 Specialty (SCA 85–86.5)">Grade 2 Specialty (SCA 85–86.5)</option>
                      <option value="Grade 1 Anaerobic Micro-Lot">Grade 1 Anaerobic Micro-Lot (SCA 90+)</option>
                      <option value="Grade 4/5 Commercial Green">Grade 4/5 Commercial Green Arabica</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                      Estimated Volume <span className="text-coffee-gold">*</span>
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="number"
                        step="any"
                        placeholder="e.g. 19.2"
                        value={formData.estimatedQuantity}
                        onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                        className="w-1/2 px-3.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-sm text-coffee-ivory focus:outline-none focus:border-coffee-gold transition-colors"
                      />
                      <select
                        value={formData.quantityUnit}
                        onChange={(e) => setFormData({ ...formData, quantityUnit: e.target.value })}
                        className="w-1/2 px-2.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-xs sm:text-sm text-coffee-ivory focus:outline-none focus:border-coffee-gold transition-colors"
                      >
                        <option value="metric tons">Metric Tons (MT)</option>
                        <option value="60kg bags">Bags (60kg each)</option>
                        <option value="kilograms">Kilograms (kg)</option>
                        <option value="containers (20ft FCL)">20ft FCL Containers</option>
                      </select>
                    </div>
                    {errors.estimatedQuantity && <p className="text-[11px] text-red-400 mt-1">{errors.estimatedQuantity}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                      Packaging Preference
                    </label>
                    <select
                      value={formData.packagingPreference}
                      onChange={(e) => setFormData({ ...formData, packagingPreference: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-sm text-coffee-ivory focus:outline-none focus:border-coffee-gold transition-colors"
                    >
                      <option value="60 kg Jute Bag with GrainPro Liner">60 kg Jute Bag with GrainPro Liner</option>
                      <option value="30 kg Vacuum Box (Specialty Micro-Lot)">30 kg Vacuum Box (Micro-Lots)</option>
                      <option value="Standard 60 kg Export Jute (No Liner)">Standard 60 kg Jute (Commercial)</option>
                      <option value="Bulk Container Liner (21.5 MT)">Bulk Container Dry Liner (Commercial)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                      Destination Port / Country
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hamburg, Rotterdam, Oakland, Kobe"
                      value={formData.destinationPort}
                      onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-sm text-coffee-ivory placeholder:text-coffee-subtle focus:outline-none focus:border-coffee-gold transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Additional Requirements & Preferences */}
              <div className="space-y-6">
                <div className="border-b border-coffee-border/60 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-coffee-ivory">
                      3. Delivery Schedule & Notes
                    </h3>
                    <p className="text-xs text-coffee-muted mt-0.5">
                      Add sample requests, contract timing, or special phytosanitary/customs instructions.
                    </p>
                  </div>
                  <FileCheck className="w-5 h-5 text-coffee-gold" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                      Target Delivery / Shipment Window
                    </label>
                    <select
                      value={formData.targetDeliveryPeriod}
                      onChange={(e) => setFormData({ ...formData, targetDeliveryPeriod: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-sm text-coffee-ivory focus:outline-none focus:border-coffee-gold transition-colors"
                    >
                      <option value="Next Available Vessel (Prompt Shipment)">Prompt Shipment (Spot Stock)</option>
                      <option value="Within 30–60 Days">Within 30–60 Days</option>
                      <option value="Forward Contract (Current Crop Booking)">Forward Booking (Current Crop)</option>
                      <option value="Sample Evaluation First">Sample Evaluation First</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Email", "WhatsApp", "Phone"].map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredContactMethod: method })}
                          className={`py-2 text-xs font-medium rounded-lg border transition-all duration-200 ${
                            formData.preferredContactMethod === method
                              ? "bg-coffee-gold text-coffee-darkest border-coffee-gold font-semibold shadow-gold"
                              : "bg-coffee-dark text-coffee-muted border-coffee-border hover:text-coffee-ivory hover:border-coffee-gold/40"
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-ivory mb-1.5">
                    Message or Specific Lot Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mention desired flavor profile, sample courier address, target Incoterms (FOB Djibouti or CIF your port), or specific certification requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-coffee-dark border border-coffee-border text-sm text-coffee-ivory placeholder:text-coffee-subtle focus:outline-none focus:border-coffee-gold resize-y transition-colors"
                  />
                </div>

                {/* Privacy agreement checkbox */}
                <div className="pt-2">
                  <label className="flex items-start space-x-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.agreeToPrivacy}
                      onChange={(e) => setFormData({ ...formData, agreeToPrivacy: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-coffee-border bg-coffee-dark text-coffee-gold focus:ring-coffee-gold accent-[#C99A52]"
                    />
                    <span className="text-xs text-coffee-muted">
                      I agree to the{" "}
                      <Link href="/privacy" className="text-coffee-gold hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      and consent to receiving commercial export quotations, offer sheets, and lot availability updates from{" "}
                      {companyConfig.name}.
                    </span>
                  </label>
                  {errors.agreeToPrivacy && (
                    <p className="text-[11px] text-red-400 mt-1 pl-7">{errors.agreeToPrivacy}</p>
                  )}
                </div>
              </div>

              {/* Submission Button & Disclaimer */}
              <div className="pt-4 border-t border-coffee-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Magnet magnetStrength={0.2}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto gap-2 shadow-gold text-base group"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Quote Request</span>
                        <Send className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </Magnet>

                <div className="text-xs text-coffee-subtle text-center sm:text-right">
                  <p>Commercial quotation response within 24 hours.</p>
                  <p>Submitting does not constitute a confirmed purchase contract.</p>
                </div>
              </div>
            </form>
          </ScrollReveal>
        )}
      </section>
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[60vh] bg-coffee-darkest text-coffee-gold">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-8 h-8 border-2 border-coffee-gold border-t-transparent rounded-full animate-spin" />
            <span className="text-xs uppercase tracking-widest text-coffee-muted">Loading Quote Form...</span>
          </div>
        </div>
      }
    >
      <QuoteForm />
    </Suspense>
  );
}
