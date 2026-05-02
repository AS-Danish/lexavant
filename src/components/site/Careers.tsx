const roles = [
  { dept: "Litigation", title: "Senior Associate — Trial Practice", loc: "Boston · Hybrid", type: "Partnership Track" },
  { dept: "Corporate", title: "Mid-level Associate — M&A", loc: "New York · On-site", type: "Full-time" },
  { dept: "Financial Advisory", title: "Counsel — Funds Regulation", loc: "Washington DC", type: "Full-time" },
  { dept: "Operations", title: "Director of Client Strategy", loc: "Boston", type: "Leadership" },
  { dept: "Summer", title: "Summer Associate Program 2026", loc: "All Offices", type: "12 weeks" },
];

export const Careers = () => {
  return (
    <section id="careers" className="bg-bone-soft py-28 md:py-40">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60 mb-6" data-reveal>
              <span className="h-px w-8 bg-gold" /> 08 — Careers
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-ink" data-reveal>
              Build a practice that
              <span className="italic text-gold-deep"> outlasts you.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-ink/70 leading-relaxed" data-reveal>
            Lexavant promotes from within. Every current partner began their career at this firm — most as summer associates.
          </p>
        </div>

        <ul className="border-t border-ink/15" data-stagger>
          {roles.map((r) => (
            <li key={r.title} data-stagger-item>
              <a href="#contact" className="group grid grid-cols-12 items-center gap-4 py-7 border-b border-ink/15 hover:bg-bone transition-colors duration-500 px-2">
                <span className="col-span-12 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold-deep">{r.dept}</span>
                <h3 className="col-span-12 md:col-span-5 font-serif text-2xl md:text-3xl text-ink transition-transform duration-500 group-hover:translate-x-2">
                  {r.title}
                </h3>
                <span className="col-span-6 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">{r.loc}</span>
                <span className="col-span-6 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">{r.type}</span>
                <span className="col-span-12 md:col-span-1 justify-self-end text-ink/40 group-hover:text-gold transition-all group-hover:translate-x-1">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
