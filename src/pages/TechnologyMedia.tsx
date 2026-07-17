import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";

export default function TechnologyMedia() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Practice Area"
        title="Technology, Media,"
        italic="Entertainment & Gaming."
        subtitle="The regulatory landscape for innovation is being rewritten in real time. We provide the legal architecture for technology companies, media houses, and digital platforms to operate, scale, and protect their assets in a shifting compliance environment."
      />
      
      <section className="bg-bone py-24 border-b border-ink/10">
        <div className="container grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl md:text-3xl text-ink sticky top-32">Practice Overview</h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-ink/70 leading-relaxed text-lg">
            <p>
              Lexavant’s TMEG practice operates at the intersection of law, technology, and content. We represent a spectrum of clients—from global tech majors and leading OTT platforms to independent production houses, gaming operators, fintech startups, and individual creators.
            </p>
            <p>
              Our advisory integrates regulatory compliance, intellectual property protection, and commercial documentation, ensuring that our clients' innovations and creative properties are both legally sound and commercially exploitable. Whether structuring a multi-territory content distribution deal or advising on the legality of a new real-money gaming format, we provide clear, actionable counsel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone py-24 grain relative">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-bone mb-6">Capabilities – Scope of Practice</h2>
            <p className="text-bone/70 leading-relaxed max-w-3xl text-lg">
              Our TMEG practice covers the full lifecycle of technology and content creation, distribution, and protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { title: "Information Technology & Digital Economy", desc: "Regulatory and commercial advisory for platforms and tech enterprises.", items: ["Intermediary Guidelines and Digital Media Ethics Code compliance", "E-commerce regulations, consumer protection, and dark-patterns advisory", "SaaS agreements, end-user license agreements (EULAs), and terms of service", "Software development, technology transfer, and API integration contracts", "Hardware supply, AMC, and IT procurement agreements"] },
              { title: "Media, Entertainment & Broadcasting", desc: "Comprehensive counsel for the creation and distribution of content.", items: ["Content production, co-production, and commissioning agreements", "Acquisition, distribution, and syndication of film, television, and OTT content", "Talent, director, writer, and crew agreements", "Music licensing, publishing, and synchronization rights", "Defamation, pre-publication review, and content-clearance advisory", "Broadcasting regulations, uplinking/downlinking guidelines, and MIB compliance"] },
              { title: "Gaming & Esports", desc: "Navigating the complex and evolving regulatory framework for gaming in India.", items: ["Legality analysis of real-money games (RMG) - skill vs. chance determination", "State-specific gaming legislations and compliance strategies", "Esports tournament structuring, team contracts, and sponsorship agreements", "Platform terms, privacy policies, and user-conduct guidelines", "Advisory on advertising regulations (ASCI guidelines) for gaming platforms"] },
              { title: "Intellectual Property", desc: "Protecting and monetizing creative and technological assets.", items: ["Trademark prosecution, portfolio management, and opposition proceedings", "Copyright registration, assignments, and infringement actions", "Patent advisory, filing strategy, and technology mapping", "Design registration and protection against piracy", "Domain name disputes and anti-cybersquatting actions", "IP due diligence for M&A and investment transactions"] },
              { title: "Fintech & Payment Systems", desc: "Regulatory advisory for financial technology innovations.", items: ["Payment aggregator and payment gateway (PA/PG) guidelines compliance", "Prepaid Payment Instruments (PPI) and digital wallet advisory", "Digital lending guidelines and co-lending structures", "Blockchain, Web3, and virtual digital asset (VDA) regulatory analysis", "RBI regulatory sandbox applications and compliance"] },
            ].map((cap, i) => (
              <div key={i} className="border-t border-bone/15 pt-6">
                <h3 className="font-serif text-xl text-gold mb-2">▪ {cap.title}</h3>
                <p className="text-sm italic text-bone/60 mb-4">{cap.desc}</p>
                <ul className="space-y-2">
                  {cap.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-bone/75 text-sm">
                      <span className="text-gold">•</span> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-24 border-b border-ink/10">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">Indicative Experience</h2>
            <p className="text-ink/70 leading-relaxed max-w-2xl mx-auto text-lg">
              A representative selection of recent TMEG mandates.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { t: "Global OTT Platform: Content Acquisition", d: "Advised a leading international OTT platform on the acquisition and licensing of a major Indian film library, handling extensive IP chain-of-title diligence and drafting complex syndication agreements." },
              { t: "Real-Money Gaming Operator: Regulatory Structuring", d: "Structured the operational and legal framework for a prominent Indian fantasy sports and rummy operator, providing state-by-state risk assessments and representing the entity in regulatory inquiries." },
              { t: "Fintech Startup: RBI PA Guidelines", d: "Guided a rapidly growing fintech platform through the Reserve Bank of India’s Payment Aggregator licensing process, including overhauling their merchant onboarding agreements and data localization compliance." },
              { t: "IP Protection: FMCG Brand Portfolio", d: "Managed the complete trademark portfolio for a legacy Indian FMCG brand across 15+ jurisdictions, successfully prosecuting multiple infringement actions against counterfeiters." },
            ].map((exp, i) => (
              <div key={i} className="border-t border-ink/10 pt-6">
                <h3 className="font-serif text-xl text-ink mb-2">— {exp.t}</h3>
                <p className="text-ink/75 leading-relaxed">{exp.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-24">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-16 text-center">Counsel – Our TMEG Team</h2>
          
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 shrink-0 bg-ink text-gold flex items-center justify-center font-serif text-xl rounded-sm">
                RV
              </div>
              <div>
                <h3 className="font-serif text-2xl text-ink">Adv. Raashi Vaishya</h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-gold-deep mb-4 mt-1">Technology, Media, Sports and Gaming Lawyer</p>
                <p className="text-ink/75 leading-relaxed text-sm">
                  A commercial lawyer specialising in Technology, Media, Sports and Gaming law advising all stakeholders including platforms, companies, production houses, creators, talent, artists, athletes, brands, investors and founders on various matters including without limitation content and IP commercialisation, production, licensing and distribution arrangements, talent and endorsement deals, sports and gaming partnerships, gaming models, commercial collaborations, sponsorships, platform agreements, and related regulatory frameworks. Supports clients across the full lifecycle right from structuring and negotiation to documentation, compliance and execution.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 bg-ink text-bone divide-y md:divide-y-0 md:divide-x divide-bone/20 rounded-sm overflow-hidden shadow-noir">
              <div className="p-8 flex flex-col justify-center items-center text-center">
                <div className="font-serif text-3xl text-bone mb-2">200+</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">IP FILINGS MANAGED</div>
              </div>
              <div className="p-8 flex flex-col justify-center items-center text-center">
                <div className="font-serif text-3xl text-bone mb-2">4</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">GLOBAL JURISDICTIONS</div>
              </div>
              <div className="p-8 flex flex-col justify-center items-center text-center">
                <div className="font-serif text-3xl text-bone mb-2">DEDICATED</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">TMEG DESK</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone py-24 grain relative">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-bone mb-6">Speak With Our TMEG Team</h2>
          <p className="text-bone/70 leading-relaxed max-w-2xl mx-auto text-lg mb-10">
            For counsel regarding technology regulations, media rights, or IP protection, please reach out to our dedicated team.
          </p>
          <div className="inline-block bg-bone/5 border border-bone/20 rounded-lg p-8 md:p-12 text-left w-full max-w-3xl">
            <h3 className="font-serif text-2xl text-gold mb-2">LEXAVANT</h3>
            <p className="font-mono text-[11px] uppercase tracking-widest text-bone/60 mb-8 pb-8 border-b border-bone/20">Technology, Media, Entertainment & Gaming</p>
            <div className="space-y-4 font-mono text-sm tracking-wide">
              <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                <span className="text-gold w-32 shrink-0">OFFICES</span>
                <span className="text-bone/80">Mumbai | London</span>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                <span className="text-gold w-32 shrink-0">TELEPHONE</span>
                <span className="text-bone/80">+91 0777 408 9444</span>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                <span className="text-gold w-32 shrink-0">EMAIL</span>
                <a href="mailto:advchaitanya@lexavant.com" className="text-bone hover:text-gold transition-colors">advchaitanya@lexavant.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
