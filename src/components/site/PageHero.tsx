interface PageHeroProps {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
}

export const PageHero = ({ eyebrow, title, italic, subtitle }: PageHeroProps) => {
  return (
    <section className="relative bg-ink text-bone pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden">
      <div className="container grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/55 mb-6" data-reveal>
            <span className="h-px w-8 bg-gold" /> {eyebrow}
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-bone tracking-tight" data-reveal>
            {title}
            {italic && <span className="italic text-gold"> {italic}</span>}
          </h1>
        </div>
        {subtitle && (
          <p className="lg:col-span-4 text-bone/65 leading-relaxed text-lg" data-reveal>
            {subtitle}
          </p>
        )}
      </div>
      <div className="container mt-16 hairline-gold" />
    </section>
  );
};
