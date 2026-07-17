const logos = [
  "FORBES", "BLOOMBERG", "REUTERS", "CHAMBERS USA", "FINANCIAL TIMES",
  "THE ECONOMIST", "WSJ", "LAW360", "AM LAW 100",
];

export const LogoMarquee = () => {
  return (
    <section className="bg-bone border-y border-ink/10 py-8 overflow-hidden">
      <div className="container flex items-center gap-8">
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">As featured in</span>
        <div className="relative flex-1 overflow-hidden">
          <div className="marquee-track flex gap-16 whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="font-serif text-xl text-ink/40 hover:text-ink transition-colors">
                {l}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bone to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bone to-transparent" />
        </div>
      </div>
    </section>
  );
};
