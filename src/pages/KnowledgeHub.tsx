import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Newsletter } from "@/components/site/Newsletter";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Digital Personal Data Protection Act, 2023: A Transition Guide for Data Fiduciaries",
    date: "March 15, 2024",
    category: "Legal Updates",
    practice: "Data Privacy",
    excerpt: "An analysis of the key compliance obligations under the DPDPA and the timeline for implementation for tech and media platforms.",
  },
  {
    id: 2,
    title: "Lexavant LLP Advised Leading Telecom Issuer on INR 18,000 Cr Equity Fund-Raise",
    date: "February 28, 2024",
    category: "Firm News",
    practice: "Corporate & Securities",
    excerpt: "The firm acted as legal counsel to a major Indian telecom provider in one of the largest equity fund-raises of the year.",
  },
  {
    id: 3,
    title: "Navigating Real-Money Gaming Regulations in India",
    date: "January 10, 2024",
    category: "Articles & Opinions",
    practice: "TMEG",
    excerpt: "A comprehensive overview of state-specific legislation and the ‘skill vs. chance’ determination for online gaming operators.",
  },
  {
    id: 4,
    title: "Enforcement of Foreign Arbitral Awards: Recent Supreme Court Jurisprudence",
    date: "December 05, 2023",
    category: "Legal Updates",
    practice: "Litigation & Dispute Resolution",
    excerpt: "Examining the latest Supreme Court rulings on the public policy exception under the New York Convention.",
  },
  {
    id: 5,
    title: "Adv. Ajay Talhar Appointed Deputy Solicitor General of India",
    date: "November 18, 2023",
    category: "Firm News",
    practice: "Firm News",
    excerpt: "Lexavant’s Founding Partner has been appointed to represent the Union of India before the High Court of Bombay at Aurangabad.",
  },
  {
    id: 6,
    title: "Structuring Family Offices for High-Net-Worth Individuals",
    date: "October 22, 2023",
    category: "Articles & Opinions",
    practice: "Private Client",
    excerpt: "Key legal and regulatory considerations when setting up single- and multi-family offices in India.",
  }
];

const categories = ["All", "Litigation & Disputes", "Corporate & M&A", "Technology & Data", "Media & Entertainment", "Private Client", "Regulatory", "International"];

export default function KnowledgeHub() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  return (
    <PageShell>
      <PageHero
        eyebrow="Insights & News"
        title="Knowledge Hub."
        italic=""
        subtitle="Insights, analysis, and firm updates across our practice areas."
      />
      
      <section className="bg-bone py-24 min-h-[60vh]">
        <div className="container">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-16 border-b border-ink/10 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs uppercase tracking-[0.18em] px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-ink text-bone" 
                    : "bg-bone text-ink/70 hover:text-ink hover:bg-ink/5 border border-ink/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
            {filteredArticles.map((article) => (
              <article key={article.id} className="group cursor-pointer flex flex-col h-full">
                <div className="mb-4 overflow-hidden rounded-sm aspect-[1.6/1] bg-ink/5 relative">
                  <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-bone rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <ArrowUpRight size={18} className="text-ink" />
                  </div>
                </div>
                
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60 mb-4">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gold"></span>
                  <span className="text-gold-deep">{article.practice}</span>
                </div>
                
                <h3 className="font-serif text-2xl text-ink mb-4 leading-snug group-hover:text-gold-deep transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-ink/70 leading-relaxed text-sm mb-6 flex-grow">
                  {article.excerpt}
                </p>
                
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40 mt-auto border-t border-ink/10 pt-4">
                  {article.category}
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <Newsletter />
    </PageShell>
  );
}
