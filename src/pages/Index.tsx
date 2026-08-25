import { useReveal } from "@/hooks/useReveal";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Newsletter } from "@/components/site/Newsletter";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import featuredVideo from "@/assets/hero2.mp4";
const Index = () => {
  const scope = useReveal();

  return (
    <div ref={scope} className="modern-shell bg-bone text-ink min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Services />
        
        {/* Featured Video Gap */}
        <section className="bg-bone w-full border-t border-ink/10">
          <div className="w-full aspect-video md:aspect-[21/9] bg-ink/5 relative overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              data-parallax="0.35"
              className="absolute -inset-y-[12%] inset-x-0 w-full h-[124%] object-cover grayscale opacity-90 pointer-events-none scale-105"
            >
              <source src={featuredVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </section>
        
        {/* Ethos Statement Section */}
        <section className="bg-bone text-ink py-24 border-y border-ink/10">
          <div className="container text-center">
            <h2 className="font-serif text-4xl md:text-6xl max-w-5xl mx-auto leading-[1.08] italic gradient-gold-text tracking-[-0.04em]">
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
