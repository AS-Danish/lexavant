import lawBooks from "@/assets/law-books.jpg";

export const About = () => {
  return (
    <section id="about" className="bg-bone py-28 md:py-40">
      <div className="container grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60 mb-6" data-reveal>
            <span className="h-px w-8 bg-gold" /> 01 — The Firm
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-ink" data-reveal>
            A practice built on
            <span className="italic text-gold-deep"> precedent</span>, sharpened by{" "}
            <span className="italic text-gold-deep">conviction.</span>
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 space-y-6">
          <p className="text-ink/75 text-lg leading-relaxed font-light" data-reveal>
            Lexavant was founded in Boston in 1986 on a singular premise: that representation should be quiet, considered,
            and unmistakably effective. Our partners have argued before every federal circuit and the Supreme Court of the
            United States.
          </p>
          <p className="text-ink/65 leading-relaxed" data-reveal>
            We believe a great firm is measured not by how many matters it touches, but by how decisively it resolves
            those it accepts. We accept few. We finish all of them.
          </p>
          <a href="#lawyers" data-reveal className="inline-block font-mono text-xs uppercase tracking-[0.18em] text-ink underline underline-offset-8 decoration-gold decoration-2 hover:decoration-ink transition-all">
            Meet the Counsel →
          </a>
        </div>
      </div>

      <div className="container mt-24 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-sm" data-reveal>
          <img src={lawBooks} alt="Antique leather law books beside brass scales of justice" loading="lazy" width={1400} height={900} className="h-full w-full object-cover" />
        </div>
        <div className="lg:col-span-5 flex flex-col justify-between gap-8">
          <blockquote className="font-serif italic text-2xl md:text-3xl leading-snug text-ink" data-reveal>
            &ldquo;The law is reason, free from passion.&rdquo;
            <footer className="mt-4 font-mono text-[10px] not-italic uppercase tracking-[0.3em] text-ink/50">— Aristotle</footer>
          </blockquote>
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-ink/15" data-stagger>
            {[
              { k: "Boston · NYC · DC", l: "Offices" },
              { k: "62", l: "Senior Partners" },
              { k: "9 Languages", l: "Counsel Spoken" },
              { k: "Tier 1", l: "Chambers Ranked" },
            ].map((s) => (
              <div key={s.l} data-stagger-item>
                <div className="font-serif text-xl text-ink">{s.k}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
