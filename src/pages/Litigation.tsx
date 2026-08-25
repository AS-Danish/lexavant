import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { reportedJudgments } from "@/data/judgments";

export default function Litigation() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Practice Area"
        title="Litigation & Dispute"
        italic="Resolution."
        subtitle="Disputes are decided long before the hearing in the quality of the strategy, the discipline of the record, and the judgment of the counsel who carry them. Lexavant’s disputes practice was built on that conviction."
      />

      <section className="bg-bone py-24 border-b border-ink/10">
        <div className="container grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl md:text-3xl text-ink sticky top-32">Practice Overview</h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-ink/70 leading-relaxed text-lg">
            <p>
              We are a full-service litigation and dispute-resolution practice that combines decades of courtroom experience at the constitutional courts with a modern, cross-border commercial and technology bench. Led from the Mumbai office and supported from London and Delhi, we appear before every level of the Indian judiciary and the country’s specialised tribunals, and we co-ordinate disputes across the United Kingdom, the European Union, the United States, the Middle East and Southeast Asia.
            </p>
            <p>
              Our clients range from multinational corporations, banks and financial institutions, public-sector undertakings and government bodies to founders, family enterprises, trusts, co-operatives and individuals. Whatever the forum and whatever the stakes, our promise is the same: partner-led attention, a clear strategy aligned to your commercial objective, and advocacy of the highest standard.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone py-24 grain relative">
        <div className="container grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl md:text-3xl text-bone sticky top-32">Our Approach & How We Work</h2>
          </div>
          <div className="lg:col-span-8 space-y-12">
            {[
              { t: "Partner-led, from first conference to final order", d: "Senior counsel own the strategy and stay on the matter you are not handed down the bench as the dispute progresses." },
              { t: "Strategy before procedure", d: "We begin with the outcome you want, then build the record, the forum choice and the timeline to reach it settlement, injunction, award or judgment." },
              { t: "Commercial, not just correct", d: "Every step is weighed against cost, time, reputation and relationship. We tell you when to fight and when to resolve." },
              { t: "One firm, end-to-end", d: "Litigation, arbitration, regulatory defence, recovery and enforcement handled under one roof, with tax, corporate and technology advisory a desk away." },
              { t: "Built for cross-border", d: "We brief, manage and align local counsel across jurisdictions, and we enforce foreign judgments and awards in India and Indian awards abroad." },
            ].map((item, i) => (
              <div key={i} data-depth-card className="capability-card border-t border-bone/20 pt-6">
                <h3 className="font-serif text-xl md:text-2xl text-gold mb-3">— {item.t}</h3>
                <p className="text-bone/70 leading-relaxed text-lg">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-24">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">Capabilities – The Spectrum of Disputes We Handle</h2>
            <p className="text-ink/70 leading-relaxed max-w-3xl text-lg">
              Our disputes practice is deliberately broad. The areas below are illustrative of our reach in practice, if it can be litigated, arbitrated, defended or enforced in India, we can act on it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { title: "Constitutional, Public & Administrative Law", desc: "Strategic challenges to State action and the vindication of fundamental and statutory rights before the constitutional courts.", items: ["Writ petitions under Articles 226 and 227 and proceedings under Article 32", "Public Interest Litigation on governance, environment and public welfare", "Service, education and public-employment disputes; departmental inquiries", "Challenges to legislation, notifications, policy decisions and regulatory action", "Quashing of show-cause notices and administrative orders; election disputes"] },
              { title: "Commercial & Contractual Disputes", desc: "High-value commercial litigation arising from contracts, business relationships and joint ventures.", items: ["Breach of contract, damages, specific performance and injunctions", "Commercial Court suits, summary suits and recovery actions", "Joint-venture, partnership and franchise disputes", "Agency, distribution, supply-chain and warranty/indemnity claims", "Post-acquisition and shareholders’-agreement disputes"] },
              { title: "Corporate, Shareholder & Company Law Disputes", desc: "Boardroom and shareholder conflicts before the company courts and the NCLT.", items: ["Oppression and mismanagement petitions before the NCLT and NCLAT", "Shareholder, promoter and investor disputes; derivative actions", "Director and board-level disputes, removals and governance deadlocks", "Objections to schemes of arrangement, mergers and capital reduction", "Class actions and minority-protection proceedings"] },
              { title: "Banking, Finance & Debt Recovery", desc: "Representing lenders and borrowers across the full recovery and enforcement lifecycle — a core strength of the firm.", items: ["SARFAESI enforcement, securitisation and possession proceedings", "Recovery applications before the DRT and appeals before the DRAT", "Enforcement of guarantees, mortgages, pledges and securities", "NPA management, one-time settlement and restructuring disputes", "Cheque-dishonour prosecutions under Section 138 of the NI Act", "Co-operative bank and credit-society recovery matters"] },
              { title: "Insolvency, Bankruptcy & Restructuring", desc: "Full-spectrum representation under the Insolvency and Bankruptcy Code before the NCLT and NCLAT.", items: ["CIRP initiation and defence under Sections 7, 9 and 10", "Financial and operational creditors, resolution professionals and the CoC", "Liquidation, avoidance and preferential / undervalued-transaction actions", "Personal-guarantor insolvency and bankruptcy", "Pre-pack insolvency, distressed-asset acquisitions and NPA resolution", "Cross-border insolvency, asset tracing and recovery"] },
              { title: "Arbitration & Alternative Dispute Resolution", desc: "Domestic and international arbitration, from drafting the clause to enforcing the award.", items: ["Domestic and international commercial arbitration (institutional and ad hoc)", "Interim relief under Section 9 and emergency / tribunal-ordered measures", "Setting-aside and enforcement under Sections 34, 36 and 37", "Enforcement of foreign awards under the New York Convention", "Construction, infrastructure, EPC and concession arbitration", "Mediation, conciliation and structured settlement"] },
            ].map((cap, i) => (
              <div key={i} data-depth-card className="capability-card border-t border-ink/15 pt-6">
                <h3 className="font-serif text-xl text-ink mb-2">▪ {cap.title}</h3>
                <p className="text-sm italic text-ink/60 mb-4">{cap.desc}</p>
                <ul className="space-y-2">
                  {cap.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-ink/75 text-sm">
                      <span className="text-gold">•</span> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone py-24 grain relative">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl text-bone mb-6">Forums Where We Appear</h2>
          <p className="text-bone/70 leading-relaxed max-w-3xl text-lg mb-12">
            Our advocates and instructed counsel appear across the entire architecture of Indian adjudication and co-ordinate proceedings before foreign courts and arbitral institutions.
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { k: "Constitutional & Civil Courts", v: "Supreme Court of India · High Courts (Principal Seat & Benches) · District & Sessions Courts · Commercial Courts · Family Courts · Small Causes Courts" },
              { k: "Company, Insolvency & Recovery", v: "National Company Law Tribunal (NCLT) & NCLAT · Debts Recovery Tribunal (DRT) & DRAT" },
              { k: "Tax, Trade & Competition", v: "Income Tax Appellate Tribunal (ITAT) · CESTAT · GST Appellate Tribunal · Competition Commission of India (CCI)" },
              { k: "Sectoral & Specialised Tribunals", v: "Securities Appellate Tribunal (SAT) · National Green Tribunal (NGT) · TDSAT · RERA & Appellate Authority · Electricity Regulatory Commissions" },
              { k: "Service, Labour & Co-operative", v: "Central & State Administrative Tribunals (CAT) · Industrial & Labour Courts · Co-operative Courts" },
              { k: "Consumer & Quasi-Judicial", v: "National, State & District Consumer Commissions · Charity Commissioner · Regulatory & adjudicating authorities" },
              { k: "Arbitration & ADR", v: "Domestic & international arbitral tribunals (institutional & ad hoc) · Emergency arbitration · Mediation & conciliation" },
              { k: "International", v: "Co-ordinated proceedings and enforcement across the UK, EU, US, Middle East and Southeast Asia" },
            ].map((forum, i) => (
              <div key={i} data-depth-card className="capability-card border-t border-bone/20 pt-6">
                <h3 className="font-serif text-lg text-gold mb-2">{forum.k}</h3>
                <p className="text-bone/70 text-sm leading-relaxed">{forum.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-24">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-16 text-center">Counsel – Our Litigation & Disputes Team</h2>

          <div className="max-w-4xl mx-auto space-y-16">
            {[
              {
                init: "AT", name: "Adv. Ajay Gajanan Talhar", title: "Founding Partner · Deputy Solicitor General of India, High Court of Bombay, Aurangabad Bench",
                desc: "Adv. Talhar is the founder and anchor of the firm’s litigation practice. He began at the Principal Seat of the Bombay High Court before establishing a leading constitutional, civil and commercial practice at the Aurangabad Bench, and now serves as a law officer of the Union of India in significant constitutional and government matters. Over a career spanning more than two decades and several thousand matters, he has represented eminent personalities and institutions including the former President of India, Smt. Pratibhatai Patil, the social reformer Anna Hazare, Tata Steel, Bajaj Auto, Fiat, Raymond and Bekaert, alongside chambers of commerce, industries associations, co-operative banks and education societies across Maharashtra. His work is reported in more than sixty judgments of the Supreme Court of India and the Bombay High Court.",
                focus: "Constitutional & writ litigation, government & public-policy matters, commercial & civil disputes, service & education law, banking & co-operative litigation."
              },
              {
                init: "CT", name: "Adv. Chaitanya Talhar", title: "Managing Partner · Cross-Border & Commercial Disputes",
                desc: "Adv. Chaitanya Talhar leads the firm’s cross-border and commercial-disputes practice, bringing experience across London and Mumbai. He advises foreign companies and brands on entering and operating in the Indian market and on the disputes that arise from it, and represents clients in domestic and international arbitration, corporate and commercial litigation, and technology-law disputes. He bridges the firm’s courtroom strength with international advisory co-ordinating multi-jurisdictional matters, vetting and instructing local counsel, and shaping dispute strategy around the client’s commercial objectives.",
                focus: "Cross-border & international disputes, domestic & international arbitration, corporate & commercial litigation, technology & data disputes, foreign market entry."
              },
              {
                init: "PG", name: "Adv. Pramod Gaikwad", title: "Senior Partner",
                desc: "Adv. Gaikwad is a seasoned litigator with more than 20 years at Bar who leads the firm’s recovery, insolvency and High Court practice. He represents banks, financial institutions, creditors and corporates before the Debts Recovery Tribunal, the National Company Law Tribunal and the High Court, handling complex enforcement, restructuring and company-law disputes.",
              },
              {
                init: "TD", name: "Adv. Tushar Daware", title: "Senior Associate",
                desc: "Adv. Daware focuses on debt recovery and banking litigation, representing lenders and borrowers in SARFAESI enforcement, DRT recovery proceedings and allied actions, with close attention to the procedural rigour these matters demand.",
              },
              {
                init: "DS", name: "Adv. Darshan Sahuji", title: "Senior Associate · Litigation & Disputes",
                desc: "Adv. Sahuji is a versatile disputes lawyer who carries a broad litigation docket across civil, commercial and regulatory matters before courts and tribunals, contributing to the practice across its full range of work.",
              },
              {
                init: "YC", name: "Adv. Yashwant Chaudhary", title: "Associate · Litigation",
                desc: "Adv. Chaudhary supports the disputes team across legal research, drafting and matter management, with a developing practice spanning the firm’s litigation portfolio.",
              }
            ].map((lawyer, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 items-start border-t border-ink/10 pt-8">
                <div className="w-16 h-16 shrink-0 bg-ink text-gold flex items-center justify-center font-serif text-xl rounded-sm">
                  {lawyer.init}
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-ink">{lawyer.name}</h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-gold-deep mb-4 mt-1">{lawyer.title}</p>
                  <p className="text-ink/75 leading-relaxed text-sm mb-4">{lawyer.desc}</p>
                  {lawyer.focus && <p className="text-sm italic text-ink/60"><span className="font-semibold text-ink/80 not-italic">Focus:</span> {lawyer.focus}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-24 border-t border-ink/10">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">Select Reported Judgments</h2>
            <p className="text-ink/70 leading-relaxed max-w-3xl mx-auto text-lg">
              A representative selection from the reported judgments in which counsel to the firm has appeared, before the Supreme Court of India and the High Court of Judicature at Bombay (and its Benches).
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-ink border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-ink text-bone font-serif text-lg">
                  <th className="p-4 border border-ink/20 w-16 text-center">#</th>
                  <th className="p-4 border border-ink/20 w-1/2">Parties</th>
                  <th className="p-4 border border-ink/20">Citation</th>
                  <th className="p-4 border border-ink/20 text-center whitespace-nowrap">Appeared For</th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm">
                {reportedJudgments.map((j) => (
                  <tr key={j.id} className="border-b border-ink/10 hover:bg-ink/5 transition-colors">
                    <td className="p-4 border-r border-ink/10 font-mono text-gold-deep text-center">{j.id}</td>
                    <td className="p-4 border-r border-ink/10 font-medium text-ink/90 leading-snug">{j.parties}</td>
                    <td className="p-4 border-r border-ink/10 text-ink/70 italic">{j.citation}</td>
                    <td className="p-4 text-center text-ink/80">{j.appearedFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone py-24 grain relative">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-bone mb-6">Speak With Our Litigation & Disputes Team</h2>
          <p className="text-bone/70 leading-relaxed max-w-2xl mx-auto text-lg mb-10">
            To discuss a dispute, a potential claim, or a matter you would like reviewed, please contact us. Initial conferences are by appointment.
          </p>
          <div className="inline-block bg-bone/5 border border-bone/20 rounded-lg p-8 md:p-12 text-left w-full max-w-3xl">
            <h3 className="font-serif text-2xl text-gold mb-2">LEXAVANT</h3>
            <p className="font-mono text-[11px] uppercase tracking-widest text-bone/60 mb-8 pb-8 border-b border-bone/20">Litigation & Dispute Resolution Practice</p>
            <div className="space-y-4 font-mono text-sm tracking-wide">
              <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                <span className="text-gold w-32 shrink-0">OFFICES</span>
                <span className="text-bone/80">London | Mumbai | Delhi</span>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                <span className="text-gold w-32 shrink-0">TELEPHONE</span>
                <span className="text-bone/80">+91 0777 408 9444 · +44 7867 222719</span>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                <span className="text-gold w-32 shrink-0">EMAIL</span>
                <a href="mailto:info@lexavant.com" className="text-bone hover:text-gold transition-colors">info@lexavant.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
