import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/lexavant-logo.png";

const links = [
  { label: "About", to: "/about" },
  { label: "Practice", to: "/services" },
  { label: "Counsel", to: "/counsel" },
  { label: "Advisory", to: "/advisory" },
  { label: "Journal", to: "/journal" },
  { label: "Careers", to: "/careers" },
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bone/80 backdrop-blur-xl border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Lexavant" className="h-9 md:h-10 w-auto object-contain" />
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`relative py-1 transition-colors hover:text-ink after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:bg-gold after:transition-all ${
                    active ? "text-ink after:w-full" : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink text-bone px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-gold hover:text-ink transition-all duration-500"
        >
          Retain Counsel
          <span className="h-1 w-1 rounded-full bg-gold transition-colors" />
        </Link>

        <button aria-label="Menu" onClick={() => setOpen((o) => !o)} className="md:hidden text-ink">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bone border-t border-ink/10 animate-fade-in">
          <ul className="container py-6 flex flex-col gap-5 font-mono text-xs uppercase tracking-[0.18em]">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} onClick={() => setOpen(false)} className="text-ink/80">
                  {l.label}
                </Link>
              </li>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex bg-ink text-bone px-5 py-3 rounded-full justify-center"
            >
              Retain Counsel
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};
