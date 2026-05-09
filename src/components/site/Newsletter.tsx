import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email" }).max(255),
});

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    // Stored locally — wire to backend when Lovable Cloud is enabled.
    try {
      const list = JSON.parse(localStorage.getItem("lexavant:newsletter") || "[]");
      if (!list.includes(parsed.data.email)) list.push(parsed.data.email);
      localStorage.setItem("lexavant:newsletter", JSON.stringify(list));
      toast.success("Subscribed. Look for The Lexavant Brief in your inbox.");
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" className="relative bg-graphite text-bone py-24 md:py-32 overflow-hidden">
      <div className="container grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-silver mb-6" data-reveal>
            <span className="h-px w-8 bg-gold" /> The Lexavant Brief
          </div>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.05] text-bone" data-reveal>
            Quarterly counsel,
            <span className="italic text-gold-soft"> delivered with discretion.</span>
          </h2>
          <p className="mt-6 text-bone/70 leading-relaxed max-w-md" data-reveal>
            Regulatory shifts, landmark decisions, and considered analysis from our partners. No noise. No promotional clutter.
          </p>
        </div>
        <form onSubmit={onSubmit} className="lg:col-span-6 lg:pl-10" data-reveal noValidate>
          <label htmlFor="newsletter-email" className="block font-mono text-[10px] uppercase tracking-[0.25em] text-silver mb-3">
            Subscribe
          </label>
          <div className="flex flex-col sm:flex-row gap-3 border-b border-bone/25 pb-3">
            <input
              id="newsletter-email"
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="counsel@yourdomain.com"
              className="flex-1 bg-transparent text-bone placeholder:text-bone/40 outline-none font-serif text-lg py-2"
            />
            <button
              type="submit"
              disabled={loading}
              className="font-mono text-[11px] uppercase tracking-[0.2em] bg-gold text-ink px-6 py-3 rounded-full hover:bg-bone transition-colors duration-500 disabled:opacity-60"
            >
              {loading ? "Subscribing…" : "Join the Brief"}
            </button>
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/45">
            One email per quarter · Unsubscribe anytime
          </p>
        </form>
      </div>
    </section>
  );
};
