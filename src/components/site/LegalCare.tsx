import gavel from "@/assets/gavel.jpg";

const pillars = [
  { k: "Discretion", d: "Privileged communications, vetted intake, single-point partner contact for every engagement." },
  { k: "Continuity", d: "The partner you meet is the partner who tries your case. We do not hand off." },
  { k: "Accountability", d: "Transparent fee structures and weekly status briefings — by default, not on request." },
];

export const LegalCare = () => {
  return (
    <section id="legal-care" className="bg-ink-soft py-28 md:py-40">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/60 mb-6" data-reveal>
            <span className="h-px w-8 bg-gold" /> 05 — Legal Care
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-bone" data-reveal>
            Counsel that treats your matter like
            <span className="italic text-gold-deep"> the only matter.</span>
          </h2>
          <div className="mt-8 relative aspect-[4/3] overflow-hidden rounded-sm" data-reveal>
            <img src={gavel} alt="Wooden judge's gavel under a single golden spotlight" loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 space-y-px" data-stagger>
          {pillars.map((p, i) => (
            <div key={p.k} data-stagger-item className="group bg-ink p-8 md:p-10 border border-bone/10 hover:border-gold/60 transition-colors duration-500">
              <div className="flex items-baseline justify-between gap-6 mb-4">
                <h3 className="font-serif text-3xl md:text-4xl text-bone">{p.k}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40">0{i + 1} / 03</span>
              </div>
              <p className="text-bone/65 leading-relaxed">{p.d}</p>
              <div className="mt-6 h-px w-12 bg-gold transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
