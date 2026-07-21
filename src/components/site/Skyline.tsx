import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import skylineImg from "@/assets/glowing-skyline.png";

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
            toggleActions: "play none none reset" 
          }
        }
      );
    }, el);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-transparent -mb-4">
      <img src={skylineImg} alt="City Skyline Silhouette with Orange Lights" className="w-full h-auto block transform -translate-y-4 md:-translate-y-8" />
    </div>
  );
};
