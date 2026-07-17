import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { Nav } from "@/components/site/Nav";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";

export const PageShell = ({ children, hideNewsletter = false }: { children: ReactNode; hideNewsletter?: boolean }) => {
  const scope = useReveal();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div ref={scope} className="bg-ink text-bone min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        {children}
        {!hideNewsletter && <Newsletter />}
      </main>
      <Footer />
    </div>
  );
};
