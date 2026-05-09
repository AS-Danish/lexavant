import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { About as AboutSection } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { LogoMarquee } from "@/components/site/LogoMarquee";

const AboutPage = () => (
  <PageShell>
    <PageHero
      eyebrow="About — Est. 1986"
      title="Forty years of"
      italic="quiet consequence."
      subtitle="A firm built on conviction, discretion, and decisive results — across litigation, corporate, advisory, and estate matters."
    />
    <LogoMarquee />
    <AboutSection />
    <Testimonials />
  </PageShell>
);

export default AboutPage;
