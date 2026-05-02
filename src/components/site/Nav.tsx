import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Practice", href: "#services" },
  { label: "Courtroom", href: "#courtroom" },
  { label: "Counsel", href: "#lawyers" },
  { label: "Advisory", href: "#advisory" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <a href="#top" className="flex items-baseline gap-1.5 group">
          <span className="font-serif text-2xl tracking-tight text-ink">Lexavant</span>
          <span className="h-1.5 w-1.5 rounded-full bg-gold transition-transform group-hover:scale-150" />
        </a>

        <ul className="hidden md:flex items-center gap-9 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 transition-colors hover:text-ink after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink text-bone px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-gold hover:text-ink transition-all duration-500"
        >
          Retain Counsel
          <span className="h-1 w-1 rounded-full bg-gold transition-colors" />
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-ink"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bone border-t border-ink/10 animate-fade-in">
          <ul className="container py-6 flex flex-col gap-5 font-mono text-xs uppercase tracking-[0.18em]">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-ink/80">
                  {l.label}
                </a>
              </li>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex bg-ink text-bone px-5 py-3 rounded-full justify-center">
              Retain Counsel
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};
