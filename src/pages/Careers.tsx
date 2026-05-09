import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Careers as CareersSection } from "@/components/site/Careers";

const CareersPage = () => (
  <PageShell>
    <PageHero
      eyebrow="Careers"
      title="Build a practice"
      italic="that outlasts you."
      subtitle="We hire fewer associates than peer firms — and invest disproportionately in those we do."
    />
    <CareersSection />
  </PageShell>
);

export default CareersPage;
