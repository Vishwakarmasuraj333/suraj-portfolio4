"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { SculpturalComposition } from "./SculpturalComposition";
import { SceneFallback } from "./SceneFallback";

export default function InteractiveCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.8], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 1.8]}
      className="w-full h-full cursor-grab active:cursor-grabbing"
    >
      <Suspense fallback={null}>
        <SculpturalComposition />
      </Suspense>
    </Canvas>
  );
}

