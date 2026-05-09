import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";

const posts = [
  { date: "Mar 2026", cat: "Litigation", title: "On the Quiet Reshaping of Federal Class Certification", read: "12 min" },
  { date: "Feb 2026", cat: "Advisory", title: "SEC Rule 17a-4 and the New Recordkeeping Calculus", read: "8 min" },
  { date: "Jan 2026", cat: "Corporate", title: "Cross-Border M&A: A 2026 Practitioner's Field Guide", read: "15 min" },
  { date: "Dec 2025", cat: "Estate", title: "Generational Trust Architecture After the 2025 Reform", read: "10 min" },
  { date: "Nov 2025", cat: "Real Estate", title: "Distressed Office Portfolios — Workout Strategies", read: "11 min" },
  { date: "Oct 2025", cat: "Legal Care", title: "Immigration Counsel for Founders and Executives", read: "7 min" },
];

const JournalPage = () => (
  <PageShell>
    <PageHero
      eyebrow="The Journal"
      title="Briefings,"
      italic="plainly written."
      subtitle="Considered analysis from our partners on the matters shaping modern practice."
    />
    <section className="bg-bone py-20 md:py-28">
      <div className="container">
        <ul className="border-t border-ink/15" data-stagger>
          {posts.map((p) => (
            <li
              key={p.title}
              data-stagger-item
              className="group border-b border-ink/15 transition-colors hover:bg-ink/[0.02]"
            >
              <a href="#" className="grid grid-cols-12 gap-4 items-center py-8 md:py-10 px-2">
                <span className="col-span-3 md:col-span-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  {p.date}
                </span>
                <span className="col-span-3 md:col-span-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gold-deep">
                  {p.cat}
                </span>
                <h3 className="col-span-12 md:col-span-6 font-serif text-xl md:text-3xl tracking-tight text-ink transition-transform duration-500 group-hover:translate-x-3">
                  {p.title}
                </h3>
                <span className="col-span-9 md:col-span-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  {p.read}
                </span>
                <span className="col-span-3 md:col-span-1 justify-self-end text-gold transition-transform duration-500 group-hover:rotate-45">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </PageShell>
);

export default JournalPage;
