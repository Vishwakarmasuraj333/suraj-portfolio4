"use client";

import React, { useEffect } from "react";
import { Project } from "@/types";
import { X, ExternalLink, Github, CheckCircle2, Clock, Cpu } from "lucide-react";
import { Button } from "./Button";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-maroon-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-maroon-900 to-maroon-950 border border-gold-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-maroon-950 text-ivory-200 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close project details"
          className="absolute top-5 right-5 p-2 rounded-full border border-gold-500/20 text-gold-400 hover:text-ivory-100 hover:border-gold-500/50 bg-maroon-850/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Status */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/20">
            {project.category}
          </span>
          <span className="text-xs text-ivory-300/70 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3
          id="modal-project-title"
          className="font-serif text-2xl sm:text-3xl font-normal text-ivory-100 mb-2"
        >
          {project.title}
        </h3>
        <p className="text-gold-400 text-sm font-medium mb-6">
          {project.tagline}
        </p>

        {/* Detailed Description */}
        <div className="space-y-4 mb-6 text-sm text-ivory-300 leading-relaxed border-t border-b border-gold-500/15 py-4">
          <p>{project.longDescription}</p>
          <div className="flex items-center gap-2 text-xs text-ivory-300/80 pt-1">
            <span className="text-gold-400 font-medium">Role:</span> {project.role}
          </div>
        </div>

        {/* Implemented vs Planned Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-3">
              <CheckCircle2 className="w-4 h-4" /> Implemented Capabilities
            </h4>
            <ul className="space-y-2">
              {project.features.implemented.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-ivory-200">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.features.planned && project.features.planned.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold-400/80 font-semibold mb-3">
                <Clock className="w-4 h-4" /> Planned Enhancements
              </h4>
              <ul className="space-y-2">
                {project.features.planned.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-ivory-300/80">
                    <span className="text-gold-400/80 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Architecture Highlights */}
        {project.architectureHighlights.length > 0 && (
          <div className="mb-6 p-4 rounded-xl bg-maroon-950/70 border border-gold-500/20">
            <h4 className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">
              <Cpu className="w-4 h-4" /> Architectural Highlights
            </h4>
            <ul className="space-y-1.5">
              {project.architectureHighlights.map((arch, idx) => (
                <li key={idx} className="text-xs text-ivory-300 flex items-start gap-2">
                  <span className="text-gold-500">→</span>
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-wider text-gold-400/90 font-medium mb-3">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-md bg-maroon-800/80 text-ivory-200 border border-gold-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button
            variant="primary"
            href={project.repository}
            isExternal
            className="flex items-center gap-2"
          >
            <Github className="w-4 h-4" /> View Source on GitHub
          </Button>

          {project.liveDemo ? (
            <Button
              variant="secondary"
              href={project.liveDemo}
              isExternal
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </Button>
          ) : (
            <span className="text-xs text-ivory-300/60 italic px-2">
              Live deployment configured upon enterprise staging
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

