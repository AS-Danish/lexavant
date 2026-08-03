import { PageShell } from "@/components/site/PageShell";
import { ThreeHero } from "@/components/about/ThreeHero";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { TimelineSection } from "@/components/about/TimelineSection";
import { TeamGrid } from "@/components/about/TeamGrid";
import { ValuesStack } from "@/components/about/ValuesStack";
import { StatsAndCTA } from "@/components/about/StatsAndCTA";

const AboutPage = () => {
  return (
    <PageShell>
      <ThreeHero />
      <PhilosophySection />
      <TimelineSection />
      <TeamGrid />
      <ValuesStack />
      <StatsAndCTA />
    </PageShell>
  );
};

export default AboutPage;
