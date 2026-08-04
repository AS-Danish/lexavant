import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Inquiry received.",
        description: "Our team will review and respond within two business days.",
      });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="bg-bone text-ink py-32 md:py-48 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "radial-gradient(ellipse at center, transparent 40%, hsl(var(--ink) / 0.1) 100%)" }} />
      <div className="container relative grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/50 mb-6" data-reveal>
            <span className="h-px w-8 bg-gold" /> Contact Us
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]" data-reveal>
            We are available to speak.
          </h2>
          <p className="mt-8 text-ink/65 leading-relaxed max-w-md" data-reveal>
            Whether you have an active matter, a question about our practice, or are exploring a long-term advisory relationship, we are available to speak with prospective and existing clients, referral counsel, and professional intermediaries.
          </p>

          <dl className="mt-12 space-y-6" data-stagger>
            <div data-stagger-item className="border-t border-ink/15 pt-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Mumbai - Principal Office</dt>
              <dd className="font-serif text-lg leading-snug">
                Lexavant LLP<br />
                Office No. 306, Marine Chambers,<br />
                New Marine Lines,<br />
                Mumbai - 400020
              </dd>
              <dd className="font-mono text-sm mt-3 text-ink/70">+91 7774089444 | +44 7867222719</dd>
              <dd className="font-mono text-sm mt-1 text-ink/70">info@lexavant.com</dd>
            </div>

            <div data-stagger-item className="grid grid-cols-2 gap-4 border-t border-ink/15 pt-4">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-1">London</dt>
                <dd className="text-sm text-ink/60">[Address]</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-1">Delhi</dt>
                <dd className="text-sm text-ink/60">World Trade Centre, Lalit Hotel, Babar Road, Connaught Place, New Delhi - 110001</dd>
              </div>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-6 lg:col-start-7 space-y-8" data-reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-2">Full Name</label>
              <input required id="name" name="name" type="text" className="w-full bg-transparent border-b border-ink/25 focus:border-gold py-3 text-ink placeholder-ink/30 outline-none transition-colors duration-500 font-serif text-lg" />
            </div>
            <div className="group">
              <label htmlFor="organisation" className="block font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-2">Organisation (Optional)</label>
              <input id="organisation" name="organisation" type="text" className="w-full bg-transparent border-b border-ink/25 focus:border-gold py-3 text-ink placeholder-ink/30 outline-none transition-colors duration-500 font-serif text-lg" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-2">Email Address</label>
              <input required id="email" name="email" type="email" className="w-full bg-transparent border-b border-ink/25 focus:border-gold py-3 text-ink placeholder-ink/30 outline-none transition-colors duration-500 font-serif text-lg" />
            </div>
            <div className="group">
              <label htmlFor="phone" className="block font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-2">Phone Number</label>
              <input required id="phone" name="phone" type="tel" className="w-full bg-transparent border-b border-ink/25 focus:border-gold py-3 text-ink placeholder-ink/30 outline-none transition-colors duration-500 font-serif text-lg" />
            </div>
          </div>

          <div className="group">
            <label htmlFor="enquiry" className="block font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-2">Nature of Enquiry</label>
            <select required id="enquiry" name="enquiry" defaultValue="" className="w-full bg-transparent border-b border-ink/25 focus:border-gold py-3 text-ink outline-none transition-colors duration-500 font-serif text-lg appearance-none cursor-pointer">
              <option value="" disabled>Select an option</option>
              <option value="General Enquiry">General Enquiry</option>
              <option value="Litigation & Disputes">Litigation & Disputes</option>
              <option value="Corporate & M&A">Corporate & M&A</option>
              <option value="TMEG">Technology, Media, Entertainment & Gaming</option>
              <option value="Private Client">Private Client</option>
              <option value="Banking & Finance">Banking & Finance</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div>
            <label htmlFor="msg" className="block font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-2">Brief Description of Matter</label>
            <textarea required id="msg" name="msg" rows={4} className="w-full bg-transparent border-b border-ink/25 focus:border-gold py-3 text-ink placeholder-ink/30 outline-none transition-colors duration-500 resize-none font-serif text-lg" />
          </div>

          <button type="submit" disabled={sending} className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gold text-ink rounded-full pl-8 pr-3 py-3 font-mono text-xs uppercase tracking-[0.2em] hover:bg-ink hover:text-bone transition-all duration-500 disabled:opacity-60">
            {sending ? "Submitting…" : "Submit Enquiry"}
            <span className="grid place-items-center h-9 w-9 rounded-full bg-bone text-gold transition-transform group-hover:rotate-45">↗</span>
          </button>

          <p className="text-ink/40 text-[11px] leading-relaxed font-mono">
            Submission of this form does not create a lawyer–client relationship. All information shared will be treated with discretion and reviewed by our team within two business days.
          </p>
        </form>
      </div>
    </section>
  );
};
