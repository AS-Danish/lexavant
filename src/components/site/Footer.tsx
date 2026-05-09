import { Link } from "react-router-dom";
import logo from "@/assets/lexavant-logo.png";

const cols: { h: string; l: { label: string; to: string }[] }[] = [
  {
    h: "Practice",
    l: [
      { label: "Litigation", to: "/services" },
      { label: "Corporate", to: "/services" },
      { label: "Financial Advisory", to: "/advisory" },
      { label: "Estate & Trust", to: "/services" },
      { label: "Real Estate", to: "/services" },
      { label: "Legal Care", to: "/legal-care" },
    ],
  },
  {
    h: "Firm",
    l: [
      { label: "About", to: "/about" },
      { label: "Counsel", to: "/counsel" },
      { label: "Courtroom", to: "/courtroom" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    h: "Insight",
    l: [
      { label: "Journal", to: "/journal" },
      { label: "Briefings", to: "/journal" },
      { label: "The Brief", to: "/#newsletter" },
    ],
  },
  {
    h: "Offices",
    l: [
      { label: "Boston", to: "/contact" },
      { label: "New York", to: "/contact" },
      { label: "Washington DC", to: "/contact" },
      { label: "London", to: "/contact" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-ink text-bone border-t border-bone/10">
      <div className="container py-20">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <div className="mb-6">
              <img src={logo} alt="Lexavant — Law, Finance, Technology" className="h-14 w-auto object-contain invert brightness-0" style={{ filter: "invert(1) brightness(1.05)" }} />
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
                    <li key={it.label}>
                      <Link to={it.to} className="text-bone/70 hover:text-bone transition-colors text-sm">
                        {it.label}
                      </Link>
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
