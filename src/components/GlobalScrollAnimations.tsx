import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GlobalScrollAnimations = () => {
  const { pathname } = useLocation();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progress = progressRef.current;
    const updateProgress = () => {
      if (!progress) return;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${distance > 0 ? Math.min(window.scrollY / distance, 1) : 0})`;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => {
        window.removeEventListener("scroll", updateProgress);
        window.removeEventListener("resize", updateProgress);
      };
    }
    let ctx: gsap.Context | undefined;
    // Wait for the DOM and possible route transitions
    const timeout = setTimeout(() => {
      // Re-evaluate ScrollTriggers for new route
      ScrollTrigger.refresh();
      
      ctx = gsap.context(() => {
        // Fade up for paragraphs, list items, and cards (excluding hero and navbar)
        const fadeElements = gsap.utils.toArray<HTMLElement>('section:not(#top):not(.page-hero) p, section:not(#top):not(.page-hero) li, section:not(#top):not(.page-hero) .card, footer:not(#top) p');
        fadeElements.forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0,
              duration: 1, ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true
              }
            }
          );
        });

        // For headlines (slide up line by line)
        const textElements = gsap.utils.toArray<HTMLElement>('section:not(#top):not(.page-hero) h1, section:not(#top):not(.page-hero) h2, section:not(#top):not(.page-hero) h3, footer h2');
        textElements.forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0,
              duration: 1, ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                once: true
              }
            }
          );
        });

        // Image wipe open top-to-bottom
        const imgElements = gsap.utils.toArray<HTMLElement>('section:not(#top):not(.page-hero) img:not([alt*="Lexavant"])');
        imgElements.forEach((el) => {
          gsap.fromTo(el,
            { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 1.4, ease: "expo.inOut",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true
              }
            }
          );
        });
      });

    }, 200); // 200ms delay to let react-router DOM paint

    return () => {
      clearTimeout(timeout);
      ctx?.revert();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-[2px] bg-transparent" aria-hidden>
      <div ref={progressRef} className="h-full origin-left scale-x-0 bg-gradient-to-r from-gold-deep via-gold to-gold-soft shadow-[0_0_14px_hsl(var(--gold)/0.55)]" />
    </div>
  );
};
