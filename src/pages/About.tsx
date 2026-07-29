import { useRef } from "react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import heroVideo from "@/assets/hero.mp4";
import modernLawFirm from "@/assets/modern_law_firm_about.png";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yVideo = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scaleImage = useTransform(scrollYProgress, [0.3, 0.6], [0.95, 1.05]);

  return (
    <PageShell>
      <PageHero
        eyebrow="About Lexavant"
        title="Law, Finance &"
        italic="Technology."
        subtitle="Lexavant was built on a proposition that has not changed since inception: that exceptional legal counsel requires not just technical command of the law, but commercial judgment, strategic clarity, and an unwavering commitment to the client’s objective."
      />

      <div ref={containerRef}>
        <section className="bg-bone py-24 md:py-32 relative overflow-hidden">
          <div className="container grid lg:grid-cols-12 gap-12 relative z-10">
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60 mb-6"
              >
                <span className="h-px w-8 bg-gold" /> The Firm
              </motion.div>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] text-ink" data-reveal>
                A full-service firm. <br />
                <span className="italic text-gold-deep block mt-2">Not just a claim.</span>
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 space-y-8">
              <p className="text-ink/80 text-xl leading-relaxed font-light" data-reveal>
                We are a full-service firm. That is not a marketing claim, but it reflects how we are structured and how we work. Our disputes lawyers sit alongside our transactional and advisory teams, and our technology practice operates alongside our corporate and private-client desks. The result is a firm in which a single matter, however complex, however cross-disciplinary, can be handled with coherence, accountability, and continuity from the first conference to the final order or closing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-ink/10">
                <p className="text-ink/65 leading-relaxed text-sm" data-reveal>
                  Lexavant LLP is a limited liability partnership registered under the laws of India. The firm has offices in Mumbai, Delhi, Aurangabad, and London. Our professionals are trained across Indian and international jurisdictions, and we regularly advise on mandates that span multiple legal systems.
                </p>
                <p className="text-ink/65 leading-relaxed text-sm" data-reveal>
                  Our practice inter alia covers litigation and dispute resolution at every level of the Indian judiciary; corporate and M&A advisory; securities law; banking and finance; insolvency; technology, media, entertainment and gaming; healthcare and pharmaceuticals; intellectual property; data protection; and private-client matters including estate planning, succession, family governance, and wealth structuring.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink text-bone py-32 md:py-48 grain relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          
          <div className="container grid lg:grid-cols-12 gap-16 md:gap-8 items-center">
            <div className="lg:col-span-5 space-y-10 z-10">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/50 mb-6" data-stagger-item>
                <span className="h-px w-8 bg-gold" /> Our Approach
              </div>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.1]" data-stagger-item>
                How We Work
              </h2>
              <div className="space-y-6 text-bone/70 leading-relaxed text-lg font-light" data-stagger-item>
                <p>
                  Every matter at Lexavant is partner-led. Clients are not handed down the bench as a matter progresses, the senior lawyer who takes your first call is the lawyer accountable for the outcome.
                </p>
                <p>
                  We begin with the objective: the commercial outcome you need, the timeline you are working to, the risks you can tolerate, and the relationships you want to preserve. Strategy follows. Documentation and advocacy follow strategy. We are deliberate about not reversing that sequence.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <motion.img 
                style={{ y: yImage, scale: scaleImage, willChange: "transform" }}
                src={modernLawFirm} 
                alt="Modern luxurious law firm interior" 
                loading="lazy" 
                width={1400} 
                height={1750} 
                className="absolute inset-0 h-[120%] w-[120%] -top-[10%] -left-[10%] object-cover object-center" 
              />
              <div className="absolute inset-0 bg-ink/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </section>

        <section className="relative h-[80vh] bg-ink overflow-hidden flex items-center justify-center group">
          <motion.div style={{ y: yVideo, willChange: "transform" }} className="absolute inset-0 h-[120%] -top-[10%] w-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-ink/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink opacity-90" />
          </motion.div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-bone drop-shadow-lg">
            <h2 className="font-serif text-5xl md:text-8xl leading-none tracking-tight">
              Clarity in <br/>
              <span className="italic font-light text-bone/90">Complexity</span>
            </h2>
          </div>
        </section>

        <section className="bg-bone py-24 md:py-32 relative">
          <div className="container grid lg:grid-cols-12 gap-16 md:gap-12">
            <div className="lg:col-span-4 space-y-16 lg:sticky lg:top-32 self-start">
              <div data-reveal>
                <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold-deep mb-4">Our People</div>
                <h3 className="font-serif text-3xl mb-6 text-ink">Specialist Counsel</h3>
                <p className="text-ink/70 leading-relaxed text-base mb-8">
                  Our team comprises advocates with standing before the constitutional courts and specialist tribunals; transactional lawyers trained at leading Indian and international firms; technology and regulatory advisors with sector-specific expertise; and private-client practitioners who have advised promoter families, founders, and individuals on their most consequential personal decisions.
                </p>
                <Link to="/team" className="group inline-flex items-center gap-4 font-mono text-xs uppercase tracking-[0.18em] text-ink hover:text-gold-deep transition-colors">
                  <span className="relative overflow-hidden">
                    <span className="block transition-transform duration-500 group-hover:-translate-y-full">Meet the Team</span>
                    <span className="block absolute inset-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-gold-deep">Meet the Team</span>
                  </span>
                  <span className="w-8 h-px bg-ink/30 transition-all duration-500 group-hover:w-12 group-hover:bg-gold-deep" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6 mt-16 lg:mt-0">
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold-deep mb-8" data-reveal>What We Stand For</div>
              <h2 className="font-serif text-5xl mb-16 text-ink" data-reveal>Ethos</h2>

              <ul className="space-y-0 border-t border-ink/10">
                {[
                  { title: "Partner-led attention", desc: "Clients are not handed down the bench as a matter progresses." },
                  { title: "Strategy before procedure", desc: "Documentation and advocacy follow strategy, never the reverse." },
                  { title: "Calibrated advice", desc: "Tailored to risk, cost, and the relationships you want to preserve." },
                  { title: "Directness", desc: "We tell you when it is time to settle and when it is time to fight." },
                  { title: "Discretion", desc: "Client confidences are absolute, with stringent safeguards." },
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 border-b border-ink/10 py-10 group hover:bg-ink/[0.02] transition-colors -mx-6 px-6 rounded-lg"
                  >
                    <span className="font-mono text-gold-deep shrink-0 mt-2 text-sm">0{i + 1}</span>
                    <div>
                      <h4 className="font-serif text-2xl md:text-3xl text-ink mb-3 group-hover:text-gold-deep transition-colors">{item.title}</h4>
                      <p className="text-ink/60 font-light text-lg">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
};

export default AboutPage;
