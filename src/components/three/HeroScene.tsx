"use client";

import React, { useState, useEffect, Component, ErrorInfo } from "react";
import dynamic from "next/dynamic";
import { SceneFallback } from "./SceneFallback";

// Error Boundary for WebGL context crashes
class WebGLErrorBoundary extends Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("WebGL Context unavailable or failed, switching to CSS fallback:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Dynamically import InteractiveCanvas with ssr: false
const DynamicInteractiveCanvas = dynamic(
  () => import("./InteractiveCanvas"),
  {
    ssr: false,
    loading: () => <SceneFallback />,
  }
);

export function HeroScene() {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    // Quick WebGL support check
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      setWebglSupported(Boolean(gl));
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (webglSupported === false) {
    return <SceneFallback />;
  }

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-[600px] flex items-center justify-center">
      <WebGLErrorBoundary fallback={<SceneFallback />}>
        <DynamicInteractiveCanvas />
      </WebGLErrorBoundary>
    </div>
  );
}
