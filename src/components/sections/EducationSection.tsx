import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { educationList } from "@/lib/journey";
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academics"
          title="Education & Credentials"
          subtitle="Formal academic grounding in Information Technology, computer science fundamentals, and advanced distributed systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-gradient-to-b from-maroon-900/80 via-maroon-900/60 to-maroon-950 border border-gold-500/25 hover:border-gold-500/50 transition-all duration-300 shadow-xl shadow-maroon-950/50 flex flex-col justify-between"
            >
              <div>
                {/* Header status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/25 text-gold-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full border ${
                      edu.status === "Pursuing"
                        ? "bg-gold-500/15 border-gold-400 text-gold-300"
                        : "bg-emerald-500/15 border-emerald-400 text-emerald-300"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-ivory-100 mb-2">
                  {edu.degree}
                </h3>

                <div className="flex flex-col gap-1 text-xs text-gold-400/90 font-medium mb-5">
                  <span className="text-ivory-200">{edu.institution}</span>
                  <div className="flex items-center gap-4 text-ivory-300/70 pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" /> {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" /> {edu.period}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed font-light mb-6">
                  {edu.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-gold-500/15 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-gold-400 block">
                  Curriculum & Laboratory Highlights:
                </span>
                <ul className="space-y-1.5">
                  {edu.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-xs text-ivory-300 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

