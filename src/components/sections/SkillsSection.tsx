"use client";

import React, { useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { skills, skillCategories } from "@/lib/skills";
import { SkillItem } from "@/types";
import {
  Atom,
  Layers,
  FileCode2,
  Palette,
  Code,
  Layout,
  Smartphone,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  CheckCircle2,
  Database,
  TableProperties,
  HardDrive,
  GitBranch,
  Github,
  GitMerge,
  TerminalSquare,
  Send,
  FileCode,
  Binary,
  Zap,
  Boxes,
  CloudUpload,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Atom,
  Layers,
  FileCode2,
  Palette,
  Code,
  Layout,
  Smartphone,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  CheckCircle2,
  Database,
  TableProperties,
  HardDrive,
  GitBranch,
  Github,
  GitMerge,
  TerminalSquare,
  Send,
  FileCode,
  Binary,
  Zap,
  Boxes,
  CloudUpload,
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Expertise"
          title="Technical Capabilities"
          subtitle="A comprehensive toolkit across frontend engineering, backend microservices, database architectures, and development environments."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
              className={cn(
                "px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500",
                activeCategory === category
                  ? "bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-950 font-semibold shadow-md shadow-gold-500/20"
                  : "bg-maroon-900/40 text-ivory-300 hover:text-gold-300 hover:bg-maroon-850/60 border border-gold-500/15"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {filteredSkills.map((skill) => {
            const Icon = iconMap[skill.iconName] || Code;
            const isSelected = selectedSkill?.name === skill.name;

            return (
              <button
                key={skill.name}
                type="button"
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
                onMouseEnter={() => setSelectedSkill(skill)}
                className={cn(
                  "group relative p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-36 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500",
                  isSelected
                    ? "bg-maroon-850 border-gold-400 shadow-lg shadow-gold-500/15 scale-[1.02]"
                    : "bg-maroon-900/50 hover:bg-maroon-900/80 border-gold-500/20 hover:border-gold-500/50"
                )}
                aria-label={`${skill.name}: ${skill.description}`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 group-hover:text-gold-300 group-hover:scale-110 transition-transform border border-gold-500/15">
                    <Icon className="w-5 h-5" />
                  </div>
                  {skill.featured && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400/80" title="Core competency" />
                  )}
                </div>

                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-gold-500/80 block">
                    {skill.category}
                  </span>
                  <h4 className="font-serif text-sm text-ivory-100 font-medium group-hover:text-gold-300 transition-colors">
                    {skill.name}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Description Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-maroon-900/40 border border-gold-500/20 flex items-center justify-between min-h-[64px]">
          {selectedSkill ? (
            <div className="flex items-center gap-3 animate-in fade-in duration-200">
              <span className="text-xs uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-gold-500/10 text-gold-400 border border-gold-500/25">
                {selectedSkill.name}
              </span>
              <p className="text-xs sm:text-sm text-ivory-200 font-light">
                {selectedSkill.description}
              </p>
            </div>
          ) : (
            <p className="text-xs text-ivory-300/60 italic">
              Hover or tap any technology above to examine engineering details and contextual usage.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

