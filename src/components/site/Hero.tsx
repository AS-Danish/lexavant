import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ladyJustice from "@/assets/lady-justice.jpg";
import heroVideo from "@/assets/hero4.mp4";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: gsap.Context;

    const initHeroAnimation = () => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        
        tl.fromTo(".hero-video-overlay", { opacity: 0 }, { opacity: 1, duration: 2 })
          .fromTo(".hero-watermark", { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 2, ease: "power2.out" }, 0.4)
          .fromTo(".hero-left-content", 
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.6, ease: "power3.out" },
            0.5
          )
          .fromTo(".hero-eyebrow", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=1.2")
          .fromTo(".hero-line", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.12 }, "-=1.0")
          .fromTo(".hero-sub", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.15 }, "-=0.8")
          .fromTo(".hero-cta > *", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, "-=0.6")
          .fromTo(".hero-meta", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.6");
      }, root);
    };

    if (document.body.classList.contains("reveal-finished")) {
      initHeroAnimation();
    } else {
      // Hide initially to prevent FOUC before animation
      gsap.set(".hero-left-content, .hero-video-overlay", { opacity: 0 });
      window.addEventListener("reveal-finished", initHeroAnimation, { once: true });
    }

    return () => {
      window.removeEventListener("reveal-finished", initHeroAnimation);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={root} id="top" className="relative min-h-screen overflow-hidden bg-ink pt-32 pb-20 flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="hero-video-overlay absolute inset-0 bg-ink/75 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent z-[2]" />

      {/* Giant watermark */}
      <div
        aria-hidden
        className="hero-watermark pointer-events-none absolute -bottom-12 -left-6 md:-bottom-24 md:-left-12 font-serif italic text-[28vw] md:text-[22vw] leading-none text-bone/[0.04] select-none z-[3]"
      >
        lexavant
      </div>

      <div className="container relative z-10 grid lg:grid-cols-12 gap-10">
        <div className="hero-left-content lg:col-span-9 max-w-4xl">
          <div className="hero-eyebrow flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/60 mb-8">
            <span className="h-px w-10 bg-gold" />
            Lexavant LLP
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.1] text-bone mb-8">
            <span className="block reveal-line"><span className="hero-line">WHO WE</span></span>
            <span className="block reveal-line"><span className="hero-line italic gradient-gold-text">ARE</span></span>
          </h1>

          <div className="space-y-6">
            <p className="hero-sub max-w-2xl text-bone/90 text-base md:text-lg leading-relaxed font-medium">
              Lexavant LLP is a full-service law firm comprising nationally and internationally trained advocates, transactional lawyers, and advisory professionals. We combine decades of courtroom experience with a rigorous understanding of modern commercial and regulatory frameworks.
            </p>
            <p className="hero-sub max-w-2xl text-bone/70 text-sm md:text-base leading-relaxed">
              Our practice spans litigation, dispute resolution, general corporate, transactional advisory, technology, data law, media & entertainment, intellectual property, and private-client matters, amongst others. We act for listed companies, multinational corporations, financial institutions, family-owned businesses, founders, and high-net-worth individuals across India and in coordination with counsel internationally.
            </p>
          </div>

          <div className="hero-cta mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 bg-bone text-ink rounded-full pl-6 pr-2 py-2 font-mono text-xs uppercase tracking-[0.18em] hover:bg-gold hover:text-ink transition-colors duration-500"
            >
              Learn More About Us
              <span className="grid place-items-center h-9 w-9 rounded-full bg-gold/20 text-ink transition-transform group-hover:bg-bone">
                <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="hero-meta mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
            {[
              { k: "20+", l: "Years at the Bar" },
              { k: "60+", l: "Reported Judgments" },
              { k: "4", l: "Offices globally" },
              { k: "Global", l: "Multi-Jurisdictional Reach" },
            ].map((s) => (
              <div key={s.l} className="border-t border-bone/20 pt-4">
                <div className="font-serif text-2xl md:text-3xl text-bone">{s.k}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
