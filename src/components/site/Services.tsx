import { useState } from "react";

const services = [
  { n: "01", title: "Litigation & Trial", desc: "Complex civil and criminal trial work across federal and state forums. We try cases — and win them.", tags: ["Federal Trial", "Class Action", "Appellate"] },
  { n: "02", title: "Corporate & M&A", desc: "Sophisticated counsel for mergers, acquisitions, joint ventures, and cross-border transactions.", tags: ["M&A", "Securities", "Governance"] },
  { n: "03", title: "Financial Advisory", desc: "Strategic guidance for funds, family offices, and institutions navigating regulatory complexity.", tags: ["Funds", "Compliance", "SEC"] },
  { n: "04", title: "Estate & Trust", desc: "Generational wealth planning, fiduciary administration, and contested estate litigation.", tags: ["Trusts", "Probate", "Tax"] },
  { n: "05", title: "Real Estate", desc: "From single transactions to portfolio-scale developments across commercial and residential markets.", tags: ["Acquisitions", "Leasing", "Development"] },
  { n: "06", title: "Legal Care", desc: "Discreet personal counsel for individuals — family, immigration, employment, and private matters.", tags: ["Family", "Immigration", "Employment"] },
];

export const Services = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-ink text-bone py-28 md:py-40 overflow-hidden grain">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/50 mb-6" data-reveal>
              <span className="h-px w-8 bg-gold" /> 02 — Practice Areas
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]" data-reveal>
              Six disciplines.
              <span className="italic text-gold"> One standard.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-bone/65 leading-relaxed" data-reveal>
            Each practice group is led by a senior partner with at least two decades in their specialty. Our cross-disciplinary
            approach means your matter is never seen through a single lens.
          </p>
        </div>

        <ul className="border-t border-bone/15" data-stagger>
          {services.map((s, i) => (
            <li
              key={s.n}
              data-stagger-item
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="group relative border-b border-bone/15 transition-colors duration-500 hover:bg-bone/[0.03]"
            >
              <a href="#contact" className="grid grid-cols-12 gap-6 items-center py-8 md:py-10 px-2">
                <span className="col-span-2 md:col-span-1 font-mono text-xs text-gold tracking-widest">{s.n}</span>
                <h3 className="col-span-10 md:col-span-4 font-serif text-2xl md:text-4xl tracking-tight transition-transform duration-500 group-hover:translate-x-3">
                  {s.title}
                </h3>
                <p className="hidden md:block col-span-4 text-bone/60 text-sm leading-relaxed">{s.desc}</p>
                <div className="hidden md:flex col-span-2 flex-wrap gap-1.5 justify-end">
                  {s.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] uppercase tracking-wider text-bone/50 border border-bone/20 rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="col-span-12 md:col-span-1 justify-self-end text-gold transition-transform duration-500 group-hover:rotate-45">
                  ↗
                </span>
              </a>

              {/* Gold reveal bar */}
              <span
                className={`absolute left-0 top-0 h-full w-px bg-gradient-gold transition-opacity duration-500 ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
