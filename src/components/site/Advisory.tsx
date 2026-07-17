const items = [
  { v: "$2.4B", l: "Verdicts & settlements recovered for clients in the past decade." },
  { v: "412", l: "Cross-border transactions structured across 27 jurisdictions." },
  { v: "$18B", l: "Assets under fiduciary or trust administration, firm-wide." },
];

export const Advisory = () => {
  return (
    <section id="advisory" className="relative bg-ink text-bone py-28 md:py-40 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-gold/10 blur-3xl"
      />
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/50 mb-6" data-reveal>
              <span className="h-px w-8 bg-gold" /> 06 — Financial Advisory
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]" data-reveal>
              Where capital meets
              <span className="italic text-gold"> consequence.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-bone/65 leading-relaxed" data-reveal>
            Our advisory practice partners with funds, family offices, and corporate treasurers — translating regulatory
            ambiguity into measured, defensible strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-ink/15" data-stagger>
          {items.map((it, i) => (
            <div key={i} data-stagger-item className="bg-ink p-8 md:p-12 group hover:bg-ink-soft transition-colors duration-500">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-6">FY 2024 — 25</div>
              <div className="font-serif text-5xl md:text-7xl tracking-tight gradient-gold-text mb-6 transition-transform duration-700 group-hover:-translate-y-1">
                {it.v}
              </div>
              <p className="text-bone/60 leading-relaxed text-sm max-w-xs">{it.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
