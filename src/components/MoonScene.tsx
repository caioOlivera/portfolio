"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

function MoonModel({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const { scene } = useGLTF("/models/moon.glb");
  const moonRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useFrame((_, delta) => {
    if (moonRef.current) {
      moonRef.current.rotation.y += delta * 0.06;
    }
    if (lightRef.current) {
      // Scroll drives the terminator: light sweeps around the moon like a phase cycle
      const angle = Math.PI * 0.15 + scrollProgress.current * Math.PI * 1.4;
      lightRef.current.position.x = Math.cos(angle) * 5;
      lightRef.current.position.z = Math.sin(angle) * 5;
    }
  });

  return (
    <>
      <directionalLight ref={lightRef} position={[3, 1, 4]} intensity={2.4} color="#eef2ff" />
      <group ref={moonRef} scale={1.6}>
        <primitive object={scene} />
      </group>
    </>
  );
}

export default function MoonScene({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 5.2], fov: 38 }}
    >
      <ambientLight intensity={0.35} color="#7c88ad" />
      <Suspense fallback={null}>
        <MoonModel scrollProgress={scrollProgress} />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/models/moon.glb");
