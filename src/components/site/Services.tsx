import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  { n: "01", title: "Litigation & Dispute Resolution", desc: "Constitutional, commercial, and regulatory disputes before the Supreme Court, High Courts, and specialised tribunals.", tags: ["Constitutional", "Commercial", "Arbitration"], to: "/practice-areas/litigation-and-dispute-resolution" },
  { n: "02", title: "Corporate, M&A & Private Client", desc: "Sophisticated counsel for mergers, acquisitions, joint ventures, and cross-border transactions alongside trusted private-client advisory.", tags: ["M&A", "Securities", "Private Client"], to: "/practice-areas/corporate-ma-private-client-securities-law" },
  { n: "03", title: "Technology, Media & Gaming", desc: "Integrated legal solutions for stakeholders operating at the intersection of innovation, content, and digital ecosystems.", tags: ["TMT", "Gaming", "IP"], to: "/practice-areas/technology-media-entertainment-gaming" },
  { n: "04", title: "Data Privacy", desc: "Advising clients on navigating complex data protection frameworks and maintaining regulatory compliance.", tags: ["Privacy", "DPDP", "Compliance"], to: "/practice-areas/data-privacy" },
];

const StickyCard_001 = ({
  i,
  n,
  title,
  desc,
  tags,
  to,
  progress,
  range,
  targetScale,
}: {
  i: number;
  n: string;
  title: string;
  desc: string;
  tags: string[];
  to: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center w-full"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 250}px)`,
        }}
        className="rounded-[2rem] relative -top-1/4 flex w-full max-w-6xl origin-top flex-col overflow-hidden bg-bone border border-ink/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] transition-colors duration-500 hover:bg-white"
      >
        <Link to={to} className="w-full block group relative px-6 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start md:items-center">
            <span className="md:col-span-1 font-mono text-xs text-gold tracking-widest">{n}</span>
            <h3 className="md:col-span-4 font-serif text-2xl md:text-3xl tracking-tight transition-transform duration-500 group-hover:translate-x-3 text-ink">
              {title}
            </h3>
            <p className="md:col-span-4 text-ink/70 text-sm leading-relaxed">{desc}</p>
            <div className="hidden md:flex md:col-span-2 flex-wrap gap-1.5 justify-end">
              {tags.map((t: string) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-wider text-ink/60 border border-ink/20 rounded-full px-2.5 py-1">
                  {t}
                </span>
              ))}
            </div>
            <span className="md:col-span-1 justify-self-end text-gold transition-transform duration-500 group-hover:rotate-45 hidden md:block">
              ↗
            </span>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export const Services = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
      <main
        id="services"
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[100vh] pt-[50vh] bg-bone px-4"
      >
        <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center z-10 pointer-events-none w-full px-4">
          <div className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/50 mb-2">
            <span className="h-px w-8 bg-gold" /> 02 — Practice Areas <span className="h-px w-8 bg-gold hidden md:block" />
          </div>
          <h2 className="font-serif text-4xl md:text-7xl text-ink leading-[1.05]">
            What We Do.
          </h2>
          <span className="after:from-bone after:to-ink relative max-w-[20ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:mt-4 after:h-16 after:w-px after:bg-gradient-to-b after:content-[''] text-ink tracking-widest mt-4">
            scroll down
          </span>
        </div>
        <div className="w-full flex flex-col items-center z-20">
          {services.map((project, i) => {
            const targetScale = Math.max(
              0.8,
              1 - (services.length - i - 1) * 0.04,
            );
            return (
              <StickyCard_001
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </main>
  );
};
