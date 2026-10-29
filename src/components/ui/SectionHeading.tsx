import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div className={cn("flex flex-col mb-12 md:mb-16", alignment, className)}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-maroon-900/60 border border-gold-500/25 backdrop-blur-sm mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-gold-400">
            {badge}
          </span>
        </div>
      )}

      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ivory-100 tracking-tight leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-ivory-300/80 max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Luxury underline accent */}
      <div className="mt-5 h-[1.5px] w-20 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
    </div>
  );
}

