import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "Foundation",
    title: "Lexavant LLP",
    desc: "A limited liability partnership registered under the laws of India, built on the principle of delivering exceptional, partner-led counsel."
  },
  {
    year: "Presence",
    title: "Global Reach",
    desc: "The firm has established offices in Mumbai, Delhi, and London, offering seamless connectivity for cross-border mandates."
  },
  {
    year: "Expertise",
    title: "Multi-Jurisdictional",
    desc: "Our professionals are trained across Indian and international jurisdictions, regularly advising on complex mandates spanning multiple legal systems."
  },
  {
    year: "Practice",
    title: "Full-Service Capability",
    desc: "From litigation and dispute resolution at every level of the Indian judiciary to corporate, M&A advisory, securities law, and private-client matters."
  }
];

const TiltCard = ({ milestone, index }: { milestone: typeof milestones[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[320px] md:w-[480px] h-[450px] shrink-0 rounded-sm border border-bone/20 bg-ink p-10 md:p-16 flex flex-col cursor-crosshair group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-bone/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div style={{ transform: "translateZ(30px)" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-gold-deep mb-8 opacity-80">
          0{index + 1} // {milestone.year}
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-bone mb-6">
          {milestone.title}
        </h3>
        <p className="text-bone/70 font-light leading-relaxed">
          {milestone.desc}
        </p>
      </div>
    </motion.div>
  );
};

export const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!scrollWrapperRef.current || !containerRef.current) return;

      const totalWidth = scrollWrapperRef.current.scrollWidth - window.innerWidth;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        pin: true,
        animation: gsap.to(scrollWrapperRef.current, {
          x: -totalWidth,
          ease: "none"
        }),
        scrub: 1,
        anticipatePin: 1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} data-theme="dark" className="h-[120vh] w-full bg-ink text-bone overflow-hidden flex flex-col justify-center relative pt-32 pb-20">
      <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="container mx-auto px-8 md:px-16 mb-16 md:mb-24 shrink-0">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/50 mb-6">
          <span className="h-px w-8 bg-gold" /> The Firm
        </div>
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.1]">
          Foundation & <br className="hidden md:block" />
          <span className="italic font-light text-bone/80">Expertise</span>
        </h2>
      </div>

      <div className="w-full overflow-visible">
        <div 
          ref={scrollWrapperRef} 
          className="flex gap-10 md:gap-20 px-8 md:px-16 w-max items-center py-16"
        >
          {milestones.map((milestone, idx) => (
            <TiltCard key={idx} milestone={milestone} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
