"use client";

import React from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} appearance`}
      className={cn(
        "relative p-2.5 rounded-full border border-gold-500/25 bg-maroon-900/60 dark:bg-maroon-900/60 backdrop-blur-md text-gold-400 hover:text-gold-300 hover:border-gold-500/50 hover:bg-maroon-800/80 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 group",
        className
      )}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {theme === "dark" ? (
          <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-gold-400" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-maroon-800" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

