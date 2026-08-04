import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import ladyJustice from "@/assets/lady-justice.jpg";

export default function Corporate() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Practice Area"
        title="Corporate, M&A,"
        italic="Private Client & Securities."
        subtitle="Transactions are won long before signing in the quality of the structure, the discipline of the diligence, and the judgment of the lawyers who execute them. Our corporate and transactional practice is built on that conviction."
      />

      <section className="bg-bone py-24 border-b border-ink/10">
        <div className="container grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl md:text-3xl text-ink sticky top-32">Practice Overview</h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-ink/70 leading-relaxed text-lg">
            <p>
              We advise listed companies and their boards, Indian and foreign strategic acquirers, private-equity and venture investors, banks, non-banking financial companies, family-owned conglomerates, and high-net-worth individuals on the full spectrum of corporate and transactional work. Mandates regularly span general corporate advisory, public-market fund-raises, M&A and joint ventures, inbound and outbound investment, secured lending, real estate, employment, competition, and private-client structuring — frequently in combination on the same matter.
            </p>
            <p>
              Engagements are run end-to-end and partner-supervised: from first structuring conference through due diligence, documentation, negotiation, regulatory filings, and closing. Post-completion, we continue to support clients on integration, board governance, ongoing disclosures, and dispute-avoidance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone py-24 grain relative">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-bone mb-6">Capabilities – Scope of Practice</h2>
            <p className="text-bone/70 leading-relaxed max-w-3xl text-lg">
              Our corporate practice is deliberately broad across the corporate–commercial spectrum. The areas below illustrate the work we lead and contribute to in practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { title: "General Corporate & Advisory", desc: "Day-to-day corporate, governance and regulatory advisory for Indian and multinational groups.", items: ["Companies Act, 2013 advisory - incorporation, share capital, charter documents, board and shareholder governance", "Secretarial Standards (SS-1 and SS-2), board and committee processes, related-party transactions and Section 188 compliance", "Significant Beneficial Owner (SBO) analysis and filings under the Companies (SBO) Rules, 2018", "Managerial appointments, remuneration structuring and Schedule V compliance, including for listed entities", "Independent-director appointments, board composition and corporate-governance advisory", "Group restructurings, share-capital reorganisations, buy-backs and reductions of capital", "Ongoing general counsel support - board memoranda, policies, contracts, regulatory queries and crisis response"] },
              { title: "Mergers & Acquisitions, Joint Ventures", desc: "Strategic acquisitions, disposals, joint ventures and business transfers across sectors.", items: ["Private M&A - share and asset purchases, slump-sale business transfers and carve-outs", "Public M&A under the SEBI (SAST) Regulations - open offers, exemptions, creeping acquisitions", "Joint ventures, shareholders' agreements and governance rights for strategic and financial investors", "Promoter and family-group reorganisations, holding-structure design and inter-se transfers", "Legal, secretarial and regulatory due diligence with deal-focused issue resolution", "SPA, SHA, BTA and ancillary documentation; reps and warranties, indemnities, escrow and W&I-insurance interface", "Conditions precedent, regulatory clearances and closing mechanics; post-completion integration and stamp duty"] },
              { title: "Securities Law", desc: "Capital-markets transactions, ongoing listed-entity compliance and SEBI advisory.", items: ["Equity fund-raises by listed issuers - further public offers, rights issues, QIPs and preferential allotments", "SEBI (ICDR), (LODR), (PIT), (SAST) and (BTI) Regulations advisory and ongoing listed-entity compliance", "Continuous-disclosure obligations, materiality determinations and stock-exchange intimations", "Insider-trading code design, structured digital database and trading-window discipline", "Promoter and KMP disclosures, including private-arrangement and family-arrangement disclosures", "SEBI representations, informal-guidance applications and pre-filing advisory", "Debt-listing advisory for non-convertible debentures and other listed debt securities"] },
              { title: "Foreign Investment - Inbound & Outbound", desc: "Cross-border investment structuring under FEMA, the NDI Rules and the FDI Policy.", items: ["Inbound FDI structuring under the FEM (Non-debt Instruments) Rules, 2019 and the consolidated FDI Policy", "Sectoral cap, entry-route, pricing-guideline and downstream-investment analysis", "Press Note 3 advisory for investment from land-bordering countries; approval-route applications", "Outbound investment under the FEM (Overseas Investment) Rules and Regulations, 2022 - ODI, financial commitment and round-tripping analysis", "External commercial borrowings, trade credits and rupee-denominated borrowing structures", "Reporting compliance - FC-GPR, FC-TRS, FLA, ODI and ECB filings - and condonation/compounding", "FEMA opinions for transaction structuring, exits and repatriation"] },
              { title: "Banking & Finance", desc: "Lender- and borrower-side financing, security packages and structured credit.", items: ["Working-capital, term-loan and consortium-financing documentation for Indian and foreign lenders", "Co-lending arrangements between banks and NBFCs and digital-lending partnerships", "Loan assignments, securitisation and direct-assignment transactions under RBI's framework", "Security creation and perfection - mortgages, hypothecation, share pledges and personal/corporate guarantees", "Demand-guarantee and counter-guarantee structuring, including under RBI Master Directions on Guarantees", "Inter-creditor arrangements, subordination and restructuring documentation", "RBI regulatory advisory for banks and NBFCs, including on prudential and disclosure norms"] },
              { title: "Private Client - Estate, Succession & Family Governance", desc: "Trusted-adviser work for promoter families, founders and high-net-worth individuals.", items: ["Wills, codicils and testamentary structuring under the Indian Succession Act, 1925", "Private and family trusts under the Indian Trusts Act, 1882 including discretionary, dynastic and special-purpose trusts", "Inter-generational succession planning, family constitutions and family-office governance", "Advance medical directives (living wills) following the Supreme Court framework", "Stock-exchange and listed-entity disclosures for promoter wills, family arrangements and trust transfers", "Stamp-duty optimisation on settlements, gifts and trust deeds across States", "Tax-aware structuring for residents, non-residents and returning Indians, with FEMA interplay"] },
              { title: "HR & Employment", desc: "Workforce and senior-executive advisory for employers across sectors.", items: ["Senior-executive, country-manager and regional-head employment agreements", "Internal disciplinary inquiries, including for KMP and senior management of regulated entities", "POSH (Sexual Harassment of Women at Workplace Act, 2013) policies, IC constitution and inquiry support", "Restructuring, redundancy and exit advisory, including separation and release documentation", "Labour Codes readiness - Code on Wages, Industrial Relations Code, Social Security Code and OSH Code, with the 2025-26 Central Rules", "Shops and Establishments compliance across Maharashtra, Delhi and Karnataka", "ESOPs, deferred compensation and clawback design for listed and private companies"] },
              { title: "Real Estate", desc: "Commercial and residential real-estate documentation, structuring and diligence.", items: ["Title diligence and search reports for acquisitions, development and lending", "Conveyance, lease and leave-and-licence documentation under Maharashtra and Delhi regimes", "Maharashtra Rent Control Act, 1999 - tenancy, surrender, pugree and protected-tenancy analysis", "RERA compliance and developer/allottee documentation", "Stamp-duty and registration advisory under the Maharashtra Stamp Act and Indian Registration Act", "Real-estate joint ventures, development agreements and society redevelopments"] },
              { title: "Competition / Anti-trust", desc: "Combination notifications and competition-compliance support.", items: ["Merger-control filings before the Competition Commission of India (CCI), including under the Green Channel and the deal-value threshold", "Pre-notification structuring, jurisdictional and exemption analysis under the Combination Regulations", "Vertical and horizontal-restraint advisory under Sections 3 and 4 of the Competition Act, 2002", "Competition-compliance programmes, training and dawn-raid readiness"] },
              { title: "Additional Areas of Practice", desc: "Specialised mandates I take on, often integrated with corporate and M&A work.", items: ["Stamp duty and transaction structuring across States, including instrument design and exemptions", "International compliance and anti-corruption advisory, including extraterritorial exposure under regimes such as France's Loi Sapin II", "Education-sector advisory and investment structuring under the UGC framework and State legislation", "Energy and project advisory under the Electricity Act, 2003, including solar and renewable-energy projects", "Trust law, charitable-trust governance and Charity Commissioner interfaces", "Tax structuring on transactions, including capital-gains, withholding and stamp interplay", "Bank-guarantee, limitation-period and Section 28 (Contract Act) analysis on commercial documentation"] },
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
              A representative selection of recent mandates, illustrating the range of transactions, industries and counterparties advised. Client identities are withheld where confidentiality obligations apply.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { t: "Capital Markets: Listed Telecom Issuer", d: "Advised a listed telecom service provider on its equity fund-raise of approximately INR 18,000 crores by way of a further issue of equity shares, including structuring, SEBI (ICDR) and (LODR) compliance, documentation and stock-exchange interface." },
              { t: "Foreign Direct Investment: Single-Brand Retail", d: "Advised a French multinational on the proposed increase in shareholding of its Indian joint venture engaged in single-brand retail trading, covering FDI policy, sectoral conditions, pricing guidelines and FEMA reporting." },
              { t: "Strategic Market Entry: Paints", d: "Advised a leading Indian conglomerate on the legal aspects of launching its paints business in India, including corporate structuring, regulatory approvals, supply-chain documentation and competition assessment." },
              { t: "Cross-Border Restructuring: Healthcare Data", d: "Advised a UK-headquartered multinational data-centre company on the Indian leg of the restructuring of its healthcare-data business, valued at approximately GBP 16.7 million, including FEMA structuring and intra-group documentation." },
              { t: "Domestic M&A: Integrated Facility Management", d: "Advised an Indian facilities-service provider on the proposed acquisition of the entire share capital of an integrated facility-management services provider, including diligence, SPA negotiation and conditions-precedent management." },
              { t: "Private Client: Promoter Family of Listed FMCG", d: "Advised the promoter family of a leading FMCG listed entity on their wills and family-trust deeds, related stamp-duty and FEMA considerations and the resulting disclosures to the stock exchanges." },
              { t: "Private Client: Advance Medical Directives", d: "Advised the promoter family of a listed entity on advance medical directives (living wills) in line with the Supreme Court's framework." },
              { t: "Banking: Consortium Borrowing", d: "Advised a listed entity on its borrowings of INR 1,300 crores from a consortium of lenders led by the State Bank of India, including security creation, inter-creditor arrangements and documentation." },
              { t: "Banking: Demand Guarantees", d: "Advised a leading American chemicals company on the structuring of several demand guarantees issued in its favour by an Indian company, including limitation, payability and Section 28 analysis." },
              { t: "Banking: Co-Lending", d: "Advised a listed bank on structuring its co-lending arrangements with NBFC partners under the RBI framework." },
              { t: "Banking: Loan Assignment", d: "Advised a listed bank on the assignment of its loans to a third party aggregating to INR 10.80 crores, including documentation and notification." },
              { t: "Employment: KMP Disciplinary Inquiry", d: "Advised a key managerial personnel of one of India's largest banks on internal disciplinary proceedings for allegations of major misconduct." },
              { t: "Employment: Senior-Executive Contracts", d: "Advised the Indian subsidiaries of two Danish-headquartered conglomerates on employment agreements with their country manager and regional head." },
            ].map((exp, i) => (
              <div key={i} className="border-t border-ink/10 pt-6">
                <h3 className="font-serif text-xl text-ink mb-2">— {exp.t}</h3>
                <p className="text-ink/75 leading-relaxed">{exp.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone overflow-hidden border-b border-ink/10" data-reveal>
        <div className="container py-12 md:py-24">
          <div className="relative aspect-video max-w-5xl mx-auto rounded-sm overflow-hidden shadow-soft">
            <img src={ladyJustice} alt="Lady Justice Statue" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </section>

      <section className="bg-bone py-24">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-16 text-center">Counsel – Our Corporate Team</h2>

          <div className="max-w-4xl mx-auto space-y-16">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 shrink-0 bg-ink text-gold flex items-center justify-center font-serif text-xl rounded-sm">
                PB
              </div>
              <div>
                <h3 className="font-serif text-2xl text-ink">Adv. Prakshit Baid</h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-gold-deep mb-4 mt-1">Corporate Lawyer</p>
                <p className="text-ink/75 leading-relaxed text-sm">
                  A transactional lawyer in the Corporate, M&A, Private Client and Securities Law practice, advising listed companies, multinational groups, financial institutions, founders and family offices on strategic acquisitions, foreign investment, equity fund-raises, secured lending and private-client matters with emphasis on family settlements, private trusts, wills and inheritance. Engagements span the full execution arc - from structuring and diligence, through documentation and negotiation, to regulatory closing and post-completion integration - across Indian and cross-border deal architecture.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 bg-ink text-bone divide-y md:divide-y-0 md:divide-x divide-bone/20 rounded-sm overflow-hidden shadow-noir">
              <div className="p-8 flex flex-col justify-center items-center text-center">
                <div className="font-serif text-3xl text-bone mb-2">INR 18,000 Cr</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">LARGEST FUND-RAISE ADVISED</div>
              </div>
              <div className="p-8 flex flex-col justify-center items-center text-center">
                <div className="font-serif text-3xl text-bone mb-2">9+</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">CORE PRACTICE AREAS</div>
              </div>
              <div className="p-8 flex flex-col justify-center items-center text-center">
                <div className="font-serif text-3xl text-bone mb-2">MUMBAI</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">BAR · MAHARASHTRA & GOA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone py-24 grain relative">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-bone mb-6">Speak With Our Corporate Law Team</h2>
          <p className="text-bone/70 leading-relaxed max-w-2xl mx-auto text-lg mb-10">
            To discuss a matter that you would like reviewed with respect to the above practice area, please contact us. Initial conferences are by appointment.
          </p>
          <div className="inline-block bg-bone/5 border border-bone/20 rounded-lg p-8 md:p-12 text-left w-full max-w-3xl">
            <h3 className="font-serif text-2xl text-gold mb-2">LEXAVANT</h3>
            <p className="font-mono text-[11px] uppercase tracking-widest text-bone/60 mb-8 pb-8 border-b border-bone/20">Corporate, M&A, Private Client & Securities Law Practice</p>
            <div className="space-y-4 font-mono text-sm tracking-wide">
              <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                <span className="text-gold w-32 shrink-0">OFFICES</span>
                <span className="text-bone/80">London | Mumbai | Delhi</span>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                <span className="text-gold w-32 shrink-0">TELEPHONE</span>
                <span className="text-bone/80">+91 9082489630</span>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                <span className="text-gold w-32 shrink-0">EMAIL</span>
                <a href="mailto:prakshit.baid@lexavant.com" className="text-bone hover:text-gold transition-colors">prakshit.baid@lexavant.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
