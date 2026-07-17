import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  {
    q: "Lexavant restructured a deal we'd been failing to close for fourteen months. They did it in five weeks. Quietly, surgically, without theatrics.",
    a: "Helena Vargas",
    t: "CEO, Meridian Capital Partners",
  },
  {
    q: "When the Department came knocking, every other firm gave us a ninety-page memo. Marcus gave us a two-sentence answer and a plan. We never heard from the Department again.",
    a: "David Ohno",
    t: "General Counsel, Atlas Bioworks",
  },
  {
    q: "I have used four firms over twenty years for my family's affairs. None of them remembered my children's names. Eleanor remembers everything.",
    a: "Cassandra Belmonte",
    t: "Family Office Principal",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % quotes.length);
  const prev = () => setI((p) => (p - 1 + quotes.length) % quotes.length);

  return (
    <section className="bg-ink py-28 md:py-40">
      <div className="container">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/60 mb-12" data-reveal>
          <span className="h-px w-8 bg-gold" /> 07 — In Their Words
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end" key={i}>
          <blockquote className="lg:col-span-9 font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-bone animate-fade-in">
            <span className="text-gold font-serif text-7xl leading-none align-top mr-2">&ldquo;</span>
            {quotes[i].q}
          </blockquote>

          <div className="lg:col-span-3 lg:text-right animate-fade-in">
            <div className="font-serif text-xl text-bone">{quotes[i].a}</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-bone/55">{quotes[i].t}</div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-bone/15 pt-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/55">
            <span className="text-bone">{String(i + 1).padStart(2, "0")}</span>
            <span className="mx-2 text-bone/30">/</span>
            {String(quotes.length).padStart(2, "0")}
          </div>
          <div className="flex gap-2">
            <button onClick={prev} aria-label="Previous quote" className="h-12 w-12 grid place-items-center rounded-full border border-bone/20 hover:bg-ink hover:text-bone hover:border-bone transition-all duration-500">
              <ChevronLeft size={16} />
            </button>
            <button onClick={next} aria-label="Next quote" className="h-12 w-12 grid place-items-center rounded-full border border-bone/20 hover:bg-ink hover:text-bone hover:border-bone transition-all duration-500">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
