"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const textNode = el.childNodes[0];
  if (!target || !textNode) return;
  const match = textNode.nodeValue.match(/^(\D*)(\d+)/);
  const prefix = match ? match[1] : "";
  const duration = 1100;
  const start = performance.now();
  el.classList.add("counting");
  textNode.nodeValue = prefix + "0";
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    textNode.nodeValue = prefix + Math.round(target * eased);
    if (p < 1) {
      requestAnimationFrame(tick);
    } else {
      el.classList.remove("counting");
    }
  }
  requestAnimationFrame(tick);
}

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion =
      "matchMedia" in window &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Re-scan for .reveal elements every time the route changes, since
    // each page's content is rendered fresh.
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            if (!reduceMotion) {
              entry.target
                .querySelectorAll(".num[data-count]")
                .forEach((el) => animateCount(el));
            }
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
