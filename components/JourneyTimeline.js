"use client";

import { useRef, useState } from "react";

const MILESTONES = [
  {
    badge: "1979",
    title: "Aarti Group Founded",
    description:
      "Started operations that would grow into steel, textiles, healthcare and scrap-recycling ventures.",
  },
  {
    badge: "1980s–2010s",
    title: "Decades of Growth",
    description:
      "Built out our iron-making, ferro alloy and power divisions, and earned ISO accreditation for our quality systems.",
  },
  {
    badge: "2026",
    title: "Cuttack Plant, Today",
    description:
      "ISO- and IATF-accredited facility producing carbon and alloy steel, ferro alloys, wire rods and more, part of a ₹4500 crore Aarti Group turnover.",
  },
  {
    badge: "Ongoing",
    title: "Scrap-First, EAF-First Sourcing",
    description:
      "Shifting feedstock mix toward recycled scrap to cut virgin ore dependence and emissions per tonne.",
  },
  {
    badge: "Ahead",
    title: "Renewable & Efficiency Roadmap",
    description:
      "90 MW of captive AFBC and CFBC power generation today, with smart-grid monitoring and cleaner energy technologies under evaluation.",
  },
];

export default function JourneyTimeline() {
  const [active, setActive] = useState(2);
  const scrollRef = useRef(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  function onPointerDown(e) {
    const el = scrollRef.current;
    if (!el) return;
    drag.current = {
      down: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
    };
    el.classList.add("dragging");
  }

  function onPointerMove(e) {
    const el = scrollRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  }

  function endDrag() {
    const el = scrollRef.current;
    drag.current.down = false;
    if (el) el.classList.remove("dragging");
  }

  function nudge(dir) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <section className="section tight alt-bg" id="journey">
      <div className="wrap">
        <div className="section-head center reveal">
          <div className="eyebrow">Our journey</div>
          <h2>Four decades, one timeline.</h2>
          <p>A timeline of milestones, growth and where we're headed next.</p>
        </div>
      </div>

      <div className="journey-band reveal">
        <div
          className="journey-scroll"
          ref={scrollRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          <div className="journey-track">
            {MILESTONES.map((m, i) => {
              const isUp = i % 2 === 0;
              const isActive = active === i;
              const content = (
                <>
                  <div className="jt-card-badge">{m.badge}</div>
                  <h4>{m.title}</h4>
                  <p>{m.description}</p>
                </>
              );
              return (
                <div
                  key={m.title}
                  className={`jt-node ${isActive ? "active" : ""}`}
                >
                  <div className="jt-slot jt-slot-top">
                    {isUp && (isActive ? (
                      <div className="jt-card up">{content}</div>
                    ) : (
                      <div className="jt-label">{m.title}</div>
                    ))}
                  </div>
                  <div className="jt-dot-row">
                    <button
                      type="button"
                      className="jt-dot"
                      onClick={() => {
                        if (!drag.current.moved) setActive(i);
                      }}
                    >
                      {m.badge}
                    </button>
                  </div>
                  <div className="jt-slot jt-slot-bottom">
                    {!isUp && (isActive ? (
                      <div className="jt-card down">{content}</div>
                    ) : (
                      <div className="jt-label">{m.title}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="journey-arrows">
          <button
            type="button"
            className="sarrow prev"
            aria-label="Scroll timeline left"
            onClick={() => nudge(-1)}
          >
            ←
          </button>
          <button
            type="button"
            className="sarrow next"
            aria-label="Scroll timeline right"
            onClick={() => nudge(1)}
          >
            →
          </button>
        </div>
        <div className="journey-hint">Drag, scroll or use the arrows to explore</div>
      </div>
    </section>
  );
}
