import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Skyline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
            toggleActions: "play none none reset" 
          }
        }
      );
    }, el);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-48 md:h-64 mt-12 overflow-hidden flex items-end">
      {/* A realistic-looking dark silhouette skyline built with SVG */}
      <svg 
        viewBox="0 0 1000 200" 
        preserveAspectRatio="none" 
        className="w-full h-full fill-[#0c0c0c]"
      >
        <path d="M0,200 L0,150 L20,150 L20,130 L40,130 L40,160 L70,160 L70,110 L90,110 L90,80 L110,80 L110,120 L130,120 L130,170 L170,170 L170,140 L200,140 L200,100 L230,100 L230,150 L270,150 L270,70 L300,70 L300,40 L330,40 L330,80 L360,80 L360,180 L420,180 L420,100 L450,100 L450,140 L500,140 L500,60 L540,60 L540,30 L570,30 L570,110 L610,110 L610,160 L660,160 L660,80 L700,80 L700,130 L740,130 L740,60 L780,60 L780,100 L820,100 L820,150 L870,150 L870,110 L920,110 L920,160 L960,160 L960,130 L1000,130 L1000,200 Z" />
      </svg>
      {/* Tallest tower is at X:540 to 570, Y:30 */}
      {/* This corresponds to left: 55.5% (approx halfway between 54% and 57%), top: 15% (30/200) */}
      <div 
        className="absolute w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"
        style={{ 
          left: '55.5%', 
          top: '15%', 
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 15px 4px rgba(220, 38, 38, 0.7)' 
        }}
      />
    </div>
  );
};
