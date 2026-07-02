import { useEffect } from "react";
import * as THREE from "three";

/**
 * Normalizes an arbitrary GLTF scene to a target size and centers it at the origin.
 * Source models can come in wildly different native units (a 200-unit sphere vs.
 * a 2-unit statue) — this makes camera framing predictable regardless of the asset.
 */
export function useAutoFit(
  ref: React.MutableRefObject<THREE.Object3D | null>,
  scene: THREE.Object3D,
  targetSize = 2.4
) {
  useEffect(() => {
    if (!ref.current) return;
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = targetSize / maxDim;

    ref.current.scale.setScalar(scale);
    ref.current.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
  }, [ref, scene, targetSize]);
}
