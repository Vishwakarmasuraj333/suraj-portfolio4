"use client";

import React from "react";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "../ui/Logo";
import { Github, Linkedin, ArrowUp, Mail, MapPin } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-gold-500/20 bg-maroon-950 text-ivory-300 overflow-hidden">
      {/* Subtle background ambient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-maroon-800/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-ivory-300/80 max-w-md font-light leading-relaxed">
              Crafting responsive web interfaces, robust backend microservices, and thoughtful digital architectures. Built on modern JavaScript, Next.js, and Python.
            </p>
            <div className="flex items-center gap-2 text-xs text-gold-400/90 pt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-sm text-ivory-100 tracking-wider uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Repos */}
          <div>
            <h4 className="font-serif text-sm text-ivory-100 tracking-wider uppercase mb-4">
              Direct Links
            </h4>
            <div className="space-y-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-ivory-300 hover:text-gold-400 transition-colors"
              >
                <Github className="w-4 h-4 text-gold-400" />
                <span>GitHub Repository</span>
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-ivory-300 hover:text-gold-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-gold-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 text-xs text-ivory-300 hover:text-gold-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-gold-400" />
                <span>Send Direct Inquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-300/60">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Designed & Developed with Next.js, Three.js & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Back to top"
            className="flex items-center gap-1.5 p-2 rounded-full border border-gold-500/20 text-gold-400 hover:text-ivory-100 hover:border-gold-500/50 hover:bg-maroon-900 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider">Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

