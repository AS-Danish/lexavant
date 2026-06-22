import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  { n: "01", title: "Litigation & Dispute Resolution", desc: "Constitutional, commercial, and regulatory disputes before the Supreme Court, High Courts, and specialised tribunals.", tags: ["Constitutional", "Commercial", "Arbitration"], to: "/practice-areas/litigation-and-dispute-resolution" },
  { n: "02", title: "Corporate, M&A, Private Client & Securities", desc: "Sophisticated counsel for mergers, acquisitions, joint ventures, and cross-border transactions alongside trusted private-client advisory.", tags: ["M&A", "Securities", "Private Client"], to: "/practice-areas/corporate-ma-private-client-securities-law" },
  { n: "03", title: "Technology, Media, Entertainment & Gaming", desc: "Integrated legal solutions for stakeholders operating at the intersection of innovation, content, and digital ecosystems.", tags: ["TMT", "Gaming", "IP"], to: "/practice-areas/technology-media-entertainment-gaming" },
  { n: "04", title: "Data Privacy", desc: "Advising clients on navigating complex data protection frameworks and maintaining regulatory compliance.", tags: ["Privacy", "DPDP", "Compliance"], to: "/practice-areas/data-privacy" },
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
              What We Do.
              <span className="italic text-gold"> Deliberately broad.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-bone/65 leading-relaxed" data-reveal>
            Below is an overview of the principal areas in which we advise. Our cross-disciplinary approach means your matter is never seen through a single lens.
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
              <Link to={s.to} className="grid grid-cols-12 gap-6 items-center py-8 md:py-10 px-2">
                <span className="col-span-2 md:col-span-1 font-mono text-xs text-gold tracking-widest">{s.n}</span>
                <h3 className="col-span-10 md:col-span-4 font-serif text-2xl md:text-3xl tracking-tight transition-transform duration-500 group-hover:translate-x-3">
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
              </Link>

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
