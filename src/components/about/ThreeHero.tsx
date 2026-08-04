import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import * as THREE from "three";

const Blob = () => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.1;
      mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <mesh ref={mesh} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial 
        color="#2c3e50" 
        emissive="#0f172a"
        roughness={0.4}
        metalness={0.1}
        clearcoat={0.1}
        transparent
        opacity={0.3}
        wireframe={false}
      />
    </mesh>
  );
};

export const ThreeHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (!headlineRef.current) return;
    
    // Simple split text simulation for animation
    const chars = headlineRef.current.querySelectorAll('.char');
    
    const initHeroAnimation = () => {
      gsap.fromTo(chars, 
        { 
          y: 100, 
          opacity: 0, 
          filter: "blur(12px)" 
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.1,
          duration: 1.4,
          ease: "power4.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 90%",
          }
        }
      );
    };

    if (document.body.classList.contains("reveal-finished")) {
      initHeroAnimation();
    } else {
      gsap.set(chars, { y: 100, opacity: 0, filter: "blur(12px)" });
      window.addEventListener("reveal-finished", initHeroAnimation, { once: true });
    }
  }, []);

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const splitText = (text: string) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className="char inline-block mr-[0.3em]">
        {word}
      </span>
    ));
  };

  return (
    <div 
      ref={containerRef}
      data-theme="light"
      className="relative h-screen w-full overflow-hidden bg-bone"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <Blob />
        </Canvas>
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20 mix-blend-overlay" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
      />

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-16"
      >
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60 mb-8">
              About Lexavant
            </p>
            <h1 ref={headlineRef} className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.1] text-ink mb-10">
              <span className="block">{splitText("Law, Finance &")}</span>
              <span className="block italic text-gold-deep">{splitText("Technology.")}</span>
            </h1>
            <p className="text-lg md:text-xl text-ink/70 max-w-2xl font-light leading-relaxed">
              Lexavant was built on a proposition that has not changed since inception: that exceptional legal counsel requires not just technical command of the law, but commercial judgment, strategic clarity, and an unwavering commitment to the client's objective.
            </p>
          </div>
          
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-ink/5 rounded-sm overflow-hidden relative border border-ink/10 shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
                 alt="Corporate Architecture" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-ink/20 to-transparent" />
      </motion.div>
    </div>
  );
};
