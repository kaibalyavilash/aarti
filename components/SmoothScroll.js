"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll() {
  const lenisRef = useRef(null);
  const pathname = usePathname();

  // One-time setup: create the Lenis instance and drive its raf loop for
  // the lifetime of the app shell (layout.js mounts this once).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Same-page hash links (e.g. header dropdown items) still need an
    // explicit scrollTo so they land smoothly instead of snapping.
    function handleAnchorClick(e) {
      const anchor = e.target.closest('a[href*="#"]');
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;
      const target = document.querySelector(url.hash);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -96 });
    }
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // After every client-side route change, honor a hash already present in
  // the URL (e.g. navigating from another page straight to /about#values).
  useEffect(() => {
    if (!window.location.hash) return;
    const id = requestAnimationFrame(() => {
      const target = document.querySelector(window.location.hash);
      if (!target) return;
      if (lenisRef.current) lenisRef.current.scrollTo(target, { offset: -96, immediate: true });
      else target.scrollIntoView();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
