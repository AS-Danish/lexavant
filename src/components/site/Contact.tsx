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
        description: "A partner will contact you within one business day.",
      });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="bg-ink text-bone py-28 md:py-40 grain relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-gradient-vignette" />
      <div className="container relative grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/50 mb-6" data-reveal>
            <span className="h-px w-8 bg-gold" /> 09 — Retain Counsel
          </div>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]" data-reveal>
            Begin with a
            <span className="italic gradient-gold-text"> conversation.</span>
          </h2>
          <p className="mt-8 text-bone/65 leading-relaxed max-w-md" data-reveal>
            All initial consultations are confidential and complimentary. We respond to every inquiry personally, within
            one business day.
          </p>

          <dl className="mt-12 space-y-6" data-stagger>
            {[
              { k: "Boston HQ", v: "100 Federal Street, Suite 4100" },
              { k: "Direct", v: "+1 (617) 555 — 0142" },
              { k: "Confidential", v: "counsel@lexavant.law" },
              { k: "Hours", v: "Mon — Fri · 08:00 — 19:00 ET" },
            ].map((d) => (
              <div key={d.k} data-stagger-item className="flex items-baseline gap-6 border-t border-bone/15 pt-4">
                <dt className="w-28 shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-gold">{d.k}</dt>
                <dd className="font-serif text-lg">{d.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-6 lg:col-start-7 space-y-8" data-reveal>
          {[
            { id: "name", label: "Full Name", type: "text" },
            { id: "email", label: "Email Address", type: "email" },
            { id: "phone", label: "Telephone", type: "tel" },
            { id: "matter", label: "Nature of Matter", type: "text" },
          ].map((f) => (
            <div key={f.id} className="group">
              <label htmlFor={f.id} className="block font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 mb-2">
                {f.label}
              </label>
              <input
                required
                id={f.id}
                name={f.id}
                type={f.type}
                className="w-full bg-transparent border-b border-bone/25 focus:border-gold py-3 text-bone placeholder-bone/30 outline-none transition-colors duration-500 font-serif text-lg"
              />
            </div>
          ))}

          <div>
            <label htmlFor="msg" className="block font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 mb-2">
              Brief Description
            </label>
            <textarea
              id="msg"
              name="msg"
              rows={4}
              className="w-full bg-transparent border-b border-bone/25 focus:border-gold py-3 text-bone placeholder-bone/30 outline-none transition-colors duration-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gold text-ink rounded-full pl-8 pr-3 py-3 font-mono text-xs uppercase tracking-[0.2em] hover:bg-bone transition-all duration-500 disabled:opacity-60"
          >
            {sending ? "Submitting…" : "Submit Inquiry"}
            <span className="grid place-items-center h-9 w-9 rounded-full bg-ink text-gold transition-transform group-hover:rotate-45">
              ↗
            </span>
          </button>

          <p className="text-bone/40 text-xs leading-relaxed font-mono">
            By submitting, you acknowledge that no attorney-client relationship is formed until a written engagement is executed.
          </p>
        </form>
      </div>
    </section>
  );
};
