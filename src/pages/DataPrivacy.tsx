import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";

export default function DataPrivacy() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Practice Area"
        title="Data Privacy &"
        italic="Protection."
        subtitle="As data regulation shifts from compliance exercises to core operational risks, we advise clients on navigating complex frameworks, securing digital assets, and maintaining regulatory trust."
      />
      
      <section className="bg-bone py-24 border-b border-ink/10">
        <div className="container grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl md:text-3xl text-ink sticky top-32">Practice Overview</h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-ink/70 leading-relaxed text-lg">
            <p>
              Data is no longer just an asset; it is a regulatory frontier. With the introduction of the Digital Personal Data Protection Act (DPDPA) in India and the enforcement of global standards like the GDPR, organizations face unprecedented scrutiny regarding how they collect, store, process, and transfer personal data.
            </p>
            <p>
              Lexavant’s Data Privacy practice provides strategic, end-to-end counsel for domestic and multinational corporations. We help build privacy-by-design architectures, conduct compliance audits, manage cross-border data transfers, and respond to regulatory inquiries and data breaches. Our approach is commercial and practical, ensuring that compliance does not stifle innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone py-24 grain relative">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-bone mb-6">Capabilities – Scope of Practice</h2>
            <p className="text-bone/70 leading-relaxed max-w-3xl text-lg">
              We provide comprehensive advisory and dispute resolution services across the data protection spectrum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { title: "DPDPA & GDPR Compliance", desc: "End-to-end compliance frameworks for Indian and European data protection laws.", items: ["Gap analysis and compliance audits against the DPDPA and GDPR", "Drafting privacy policies, cookie policies, and consent notices", "Data processing agreements (DPAs) and data sharing agreements", "Advising Data Fiduciaries and Data Processors on their statutory obligations"] },
              { title: "Cross-Border Data Transfers", desc: "Structuring international data flows in compliance with local regulations.", items: ["Advisory on data localization and restricted transfers", "Drafting standard contractual clauses (SCCs) for international transfers", "Structuring intra-group data sharing across jurisdictions", "Navigating sectoral data residency requirements (e.g., RBI guidelines)"] },
              { title: "Data Breach & Incident Response", desc: "Rapid response and regulatory management during cybersecurity incidents.", items: ["Incident response strategy and CERT-In reporting compliance", "Regulatory interface and mandatory notifications", "Managing user communications and potential liability claims", "Post-breach compliance audits and remediation advisory"] },
              { title: "Privacy in Emerging Technologies", desc: "Navigating data risks in AI, blockchain, and digital health.", items: ["Privacy-by-design advisory for new software and app development", "Data scraping, web crawling, and AI training data compliance", "Healthcare data protection and telemedicine guidelines", "Financial data privacy and Account Aggregator framework advisory"] },
            ].map((cap, i) => (
              <div key={i} data-depth-card className="capability-card border-t border-bone/15 pt-6">
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

      <section className="horizontal-story-section bg-bone py-24 border-b border-ink/10 overflow-hidden">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">Indicative Experience</h2>
            <p className="text-ink/70 leading-relaxed max-w-2xl mx-auto text-lg">
              A representative selection of our data privacy and protection mandates.
            </p>
          </div>

          <div data-horizontal-scroll className="experience-rail">
            {[
              { t: "Multinational SaaS Provider: Global Compliance", d: "Advised a US-headquartered SaaS company on aligning its Indian operations and customer agreements with the upcoming Digital Personal Data Protection Act, including drafting localized DPAs." },
              { t: "Healthcare Platform: Health Data Regulations", d: "Guided a digital health startup through the compliance requirements for handling sensitive personal health data, ensuring alignment with both Ministry of Health guidelines and data protection laws." },
              { t: "Financial Institution: Incident Response", d: "Acted as counsel for a non-banking financial company during a suspected data breach, managing CERT-In reporting obligations and subsequent regulatory inquiries." },
            ].map((exp, i) => (
              <div key={i} data-depth-card className="border-t border-ink/10 pt-6">
                <h3 className="font-serif text-xl text-ink mb-2">— {exp.t}</h3>
                <p className="text-ink/75 leading-relaxed">{exp.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone py-24 grain relative">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-bone mb-6">Speak With Our Data Privacy Team</h2>
          <p className="text-bone/70 leading-relaxed max-w-2xl mx-auto text-lg mb-10">
            For counsel regarding data compliance audits, breach response, or DPDPA transition strategies, please reach out.
          </p>
          <div className="inline-block bg-bone/5 border border-bone/20 rounded-lg p-8 md:p-12 text-left w-full max-w-3xl">
            <h3 className="font-serif text-2xl text-gold mb-2">LEXAVANT</h3>
            <p className="font-mono text-[11px] uppercase tracking-widest text-bone/60 mb-8 pb-8 border-b border-bone/20">Data Privacy & Protection Practice</p>
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
