import { useState, useRef } from "react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { useToast } from "@/hooks/use-toast";

const roles = [
  {
    id: "lit-associate-mum",
    title: "Associate – Litigation",
    location: "Mumbai",
    type: "Full-Time",
  },
  {
    id: "corp-associate-mum",
    title: "Associate – Corporate",
    location: "Mumbai",
    type: "Full-Time",
  }
];

export default function CareersPage() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(null);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Application received.",
        description: "Our recruitment team will review your application and be in touch.",
      });
      (e.target as HTMLFormElement).reset();
      setFileName(null);
    }, 1200);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Careers"
        title="Careers at"
        italic="Lexavant."
        subtitle="We are a firm built on rigour, judgment, and a commitment to doing the work properly. We look for lawyers and professionals who share those values and who want to build a practice of consequence."
      />
      
      <section className="bg-ink py-24 border-b border-bone/10">
        <div className="container grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-bone mb-6">Opening Statement</h2>
              <div className="space-y-4 text-bone/75 leading-relaxed text-lg">
                <p>
                  At Lexavant, associates and junior professionals are expected to contribute substantively from an early stage. You will work alongside senior advocates and partners on live matters, develop your own areas of expertise, and be given the opportunity to grow in an environment that takes professional development seriously.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-bone mb-6">What We Look For</h2>
              <ul className="space-y-4 text-bone/75 leading-relaxed text-lg list-disc pl-5">
                <li>Academic excellence and strong legal reasoning.</li>
                <li>A willingness to take ownership of work and follow it through to completion.</li>
                <li>Intellectual curiosity and the discipline to research and write with precision.</li>
                <li>Commercial awareness, i.e., an understanding that legal advice exists in service of a client's real-world objective.</li>
                <li>Integrity and discretion. The ability to handle sensitive matters with maturity.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-bone mb-6">Who We Hire</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl text-gold mb-2">Associate & Senior Associate Roles</h3>
                  <p className="text-bone/75 leading-relaxed text-lg">We recruit qualified advocates and solicitors with one to seven years of post-enrolment experience across our principal practice areas including litigation and disputes, general corporate, M&A, banking and finance, technology, data protection, media & entertainment, and private client.</p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-gold mb-2">Internships & Training</h3>
                  <p className="text-bone/75 leading-relaxed text-lg">We offer structured internship programmes for penultimate and final year law students, as well as recent graduates. Internships at Lexavant are substantive, i.e., you will work on live matters under close supervision and leave with practical skills and a real understanding of the firm’s practice.</p>
                  <p className="text-bone/75 leading-relaxed text-lg mt-2">Internship applications are accepted on a rolling basis. We typically host interns for periods of four to eight weeks.</p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-gold mb-2">Lateral Hires</h3>
                  <p className="text-bone/75 leading-relaxed text-lg">We are always open to conversations with experienced practitioners who are looking to join a firm with a strong practice and a clear sense of direction. Please reach out to us directly.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-bone mb-6">Life At The Firm</h2>
              <p className="text-bone/75 leading-relaxed text-lg">
                Lexavant is a firm where quality of work and quality of environment are equally important to us. We expect rigour, commitment, and intellectual honesty. In return, we offer meaningful work, access to senior practitioners, genuine responsibility, and a culture that values directness and mutual respect.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-bone mb-6">How To Apply</h2>
              <p className="text-bone/75 leading-relaxed text-lg">
                Applications should be sent to <strong>careers@lexavant.com</strong> with the subject line: [Role] - [Your Name].<br/><br/>
                Please include: a current CV; a covering letter of no more than one page setting out your interest in Lexavant and the practice area you are applying to; and, for legal roles, a sample of your written work - a brief, memo, or research note.<br/><br/>
                We review applications as they arrive and will acknowledge receipt within five working days. We regret that we cannot respond individually to speculative applications that do not meet our current requirements.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-ink p-8 border border-bone/10 shadow-sm rounded-sm relative overflow-hidden text-bone sticky top-32">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-gold/10 to-transparent opacity-50 pointer-events-none" />
              <h2 className="font-serif text-2xl mb-2">Submit Application</h2>
              <p className="text-bone/60 mb-8 font-mono text-xs uppercase tracking-widest border-b border-bone/20 pb-6">Confidential Submission</p>
              
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 mb-2">Full Name</label>
                  <input required id="name" name="name" type="text" className="w-full bg-transparent border-b border-bone/20 focus:border-gold py-3 text-bone outline-none transition-colors duration-500 font-serif text-lg" />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 mb-2">Email Address</label>
                  <input required id="email" name="email" type="email" className="w-full bg-transparent border-b border-bone/20 focus:border-gold py-3 text-bone outline-none transition-colors duration-500 font-serif text-lg" />
                </div>
                
                <div className="group">
                  <label htmlFor="phone" className="block font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 mb-2">Phone Number</label>
                  <input required id="phone" name="phone" type="tel" className="w-full bg-transparent border-b border-bone/20 focus:border-gold py-3 text-bone outline-none transition-colors duration-500 font-serif text-lg" />
                </div>

                <div className="group">
                  <label htmlFor="position" className="block font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 mb-2">Role Applying For</label>
                  <select required id="position" name="position" className="w-full bg-transparent border-b border-bone/20 focus:border-gold py-3 text-bone outline-none transition-colors duration-500 font-serif text-lg appearance-none cursor-pointer">
                    <option value="" disabled selected className="text-bone">Select a role...</option>
                    <option value="Associate" className="text-bone">Associate</option>
                    <option value="Senior Associate" className="text-bone">Senior Associate</option>
                    <option value="Internship" className="text-bone">Internship</option>
                    <option value="Other" className="text-bone">Other</option>
                  </select>
                </div>
                
                <div className="group">
                  <label htmlFor="year" className="block font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 mb-2">Year of Enrolment / Graduation</label>
                  <input required id="year" name="year" type="text" className="w-full bg-transparent border-b border-bone/20 focus:border-gold py-3 text-bone outline-none transition-colors duration-500 font-serif text-lg" />
                </div>
                
                <div className="group">
                  <label htmlFor="practice" className="block font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 mb-2">Practice Area of Interest</label>
                  <input required id="practice" name="practice" type="text" className="w-full bg-transparent border-b border-bone/20 focus:border-gold py-3 text-bone outline-none transition-colors duration-500 font-serif text-lg" />
                </div>

                <div className="group border-b border-bone/20 focus-within:border-gold pb-3 transition-colors duration-500">
                  <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 mb-4">Upload CV [PDF]</label>
                  <div className="flex items-center gap-4">
                    <button 
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-gold text-ink px-5 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest hover:bg-bone hover:text-ink transition-colors"
                    >
                      Choose File
                    </button>
                    <span className="font-mono text-xs text-bone/60 truncate max-w-[150px]">
                      {fileName || "No file selected"}
                    </span>
                    <input 
                      required
                      ref={fileInputRef} 
                      type="file" 
                      id="cv" 
                      name="cv" 
                      accept=".pdf"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                <button type="submit" disabled={sending} className="group w-full inline-flex items-center justify-center gap-3 bg-gold text-ink rounded-full pl-8 pr-3 py-3 font-mono text-xs uppercase tracking-[0.2em] hover:bg-bone transition-all duration-500 disabled:opacity-60 mt-4">
                  {sending ? "Sending…" : "Submit Application"}
                  <span className="grid place-items-center h-9 w-9 rounded-full bg-ink text-gold transition-transform group-hover:rotate-45">↗</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
