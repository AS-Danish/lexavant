import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactLenis, useLenis } from "lenis/react";

import { DisclaimerModal } from "@/components/site/DisclaimerModal";
import { PageReveal } from "@/components/PageReveal";
import { CustomCursor } from "@/components/CustomCursor";
import { GlobalScrollAnimations } from "@/components/GlobalScrollAnimations";
import { ScrollToTopButton } from "@/components/site/ScrollToTopButton";

import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Careers from "./pages/Careers.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import Litigation from "./pages/Litigation.tsx";
import Corporate from "./pages/Corporate.tsx";
import TechnologyMedia from "./pages/TechnologyMedia.tsx";
import DataPrivacy from "./pages/DataPrivacy.tsx";
import KnowledgeHub from "./pages/KnowledgeHub.tsx";
import Team from "./pages/Team.tsx";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    // Disable browser's default scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
        <CustomCursor />
        <PageReveal />
        <Toaster />
        <Sonner />
        <DisclaimerModal />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <ScrollToTopButton />
          <GlobalScrollAnimations />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas/litigation-and-dispute-resolution" element={<Litigation />} />
            <Route path="/practice-areas/corporate-ma-private-client-securities-law" element={<Corporate />} />
            <Route path="/practice-areas/technology-media-entertainment-gaming" element={<TechnologyMedia />} />
            <Route path="/practice-areas/data-privacy" element={<DataPrivacy />} />
            <Route path="/knowledge-hub" element={<KnowledgeHub />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ReactLenis>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
