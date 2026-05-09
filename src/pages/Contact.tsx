import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Contact as ContactSection } from "@/components/site/Contact";

const ContactPage = () => (
  <PageShell hideNewsletter>
    <PageHero
      eyebrow="Contact"
      title="Retain"
      italic="counsel."
      subtitle="Initial consultations are confidential and conducted by a senior partner — never an intake associate."
    />
    <ContactSection />
  </PageShell>
);

export default ContactPage;
