import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    
    if (!dot || !ring) return;

    // Set initial position off-screen so it doesn't flash at 0,0
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    // Track mouse coordinates
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    // Quick setters for performance
    const xSetDot = gsap.quickSetter(dot, "x", "px");
    const ySetDot = gsap.quickSetter(dot, "y", "px");
    const xSetRing = gsap.quickSetter(ring, "x", "px");
    const ySetRing = gsap.quickSetter(ring, "y", "px");

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Dot follows immediately
      xSetDot(mouse.x);
      ySetDot(mouse.y);
    };

    window.addEventListener("mousemove", onMouseMove);

    // Ring trails behind using GSAP ticker
    gsap.ticker.add(() => {
      // Linear interpolation for smooth trailing
      const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio()); 
      const currentX = gsap.getProperty(ring, "x") as number;
      const currentY = gsap.getProperty(ring, "y") as number;
      
      xSetRing(currentX + (mouse.x - currentX) * dt);
      ySetRing(currentY + (mouse.y - currentY) * dt);
    });

    // Hover effects on links/buttons
    const onMouseEnterLink = () => {
      gsap.to(dot, { scale: 1.5, duration: 0.3, ease: "power2.out" });
      gsap.to(ring, { scale: 1.8, borderColor: "rgba(249, 115, 22, 0.4)", duration: 0.3, ease: "power2.out" });
    };

    const onMouseLeaveLink = () => {
      gsap.to(dot, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(ring, { scale: 1, borderColor: "rgba(249, 115, 22, 0.2)", duration: 0.3, ease: "power2.out" });
    };

    // Use event delegation on the document
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('[role="button"]') || target.closest('input')) {
        onMouseEnterLink();
      } else {
        onMouseLeaveLink();
      }
    };
    
    document.addEventListener('mouseover', handleMouseOver);

    // Idle pulsing animation on the ring
    const pulseAnim = gsap.to(ring, {
      scale: 1.1,
      opacity: 0.6,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      pulseAnim.kill();
    };
  }, []);

  return (
    <>
      <div 
        ref={ringRef} 
        className="pointer-events-none fixed top-0 left-0 z-[10000] h-10 w-10 rounded-full border border-[#f97316]/30 hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div 
        ref={dotRef} 
        className="pointer-events-none fixed top-0 left-0 z-[10000] h-2 w-2 rounded-full bg-[#f97316] shadow-[0_0_10px_rgba(249,115,22,0.6)] hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};
