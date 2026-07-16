import { Link } from "react-router-dom";
import logo from "@/assets/lexavant-logo.png";
import { Skyline } from "@/components/site/Skyline";

const cols: { h: string; l: { label: string; to: string }[] }[] = [
  {
    h: "ABOUT",
    l: [
      { label: "A full-service premier law firm advising clients across various practices including litigation, corporate, technology, and private-client matters.", to: "/about" },
    ],
  },
  {
    h: "PRINCIPAL PRACTICE AREAS",
    l: [
      { label: "Litigation & Disputes", to: "/practice-areas/litigation-and-dispute-resolution" },
      { label: "Corporate, M&A, Private Client & Securities Law", to: "/practice-areas/corporate-ma-private-client-securities-law" },
      { label: "Technology, Media, Entertainment & Gaming", to: "/practice-areas/technology-media-entertainment-gaming" },
      { label: "Data Privacy", to: "/practice-areas/data-privacy" },
    ],
  },
  {
    h: "FIRM",
    l: [
      { label: "About Us", to: "/about" },
      { label: "Knowledge Hub", to: "/knowledge-hub" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    h: "CONTACT",
    l: [
      { label: "+91 7774 089 444", to: "tel:+917774089444" },
      { label: "+44 7867 222 719", to: "tel:+447867222719" },
      { label: "advchaitanya@lexavant.com", to: "mailto:advchaitanya@lexavant.com" },
      { label: "London | Mumbai | Delhi | Aurangabad", to: "/contact" },
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
              <img src={logo} alt="Lexavant — Law, Finance, Technology" className="h-24 md:h-32 w-auto object-contain invert brightness-0" style={{ filter: "invert(1) brightness(1.05)" }} />
            </div>
            <p className="text-bone/55 leading-relaxed max-w-sm">
              Law · Finance · Technology
            </p>
            <div className="mt-8 flex gap-3">
              {["LI", "X", "IG", "YT"].map((s) => (
                <a key={s} href="#" aria-label={s} className="h-10 w-10 grid place-items-center rounded-full border border-bone/20 font-mono text-[10px] hover:bg-gold hover:text-ink hover:border-gold transition-all duration-500">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {cols.slice(1).map((c) => (
              <div key={c.h}>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-5">{c.h}</div>
                <ul className="space-y-3">
                  {c.l.map((it) => (
                    <li key={it.label}>
                      {it.to.startsWith("tel:") || it.to.startsWith("mailto:") ? (
                        <a href={it.to} className="text-bone/70 hover:text-bone transition-colors text-sm">
                          {it.label}
                        </a>
                      ) : (
                        <Link to={it.to} className="text-bone/70 hover:text-bone transition-colors text-sm">
                          {it.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Skyline />

        <div className="hairline-gold pt-6 flex flex-col md:flex-row justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/45">
          <span>© 2026 Lexavant LLP · All rights reserved.</span>
          <div className="flex gap-6 flex-wrap">
            <a href="#" className="hover:text-bone">Terms and Conditions</a>
            <a href="#" className="hover:text-bone">Privacy Policy</a>
            <a href="#" className="hover:text-bone">Disclaimer</a>
          </div>
        </div>
        
        <div className="mt-6 text-xs text-bone/30 max-w-4xl leading-relaxed">
          As per the rules of the Bar Council of India, advocates are not permitted to advertise or solicit work. This website has been prepared solely for informational purposes at the user's request and does not constitute an advertisement, solicitation, or legal advice. Accessing this website does not create an attorney-client relationship.
        </div>
      </div>
    </footer>
  );
};
