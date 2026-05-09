import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Advisory as AdvisorySection } from "@/components/site/Advisory";

const AdvisoryPage = () => (
  <PageShell>
    <PageHero
      eyebrow="Financial Advisory"
      title="Capital, regulation,"
      italic="and consequence."
      subtitle="Strategic guidance for funds, family offices, and institutions navigating regulatory complexity."
    />
    <AdvisorySection />
  </PageShell>
);

export default AdvisoryPage;
