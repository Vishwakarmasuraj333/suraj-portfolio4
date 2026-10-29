"use client";

import React, { useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { projects } from "@/lib/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { cn } from "@/lib/utils";
import { ShieldAlert, Github } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "../ui/Button";

const filterCategories = ["All", "AI & ML", "Social Media", "SEO & Web"] as const;

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio"
          title="Featured Engineering Works"
          subtitle="Real projects solving practical problems across cybersecurity telemetry, social media automation, and search intelligence."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              type="button"
              className={cn(
                "px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500",
                activeFilter === cat
                  ? "bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-950 font-semibold shadow-md shadow-gold-500/20"
                  : "bg-maroon-900/40 text-ivory-300 hover:text-gold-300 hover:bg-maroon-850/60 border border-gold-500/15"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Honest GitHub Repositories Footer Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-maroon-900/60 via-maroon-900/40 to-maroon-950 border border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/25 text-gold-400 shrink-0">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-ivory-100 font-normal">
                Open Source & Full Repositories
              </h4>
              <p className="text-xs text-ivory-300/80 font-light mt-0.5">
                Explore commit history, architectural diagrams, and experimental branches directly on GitHub.
              </p>
            </div>
          </div>

          <Button
            variant="secondary"
            size="md"
            href={siteConfig.links.github}
            isExternal
            className="shrink-0 flex items-center gap-2"
          >
            <Github className="w-4 h-4 text-gold-400" />
            <span>Explore All Repositories</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

