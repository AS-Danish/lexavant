import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { LegalCare as LegalCareSection } from "@/components/site/LegalCare";

const LegalCarePage = () => (
  <PageShell>
    <PageHero
      eyebrow="Legal Care"
      title="Discreet counsel"
      italic="for personal matters."
      subtitle="Family, immigration, employment, and private affairs — handled with the same rigor as our institutional work."
    />
    <LegalCareSection />
  </PageShell>
);

export default LegalCarePage;
