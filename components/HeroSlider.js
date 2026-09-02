"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import CircularLoop from "./CircularLoop";

const SLIDES = [
  {
    key: "slide-1",
    image: "https://images.unsplash.com/photo-1569950044518-fa4f3f19a888?w=1920&q=70&auto=format&fit=crop",
    eyebrow: "Cuttack, Odisha — Steelmaking since 1979",
    heading: (
      <>
        Steel forged for a <em>lower-carbon</em> world.
      </>
    ),
    lead: "Four decades supplying carbon and alloy steel to India's auto, defence, energy and rail industries — now rebuilt around scrap, renewable power and hydrogen.",
    ctas: [
      { href: "/about", label: "About Aarti Steel →", variant: "primary" },
      { href: "/products", label: "Browse products", variant: "ghost" },
    ],
  },
  {
    key: "slide-2",
    image: "https://images.unsplash.com/photo-1745377881072-fa978cac245a?w=1920&q=70&auto=format&fit=crop",
    eyebrow: "Circular by design",
    heading: (
      <>
        Scrap in, <em>steel</em> out — nothing wasted.
      </>
    ),
    lead: "Our Electric Arc Furnace route runs on recycled scrap, cutting virgin ore dependence and slashing emissions per tonne versus primary steelmaking.",
    ctas: [
      { href: "/circularity", label: "Explore the circular loop →", variant: "primary" },
      { href: "/about", label: "About Aarti Steel", variant: "ghost" },
    ],
    visual: true,
  },
  {
    key: "slide-3",
    image: "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?w=1920&q=70&auto=format&fit=crop",
    eyebrow: "Vertically integrated",
    heading: (
      <>
        Iron, alloys and power under <em>one roof.</em>
      </>
    ),
    lead: "Iron-making, ferro alloys, oxygen and captive power — seven divisions working as one supply chain out of our Cuttack facility.",
    ctas: [
      { href: "/products", label: "See our divisions →", variant: "primary" },
      { href: "/infrastructure", label: "Infrastructure", variant: "ghost" },
    ],
  },
  {
    key: "slide-4",
    image: "https://images.unsplash.com/photo-1745448797901-2a4c9d9af1c1?w=1920&q=70&auto=format&fit=crop",
    eyebrow: "We're hiring",
    heading: (
      <>
        Build the next chapter <em>with us.</em>
      </>
    ),
    lead: "From project engineering to plant operations — join the team running one of eastern India's most established steel supply chains.",
    ctas: [
      { href: "/careers", label: "View open roles →", variant: "primary" },
      { href: "/csr", label: "EHS & sustainability", variant: "ghost" },
    ],
  },
  {
    key: "slide-5",
    image: "https://images.unsplash.com/photo-1639772823907-a716be4bdecc?w=1920&q=70&auto=format&fit=crop",
    eyebrow: "Trusted since 1979",
    heading: (
      <>
        Built for buyers who <em>can't afford</em> surprises.
      </>
    ),
    lead: "In-house spectrometry, tensile and hardness testing on every batch — with a six-decade sourcing relationship behind it.",
    ctas: [
      { href: "/contact", label: "Request a quote →", variant: "primary" },
      { href: "/applications", label: "Where our steel goes", variant: "ghost" },
    ],
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const show = useCallback((n) => {
    setIndex(((n % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  const play = useCallback(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 6000);
  }, []);

  useEffect(() => {
    play();
    return () => clearInterval(timerRef.current);
  }, [play]);

  function handleManual(fn) {
    fn();
    play();
  }

  return (
    <section className="hero-slider">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.key}
          className={`slide ${slide.key} ${i === index ? "active" : ""}`}
        >
          <div
            className="slide-bg"
            style={{ "--slide-img": `url('${slide.image}')` }}
          />
          <div className="wrap slide-content">
            <div className={slide.visual ? "slide-split" : ""}>
              <div className="slide-text">
                <div className="eyebrow">{slide.eyebrow}</div>
                <h1>{slide.heading}</h1>
                <p className="lead">{slide.lead}</p>
                <div className="slide-cta">
                  {slide.ctas.map((cta) => (
                    <Link
                      key={cta.label}
                      href={cta.href}
                      className={`btn btn-${cta.variant}`}
                    >
                      {cta.label}
                    </Link>
                  ))}
                </div>
              </div>
              {slide.visual && <CircularLoop />}
            </div>
          </div>
        </div>
      ))}

      <div className="slider-controls">
        <div className="wrap">
          <div className="slider-dots">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.key}
                className={`sdot ${i === index ? "active" : ""}`}
                aria-label={`Slide ${i + 1}`}
                onClick={() => handleManual(() => show(i))}
              />
            ))}
          </div>
          <div className="slider-arrows">
            <button
              className="sarrow prev"
              aria-label="Previous slide"
              onClick={() => handleManual(() => show(index - 1))}
            >
              ←
            </button>
            <button
              className="sarrow next"
              aria-label="Next slide"
              onClick={() => handleManual(() => show(index + 1))}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
