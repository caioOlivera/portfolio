"use client";

import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { useAutoFit } from "@/lib/useAutoFit";

function ArcherModel() {
  const { scene } = useGLTF("/models/elven-archer.glb");
  const wrapRef = useRef<THREE.Group>(null);

  useAutoFit(wrapRef, scene, 2.8);

  return (
    <group ref={wrapRef}>
      <primitive object={scene} />
    </group>
  );
}

export default function ArcherScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0.3, 4.6], fov: 32 }}
    >
      <ambientLight intensity={0.55} color="#c9d6ff" />
      <spotLight position={[2.5, 4, 3]} angle={0.35} penumbra={0.6} intensity={110} color="#e8b95b" castShadow />
      <spotLight position={[-3, 2, -2]} angle={0.5} intensity={50} color="#7c88ad" />
      <Suspense fallback={null}>
        <ArcherModel />
        <ContactShadows position={[0, -1.4, 0]} opacity={0.55} scale={6} blur={2.2} far={2} color="#000000" />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.1}
        rotateSpeed={0.6}
        minPolarAngle={Math.PI / 2.4}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}

useGLTF.preload("/models/elven-archer.glb");
