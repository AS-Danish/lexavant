import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ladyJustice from "@/assets/lady-justice.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 1 })
        .from(".hero-line", { y: 40, opacity: 0, duration: 1.2, stagger: 0.12 }, "-=0.7")
        .from(".hero-sub", { y: 30, opacity: 0, duration: 1, stagger: 0.15 }, "-=0.8")
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
            Lexavant LLP
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-ink mb-8">
            <span className="block reveal-line"><span className="hero-line">WHO WE</span></span>
            <span className="block reveal-line"><span className="hero-line italic gradient-gold-text">ARE</span></span>
          </h1>

          <div className="space-y-6">
            <p className="hero-sub max-w-xl text-ink/80 text-base md:text-lg leading-relaxed font-medium">
              Lexavant LLP is a full-service law firm comprising nationally and internationally trained advocates, transactional lawyers, and advisory professionals. We combine decades of courtroom experience with a rigorous understanding of modern commercial and regulatory frameworks.
            </p>
            <p className="hero-sub max-w-xl text-ink/70 text-sm md:text-base leading-relaxed">
              Our practice spans litigation, dispute resolution, general corporate, transactional advisory, technology, data law, media & entertainment, intellectual property, and private-client matters, amongst others. We act for listed companies, multinational corporations, financial institutions, family-owned businesses, founders, and high-net-worth individuals across India and in coordination with counsel internationally.
            </p>
            <p className="hero-sub max-w-xl text-ink/70 text-sm md:text-base leading-relaxed">
              Our offices are present in London, Mumbai, Delhi, and Aurangabad. Our professionals are trained across multiple jurisdictions, and our matters routinely span cross-border mandates requiring co-ordination with international law firms and respective regulatory bodies.
            </p>
          </div>

          <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 bg-ink text-bone rounded-full pl-6 pr-2 py-2 font-mono text-xs uppercase tracking-[0.18em] hover:bg-gold hover:text-ink transition-colors duration-500"
            >
              Learn More About Us
              <span className="grid place-items-center h-9 w-9 rounded-full bg-gold text-ink transition-transform group-hover:bg-bone">
                <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="hero-meta mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              { k: "20+", l: "Years at the Bar" },
              { k: "60+", l: "Reported Judgments" },
              { k: "4", l: "Offices across India & the UK" },
              { k: "Global", l: "Multi-Jurisdictional Reach" },
            ].map((s) => (
              <div key={s.l} className="border-t border-ink/15 pt-4">
                <div className="font-serif text-2xl md:text-3xl text-ink">{s.k}</div>
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
          </div>

          <div className="absolute -top-6 -left-6 hidden lg:block">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 [writing-mode:vertical-rl] rotate-180">
              Law | Finance | Technology
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
