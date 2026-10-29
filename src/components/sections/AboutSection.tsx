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
} from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-maroon-900/70 to-maroon-950 border border-gold-500/25 shadow-xl shadow-maroon-950/40 relative">
              <span className="font-serif text-6xl text-gold-500/20 absolute top-4 right-6 pointer-events-none select-none">
                “
              </span>

              <h3 className="font-serif text-2xl text-ivory-100 font-normal mb-4">
                Full Stack Developer & M.Sc. IT Scholar
              </h3>

              {/* Exact user-provided copy */}
              <p className="text-ivory-200 text-base leading-relaxed font-light mb-4">
                I’m Suraj Vishwakarma, a Full Stack Developer and M.Sc. IT student passionate about building responsive web applications, intuitive user interfaces, and dependable backend systems. I enjoy turning ideas into practical digital products using modern JavaScript technologies, clean architecture, and thoughtful design.
              </p>

              <p className="text-ivory-300/80 text-sm leading-relaxed font-light">
                Whether deploying machine learning inference pipelines with FastAPI and Next.js, or structuring centralized social management workflows, I focus on clean code, testability, and human-centric developer ergonomics.
              </p>

              <div className="mt-6 pt-6 border-t border-gold-500/20 flex flex-wrap gap-4 text-xs font-mono text-gold-400">
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

            {/* Architectural Tenets */}
            <div className="grid grid-cols-2 gap-4">
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

          {/* Right: Technical Focus Areas */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
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

