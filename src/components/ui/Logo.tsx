"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withText?: boolean;
}

export function Logo({ className, size = "md", withText = true }: LogoProps) {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  return (
    <Link
      href="#home"
      className={cn(
        "group flex items-center gap-3 transition-opacity duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg p-1",
        className
      )}
      aria-label="Suraj Vishwakarma - Home"
    >
      {/* SV Architectural Monogram */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl bg-gradient-to-br from-maroon-800 via-maroon-900 to-maroon-950 border border-gold-500/30 p-1.5 shadow-md shadow-maroon-950/60 transition-transform duration-300 group-hover:scale-105 group-hover:border-gold-500/60",
          sizeMap[size]
        )}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5E8C7" />
              <stop offset="50%" stopColor="#D6B477" />
              <stop offset="100%" stopColor="#8C6C35" />
            </linearGradient>
            <linearGradient id="maroonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7D293F" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2B1019" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Luxury Geometric Outer Octagon Ring */}
          <polygon
            points="30,6 70,6 94,30 94,70 70,94 30,94 6,70 6,30"
            stroke="url(#goldGradient)"
            strokeWidth="3"
            strokeOpacity="0.4"
            fill="url(#maroonGlow)"
          />

          {/* Interlocking Monogram: 'S' */}
          <path
            d="M 64 28 C 64 22, 42 20, 36 28 C 30 36, 44 42, 54 48 C 66 54, 70 64, 62 74 C 54 84, 34 82, 32 72"
            stroke="url(#goldGradient)"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Interlocking Monogram: 'V' with Sharp Luxury Apex */}
          <path
            d="M 44 38 L 56 68 L 72 38"
            stroke="url(#goldGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Fine Champagne Accent Diamond */}
          <polygon
            points="50,13 54,18 50,23 46,18"
            fill="url(#goldGradient)"
          />
        </svg>
      </div>

      {withText && (
        <div className="flex flex-col">
          <span className="font-serif text-base tracking-wider font-semibold text-ivory-200 dark:text-ivory-200 group-hover:text-gold-400 transition-colors">
            SURAJ V.
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500/80 font-medium">
            Full Stack Dev
          </span>
        </div>
      )}
    </Link>
  );
}

