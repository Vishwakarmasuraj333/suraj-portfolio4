"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "../ui/Button";
import { HeroScene } from "../three/HeroScene";
import { ResumeModal } from "../ui/ResumeModal";
import { ArrowDown, Sparkles, ArrowRight, Github, Linkedin, Download } from "lucide-react";

export function HeroSection() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & Action */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-maroon-900/80 border border-gold-500/30 backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-gold-300">
                {siteConfig.availability}
              </span>
            </div>

            {/* Intro Preheading */}
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400/90 mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              HELLO, I&apos;M SURAJ VISHWAKARMA
            </p>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal text-ivory-100 tracking-tight leading-[1.08] mb-6">
              Building Digital <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 italic">
                Experiences
              </span>{" "}
              That Work.
            </h1>

            {/* Supporting Subheadline */}
            <p className="text-lg sm:text-xl text-ivory-200/90 font-light leading-relaxed max-w-xl mb-4">
              Full Stack Developer crafting responsive interfaces, reliable backends, and thoughtful digital products.
            </p>

            {/* Concise professional introduction */}
            <p className="text-sm sm:text-base text-ivory-300/75 max-w-lg leading-relaxed mb-8">
              M.Sc. IT scholar specializing in modern JavaScript ecosystems, Next.js, and Python microservices. Focused on clean architecture, explainable ML integrations, and resilient RESTful architectures.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                className="group flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => setResumeModalOpen(true)}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-gold-400" />
                <span>Download Resume</span>
              </Button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-400 hover:text-ivory-100 underline underline-offset-8 decoration-gold-500/40 hover:decoration-gold-400 transition-all px-2 py-1"
              >
                Let&apos;s Connect
              </a>
            </div>

            {/* Verified Quick Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-gold-500/15 text-xs text-ivory-300/70">
              <span className="font-mono text-[11px] uppercase tracking-wider text-gold-500/80">
                Channels:
              </span>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
                aria-label="Suraj's GitHub"
              >
                <Github className="w-3.5 h-3.5 text-gold-400" />
                <span>GitHub</span>
              </a>
              <span className="text-gold-500/30">•</span>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
                aria-label="Suraj's LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 text-gold-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Interactive Sculpture */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient luxury glow backdrop */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-maroon-700/25 blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-[500px]">
              <HeroScene />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Animated Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ivory-300/60 hover:text-gold-400 transition-colors"
      >
        <span className="text-[10px] uppercase font-mono tracking-[0.25em]">
          SCROLL
        </span>
        <div className="w-5 h-8 rounded-full border border-gold-500/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-gold-400 animate-bounce" />
        </div>
      </a>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </section>
  );
}

