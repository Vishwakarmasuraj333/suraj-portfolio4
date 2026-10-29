import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { journeyMilestones } from "@/lib/journey";
import { Calendar, Compass, ArrowRight, Code } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Milestones"
          title="Development Journey"
          subtitle="A verified progression through software engineering, full-stack architectures, and AI microservice integration."
        />

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-gold-500/25 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {journeyMilestones.map((milestone, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-maroon-950 border-2 border-gold-400 group-hover:scale-125 group-hover:bg-gold-400 transition-all duration-300" />

              {/* Year badge on desktop floating to left */}
              <div className="md:absolute md:-left-36 md:top-0 text-left md:text-right md:w-28 mb-2 md:mb-0">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-gold-400 bg-maroon-900/80 border border-gold-500/20">
                  {milestone.year}
                </span>
              </div>

              {/* Content Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-maroon-900/70 to-maroon-950/80 border border-gold-500/20 hover:border-gold-500/40 transition-colors shadow-lg shadow-maroon-950/50">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gold-400">
                    {milestone.category}
                  </span>
                  <span className="text-xs text-ivory-300/60 font-mono">
                    Milestone 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-ivory-100 mb-3">
                  {milestone.title}
                </h3>

                <p className="text-sm text-ivory-200/90 font-light leading-relaxed mb-6">
                  {milestone.description}
                </p>

                {/* Key Learnings & Outcomes */}
                <div className="space-y-2 mb-6 pt-4 border-t border-gold-500/15">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gold-400/90 block">
                    Key Outcomes & Real-World Implementations:
                  </span>
                  <ul className="space-y-1.5">
                    {milestone.keyLearnings.map((learning, lIdx) => (
                      <li
                        key={lIdx}
                        className="text-xs text-ivory-300 flex items-start gap-2"
                      >
                        <span className="text-gold-400 mt-0.5">✦</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {milestone.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-0.5 rounded bg-maroon-800/60 text-ivory-300 border border-gold-500/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

