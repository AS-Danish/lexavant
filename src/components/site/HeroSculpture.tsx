import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Sculpture = ({ reducedMotion }: { reducedMotion: boolean }) => {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (reducedMotion) return;
    if (!group.current || !ring.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.12 + pointer.x * 0.22;
    group.current.rotation.x = Math.sin(t * 0.18) * 0.16 - pointer.y * 0.12;
    ring.current.rotation.z = t * -0.08;
  });

  return (
    <group ref={group} rotation={[0.35, 0.3, 0]}>
      <mesh scale={1.55}>
        <icosahedronGeometry args={[1, 2]} />
        <meshPhysicalMaterial
          color="#b59657"
          metalness={0.72}
          roughness={0.28}
          transmission={0.18}
          transparent
          opacity={0.32}
          wireframe
        />
      </mesh>
      <mesh ref={ring} rotation={[1.1, 0.2, 0]}>
        <torusGeometry args={[2.05, 0.012, 12, 180]} />
        <meshBasicMaterial color="#e0c58d" transparent opacity={0.45} />
      </mesh>
      <mesh rotation={[0.3, 1.1, 0.4]}>
        <torusGeometry args={[1.82, 0.006, 8, 150]} />
        <meshBasicMaterial color="#f4efe6" transparent opacity={0.18} />
      </mesh>
    </group>
  );
};

export const HeroSculpture = () => {
  const [preferences, setPreferences] = useState(() => ({
    desktop: typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches,
    reducedMotion: typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  }));

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPreferences({ desktop: desktop.matches, reducedMotion: reducedMotion.matches });
    desktop.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  if (!preferences.desktop) return null;

  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 w-[54%]" aria-hidden>
      <Canvas camera={{ position: [0, 0, 6], fov: 42 }} dpr={[1, 1.35]} gl={{ alpha: true, antialias: true }} frameloop={preferences.reducedMotion ? "demand" : "always"}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 5, 6]} intensity={2.4} color="#e0c58d" />
        <pointLight position={[-4, -2, 2]} intensity={1.2} color="#f4efe6" />
        <Sculpture reducedMotion={preferences.reducedMotion} />
      </Canvas>
    </div>
  );
};
