import { useReveal } from "@/hooks/useReveal";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Courtroom } from "@/components/site/Courtroom";
import { Lawyers } from "@/components/site/Lawyers";
import { LegalCare } from "@/components/site/LegalCare";
import { Advisory } from "@/components/site/Advisory";
import { Testimonials } from "@/components/site/Testimonials";
import { Careers } from "@/components/site/Careers";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  const scope = useReveal();

  return (
    <div ref={scope} className="bg-bone text-ink min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <About />
        <Services />
        <Courtroom />
        <Lawyers />
        <LegalCare />
        <Advisory />
        <Testimonials />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
