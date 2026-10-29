"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Theme } from "@/types";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("sv_theme") as Theme | null;
      if (storedTheme === "light" || storedTheme === "dark") {
        setThemeState(storedTheme);
        document.documentElement.classList.toggle("dark", storedTheme === "dark");
      } else {
        // Default to dark burgundy as requested
        setThemeState("dark");
        document.documentElement.classList.add("dark");
      }
    } catch {
      // Fallback
      setThemeState("dark");
      document.documentElement.classList.add("dark");
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("sv_theme", newTheme);
    } catch {
      // ignore
    }
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {/* Script in layout avoids flash, context manages client state */}
      <div className={mounted ? "" : "opacity-0 transition-opacity duration-300"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

