import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import {
  Layout,
  Server,
  Database,
  Network,
  Smartphone,
  Lightbulb,
  CheckCircle,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function AboutSection() {
  const coreCompetencies = [
    {
      title: "Frontend Engineering",
      icon: Layout,
      desc: "Architecting modular, type-safe Next.js and React components with fluid typography and micro-interactions.",
    },
    {
      title: "Backend Development",
      icon: Server,
      desc: "Crafting resilient REST APIs, asynchronous handlers in Python and Node.js, and secure session management.",
    },
    {
      title: "Database Design",
      icon: Database,
      desc: "Engineering structured relational schemas in PostgreSQL/MySQL and flexible document models in MongoDB.",
    },
    {
      title: "API Integration",
      icon: Network,
      desc: "Connecting machine learning models (XGBoost/SHAP) and external microservices with deterministic error boundaries.",
    },
    {
      title: "Responsive UI Architecture",
      icon: Smartphone,
      desc: "Delivering accessible, cross-browser interfaces designed mobile-first without unexpected viewport overflow.",
    },
    {
      title: "Problem Solving & Learning",
      icon: Lightbulb,
      desc: "Relentless curiosity in postgraduate research, code reviews, algorithmic optimization, and system refactoring.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Profile"
          title="Engineered with Precision & Purpose"
          subtitle="A disciplined approach to crafting scalable full-stack applications and intuitive interfaces."
        />

        {/* Top Grid: Portrait + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Editorial Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] group">
              {/* Luxury Accent Backing Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-gold-500/25 via-maroon-700/40 to-gold-400/20 blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Portrait Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold-500/40 bg-maroon-950 shadow-2xl shadow-maroon-950">
                <img
                  src="/images/suraj-portrait.jpg"
                  alt="Suraj Vishwakarma - Software Developer"
                  className="w-full h-[460px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Atmospheric Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/25 to-transparent pointer-events-none" />

                {/* Floating Bottom Credentials Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-maroon-950/85 border border-gold-500/30 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-lg text-ivory-100 font-medium">
                      Suraj Vishwakarma
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Active
                    </span>
                  </div>

                  <div className="space-y-1 text-xs text-ivory-300/80 font-light">
                    <p className="flex items-center gap-1.5 text-gold-400">
                      <GraduationCap className="w-3.5 h-3.5 text-gold-400" />
                      <span>M.Sc. IT Scholar • Abhinav College</span>
                    </p>
                    <p className="flex items-center gap-1.5 text-ivory-300/70">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" />
                      <span>{siteConfig.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-9 rounded-2xl bg-gradient-to-b from-maroon-900/80 via-maroon-900/60 to-maroon-950 border border-gold-500/25 shadow-xl shadow-maroon-950/50 relative">
              <span className="font-serif text-6xl text-gold-500/15 absolute top-4 right-6 pointer-events-none select-none">
                “
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-ivory-100 font-normal mb-4">
                Full Stack Developer & Technical Craftsman
              </h3>

              {/* Exact user-provided copy */}
              <p className="text-ivory-200 text-base leading-relaxed font-light mb-4">
                I’m Suraj Vishwakarma, a Full Stack Developer and M.Sc. IT student passionate about building responsive web applications, intuitive user interfaces, and dependable backend systems. I enjoy turning ideas into practical digital products using modern JavaScript technologies, clean architecture, and thoughtful design.
              </p>

              <p className="text-ivory-300/85 text-sm leading-relaxed font-light mb-6">
                Whether deploying machine learning inference pipelines with FastAPI and Next.js, or structuring centralized social management workflows, I focus on clean code, testability, and human-centric developer ergonomics.
              </p>

              <div className="pt-6 border-t border-gold-500/20 flex flex-wrap gap-4 text-xs font-mono text-gold-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Real Project Implementations
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Academic Rigor
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Zero Pretension
                </span>
              </div>
            </div>

            {/* Architectural Philosophy Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-maroon-900/40 border border-gold-500/15">
                <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block mb-1">
                  Philosophy
                </span>
                <p className="text-xs text-ivory-300 leading-relaxed">
                  Functionality first. Every aesthetic decision supports readability, performance, and accessibility.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-maroon-900/40 border border-gold-500/15">
                <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block mb-1">
                  Research
                </span>
                <p className="text-xs text-ivory-300 leading-relaxed">
                  Investigating AI explainability and real-time telemetry anomaly classification.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Competencies Matrix */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h4 className="font-serif text-xl text-ivory-100 font-medium">
              Core Technical Competencies
            </h4>
            <span className="text-xs font-mono text-gold-400/80">
              6 Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreCompetencies.map((comp) => {
              const Icon = comp.icon;
              return (
                <div
                  key={comp.title}
                  className="group p-5 rounded-xl bg-maroon-900/50 hover:bg-maroon-900/80 border border-gold-500/15 hover:border-gold-500/40 transition-all duration-300"
                >
                  <div className="p-2.5 w-fit rounded-lg bg-gold-500/10 text-gold-400 group-hover:scale-110 transition-transform mb-3 border border-gold-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base text-ivory-100 font-medium mb-1.5">
                    {comp.title}
                  </h4>
                  <p className="text-xs text-ivory-300/75 leading-relaxed font-light">
                    {comp.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
