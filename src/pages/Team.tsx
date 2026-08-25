import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";

const teamMembers = [
  {
    init: "AT", name: "Adv. Ajay Gajanan Talhar", title: "Founding Partner · Deputy Solicitor General of India",
    desc: "Adv. Talhar is the founder and anchor of the firm’s litigation practice. Over a career spanning more than two decades, he has represented eminent personalities and institutions, and his work is reported in over sixty judgments.",
    focus: "Constitutional & writ litigation, government & public-policy matters, commercial & civil disputes."
  },
  {
    init: "CT", name: "Adv. Chaitanya Talhar", title: "Managing Partner",
    desc: "Adv. Chaitanya Talhar leads the firm’s cross-border and commercial-disputes practice, bringing experience across London and Mumbai. He bridges the firm’s courtroom strength with international advisory.",
    focus: "Cross-border disputes, domestic & international arbitration, corporate litigation, technology & data disputes."
  },
  {
    init: "PG", name: "Adv. Pramod Gaikwad", title: "Senior Partner",
    desc: "Adv. Gaikwad is a seasoned litigator with more than 20 years at the Bar. He leads the firm’s recovery, insolvency, and High Court practice, representing major financial institutions.",
    focus: "Debt recovery, insolvency, restructuring, High Court litigation."
  },
  {
    init: "PB", name: "Adv. Prakshit Baid", title: "Corporate Lawyer",
    desc: "A transactional lawyer advising listed companies, multinational groups, and founders on strategic acquisitions, foreign investment, and private-client matters.",
    focus: "M&A, joint ventures, foreign investment, private-client & succession planning."
  },
  {
    init: "TD", name: "Adv. Tushar Daware", title: "Senior Associate",
    desc: "Adv. Daware focuses on debt recovery and banking litigation, representing lenders and borrowers in complex enforcement actions.",
    focus: "Banking litigation, SARFAESI enforcement, DRT recovery proceedings."
  },
  {
    init: "DS", name: "Adv. Darshan Sahuji", title: "Senior Associate",
    desc: "Adv. Sahuji is a versatile disputes lawyer who carries a broad litigation docket across civil, commercial, and regulatory matters.",
    focus: "Civil and commercial litigation, regulatory disputes."
  },
  {
    init: "YC", name: "Adv. Yashwant Chaudhary", title: "Associate",
    desc: "Adv. Chaudhary supports the disputes team with a dedicated focus on media and IP disputes, alongside general civil litigation.",
    focus: "Media and IP disputes, civil litigation, legal research."
  },
  {
    init: "RV", name: "Adv. Raashi Vaishya", title: "Technology, Media, Sports and Gaming Lawyer",
    desc: "A commercial lawyer advising stakeholders including platforms, companies, production houses, creators, talent, artists, athletes, brands, investors and founders on various matters including content and IP commercialisation, production, licensing and distribution arrangements, talent deals, sponsorships, and platform agreements.",
    focus: "Technology, Media, Sports and Gaming law, content and IP commercialisation."
  }
];

export default function Team() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our People"
        title="Specialist Counsel."
        italic=""
        subtitle="Our team comprises advocates with standing before constitutional courts, transactional lawyers trained at leading international firms, and specialists in technology and private-client practice."
      />
      
      <section className="bg-bone py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
            {teamMembers.map((lawyer, i) => (
              <div key={i} data-stagger-item data-depth-card className={`team-card group border border-ink/10 bg-bone/80 transition-colors hover:bg-ink hover:text-bone p-8 rounded-2xl flex flex-col min-h-[28rem] overflow-hidden relative ${i === 0 ? "lg:col-span-2" : ""}`}>
                <span className="absolute right-6 top-5 font-mono text-[10px] tracking-[0.3em] text-ink/25 group-hover:text-bone/30">0{i + 1}</span>
                <div className="w-16 h-16 shrink-0 bg-ink group-hover:bg-gold text-gold group-hover:text-ink flex items-center justify-center font-serif text-xl rounded-full mb-10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  {lawyer.init}
                </div>
                <h3 className={`${i === 0 ? "md:text-4xl" : "text-2xl"} font-serif mb-1`}>{lawyer.name}</h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-gold-deep mb-6">{lawyer.title}</p>
                <p className="opacity-75 leading-relaxed text-sm mb-6 flex-grow">{lawyer.desc}</p>
                <div className="pt-6 border-t border-current/15 mt-auto">
                  <p className="text-xs uppercase tracking-wider font-mono opacity-50 mb-2">Focus Areas</p>
                  <p className="text-sm italic opacity-80">{lawyer.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
