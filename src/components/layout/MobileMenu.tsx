"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Download, Github, Linkedin, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "../ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
  onResumeClick: () => void;
}

export function MobileMenu({
  isOpen,
  activeSection,
  onClose,
  onResumeClick,
}: MobileMenuProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden bg-maroon-950/85 backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      <div className="flex flex-col h-full justify-between p-6 overflow-y-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-gold-500/20">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg text-ivory-100 font-semibold tracking-wider">
              NAVIGATION
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={onClose}
              type="button"
              aria-label="Close navigation menu"
              className="p-2.5 rounded-full border border-gold-500/30 text-gold-400 hover:text-ivory-100 bg-maroon-900/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Links List */}
        <nav className="flex flex-col py-8 space-y-4">
          {siteConfig.navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className={`font-serif text-2xl tracking-wide transition-all py-1.5 flex items-center justify-between ${
                  isActive
                    ? "text-gold-400 font-medium pl-3 border-l-2 border-gold-400"
                    : "text-ivory-200/80 hover:text-gold-300 hover:pl-2"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-gold-500/20 space-y-5">
          <Button
            variant="primary"
            size="md"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => {
              onClose();
              onResumeClick();
            }}
          >
            <Download className="w-4 h-4" /> Download Resume
          </Button>

          <div className="flex items-center justify-center gap-4 text-ivory-300">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full border border-gold-500/25 text-gold-400 hover:text-ivory-100 hover:border-gold-500/60 bg-maroon-900/60 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full border border-gold-500/25 text-gold-400 hover:text-ivory-100 hover:border-gold-500/60 bg-maroon-900/60 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

