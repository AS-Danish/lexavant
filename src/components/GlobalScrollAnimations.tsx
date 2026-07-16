import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GlobalScrollAnimations = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait for the DOM and possible route transitions
    const timeout = setTimeout(() => {
      // Re-evaluate ScrollTriggers for new route
      ScrollTrigger.refresh();
      
      const ctx = gsap.context(() => {
        // Fade up for paragraphs, list items, and cards (excluding hero and navbar)
        const fadeElements = gsap.utils.toArray<HTMLElement>('section:not(#top) p, section:not(#top) li, section:not(#top) .card, footer:not(#top) p');
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
        const textElements = gsap.utils.toArray<HTMLElement>('section:not(#top) h1, section:not(#top) h2, section:not(#top) h3, footer h2');
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
        const imgElements = gsap.utils.toArray<HTMLElement>('section:not(#top) img:not([alt*="Lexavant"])');
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

      return () => ctx.revert();
    }, 200); // 200ms delay to let react-router DOM paint

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};
