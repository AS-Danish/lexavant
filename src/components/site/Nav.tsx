import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
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
    
    // Entrance animation
    const initNavAnimation = () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".nav-logo-container",
        { y: -150 },
        { y: 0, duration: 0.6, ease: "expo.out" }
      )
      .fromTo(
        ".nav-links li, .nav-mobile-btn",
        { y: -100 },
        { y: 0, duration: 0.6, stagger: 0.05, ease: "back.out(1.2)" },
        "-=0.3"
      );
    };

    if (document.body.classList.contains("reveal-finished")) {
      initNavAnimation();
    } else {
      gsap.set(".nav-logo-container", { y: -150 });
      gsap.set(".nav-links li, .nav-mobile-btn", { y: -100 });
      window.addEventListener("reveal-finished", initNavAnimation, { once: true });
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const isDarkBg = true;

  const NavLink = ({ l }: { l: { label: string; to: string } }) => {
    const active = pathname === l.to;
    return (
      <Link
        to={l.to}
        onClick={() => setOpen(false)}
        className={`relative py-1 transition-colors ${isDarkBg ? 'hover:text-bone' : 'hover:text-ink'} after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:bg-gold after:transition-all ${
          active ? (isDarkBg ? "text-bone after:w-full" : "text-ink after:w-full") : "after:w-0 hover:after:w-full"
        } ${isDarkBg && !active ? 'text-bone/70' : ''}`}
      >
        {l.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? isHome 
            ? "bg-ink/90 backdrop-blur-xl border-b border-bone/10" 
            : "bg-ink/90 backdrop-blur-xl border-b border-bone/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center py-5 relative">
        <div className="flex-1 nav-logo-container">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="Lexavant" 
              className={`h-16 md:h-20 w-auto object-contain scale-110 origin-left transition-all duration-500 ${isDarkBg ? 'invert brightness-0' : ''}`}
              style={isDarkBg ? { filter: "invert(1) brightness(1.5)" } : {}}
            />
          </Link>
        </div>

        <ul className={`hidden md:flex nav-links items-center justify-center gap-8 font-mono text-[11px] uppercase tracking-[0.18em] ${isDarkBg ? 'text-bone/70' : 'text-ink/70'}`}>
          {regularLinks.map((l) => (
            <li key={l.to}>
              <NavLink l={l} />
            </li>
          ))}

          <li className="group relative py-2">
            <span className={`flex items-center gap-1 py-1 transition-colors ${isDarkBg ? 'group-hover:text-bone' : 'group-hover:text-ink'} cursor-pointer`}>
              PRACTICE AREAS <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-180" />
            </span>
            <div className="absolute top-full pt-2 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-72">
              <div className="bg-bone border border-bone/10 shadow-noir p-1.5 flex flex-col gap-0.5 rounded-sm">
                {practiceAreas.map((p) => (
                  <Link 
                    key={p.to} 
                    to={p.to} 
                    className="block px-4 py-2.5 font-sans text-[13px] tracking-normal normal-case text-bone/80 hover:bg-bone/10 hover:text-bone transition-colors rounded-sm leading-snug"
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

        <div className="flex-1 flex justify-end nav-mobile-btn">
          <button aria-label="Menu" onClick={() => setOpen((o) => !o)} className={`md:hidden ${isDarkBg ? 'text-bone' : 'text-ink'}`}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className={`md:hidden animate-fade-in max-h-[80vh] overflow-y-auto ${
          isDarkBg ? "bg-ink border-t border-bone/10" : "bg-bone border-t border-bone/10"
        }`}>
          <ul className="container py-6 flex flex-col gap-5 font-mono text-xs uppercase tracking-[0.18em]">
            {regularLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} onClick={() => setOpen(false)} className={`block ${isDarkBg ? 'text-bone/80' : 'text-ink/80'}`}>
                  {l.label}
                </Link>
              </li>
            ))}
            
            <li className={`pt-2 pb-1 border-b ${isDarkBg ? 'border-bone/5' : 'border-ink/5'}`}>
              <span className="text-gold">PRACTICE AREAS</span>
            </li>
            {practiceAreas.map((l) => (
              <li key={l.to} className="pl-4">
                <Link to={l.to} onClick={() => setOpen(false)} className={`block text-[10px] ${isDarkBg ? 'text-bone/70' : 'text-ink/70'}`}>
                  {l.label}
                </Link>
              </li>
            ))}

            {rightLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} onClick={() => setOpen(false)} className={`block mt-2 ${isDarkBg ? 'text-bone/80' : 'text-ink/80'}`}>
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
