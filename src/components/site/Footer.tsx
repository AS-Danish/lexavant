import logo from "@/assets/lexavant-logo.png";

const cols = [
  { h: "Practice", l: ["Litigation", "Corporate", "Financial Advisory", "Estate & Trust", "Real Estate", "Legal Care"] },
  { h: "Firm", l: ["About", "Counsel", "Careers", "Press", "Pro Bono", "Diversity"] },
  { h: "Insight", l: ["Journal", "Case Studies", "Whitepapers", "Briefings", "Podcast"] },
  { h: "Offices", l: ["Boston", "New York", "Washington DC", "London"] },
];

export const Footer = () => {
  return (
    <footer className="bg-ink text-bone border-t border-bone/10">
      <div className="container py-20">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-1.5 mb-6">
              <span className="font-serif text-3xl tracking-tight">Lexavant</span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </div>
            <p className="text-bone/55 leading-relaxed max-w-sm">
              A premier law firm representing individuals and enterprises across litigation, corporate, advisory, and estate matters since 1986.
            </p>
            <div className="mt-8 flex gap-3">
              {["LI", "X", "IG", "YT"].map((s) => (
                <a key={s} href="#" aria-label={s} className="h-10 w-10 grid place-items-center rounded-full border border-bone/20 font-mono text-[10px] hover:bg-gold hover:text-ink hover:border-gold transition-all duration-500">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.h}>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-5">{c.h}</div>
                <ul className="space-y-3">
                  {c.l.map((it) => (
                    <li key={it}>
                      <a href="#" className="text-bone/70 hover:text-bone transition-colors text-sm">
                        {it}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mega wordmark */}
        <div aria-hidden className="font-serif italic text-[24vw] leading-[0.85] tracking-[-0.04em] gradient-gold-text opacity-90 select-none -mb-4">
          lexavant
        </div>

        <div className="hairline-gold pt-6 flex flex-col md:flex-row justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/45">
          <span>© 2026 Lexavant LLP · All Rights Reserved</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-bone">Privacy</a>
            <a href="#" className="hover:text-bone">Terms</a>
            <a href="#" className="hover:text-bone">Attorney Advertising</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
