import { useReveal } from "@/hooks/useReveal";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Newsletter } from "@/components/site/Newsletter";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  const scope = useReveal();

  return (
    <div ref={scope} className="bg-ink text-bone min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Services />
        
        {/* Ethos Statement Section */}
        <section className="bg-ink text-bone py-24 border-y border-bone/10">
          <div className="container text-center">
            <h2 className="font-serif text-3xl md:text-5xl max-w-4xl mx-auto leading-[1.2] italic gradient-gold-text">
              “Built on foresight, strategy, precision, and an uncompromising standard of counsel.”
            </h2>
          </div>
        </section>

        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
