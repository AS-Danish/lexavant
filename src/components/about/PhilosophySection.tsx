import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const PhilosophySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!textRef.current || !containerRef.current) return;
      
      const words = textRef.current.querySelectorAll('.word');
      
      // Pin the section and scrub opacity/blur
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // Increased scroll distance so it doesn't unpin too soon
        pin: true,
        animation: gsap.to(words, {
          opacity: 1,
          stagger: 0.1,
          ease: "none"
        }),
        scrub: 0.5, // Reduced scrub lag
        anticipatePin: 1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const content = "We are a full-service firm. That is not a marketing claim, but it reflects how we are structured and how we work. Our disputes lawyers sit alongside our transactional and advisory teams, and our technology practice operates alongside our corporate and private-client desks. The result is a firm in which a single matter, however complex, however cross-disciplinary, can be handled with coherence, accountability, and continuity from the first conference to the final order or closing.";

  return (
    <div ref={containerRef} data-theme="light" className="min-h-screen w-full bg-bone flex items-center justify-center pt-24 pb-12">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 
          ref={textRef} 
          className="font-serif text-xl md:text-3xl lg:text-4xl leading-[1.3] text-ink"
        >
          {content.split(' ').map((word, i) => (
            <span key={i} className="word opacity-20 inline-block mr-[0.3em] mb-[0.1em]">
              {word}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
};
