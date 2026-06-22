import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/lexavant-logo.png";

const regularLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

const practiceAreas = [
  { label: "Litigation & Dispute Resolution", to: "/practice-areas/litigation-and-dispute-resolution" },
  { label: "Corporate, M&A, Private Client & Securities Law", to: "/practice-areas/corporate-ma-private-client-securities-law" },
  { label: "Technology, Media, Entertainment & Gaming", to: "/practice-areas/technology-media-entertainment-gaming" },
  { label: "Data Privacy", to: "/practice-areas/data-privacy" },
];

const rightLinks = [
  { label: "Knowledge Hub", to: "/knowledge-hub" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NavLink = ({ l }: { l: { label: string; to: string } }) => {
    const active = pathname === l.to;
    return (
      <Link
        to={l.to}
        onClick={() => setOpen(false)}
        className={`relative py-1 transition-colors hover:text-ink after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:bg-gold after:transition-all ${
          active ? "text-ink after:w-full" : "after:w-0 hover:after:w-full"
        }`}
      >
        {l.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bone/90 backdrop-blur-xl border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center py-5 relative">
        <div className="flex-1">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <img src={logo} alt="Lexavant" className="h-9 md:h-10 w-auto object-contain" />
          </Link>
        </div>

        <ul className="hidden md:flex items-center justify-center gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70">
          {regularLinks.map((l) => (
            <li key={l.to}>
              <NavLink l={l} />
            </li>
          ))}

          <li className="group relative py-2">
            <span className="flex items-center gap-1 py-1 transition-colors group-hover:text-ink cursor-pointer">
              PRACTICE AREAS <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-180" />
            </span>
            <div className="absolute top-full pt-2 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-72">
              <div className="bg-bone border border-ink/10 shadow-noir p-1.5 flex flex-col gap-0.5 rounded-sm">
                {practiceAreas.map((p) => (
                  <Link 
                    key={p.to} 
                    to={p.to} 
                    className="block px-4 py-2.5 font-sans text-[13px] tracking-normal normal-case text-ink/80 hover:bg-ink/5 hover:text-ink transition-colors rounded-sm leading-snug"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {rightLinks.map((l) => (
            <li key={l.to}>
              <NavLink l={l} />
            </li>
          ))}
        </ul>

        <div className="flex-1 flex justify-end">
          <button aria-label="Menu" onClick={() => setOpen((o) => !o)} className="md:hidden text-ink">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-bone border-t border-ink/10 animate-fade-in max-h-[80vh] overflow-y-auto">
          <ul className="container py-6 flex flex-col gap-5 font-mono text-xs uppercase tracking-[0.18em]">
            {regularLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} onClick={() => setOpen(false)} className="text-ink/80 block">
                  {l.label}
                </Link>
              </li>
            ))}
            
            <li className="pt-2 pb-1 border-b border-ink/5">
              <span className="text-gold">PRACTICE AREAS</span>
            </li>
            {practiceAreas.map((l) => (
              <li key={l.to} className="pl-4">
                <Link to={l.to} onClick={() => setOpen(false)} className="text-ink/70 block text-[10px]">
                  {l.label}
                </Link>
              </li>
            ))}

            {rightLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} onClick={() => setOpen(false)} className="text-ink/80 block mt-2">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
