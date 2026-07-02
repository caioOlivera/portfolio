"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useAutoFit } from "@/lib/useAutoFit";

function MoonModel({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const { scene } = useGLTF("/models/moon.glb");
  const wrapRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useAutoFit(wrapRef, scene, 2.6);

  useFrame(() => {
    if (lightRef.current) {
      // Scroll sweeps the light around the sphere like a moon-phase terminator
      const angle = Math.PI * 0.15 + scrollProgress.current * Math.PI * 1.6;
      lightRef.current.position.x = Math.cos(angle) * 5;
      lightRef.current.position.z = Math.sin(angle) * 5;
    }
  });

  return (
    <group ref={wrapRef}>
      <directionalLight ref={lightRef} position={[3, 1, 4]} intensity={2.6} color="#eef2ff" />
      <primitive object={scene} />
    </group>
  );
}

export default function MoonScene({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 6], fov: 36 }}
    >
      <ambientLight intensity={0.32} color="#7c88ad" />
      <pointLight position={[-4, -2, -3]} intensity={12} color="#e8b95b" />
      <Suspense fallback={null}>
        <MoonModel scrollProgress={scrollProgress} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.6}
      />
    </Canvas>
  );
}

useGLTF.preload("/models/moon.glb");
