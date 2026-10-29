"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function SculpturalComposition() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const satellitesRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate particle positions
  const [particlesPos] = useMemo(() => {
    const count = 120;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // Smooth subtle pointer parallax on main group
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.4 + t * 0.05,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.3 + Math.sin(t * 0.5) * 0.05,
        0.05
      );
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.12;
    }

    // Core slow rotation
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.2;
      coreRef.current.rotation.y = t * 0.3;
    }

    // Differential orbital rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.15;
      ring1Ref.current.rotation.y = t * 0.25;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.18;
      ring2Ref.current.rotation.z = t * 0.12;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -t * 0.1;
      ring3Ref.current.rotation.z = -t * 0.2;
    }

    // Satellites orbital orbit
    if (satellitesRef.current) {
      satellitesRef.current.rotation.y = t * 0.35;
      satellitesRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    }

    // Micro-particles shimmer & slow drift
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.03;
      particlesRef.current.rotation.x = t * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Studio Lighting System */}
      <ambientLight color="#F7F1E8" intensity={0.7} />
      {/* Champagne Key Light */}
      <directionalLight
        color="#D6B477"
        intensity={2.8}
        position={[5, 6, 4]}
      />
      {/* Deep Burgundy Back / Rim Light */}
      <directionalLight
        color="#7D293F"
        intensity={3.2}
        position={[-6, -4, -4]}
      />
      {/* Soft Gold Front Point Light */}
      <pointLight
        color="#E8D2A1"
        intensity={2.0}
        position={[0, 1.5, 3]}
        distance={10}
      />
      {/* Wine Red Fill Light */}
      <pointLight
        color="#641E32"
        intensity={2.5}
        position={[0, -2, -2]}
        distance={8}
      />

      {/* Central Abstract Burgundy Glass Sculpture */}
      <mesh ref={coreRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1.05, 0.32, 128, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#641E32"
          emissive="#2B1019"
          emissiveIntensity={0.2}
          roughness={0.18}
          metalness={0.25}
          transmission={0.65}
          thickness={1.4}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
        />
      </mesh>

      {/* Inner Champagne Octahedron Core Gem */}
      <mesh scale={[0.45, 0.45, 0.45]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#D6B477"
          roughness={0.2}
          metalness={0.95}
          emissive="#D6B477"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Champagne Metallic Orbital Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.0, 0.025, 24, 100]} />
        <meshStandardMaterial
          color="#D6B477"
          metalness={0.9}
          roughness={0.2}
          emissive="#8C6C35"
          emissiveIntensity={0.15}
        />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.3, 0.02, 24, 100]} />
        <meshStandardMaterial
          color="#E8D2A1"
          metalness={0.88}
          roughness={0.22}
          emissive="#B89354"
          emissiveIntensity={0.1}
        />
      </mesh>

      <mesh ref={ring3Ref} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[2.6, 0.018, 24, 100]} />
        <meshStandardMaterial
          color="#D6B477"
          metalness={0.85}
          roughness={0.3}
          opacity={0.7}
          transparent
        />
      </mesh>

      {/* Orbiting Satellite Gems */}
      <group ref={satellitesRef}>
        <mesh position={[2.4, 0.3, 0]} scale={[0.15, 0.15, 0.15]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#D6B477"
            metalness={0.9}
            roughness={0.2}
            emissive="#D6B477"
            emissiveIntensity={0.4}
          />
        </mesh>

        <mesh position={[-2.2, -0.6, 0.5]} scale={[0.12, 0.12, 0.12]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial
            color="#7D293F"
            transmission={0.8}
            roughness={0.1}
            thickness={1}
          />
        </mesh>

        <mesh position={[0.5, 2.3, -0.8]} scale={[0.1, 0.1, 0.1]}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#F7F1E8"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* Champagne Stardust Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPos.length / 3}
            array={particlesPos}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#D6B477"
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

