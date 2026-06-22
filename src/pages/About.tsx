import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Link } from "react-router-dom";
import lawBooks from "@/assets/law-books.jpg";

const AboutPage = () => (
  <PageShell>
    <PageHero
      eyebrow="About Lexavant"
      title="Law, Finance &"
      italic="Technology."
      subtitle="Lexavant was built on a proposition that has not changed since inception: that exceptional legal counsel requires not just technical command of the law, but commercial judgment, strategic clarity, and an unwavering commitment to the client’s objective."
    />
    
    <section className="bg-bone py-24 md:py-32">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60 mb-6" data-reveal>
            <span className="h-px w-8 bg-gold" /> The Firm
          </div>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink" data-reveal>
            A full-service firm. <br/>
            <span className="italic text-gold-deep">Not just a claim.</span>
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 space-y-6">
          <p className="text-ink/75 text-lg leading-relaxed font-light" data-reveal>
            We are a full-service firm. That is not a marketing claim, but it reflects how we are structured and how we work. Our disputes lawyers sit alongside our transactional and advisory teams, and our technology practice operates alongside our corporate and private-client desks. The result is a firm in which a single matter, however complex, however cross-disciplinary, can be handled with coherence, accountability, and continuity from the first conference to the final order or closing.
          </p>
          <p className="text-ink/65 leading-relaxed" data-reveal>
            Lexavant LLP is a limited liability partnership registered under the laws of India. The firm has offices in Mumbai, Delhi, Aurangabad, and London. Our professionals are trained across Indian and international jurisdictions, and we regularly advise on mandates that span multiple legal systems.
          </p>
          <p className="text-ink/65 leading-relaxed" data-reveal>
            Our practice inter alia covers litigation and dispute resolution at every level of the Indian judiciary; corporate and M&A advisory; securities law; banking and finance; insolvency; technology, media, entertainment and gaming; healthcare and pharmaceuticals; intellectual property; data protection; and private-client matters including estate planning, succession, family governance, and wealth structuring.
          </p>
          <p className="text-ink/65 leading-relaxed" data-reveal>
            We advise listed companies, multinational corporations, government bodies, public-sector undertakings, financial institutions, family-owned enterprises, founders, and high-net-worth individuals.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-ink text-bone py-24 md:py-32 grain relative">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-8" data-stagger>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/50 mb-6" data-stagger-item>
            <span className="h-px w-8 bg-gold" /> Our Approach
          </div>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1]" data-stagger-item>
            How We Work
          </h2>
          <div className="space-y-6 text-bone/70 leading-relaxed" data-stagger-item>
            <p>
              Every matter at Lexavant is partner-led. Clients are not handed down the bench as a matter progresses, the senior lawyer who takes your first call is the lawyer accountable for the outcome.
            </p>
            <p>
              We begin with the objective: the commercial outcome you need, the timeline you are working to, the risks you can tolerate, and the relationships you want to preserve. Strategy follows. Documentation and advocacy follow strategy. We are deliberate about not reversing that sequence.
            </p>
            <p>
              We are also deliberate about being direct. We tell you when you have a strong position and when you do not. We tell you when it is time to settle and when it is time to fight.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-5 lg:col-start-8 relative aspect-square overflow-hidden rounded-sm shadow-noir" data-reveal>
          <img src={lawBooks} alt="Antique leather law books" loading="lazy" width={1400} height={900} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-vignette" />
        </div>
      </div>
    </section>

    <section className="bg-bone py-24 md:py-32">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-12">
          <div data-reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold-deep mb-4">Our People</div>
            <h3 className="font-serif text-2xl mb-4 text-ink">Specialist Counsel</h3>
            <p className="text-ink/65 leading-relaxed text-sm mb-6">
              Our team comprises advocates with standing before the constitutional courts and specialist tribunals; transactional lawyers trained at leading Indian and international firms; technology and regulatory advisors with sector-specific expertise; and private-client practitioners who have advised promoter families, founders, and individuals on their most consequential personal decisions.
            </p>
            <p className="text-ink/65 leading-relaxed text-sm mb-6">
              We bring in specialists through our widespread global network where a matter requires it.
            </p>
            <Link to="/team" className="font-mono text-xs uppercase tracking-[0.18em] text-ink underline underline-offset-8 decoration-gold decoration-2 hover:decoration-ink transition-all">
              Meet the Team →
            </Link>
          </div>
          
          <div data-reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold-deep mb-4">Offices</div>
            <h3 className="font-serif text-2xl mb-4 text-ink">Where We Are</h3>
            <p className="text-ink/75 font-mono text-sm leading-relaxed uppercase tracking-wider">
              Mumbai | Delhi | Aurangabad | London
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold-deep mb-8" data-reveal>What We Stand For</div>
          <h2 className="font-serif text-4xl mb-12 text-ink" data-reveal>Ethos</h2>
          
          <ul className="space-y-8" data-stagger>
            {[
              { t: "Partner-led attention on every matter." },
              { t: "Strategy before procedure." },
              { t: "Advice calibrated to risk, cost, and relationship." },
              { t: "Directness. We tell you what we think." },
              { t: "Discretion. Client confidences are absolute." },
            ].map((item, i) => (
              <li key={i} data-stagger-item className="flex items-start gap-4 border-t border-ink/10 pt-6">
                <span className="font-mono text-gold shrink-0 mt-1">0{i+1}</span>
                <span className="font-serif text-xl md:text-2xl text-ink/80">{item.t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </PageShell>
);

export default AboutPage;
