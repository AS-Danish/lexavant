import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";
import lawyer3 from "@/assets/lawyer-3.jpg";

const team = [
  { name: "Marcus Ashford", role: "Managing Partner · Litigation", bar: "MA · NY · DC", img: lawyer1 },
  { name: "Eleanor Vance", role: "Partner · Corporate & M&A", bar: "NY · CA · UK", img: lawyer2 },
  { name: "Julien Okafor", role: "Senior Counsel · Financial Advisory", bar: "NY · DC", img: lawyer3 },
];

export const Lawyers = () => {
  return (
    <section id="lawyers" className="bg-bone py-28 md:py-40">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60 mb-6" data-reveal>
              <span className="h-px w-8 bg-gold" /> 04 — The Counsel
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-ink max-w-3xl" data-reveal>
              The lawyers who
              <span className="italic text-gold-deep"> answer your call.</span>
            </h2>
          </div>
          <a href="#contact" data-reveal className="font-mono text-xs uppercase tracking-[0.18em] text-ink/70 hover:text-ink underline-offset-8 hover:underline">
            View Full Roster →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8" data-stagger>
          {team.map((p, i) => (
            <article key={p.name} data-stagger-item className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-ink-soft">
                <img
                  src={p.img}
                  alt={`${p.name}, ${p.role}`}
                  loading="lazy"
                  width={800}
                  height={1067}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-bone/80 bg-ink/40 backdrop-blur px-2 py-1 rounded-full">
                  N° 0{i + 1}
                </div>
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 text-bone">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-soft">Bar Admissions</div>
                  <div className="font-serif text-sm mt-1">{p.bar}</div>
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl text-ink leading-tight">{p.name}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">{p.role}</p>
                </div>
                <span className="text-gold transition-transform group-hover:rotate-45">↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
