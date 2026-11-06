"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CoffeeProduct } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Box, Calendar } from "lucide-react";

interface ProductCardProps {
  product: CoffeeProduct;
  onOpenSampleModal?: (product: CoffeeProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenSampleModal,
}) => {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-coffee-border bg-coffee-card/85 overflow-hidden shadow-card transition-all duration-500 hover:border-coffee-gold/60 hover:bg-coffee-cardHover hover:shadow-[0_12px_40px_-8px_rgba(201,154,82,0.22)] hover:-translate-y-1.5 flex-grow">
      {/* Top subtle golden shimmer accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-coffee-gold/0 to-transparent group-hover:via-coffee-gold transition-all duration-700 z-20" />

      {/* Product Image Header with Badges */}
      <div className="relative h-60 w-full overflow-hidden bg-coffee-dark">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-card via-coffee-card/40 to-transparent group-hover:via-coffee-card/25 transition-colors duration-500" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
          <Badge variant="gold" className="text-[11px] font-semibold backdrop-blur-md bg-coffee-darkest/90 border border-coffee-gold/40 shadow-sm">
            {product.grade}
          </Badge>
          <Badge variant="crema" className="text-[11px] font-semibold backdrop-blur-md bg-coffee-darkest/90 border border-coffee-border shadow-sm">
            {product.processingMethod}
          </Badge>
        </div>

        {/* Cupping Score Pill (if present) */}
        {product.cuppingScore && (
          <div className="absolute bottom-3.5 left-3.5 flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-coffee-darkest/95 border border-coffee-gold/50 text-coffee-gold text-xs font-semibold backdrop-blur-md shadow-gold">
            <Star className="w-3.5 h-3.5 fill-coffee-gold" />
            <span>SCA {product.cuppingScore}</span>
          </div>
        )}

        {/* Origin tag */}
        <div className="absolute bottom-3.5 right-3.5 text-xs text-coffee-ivory font-medium bg-coffee-darkest/85 px-3 py-1 rounded-lg backdrop-blur-md border border-coffee-border/50">
          {product.origin.split(",")[0]}
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <Link href={`/coffee/${product.slug}`} className="group/title">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-coffee-ivory group-hover:text-coffee-gold transition-colors duration-300 line-clamp-1 mb-2.5">
            {product.name}
          </h3>
        </Link>

        {/* Sensory Cupping Notes */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.cuppingNotes.slice(0, 4).map((note, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2.5 py-0.5 rounded-md bg-coffee-dark/80 text-coffee-muted border border-coffee-border/60 transition-colors group-hover:border-coffee-gold/30 group-hover:text-coffee-crema"
            >
              {note}
            </span>
          ))}
        </div>

        {/* Key Technical Specifications Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs text-coffee-muted mb-4 border-t border-b border-coffee-border/40 py-3">
          <div>
            <span className="block text-coffee-subtle text-[10px] uppercase tracking-wider">Variety</span>
            <span className="font-medium text-coffee-ivory line-clamp-1">{product.variety}</span>
          </div>
          <div>
            <span className="block text-coffee-subtle text-[10px] uppercase tracking-wider">Elevation</span>
            <span className="font-medium text-coffee-ivory">{product.altitude}</span>
          </div>
          <div>
            <span className="block text-coffee-subtle text-[10px] uppercase tracking-wider">Moisture / Screen</span>
            <span className="font-medium text-coffee-ivory line-clamp-1">{product.moistureContent}</span>
          </div>
          <div>
            <span className="block text-coffee-subtle text-[10px] uppercase tracking-wider">Harvest Crop</span>
            <span className="font-medium text-coffee-ivory line-clamp-1">{product.harvestSeason.split(" ")[0]} Crop</span>
          </div>
        </div>

        {/* Packaging & Minimum Order */}
        <div className="space-y-1.5 text-xs text-coffee-muted mb-5">
          <div className="flex items-center space-x-2">
            <Box className="w-3.5 h-3.5 text-coffee-gold flex-shrink-0" />
            <span className="line-clamp-1">MOQ: {product.minimumOrderQuantity.split("/")[0]}</span>
          </div>
          <div className="flex items-center space-x-2 text-[11px] text-coffee-crema">
            <ShieldCheck className="w-3.5 h-3.5 text-coffee-gold flex-shrink-0" />
            <span>GrainPro Hermetic Export Lining Available</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto grid grid-cols-2 gap-2.5 pt-2">
          <Link href={`/coffee/${product.slug}`} className="w-full">
            <Button
              variant="secondary"
              size="sm"
              className="w-full text-xs hover:border-coffee-gold/60 transition-colors"
            >
              View Details
            </Button>
          </Link>
          <Link href={`/quote?coffee=${encodeURIComponent(product.name)}`} className="w-full">
            <Button
              variant="primary"
              size="sm"
              className="w-full text-xs gap-1.5 group/btn shadow-gold hover:shadow-[0_0_20px_rgba(201,154,82,0.4)]"
            >
              <span>Quote</span>
              <ArrowRight className="w-3 h-3 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
