"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CoffeeOrigin } from "@/data/origins";
import { Badge } from "@/components/ui/badge";
import { Mountain, Droplets, Compass, ArrowRight } from "lucide-react";

interface OriginCardProps {
  origin: CoffeeOrigin;
}

export const OriginCard: React.FC<OriginCardProps> = ({ origin }) => {
  return (
    <div className="group relative rounded-2xl border border-coffee-border bg-coffee-card/85 overflow-hidden shadow-card transition-all duration-500 hover:border-coffee-gold/60 hover:shadow-[0_12px_40px_-8px_rgba(201,154,82,0.22)] hover:-translate-y-1.5 flex flex-col">
      {/* Top golden shimmer accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-coffee-gold/0 to-transparent group-hover:via-coffee-gold transition-all duration-700 z-20" />

      {/* Origin Image */}
      <div className="relative h-64 w-full overflow-hidden bg-coffee-dark">
        <Image
          src={origin.image}
          alt={`Ethiopian coffee highland terroir in ${origin.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-card via-coffee-card/30 to-transparent group-hover:via-coffee-card/20 transition-colors duration-500" />

        {/* Origin Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
          <Badge variant="gold" className="text-[11px] font-semibold backdrop-blur-md bg-coffee-darkest/90 border border-coffee-gold/40 shadow-sm">
            {origin.elevation}
          </Badge>
          {origin.availableFromCompany ? (
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-950/85 text-emerald-300 border border-emerald-700/60 backdrop-blur-md shadow-sm">
              Export Ready
            </span>
          ) : (
            <span className="text-[10px] font-medium tracking-wider px-2.5 py-1 rounded-md bg-coffee-darkest/85 text-coffee-subtle border border-coffee-border backdrop-blur-md">
              Regional Reference
            </span>
          )}
        </div>

        {/* Amharic name subtitle */}
        {origin.amharicName && (
          <div className="absolute bottom-3.5 left-4 text-xs font-serif text-coffee-gold bg-coffee-darkest/85 px-3 py-1 rounded-md backdrop-blur-md border border-coffee-border/40">
            {origin.amharicName}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="font-serif text-2xl font-bold text-coffee-ivory group-hover:text-coffee-gold transition-colors duration-300">
            {origin.name}
          </h3>
          <span className="text-xs text-coffee-subtle font-medium">{origin.zone.split(",")[0]}</span>
        </div>

        <p className="text-xs sm:text-sm text-coffee-muted leading-relaxed mb-4 line-clamp-3">
          {origin.description}
        </p>

        {/* Sensory notes pills */}
        <div className="mb-5">
          <div className="text-[10px] uppercase tracking-wider text-coffee-subtle mb-2 font-medium">
            Common Regional Cup Notes
          </div>
          <div className="flex flex-wrap gap-1.5">
            {origin.flavorProfile.map((flavor, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2.5 py-0.5 rounded-md bg-coffee-dark/80 text-coffee-crema border border-coffee-border/60 transition-colors group-hover:border-coffee-gold/30"
              >
                {flavor}
              </span>
            ))}
          </div>
        </div>

        {/* Footer specs */}
        <div className="mt-auto pt-4 border-t border-coffee-border/50 flex items-center justify-between text-xs text-coffee-subtle">
          <div className="flex items-center space-x-1.5">
            <Droplets className="w-3.5 h-3.5 text-coffee-gold" />
            <span className="line-clamp-1">{origin.processingMethods.join(", ")}</span>
          </div>
          <Link
            href={`/origins#${origin.id}`}
            className="text-coffee-gold hover:text-coffee-goldHover font-medium inline-flex items-center space-x-1 group/link"
          >
            <span>Read Terroir</span>
            <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OriginCard;
