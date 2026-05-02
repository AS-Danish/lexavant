import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ladyJustice from "@/assets/lady-justice.jpg";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 1 })
        .from(".hero-line", { y: 80, opacity: 0, duration: 1.2, stagger: 0.12 }, "-=0.7")
        .from(".hero-sub", { y: 30, opacity: 0, duration: 1 }, "-=0.8")
        .from(".hero-cta > *", { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.6")
        .from(".hero-meta", { opacity: 0, duration: 1 }, "-=0.6")
        .from(".hero-img", { scale: 1.15, opacity: 0, duration: 1.6, ease: "expo.out" }, 0.2)
        .from(".hero-watermark", { opacity: 0, x: -40, duration: 2, ease: "power2.out" }, 0.4);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="relative min-h-screen overflow-hidden bg-bone pt-28 pb-12 grain">
      {/* Giant watermark */}
      <div
        aria-hidden
        className="hero-watermark pointer-events-none absolute -bottom-12 -left-6 md:-bottom-24 md:-left-12 font-serif italic text-[28vw] md:text-[22vw] leading-none text-ink/[0.04] select-none"
      >
        lexavant
      </div>

      <div className="container relative grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 relative z-10">
          <div className="hero-eyebrow flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60 mb-8">
            <span className="h-px w-10 bg-gold" />
            Est. 1986 — Counsel of Consequence
          </div>

          <h1 className="font-serif text-[12vw] md:text-[7.5vw] lg:text-[6.4vw] leading-[0.95] tracking-[-0.02em] text-ink">
            <span className="block reveal-line"><span className="hero-line">Justice,</span></span>
            <span className="block reveal-line"><span className="hero-line italic gradient-gold-text">deliberately</span></span>
            <span className="block reveal-line"><span className="hero-line">delivered.</span></span>
          </h1>

          <p className="hero-sub mt-8 max-w-md text-ink/70 text-base md:text-lg leading-relaxed">
            For nearly four decades, Lexavant has represented founders, families, and Fortune 500s in matters that demand
            quiet conviction and decisive force.
          </p>

          <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-ink text-bone rounded-full pl-6 pr-2 py-2 font-mono text-xs uppercase tracking-[0.18em] hover:bg-gold hover:text-ink transition-all duration-500"
            >
              Schedule Consultation
              <span className="grid place-items-center h-9 w-9 rounded-full bg-gold text-ink transition-transform group-hover:rotate-45">
                <ArrowDown size={14} className="-rotate-45" />
              </span>
            </a>
            <a href="#services" className="font-mono text-xs uppercase tracking-[0.18em] text-ink/70 hover:text-ink underline-offset-8 hover:underline">
              Explore Practice →
            </a>
          </div>

          <div className="hero-meta mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "39", l: "Years Practising" },
              { k: "$2.4B", l: "Recovered Verdicts" },
              { k: "98%", l: "Client Retention" },
            ].map((s) => (
              <div key={s.l} className="border-t border-ink/15 pt-4">
                <div className="font-serif text-3xl md:text-4xl text-ink">{s.k}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="hero-img relative aspect-[3/4] overflow-hidden rounded-sm shadow-noir">
            <img
              src={ladyJustice}
              alt="Bronze Lady Justice statue under dramatic golden light"
              width={1080}
              height={1440}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-vignette" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-bone">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-soft">Themis</div>
                <div className="font-serif italic text-sm mt-1">Goddess of Divine Order</div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/60">N° 01 / 04</div>
            </div>
          </div>

          <div className="absolute -top-6 -left-6 hidden lg:block">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 [writing-mode:vertical-rl] rotate-180">
              Lex · Avant · Garde
            </span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/40 font-mono text-[10px] uppercase tracking-[0.3em]">
        Scroll
        <span className="h-10 w-px bg-ink/30 animate-pulse" />
      </div>
    </section>
  );
};
