"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/nav";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
    setOpenIndex(null);
  }, [pathname]);

  // Reflect menu state on <body> so the existing CSS (body.mobile-open) applies
  useEffect(() => {
    document.body.classList.toggle("mobile-open", mobileOpen);
  }, [mobileOpen]);

  function handleTopLevelClick(e, item, index) {
    // On mobile, a link with a submenu should expand/collapse instead of navigating.
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 1460;
    if (item.sub && isMobile) {
      e.preventDefault();
      setOpenIndex(openIndex === index ? null : index);
    } else {
      setMobileOpen(false);
    }
  }

  return (
    <header>
      <div className="nav">
        <Link href="/" className="logo">
          <img src={`${BASE_PATH}/aarti-logo.png`} alt="Aarti Steel" className="logo-img" />
          <span className="sub">Special &amp; Alloy Steel</span>
        </Link>

        <nav className="mainnav">
          <ul>
            {NAV_ITEMS.map((item, i) => (
              <li
                key={item.label}
                className={`${openIndex === i ? "open" : ""} ${item.cta ? "navcta-item" : ""}`}
              >
                <Link href={item.href} onClick={(e) => handleTopLevelClick(e, item, i)}>
                  {item.label} {item.sub && <span className="care">▾</span>}
                </Link>
                {item.sub && (
                  <ul className="dropdown">
                    {item.sub.map((s) => (
                      <li key={s.label}>
                        <Link href={s.href} onClick={() => setMobileOpen(false)}>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="navtoggle"
          aria-label="Menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
