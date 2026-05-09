import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Services as ServicesSection } from "@/components/site/Services";
import { LegalCare } from "@/components/site/LegalCare";

const ServicesPage = () => (
  <PageShell>
    <PageHero
      eyebrow="Practice Areas"
      title="Six disciplines."
      italic="One standard."
      subtitle="Each practice group is led by a senior partner with at least two decades in their specialty."
    />
    <ServicesSection />
    <LegalCare />
  </PageShell>
);

export default ServicesPage;
