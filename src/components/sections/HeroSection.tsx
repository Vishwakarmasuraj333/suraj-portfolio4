"use client";

import React, { useState, useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "../ui/Button";
import { HeroScene } from "../three/HeroScene";
import { ResumeModal } from "../ui/ResumeModal";
import {
  ArrowDown,
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
  Download,
  Code2,
  Cpu,
  MapPin,
  Box,
  User,
} from "lucide-react";

export function HeroSection() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [visualMode, setVisualMode] = useState<"portrait" | "3d">("portrait");
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({});

  // 3D subtle tilt interaction on portrait
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease-out",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-36 sm:pt-40 lg:pt-44 pb-20 lg:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative, Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-maroon-900/90 border border-gold-500/35 backdrop-blur-md mb-6 shadow-md shadow-maroon-950/60">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
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
                className="group flex items-center gap-2 shadow-lg shadow-gold-500/20"
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
                Let&apos;s Connect ✦
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md p-3.5 rounded-2xl bg-maroon-900/50 border border-gold-500/20 backdrop-blur-sm mb-6">
              <div className="text-center sm:text-left sm:pl-2">
                <span className="block font-serif text-lg sm:text-xl text-gold-400 font-semibold">
                  3+
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-ivory-300/70">
                  Core Projects
                </span>
              </div>
              <div className="text-center sm:text-left border-x border-gold-500/15 px-2">
                <span className="block font-serif text-lg sm:text-xl text-gold-400 font-semibold">
                  M.Sc. IT
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-ivory-300/70">
                  Scholar
                </span>
              </div>
              <div className="text-center sm:text-left sm:pl-2">
                <span className="block font-serif text-lg sm:text-xl text-emerald-400 font-semibold">
                  100%
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-ivory-300/70">
                  Verified Work
                </span>
              </div>
            </div>

            {/* Channels */}
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

          {/* Right Column: Masterpiece Showcase (Developer Portrait + 3D Mode) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Ambient luxury glow backdrop */}
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-maroon-700/30 via-gold-500/15 to-maroon-900/40 blur-3xl pointer-events-none" />

            {/* Interactive Mode Switcher */}
            <div className="relative z-20 flex items-center gap-1.5 p-1 rounded-full bg-maroon-900/90 border border-gold-500/30 backdrop-blur-md mb-5 shadow-lg shadow-maroon-950/70">
              <button
                type="button"
                onClick={() => setVisualMode("portrait")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  visualMode === "portrait"
                    ? "bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-950 font-bold shadow-md shadow-gold-500/25"
                    : "text-ivory-300/80 hover:text-gold-300 hover:bg-maroon-800/40"
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Developer Portrait</span>
              </button>
              <button
                type="button"
                onClick={() => setVisualMode("3d")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  visualMode === "3d"
                    ? "bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-950 font-bold shadow-md shadow-gold-500/25"
                    : "text-ivory-300/80 hover:text-gold-300 hover:bg-maroon-800/40"
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                <span>Interactive 3D</span>
              </button>
            </div>

            {/* Display Canvas or Portrait */}
            <div className="relative w-full max-w-[460px] flex items-center justify-center">
              {visualMode === "3d" ? (
                <div className="w-full animate-in fade-in zoom-in-95 duration-500">
                  <HeroScene />
                </div>
              ) : (
                <div
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={tiltStyle}
                  className="group relative w-full max-w-[390px] sm:max-w-[420px] rounded-3xl p-3 bg-gradient-to-b from-maroon-850/80 via-maroon-900/70 to-maroon-950 border-2 border-gold-500/40 shadow-2xl shadow-maroon-950/80 transition-all duration-300 select-none animate-in fade-in zoom-in-95"
                >
                  {/* Outer Champagne Decorative Ring */}
                  <div className="absolute -inset-1 rounded-[28px] border border-gold-500/20 pointer-events-none" />

                  {/* Top Floating Glass Badge */}
                  <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-maroon-950/85 border border-gold-500/35 backdrop-blur-md shadow-lg">
                    <Code2 className="w-3.5 h-3.5 text-gold-400" />
                    <span className="text-[11px] font-mono text-ivory-200 font-medium">
                      Full Stack Engineer
                    </span>
                  </div>

                  {/* Top-Right AI Microservice Badge */}
                  <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-maroon-950/85 border border-gold-500/35 backdrop-blur-md shadow-lg">
                    <Cpu className="w-3.5 h-3.5 text-gold-400" />
                    <span className="text-[11px] font-mono text-gold-300 font-medium">
                      AI & APIs
                    </span>
                  </div>

                  {/* Main Portrait Image Container */}
                  <div className="relative rounded-2xl overflow-hidden bg-maroon-950 border border-gold-500/20 aspect-[4/5] sm:aspect-[4/5.2]">
                    <img
                      src="/images/suraj-portrait.jpg"
                      alt="Suraj Vishwakarma - Full Stack Developer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Subtle Editorial Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/15 to-transparent pointer-events-none" />

                    {/* Floating Bottom Card Over Image */}
                    <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-maroon-950/90 border border-gold-500/35 backdrop-blur-md shadow-lg">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <p className="font-serif text-base sm:text-lg text-ivory-100 font-medium">
                            Suraj Vishwakarma
                          </p>
                          <p className="text-[11px] text-gold-400 font-mono">
                            M.Sc. IT Scholar • Abhinav College
                          </p>
                        </div>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[10px] font-mono text-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          Online
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-gold-500/15 text-[11px] text-ivory-300/80 font-mono">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-gold-400" />
                          <span>Mumbai, IN</span>
                        </span>
                        <span className="text-gold-400/90">
                          Next.js • Python • ML
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
