"use client";

import React, { useEffect, useRef, useState } from "react";

export function AtmosphereBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Detect reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    // Desktop pointer spotlight
    const handleMouseMove = (e: MouseEvent) => {
      // Only track if pointer is mouse (not touch)
      if (window.matchMedia("(pointer: fine)").matches) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Champagne micro-particles canvas
  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate tasteful champagne constellation points
    const particleCount = Math.min(35, Math.floor(width / 40));
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      baseOpacity: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      const baseOpacity = 0.15 + Math.random() * 0.35;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 0.8 + Math.random() * 1.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: baseOpacity,
        baseOpacity,
      });
    }

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle shimmer
        const shimmer = Math.sin(tick * 0.02 + idx) * 0.1;
        const currentOpacity = Math.max(0.05, Math.min(0.6, p.baseOpacity + shimmer));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(214, 180, 119, ${currentOpacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Deep Burgundy Base Layer with luxury gradient shifts */}
      <div className="absolute inset-0 bg-maroon-950 dark:bg-maroon-950 transition-colors duration-500" />

      {/* Atmospheric Radial Gradients */}
      <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-maroon-900/60 dark:bg-maroon-900/60 blur-[130px]" />
      <div className="absolute top-[35%] -right-[15%] w-[55vw] h-[55vw] rounded-full bg-maroon-850/50 dark:bg-maroon-850/50 blur-[140px]" />
      <div className="absolute -bottom-[15%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-maroon-900/40 dark:bg-maroon-900/40 blur-[120px]" />

      {/* Subtle Desktop Spotlight */}
      {mousePos && (
        <div
          className="absolute w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background:
              "radial-gradient(circle, rgba(214, 180, 119, 0.04) 0%, rgba(100, 30, 50, 0.03) 40%, transparent 70%)",
          }}
        />
      )}

      {/* Subtle Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Champagne Floating Micro-particles Canvas */}
      {!prefersReducedMotion && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      )}
    </div>
  );
}

