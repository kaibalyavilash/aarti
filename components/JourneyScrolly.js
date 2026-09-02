"use client";

import { useEffect, useRef, useState } from "react";

const ERAS = [
  {
    badge: "1979",
    phase: "Founded",
    title: "A Single Steel Plant, One Ambition",
    description:
      "Aarti Group began operations in 1979, laying the foundation for what would grow into steel, textiles, healthcare and scrap-recycling ventures — anchored by a single carbon and alloy steel plant in Cuttack, Odisha.",
    image: "https://images.unsplash.com/photo-1569950044518-fa4f3f19a888?w=1400&q=70&auto=format&fit=crop",
  },
  {
    badge: "1980s–2010s",
    phase: "Growth",
    title: "Decades of Vertical Integration",
    description:
      "Iron-making, ferro alloy and power divisions were built out one by one, turning a single mill into an integrated supply chain — while our quality systems earned ISO accreditation along the way.",
    image: "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?w=1400&q=70&auto=format&fit=crop",
  },
  {
    badge: "Today",
    phase: "Cuttack Plant",
    title: "44 Years In, Still Vertically Integrated",
    description:
      "An ISO- and IATF-accredited facility producing carbon and alloy steel, ferro alloys and wire rods — part of a ₹4500 crore Aarti Group turnover, tested in-house on every batch that leaves the plant.",
    image: "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?w=1400&q=70&auto=format&fit=crop",
  },
  {
    badge: "Ongoing",
    phase: "Scrap-First",
    title: "Rebuilding the Feedstock Mix",
    description:
      "We're shifting our charge mix toward recycled scrap and away from virgin ore — a 70% scrap, 30% DRI route through our Electric Arc Furnace that cuts emissions per tonne without cutting corners.",
    image: "https://images.unsplash.com/photo-1745377881072-fa978cac245a?w=1400&q=70&auto=format&fit=crop",
  },
  {
    badge: "Ahead",
    phase: "Roadmap",
    title: "90 MW Today, Cleaner Tomorrow",
    description:
      "90 MW of captive AFBC and CFBC power generation runs the plant today, with smart-grid monitoring and cleaner energy technologies under evaluation for what comes next.",
    image: "https://images.unsplash.com/photo-1745448797901-2a4c9d9af1c1?w=1400&q=70&auto=format&fit=crop",
  },
];

export default function JourneyScrolly() {
  const [active, setActive] = useState(0);
  const panelRefs = useRef([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = panelRefs.current.indexOf(entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    panelRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function goTo(i) {
    const el = panelRefs.current[i];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="journey-scrolly">
      <aside className="js-sidebar">
        {ERAS.map((era, i) => (
          <button
            key={era.badge}
            className={`js-side-item ${i === active ? "active" : ""}`}
            onClick={() => goTo(i)}
          >
            <span className="js-side-badge">{era.badge}</span>
            <span className="js-side-phase">{era.phase}</span>
          </button>
        ))}
      </aside>

      <div className="js-panels">
        {ERAS.map((era, i) => (
          <section
            key={era.badge}
            ref={(el) => (panelRefs.current[i] = el)}
            className="js-panel"
          >
            <div className="js-panel-text">
              <div className="js-panel-badge">{era.badge}</div>
              <h2>{era.title}</h2>
              <p>{era.description}</p>
            </div>
            <div className="js-panel-photo">
              <img src={era.image} alt={era.title} loading="lazy" />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
