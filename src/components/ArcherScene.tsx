"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";

function ArcherModel() {
  const { scene } = useGLTF("/models/elven-archer.glb");
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={group} scale={0.62} position={[0, -1.55, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function ArcherScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0.4, 4.4], fov: 32 }}
    >
      <ambientLight intensity={0.5} color="#c9d6ff" />
      <spotLight
        position={[2.5, 4, 3]}
        angle={0.35}
        penumbra={0.6}
        intensity={90}
        color="#e8b95b"
        castShadow
      />
      <spotLight position={[-3, 2, -2]} angle={0.5} intensity={40} color="#7c88ad" />
      <Suspense fallback={null}>
        <ArcherModel />
        <ContactShadows position={[0, -1.55, 0]} opacity={0.55} scale={6} blur={2.2} far={2} color="#000000" />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/models/elven-archer.glb");
