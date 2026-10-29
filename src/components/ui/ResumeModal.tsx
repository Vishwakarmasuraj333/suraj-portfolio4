"use client";

import React, { useEffect, useState } from "react";
import { X, Download, FileText, CheckCircle2, GraduationCap, Code2, AlertCircle } from "lucide-react";
import { Button } from "./Button";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [pdfAvailable, setPdfAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Check if /resume.pdf exists on server
    fetch("/resume.pdf", { method: "HEAD" })
      .then((res) => {
        setPdfAvailable(res.ok && res.headers.get("content-type")?.includes("pdf") ? true : false);
      })
      .catch(() => {
        setPdfAvailable(false);
      });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-maroon-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-gradient-to-b from-maroon-900 to-maroon-950 border border-gold-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-maroon-950 text-ivory-200 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close resume dialog"
          className="absolute top-5 right-5 p-2 rounded-full border border-gold-500/20 text-gold-400 hover:text-ivory-100 hover:border-gold-500/50 bg-maroon-850/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3
              id="resume-modal-title"
              className="font-serif text-2xl font-normal text-ivory-100"
            >
              Curriculum Vitae
            </h3>
            <p className="text-xs uppercase tracking-widest text-gold-400 font-medium">
              Suraj Vishwakarma — Full Stack Developer
            </p>
          </div>
        </div>

        {/* Status check message */}
        <div className="my-5 p-4 rounded-xl bg-maroon-850/70 border border-gold-500/20 text-xs text-ivory-300 space-y-2">
          {pdfAvailable === false ? (
            <div className="flex items-start gap-2.5 text-gold-300">
              <AlertCircle className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-ivory-100">Direct PDF Document Notice</p>
                <p className="text-ivory-300/90 mt-0.5">
                  Place your official PDF resume file at <code className="px-1.5 py-0.5 rounded bg-maroon-950 text-gold-300 font-mono">public/resume.pdf</code> to enable instant single-click PDF streaming. All verified credentials below are synchronized with the live portfolio.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Official resume document is configured and ready for download.</span>
            </div>
          )}
        </div>

        {/* Executive Summary Card */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-maroon-950/60 border border-gold-500/15">
            <h4 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1.5 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Core Technical Profile
            </h4>
            <p className="text-xs text-ivory-300 leading-relaxed">
              Full Stack Developer and M.Sc. IT student with proven expertise in Next.js, React, Node.js, Python, and RESTful microservices. Architect of IntelliTwin AI, Nexora Social, and SE Ranking Research Studio.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-maroon-950/60 border border-gold-500/15">
            <h4 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1.5 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Verified Academic Credentials
            </h4>
            <p className="text-xs text-ivory-300">
              • M.Sc. Information Technology — Abhinav College (Pursuing)
              <br />
              • B.Sc. Information Technology — Abhinav College (Completed 2025)
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <a
            href="/resume.pdf"
            download="Suraj_Vishwakarma_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-xs tracking-wide bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-maroon-950 font-semibold shadow-md shadow-gold-500/20 hover:brightness-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            <Download className="w-4 h-4" />
            Download PDF Resume
          </a>

          <Button variant="outline" size="sm" onClick={onClose}>
            Back to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}

