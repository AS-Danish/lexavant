import React, { useRef, useState, useLayoutEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ethos = [
  { title: "Partner-led attention", desc: "Clients are not handed down the bench as a matter progresses." },
  { title: "Strategy before procedure", desc: "Documentation and advocacy follow strategy, never the reverse." },
  { title: "Calibrated advice", desc: "Tailored to risk, cost, and the relationships you want to preserve." },
  { title: "Directness", desc: "We tell you when it is time to settle and when it is time to fight." },
  { title: "Discretion", desc: "Client confidences are absolute, with stringent safeguards." },
];

const MagneticNumber = ({ index }: { index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (max 20px pull)
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.4);
    y.set(distanceY * 0.4);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="w-16 h-16 shrink-0 rounded-full border border-gold/30 flex items-center justify-center font-mono text-xl text-gold-deep cursor-default bg-bone"
    >
      <motion.span
        animate={{ scale: isHovered ? 1.2 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        0{index + 1}
      </motion.span>
    </motion.div>
  );
};

export const ValuesStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll('.ethos-card-wrapper');
      
      gsap.fromTo(cards, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%", // Triggers when the section reaches 60% of viewport height
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} data-theme="dark" className="bg-ink py-32 md:py-48 relative z-10">
      <div className="container px-6 max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/50 mb-6">
            <span className="h-px w-8 bg-gold" /> What We Stand For
          </div>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] text-bone">
            Ethos
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-12 pb-32">
          {ethos.map((item, i) => (
            <div 
              key={i}
              className="sticky ethos-card-wrapper"
              style={{
                top: `calc(15vh + ${i * 40}px)`
              }}
            >
              <div className="bg-bone text-ink rounded-xl p-8 md:p-12 shadow-2xl border border-ink/5 flex flex-col md:flex-row md:items-center gap-8 md:gap-12 transition-all duration-500 will-change-transform transform-gpu group hover:border-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                <MagneticNumber index={i} />
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl mb-4 text-ink transition-colors duration-500 group-hover:text-gold-deep">{item.title}</h3>
                  <p className="text-ink/60 font-light text-xl leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
