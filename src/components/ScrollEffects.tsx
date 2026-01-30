"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-enabled");

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    revealTargets.forEach((target) => revealObserver.observe(target));

    const parallaxTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );

    const handleScroll = () => {
      const scrollY = window.scrollY;
      root.style.setProperty("--scroll-y", `${scrollY}px`);
      parallaxTargets.forEach((element) => {
        const speed = Number(element.dataset.parallax ?? "0.05");
        element.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      root.classList.remove("js-enabled");
    };
  }, []);

  return null;
}
