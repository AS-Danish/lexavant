import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation, useSpring, animate } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  { value: 20, suffix: "+", label: "Years of Practice" },
  { value: 4, suffix: "", label: "Global Offices" },
  { value: 60, suffix: "+", label: "Reported Judgments" },
  { value: 5, suffix: "B+", prefix: "$", label: "Deal Value Advised" }
];

const StatCounter = ({ stat, delay }: { stat: typeof stats[0], delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, stat.value, {
        duration: 2,
        delay,
        ease: "easeOut",
        onUpdate(value) {
          setDisplayValue(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, stat.value, delay]);

  return (
    <div ref={ref} className="flex flex-col relative group">
      <div className="font-serif text-5xl md:text-7xl text-ink mb-4 flex items-baseline">
        {stat.prefix}
        {displayValue}
        {stat.suffix}
      </div>
      <p className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-6">
        {stat.label}
      </p>
      
      {/* Animated underline */}
      <div className="h-px w-full bg-ink/10 relative overflow-hidden">
        <motion.div 
          className="absolute inset-y-0 left-0 bg-gold h-full"
          initial={{ width: "0%" }}
          animate={isInView ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 1.5, delay: delay + 0.5, ease: "circOut" }}
        />
      </div>
    </div>
  );
};

const MagneticCTAButton = () => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Magnetic pull distance
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x, y }} className="relative z-10 inline-block">
      <Link
        to="/contact"
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden group text-bone"
      >
        {/* Liquid Morph Background */}
        <motion.div
          className="absolute inset-0 bg-ink"
          animate={{
            borderRadius: isHovered 
              ? ["50%", "40% 60% 70% 30% / 40% 50% 60% 50%", "50%"] 
              : "50%",
            scale: isHovered ? 1.05 : 1
          }}
          transition={{
            borderRadius: {
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            },
            scale: { duration: 0.3 }
          }}
        />
        
        {/* Hover ring */}
        <div className="absolute inset-0 rounded-full border border-gold opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none" />

        <span className="relative z-10 font-serif text-2xl md:text-3xl italic">
          Engage Us
        </span>
      </Link>
    </motion.div>
  );
};

export const StatsAndCTA = () => {
  return (
    <React.Fragment>
      <section data-theme="light" className="bg-bone py-32 border-b border-ink/10">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
            {stats.map((stat, i) => (
              <StatCounter key={i} stat={stat} delay={i * 0.2} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-32 md:py-64 relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
        </div>
        
        <div className="text-center relative z-10 px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60 mb-12">
            Ready to Begin
          </p>
          <MagneticCTAButton />
        </div>
      </section>
    </React.Fragment>
  );
};
