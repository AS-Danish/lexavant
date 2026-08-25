import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const InnerPageMotion = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (pathname === "/" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeout = window.setTimeout(() => {
      const cleanups: Array<() => void> = [];
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".kinetic-token").forEach((token, index) => {
          gsap.to(token, {
            yPercent: index % 2 === 0 ? -16 : 13,
            xPercent: index % 3 === 0 ? 5 : -3,
            rotate: index % 2 === 0 ? -1.2 : 0.8,
            ease: "none",
            scrollTrigger: {
              trigger: ".page-hero",
              start: "top top",
              end: "bottom top",
              scrub: 0.7,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-horizontal-scroll]").forEach((track) => {
          const section = track.closest("section") as HTMLElement | null;
          if (!section) return;

          ScrollTrigger.matchMedia({
            "(min-width: 1024px)": () => {
              const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 48);
              const tween = gsap.to(track, {
                x: () => -distance(),
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top top",
                  end: () => `+=${Math.max(distance(), window.innerWidth * 0.75)}`,
                  pin: true,
                  scrub: 0.75,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                },
              });
              return () => tween.kill();
            },
          });
        });
      });

      const cards = document.querySelectorAll<HTMLElement>("[data-depth-card]");
      cards.forEach((card) => {
        const move = (event: PointerEvent) => {
          if (event.pointerType === "touch") return;
          const rect = card.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width - 0.5;
          const py = (event.clientY - rect.top) / rect.height - 0.5;
          card.style.setProperty("--rx", `${py * -7}deg`);
          card.style.setProperty("--ry", `${px * 9}deg`);
          card.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
          card.style.setProperty("--my", `${(py + 0.5) * 100}%`);
        };
        const reset = () => {
          card.style.setProperty("--rx", "0deg");
          card.style.setProperty("--ry", "0deg");
        };
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", reset);
        cleanups.push(() => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", reset);
        });
      });

      ScrollTrigger.refresh();
      cleanups.push(() => ctx.revert());
      (window as Window & { __lexavantMotionCleanup?: () => void }).__lexavantMotionCleanup = () => cleanups.forEach((cleanup) => cleanup());
    }, 260);

    return () => {
      window.clearTimeout(timeout);
      (window as Window & { __lexavantMotionCleanup?: () => void }).__lexavantMotionCleanup?.();
      delete (window as Window & { __lexavantMotionCleanup?: () => void }).__lexavantMotionCleanup;
    };
  }, [pathname]);

  return null;
};
