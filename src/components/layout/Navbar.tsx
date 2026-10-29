"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { ResumeModal } from "../ui/ResumeModal";
import { Menu, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Section Observer
    const sectionIds = siteConfig.navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-md",
          isScrolled
            ? "py-3 bg-maroon-950/90 dark:bg-maroon-950/90 border-b border-gold-500/25 shadow-xl shadow-maroon-950/70"
            : "py-4 bg-maroon-950/70 dark:bg-maroon-950/70 border-b border-gold-500/10"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Custom SV Monogram Logo */}
            <Logo size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-maroon-900/40 border border-gold-500/20 backdrop-blur-md shadow-inner">
              {siteConfig.navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "relative px-3.5 py-1.5 text-xs font-medium tracking-wider transition-all duration-300 rounded-full",
                      isActive
                        ? "text-maroon-950 bg-gradient-to-r from-gold-400 to-gold-500 font-semibold shadow-sm"
                        : "text-ivory-200/80 hover:text-gold-300 hover:bg-maroon-800/40"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <ThemeToggle />

              <Button
                variant="primary"
                size="sm"
                onClick={() => setResumeModalOpen(true)}
                className="flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </Button>
            </div>

            {/* Mobile Menu & Theme Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                className="p-2.5 rounded-xl border border-gold-500/25 bg-maroon-900/60 text-gold-400 hover:text-ivory-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        activeSection={activeSection}
        onClose={() => setMobileMenuOpen(false)}
        onResumeClick={() => setResumeModalOpen(true)}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
}

