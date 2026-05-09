import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Lawyers } from "@/components/site/Lawyers";

const CounselPage = () => (
  <PageShell>
    <PageHero
      eyebrow="Counsel"
      title="The partners"
      italic="behind the work."
      subtitle="Senior trial lawyers, transactional architects, and advisory minds — selected for judgment, sharpened by experience."
    />
    <Lawyers />
  </PageShell>
);

export default CounselPage;
