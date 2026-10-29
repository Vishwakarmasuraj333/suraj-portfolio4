"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-maroon-950 font-semibold shadow-md shadow-gold-500/20 hover:shadow-gold-500/35 hover:brightness-105 border border-gold-300/40",
    secondary:
      "bg-maroon-900/80 hover:bg-maroon-850 text-ivory-200 border border-gold-500/30 shadow-md shadow-maroon-950/40 hover:border-gold-500/60 hover:text-gold-300",
    outline:
      "bg-transparent text-gold-400 hover:text-ivory-200 border border-gold-500/40 hover:border-gold-400 hover:bg-gold-500/10",
    ghost:
      "bg-transparent text-ivory-300 hover:text-gold-400 hover:bg-maroon-900/40",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

