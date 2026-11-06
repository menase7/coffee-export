import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { coffeeProducts, CoffeeProduct } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Magnet } from "@/components/react-bits/Magnet";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  ShieldCheck,
  Box,
  Droplets,
  Mountain,
  Calendar,
  CheckCircle2,
  FileCheck,
  Ship,
} from "lucide-react";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return coffeeProducts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = coffeeProducts.find((p) => p.slug === params.slug);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Ethiopian Green Coffee Export`,
    description: `${product.description} Available for export from Ethiopia. Grade: ${product.grade}, Origin: ${product.origin}.`,
    openGraph: {
      title: `${product.name} - Ethiopian Green Coffee`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = coffeeProducts.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-coffee-darkest text-coffee-ivory min-h-screen">
      {/* Breadcrumb & Navigation Bar */}
      <div className="bg-coffee-dark border-b border-coffee-border/60 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/coffee"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm text-coffee-gold hover:text-coffee-goldHover font-medium transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Coffee Catalog</span>
          </Link>

          <span className="text-xs text-coffee-subtle hidden sm:inline">
            Export Lot: <span className="text-coffee-gold font-mono">{product.id}</span>
          </span>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Photography & Visual Details */}
          <ScrollReveal variant="scale-up" className="lg:col-span-6 space-y-6">
            <div className="group relative h-[400px] sm:h-[480px] w-full rounded-2xl overflow-hidden border border-coffee-border shadow-2xl bg-coffee-dark">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-darkest/85 via-transparent to-transparent" />

              {/* Cupping Score Floating Badge */}
              {product.cuppingScore && (
                <div className="absolute top-4 right-4 flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-coffee-darkest/95 border border-coffee-gold/60 text-coffee-gold font-bold text-sm shadow-gold backdrop-blur-md">
                  <Star className="w-4 h-4 fill-coffee-gold" />
                  <span>SCA Score {product.cuppingScore}</span>
                </div>
              )}

              {/* Status pill */}
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald-950/90 text-emerald-300 border border-emerald-700/60 backdrop-blur-md shadow-sm">
                  {product.availability}
                </span>
              </div>
            </div>

            {/* Packaging options card */}
            <div className="p-5 rounded-2xl border border-coffee-border bg-coffee-card/80 space-y-3 shadow-sm hover:border-coffee-gold/40 transition-colors">
              <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-coffee-gold flex items-center space-x-2">
                <Box className="w-4 h-4" />
                <span>Export Packaging Options</span>
              </h4>
              <ul className="space-y-2 text-xs text-coffee-muted">
                {product.packagingOptions.map((pkg, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-coffee-gold flex-shrink-0 mt-0.5" />
                    <span>{pkg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Right Column: Technical Specifications & Action */}
          <ScrollReveal variant="fade-up" delay={0.2} className="lg:col-span-6 space-y-6">
            {/* Header Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="gold" className="text-xs font-semibold">
                {product.grade}
              </Badge>
              <Badge variant="crema" className="text-xs font-semibold">
                {product.processingMethod}
              </Badge>
              <span className="text-xs text-coffee-subtle">{product.region}</span>
            </div>

            {/* Product Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-coffee-ivory leading-tight">
              {product.name}
            </h1>

            {/* Cupping Notes */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-coffee-subtle block mb-2 font-medium">
                Sensory Cupping Notes (SCA Protocol)
              </span>
              <div className="flex flex-wrap gap-2">
                {product.cuppingNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-coffee-card border border-coffee-border text-xs font-medium text-coffee-crema hover:border-coffee-gold/40 transition-colors"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Narrative Description */}
            <p className="text-sm sm:text-base text-coffee-muted leading-relaxed">
              {product.description}
            </p>

            {/* Specifications Table */}
            <div className="rounded-2xl border border-coffee-border bg-coffee-card/90 overflow-hidden shadow-sm">
              <div className="px-5 py-3.5 bg-coffee-dark border-b border-coffee-border font-serif text-sm font-bold text-coffee-ivory">
                Technical Sourcing Specifications
              </div>
              <div className="divide-y divide-coffee-border/50 text-xs sm:text-sm">
                <div className="grid grid-cols-2 p-3.5">
                  <span className="text-coffee-subtle">Origin / Region</span>
                  <span className="text-coffee-ivory font-medium">{product.origin} ({product.region})</span>
                </div>
                <div className="grid grid-cols-2 p-3.5">
                  <span className="text-coffee-subtle">Altitude / Elevation</span>
                  <span className="text-coffee-ivory font-medium">{product.altitude}</span>
                </div>
                <div className="grid grid-cols-2 p-3.5">
                  <span className="text-coffee-subtle">Botanical Variety</span>
                  <span className="text-coffee-ivory font-medium">{product.variety}</span>
                </div>
                <div className="grid grid-cols-2 p-3.5">
                  <span className="text-coffee-subtle">Moisture Content</span>
                  <span className="text-coffee-ivory font-medium">{product.moistureContent}</span>
                </div>
                <div className="grid grid-cols-2 p-3.5">
                  <span className="text-coffee-subtle">Screen Size Distribution</span>
                  <span className="text-coffee-ivory font-medium">{product.screenSize}</span>
                </div>
                <div className="grid grid-cols-2 p-3.5">
                  <span className="text-coffee-subtle">Harvest Crop Season</span>
                  <span className="text-coffee-ivory font-medium">{product.harvestSeason}</span>
                </div>
                <div className="grid grid-cols-2 p-3.5">
                  <span className="text-coffee-subtle">Minimum Order Quantity</span>
                  <span className="text-coffee-ivory font-medium">{product.minimumOrderQuantity}</span>
                </div>
                <div className="grid grid-cols-2 p-3.5">
                  <span className="text-coffee-subtle">Port & Lead Time</span>
                  <span className="text-coffee-ivory font-medium">{product.leadTime} (FOB Djibouti)</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Magnet magnetStrength={0.2} className="w-full sm:w-auto flex-1">
                <Link
                  href={`/quote?coffee=${encodeURIComponent(product.name)}&origin=${encodeURIComponent(product.origin)}`}
                  className="w-full"
                >
                  <Button variant="primary" size="lg" className="w-full gap-2 shadow-gold group">
                    <span>Request Quote for This Lot</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Magnet>

              <Magnet magnetStrength={0.2} className="w-full sm:w-auto">
                <Link
                  href={`/quote?coffee=${encodeURIComponent(product.name)}&type=sample`}
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" size="lg" className="w-full border-coffee-gold/60 text-coffee-ivory hover:text-coffee-darkest hover:border-coffee-gold">
                    Request 250g Green Sample
                  </Button>
                </Link>
              </Magnet>
            </div>

            {/* Guarantee note */}
            <div className="p-4 rounded-xl bg-coffee-dark/80 border border-coffee-border/60 text-xs text-coffee-muted space-y-1">
              <p className="font-semibold text-coffee-ivory">Export Quality Certification:</p>
              <p>
                Every lot is certified by the Ethiopian Coffee & Tea Authority and accompanied by an official ICO Certificate of Origin and Phytosanitary Certificate upon shipment.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
