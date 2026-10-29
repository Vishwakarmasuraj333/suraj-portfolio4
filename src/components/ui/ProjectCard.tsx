"use client";

import React, { useState, useRef } from "react";
import { Project } from "@/types";
import { Github, ArrowUpRight, ShieldCheck, Share2, Search } from "lucide-react";
import { ProjectModal } from "./ProjectModal";
import { Button } from "./Button";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({});

  // 3D subtle tilt interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
      transition: "transform 0.4s ease-out",
    });
  };

  // Bespoke illustrative canvas based on project domain
  const renderVisualIllustration = () => {
    if (project.id === "intellitwin-ai") {
      return (
        <div className="relative w-full h-52 bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-850 p-5 flex flex-col justify-between overflow-hidden border-b border-gold-500/20">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(214,180,119,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,180,119,0.05)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-gold-400">TELEMETRY_ENGINE // V1</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-maroon-800 border border-gold-500/20 text-ivory-300">
              XGBoost + SHAP
            </span>
          </div>

          {/* Anomaly Detection Wave & Bar Simulation */}
          <div className="relative z-10 my-auto flex items-end gap-1.5 h-16 pt-2">
            {[35, 50, 42, 78, 92, 60, 45, 88, 70, 55, 62, 80, 95, 48].map((val, i) => (
              <div
                key={i}
                className="flex-1 rounded-t transition-all duration-500 hover:brightness-125"
                style={{
                  height: `${val}%`,
                  backgroundColor:
                    val > 80 ? "#D6B477" : val > 65 ? "#7D293F" : "#401421",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-ivory-300/80">
            <span>Threat Probability: 0.04%</span>
            <span className="text-gold-400">STATUS: NOMINAL</span>
          </div>
        </div>
      );
    }

    if (project.id === "nexora-social") {
      return (
        <div className="relative w-full h-52 bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-850 p-5 flex flex-col justify-between overflow-hidden border-b border-gold-500/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,180,119,0.08),transparent_50%)]" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400">
                <Share2 className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-gold-400">NEXORA_HUB // WORKFLOWS</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-maroon-800 border border-gold-500/20 text-ivory-300">
              Multi-Channel
            </span>
          </div>

          {/* Post Pipeline UI Mockup */}
          <div className="relative z-10 grid grid-cols-3 gap-2 my-auto">
            <div className="p-2.5 rounded-lg bg-maroon-800/80 border border-gold-500/20 text-center">
              <span className="text-[10px] uppercase text-ivory-300/70 block">Drafts</span>
              <span className="font-serif text-lg text-gold-400 font-medium">08</span>
            </div>
            <div className="p-2.5 rounded-lg bg-maroon-800/80 border border-gold-500/40 text-center shadow-sm">
              <span className="text-[10px] uppercase text-gold-400/90 block">Queued</span>
              <span className="font-serif text-lg text-ivory-100 font-medium">14</span>
            </div>
            <div className="p-2.5 rounded-lg bg-maroon-800/80 border border-gold-500/20 text-center">
              <span className="text-[10px] uppercase text-ivory-300/70 block">Published</span>
              <span className="font-serif text-lg text-emerald-400 font-medium">126</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-ivory-300/80">
            <span>Publishing Queue: Active</span>
            <span className="text-gold-400">OAuth2 Ready</span>
          </div>
        </div>
      );
    }

    // SE Ranking Research Studio
    return (
      <div className="relative w-full h-52 bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-850 p-5 flex flex-col justify-between overflow-hidden border-b border-gold-500/20">
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400">
              <Search className="w-5 h-5" />
            </span>
            <span className="text-xs font-mono text-gold-400">SERP_INTELLIGENCE // V2</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-maroon-800 border border-gold-500/20 text-ivory-300">
            Analytics
          </span>
        </div>

        {/* SERP Rank Table Graphic */}
        <div className="relative z-10 space-y-1.5 my-auto">
          <div className="flex items-center justify-between text-[11px] px-2.5 py-1 rounded bg-maroon-800/70 border border-gold-500/15">
            <span className="text-ivory-200">keyword_research_studio</span>
            <span className="text-emerald-400 font-mono">#1 Pos (+3)</span>
          </div>
          <div className="flex items-center justify-between text-[11px] px-2.5 py-1 rounded bg-maroon-800/50 border border-gold-500/10">
            <span className="text-ivory-300">fullstack_nextjs_systems</span>
            <span className="text-gold-400 font-mono">#3 Pos (+1)</span>
          </div>
          <div className="flex items-center justify-between text-[11px] px-2.5 py-1 rounded bg-maroon-800/40 border border-gold-500/10">
            <span className="text-ivory-300/80">explainable_ml_anomaly</span>
            <span className="text-ivory-200 font-mono">#5 Pos</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-ivory-300/80">
          <span>Search Vol Cached</span>
          <span className="text-gold-400">SERP Tracked</span>
        </div>
      </div>
    );
  };

  // Render project visual: Real high-res dashboard screenshot or fallback illustration
  const renderVisual = () => {
    if (project.image) {
      return (
        <div className="relative w-full h-52 overflow-hidden border-b border-gold-500/20 group-hover:border-gold-500/40 transition-colors bg-maroon-950">
          <img
            src={project.image}
            alt={`${project.title} Interface Preview`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle luxury vignette & category chip */}
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/20 to-black/30 pointer-events-none" />
          
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-maroon-950/80 border border-gold-500/30 text-gold-400 backdrop-blur-md">
              {project.category}
            </span>
          </div>

          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-maroon-950/80 border border-gold-500/20 text-ivory-300/80 backdrop-blur-md">
              0{index + 1}
            </span>
          </div>
        </div>
      );
    }
    return renderVisualIllustration();
  };

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={tiltStyle}
        className="group relative flex flex-col rounded-2xl bg-gradient-to-b from-maroon-900/90 via-maroon-900/70 to-maroon-950 border border-gold-500/25 hover:border-gold-500/60 overflow-hidden shadow-xl shadow-maroon-950/60 transition-colors duration-300"
      >
        {/* Generative Visual or Real Screenshot Header */}
        {renderVisual()}

        {/* Card Body */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                {project.category}
              </span>
              <span className="text-[11px] font-mono text-ivory-300/70">
                0{index + 1}
              </span>
            </div>

            <h3 className="font-serif text-2xl font-normal text-ivory-100 group-hover:text-gold-300 transition-colors mb-2">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-ivory-300/80 line-clamp-3 leading-relaxed mb-6 font-light">
              {project.description}
            </p>
          </div>

          <div>
            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2.5 py-0.5 rounded-full bg-maroon-950/70 text-ivory-300 border border-gold-500/15"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="text-[11px] px-2 py-0.5 text-gold-400/80">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gold-500/15">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-ivory-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded"
              >
                View Architecture
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${project.title} on GitHub`}
                className="p-2 rounded-full border border-gold-500/25 text-gold-400 hover:text-ivory-100 hover:border-gold-500/60 bg-maroon-850/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={modalOpen ? project : null}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

