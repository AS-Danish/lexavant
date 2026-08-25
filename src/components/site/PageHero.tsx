import { ArrowDownRight } from "lucide-react";
import { HeroSculpture } from "@/components/site/HeroSculpture";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
}

export const PageHero = ({ eyebrow, title, italic, subtitle }: PageHeroProps) => {
  const tokens = (value: string) => value.split(" ").map((word, index) => (
    <span key={`${word}-${index}`} className="kinetic-token inline-block will-change-transform">
      {word}{index < value.split(" ").length - 1 ? "\u00a0" : ""}
    </span>
  ));

  return (
    <section data-theme="dark" className="page-hero relative isolate bg-ink text-bone pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden">
      <div className="page-hero-grid absolute inset-0 -z-20" aria-hidden />
      <div className="page-hero-glow absolute -z-10 h-[34rem] w-[34rem] rounded-full" data-parallax="0.45" aria-hidden />
      <div className="page-hero-orbit absolute -right-32 top-24 -z-10 h-[28rem] w-[28rem] rounded-full border border-bone/10 md:h-[42rem] md:w-[42rem]" aria-hidden>
        <span className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-gold shadow-[0_0_28px_hsl(var(--gold))]" />
      </div>
      <HeroSculpture />

      <div className="container relative grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-9">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.36em] text-bone/55 mb-7" data-reveal>
            <span className="h-px w-10 bg-gold" /> {eyebrow}
          </div>
          <h1 className="page-hero-title font-serif text-[clamp(3.25rem,8vw,7.75rem)] leading-[0.94] text-bone tracking-[-0.055em]" data-reveal>
            <span className="relative z-10">{tokens(title)}</span>
            {italic && <span className="relative z-10 block italic gradient-gold-text pb-[0.08em]">{tokens(italic)}</span>}
          </h1>
        </div>
        {subtitle && (
          <div className="lg:col-span-3 lg:pb-2" data-reveal>
            <div className="mb-5 flex items-center gap-3 text-gold">
              <span className="h-px flex-1 bg-gold/35" />
              <ArrowDownRight size={18} strokeWidth={1.4} />
            </div>
            <p className="text-bone/68 leading-relaxed text-[15px] md:text-base">{subtitle}</p>
          </div>
        )}
      </div>
      <div className="container relative mt-16 md:mt-24">
        <div className="h-px bg-gradient-to-r from-gold via-gold/25 to-transparent" />
        <div className="mt-5 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.28em] text-bone/35">
          <span>Lexavant LLP</span>
          <span>Scroll to explore</span>
        </div>
      </div>
      <div className="kinetic-band absolute inset-x-0 bottom-0 translate-y-1/2 border-y border-bone/10 bg-ink/65 py-2 backdrop-blur-md" aria-hidden>
        <div className="kinetic-band-track flex w-max items-center gap-8 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.34em] text-bone/35">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-8">
              {[eyebrow, "Strategy", title, "Precision", italic || "Counsel", "Lexavant LLP"].map((item, index) => (
                <span key={`${copy}-${index}`} className="flex items-center gap-8"><i className="h-1 w-1 rounded-full bg-gold" />{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
