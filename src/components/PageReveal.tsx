import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const PageReveal = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const outerDotRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // If the animation already ran (e.g. HMR during dev), don't run again
    if (document.body.classList.contains("reveal-finished")) {
      setIsAnimating(false);
      return;
    }

    if (!wrapperRef.current) return;
    
    // Lock scroll during animation
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        document.body.style.overflow = "";
        document.body.classList.add("reveal-finished");
        window.dispatchEvent(new Event("reveal-finished"));
      },
    });

    // Initial setup: move dot offscreen top
    gsap.set([dotRef.current, outerDotRef.current], { y: -window.innerHeight });
    
    // Drop in the dot
    tl.to([dotRef.current, outerDotRef.current], {
      y: 0,
      duration: 1.2,
      ease: "bounce.out"
    });

    // Phase 1: Breathing dot and counting
    const breathTw = gsap.to(outerDotRef.current, {
      scale: 2.2,
      opacity: 0.1,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut", 
    });

    // The counter animation
    const counter = { val: 0 };
    tl.to(counter, {
      val: 100,
      duration: 3.8, // Increased duration to make it more deliberate
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.round(counter.val) + "%";
        }
      },
    }, "<"); // Start counting alongside or immediately after drop in

    // Phase 2: Transition to logo
    tl.add(() => {
      breathTw.kill();
      // Expand the outer ring to create a ripple out effect
      gsap.to(outerDotRef.current, { scale: 20, opacity: 0, duration: 0.8, ease: "power2.out" });
      
      // Fire the global event to start Nav and Hero animations exactly at 100%
      if (!document.body.classList.contains("reveal-finished")) {
        document.body.classList.add("reveal-finished");
        window.dispatchEvent(new Event("reveal-finished"));
      }
    });
    
    // Hide logo initially (in the actual DOM) so we can fade it in when dot lands
    // Removed: We let the logo fade in naturally with the header so it's visible as the dot travels.

    // Fade out counter and dark overlay simultaneously
    tl.to(counterRef.current, { opacity: 0, duration: 0.3 }, "+=0");
    tl.to(overlayRef.current, { opacity: 0, duration: 1.0, ease: "power2.inOut" }, "<");

    // Move dot to the logo position using functional values so it calculates at runtime
    tl.to(dotRef.current, {
      x: () => {
        let x = 0;
        const logoContainer = document.querySelector('.nav-logo-container') as HTMLElement;
        const logoImg = document.querySelector('img[alt="Lexavant"]');
        if (logoContainer && logoImg) {
          const prev = logoContainer.style.transform;
          logoContainer.style.transform = "none";
          x = logoImg.getBoundingClientRect().left + logoImg.getBoundingClientRect().width / 2 - window.innerWidth / 2;
          logoContainer.style.transform = prev;
        }
        return x;
      },
      y: () => {
        let y = 0;
        const logoContainer = document.querySelector('.nav-logo-container') as HTMLElement;
        const logoImg = document.querySelector('img[alt="Lexavant"]');
        if (logoContainer && logoImg) {
          const prev = logoContainer.style.transform;
          logoContainer.style.transform = "none";
          y = logoImg.getBoundingClientRect().top + logoImg.getBoundingClientRect().height * 0.16 - window.innerHeight / 2;
          logoContainer.style.transform = prev;
        }
        return y;
      },
      width: 6, // dot gets very small to match logo dot exactly
      height: 6,
      scale: 1,
      duration: 1.2,
      ease: "power3.inOut",
    }, "<"); // Starts moving exactly as the overlay fades out

    // When dot lands, fade out the dot
    tl.to(dotRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
    }, "-=0.2"); // Just before the dot fully lands

    return () => {
      tl.kill();
      breathTw.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (!isAnimating) return null;

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none" // removed bg-bone, added pointer-events-none
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-bone pointer-events-auto" // Light background during loading
      />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center w-24 h-24">
          {/* Outer Breathing Circle */}
          <div
            ref={outerDotRef}
            className="absolute w-8 h-8 bg-[#f97316]/40 rounded-full"
          />
          {/* Inner Solid Dot */}
          <div
            ref={dotRef}
            className="absolute w-3 h-3 bg-[#f97316] rounded-full shadow-[0_0_12px_rgba(249,115,22,0.8)]"
          />
        </div>
        
        {/* Premium Typography Counter */}
        <div className="absolute top-32 flex flex-col items-center gap-3 w-max">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">
            Welcome to Lexavant LLP
          </span>
          <div
            ref={counterRef}
            className="font-display text-5xl md:text-6xl text-ink"
          >
            0%
          </div>
        </div>
      </div>
    </div>
  );
};
