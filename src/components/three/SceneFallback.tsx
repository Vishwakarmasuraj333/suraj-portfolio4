"use client";

import React from "react";

export function SceneFallback() {
  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center select-none"
      aria-label="3D Sculptural Composition Preview"
    >
      {/* Outer Champagne Orbital Ring */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-gold-500/30 border-dashed animate-[spin_40s_linear_infinite]" />

      {/* Counter-rotating Champagne Ring */}
      <div className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full border-2 border-gold-400/20 animate-[spin_30s_linear_infinite_reverse] rotate-45" />

      {/* Inner Glowing Burgundy Halo */}
      <div className="absolute w-44 h-44 md:w-60 md:h-60 rounded-full bg-gradient-to-tr from-maroon-700 via-maroon-800 to-maroon-900/40 blur-2xl opacity-70 animate-pulse" />

      {/* Floating Center Crystal / Architectural Facet */}
      <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-maroon-700/80 via-maroon-800/90 to-maroon-950 border border-gold-500/40 backdrop-blur-xl shadow-2xl shadow-maroon-950 flex items-center justify-center rotate-12 hover:rotate-45 transition-transform duration-700">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border border-gold-400/50 bg-gradient-to-tr from-gold-500/10 to-transparent flex items-center justify-center">
          <div className="w-12 h-12 rounded-lg bg-gold-500/20 border border-gold-300/60 rotate-45 flex items-center justify-center shadow-inner">
            <div className="w-4 h-4 rounded-full bg-gold-400 animate-ping opacity-60" />
          </div>
        </div>
      </div>

      {/* Floating Champagne Dust Nodes */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-gold-400/80 blur-[1px] animate-bounce" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-gold-300/70 blur-[1px] animate-pulse" />
      <div className="absolute top-1/3 right-1/5 w-2.5 h-2.5 rounded-full bg-gold-500/60" />
    </div>
  );
}

