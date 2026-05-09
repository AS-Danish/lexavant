import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Courtroom as CourtroomSection } from "@/components/site/Courtroom";

const CourtroomPage = () => (
  <PageShell>
    <PageHero
      eyebrow="The Courtroom"
      title="Where matters"
      italic="are decided."
      subtitle="A trial-tested practice with appearances in every federal circuit and the Supreme Court of the United States."
    />
    <CourtroomSection />
  </PageShell>
);

export default CourtroomPage;
