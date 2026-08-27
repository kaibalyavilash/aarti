import Link from "next/link";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="logo">
              <img src={`${BASE_PATH}/aarti-logo.png`} alt="Aarti Steel" className="logo-img" />
            </Link>
            <p>
              Carbon and alloy steel manufacturer in Cuttack, Odisha —
              supplying special steel, ferro alloys and wire rods to India's
              auto, defence, energy and rail industries since 1979.
            </p>
          </div>

          <div className="foot-col">
            <h5>Products</h5>
            <ul>
              <li><Link href="/products/special-steel">Special Steel</Link></li>
              <li><Link href="/products/iron-making">Iron Making</Link></li>
              <li><Link href="/products/ferro-alloy">Ferro Alloy</Link></li>
              <li><Link href="/products/round-bars">Round Bars</Link></li>
              <li><Link href="/products/wire-rods">Wire Rods</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/circularity">Circularity</Link></li>
              <li><Link href="/infrastructure">Infrastructure</Link></li>
              <li><Link href="/csr">EHS &amp; CSR</Link></li>
              <li><Link href="/our-clients">Our Clients</Link></li>
              <li><Link href="/sell-us">Sell To Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:contact@aartisteelsltd.com">contact@aartisteelsltd.com</a></li>
              <li><a href="tel:+916717161000">+91-671-7161000</a></li>
              <li><a href="https://www.linkedin.com/company/aartisteelsltd/">LinkedIn</a></li>
              <li><Link href="/contact">Get In Touch</Link></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <p>© 2026 Aarti Steel. All rights reserved.</p>
          <p>
            <a href="#">Terms &amp; Conditions</a> &nbsp;·&nbsp;{" "}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
