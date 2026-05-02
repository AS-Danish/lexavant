import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import courtroom from "@/assets/courtroom.jpg";

gsap.registerPlugin(ScrollTrigger);

export const Courtroom = () => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".cr-img", {
        scale: 1.15,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 0.6 },
      });
      gsap.from(".cr-line", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="courtroom" className="relative h-[110vh] overflow-hidden bg-ink">
      <img src={courtroom} alt="Empty grand courtroom at dusk with golden light beams" loading="lazy" width={1920} height={1080} className="cr-img absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink" />
      <div className="absolute inset-0 bg-gradient-vignette" />

      <div className="relative z-10 container h-full flex flex-col justify-center text-bone">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-8">
          <span className="h-px w-8 bg-gold" /> 03 — The Courtroom
        </div>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.0] max-w-5xl">
          <span className="block reveal-line"><span className="cr-line">Where preparation</span></span>
          <span className="block reveal-line"><span className="cr-line italic gradient-gold-text">meets its moment.</span></span>
        </h2>
        <p className="cr-line mt-10 max-w-xl text-bone/70 text-lg leading-relaxed">
          We do not settle for the convenient outcome. We rehearse. We argue. We try. Of the cases that reach the bench,
          93% conclude in our client's favor.
        </p>
      </div>

      <div className="absolute bottom-8 right-8 z-10 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50">
        Suffolk County Superior · Courtroom 7
      </div>
    </section>
  );
};
