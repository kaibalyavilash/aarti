export const NAV_ITEMS = [
  { label: "Home", href: "/", sub: null },
  {
    label: "About Us",
    href: "/about",
    sub: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "Our Journey", href: "/about/journey" },
      { label: "Values & Accreditation", href: "/about/values" },
      { label: "Locations", href: "/about/locations" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    sub: [
      { label: "Special Steel", href: "/products/special-steel" },
      { label: "Iron Making", href: "/products/iron-making" },
      { label: "Ferro Alloy", href: "/products/ferro-alloy" },
      { label: "Round Bars", href: "/products/round-bars" },
      { label: "Wire Rods", href: "/products/wire-rods" },
      { label: "Oxygen", href: "/products/oxygen" },
      { label: "Fly Ash By-Products", href: "/products/fly-ash" },
      { label: "Grade Range", href: "/products/grades" },
    ],
  },
  {
    label: "Applications",
    href: "/applications",
    sub: [
      { label: "Auto Components", href: "/applications/auto" },
      { label: "Gear & Transmission", href: "/applications/gear" },
      { label: "Bearing Industries", href: "/applications/bearing" },
      { label: "Defence", href: "/applications/defence" },
      { label: "Oil & Gas", href: "/applications/oil-gas" },
      { label: "Power", href: "/applications/power" },
      { label: "Heavy Engineering", href: "/applications/heavy" },
      { label: "Off-Road Vehicles", href: "/applications/offroad" },
      { label: "Railways", href: "/applications/railways" },
    ],
  },
  {
    label: "Infrastructure",
    href: "/infrastructure",
    sub: [
      { label: "Plant & Process", href: "/infrastructure/plant" },
      { label: "Power", href: "/infrastructure/power" },
      { label: "Logistics", href: "/infrastructure/logistics" },
      { label: "Testing Facilities", href: "/infrastructure/testing" },
    ],
  },
  {
    label: "EHS & CSR",
    href: "/csr",
    sub: [
      { label: "EHS", href: "/csr/ehs" },
      { label: "CSR", href: "/csr/community" },
      { label: "Environment", href: "/csr/environment" },
      { label: "Circularity", href: "/circularity" },
    ],
  },
  { label: "Our Clients", href: "/our-clients", sub: null },
  {
    label: "Get In Touch",
    href: "/contact",
    cta: true,
    sub: [
      { label: "Contact", href: "/contact" },
      { label: "Request a Quote", href: "/contact" },
      { label: "Sell To Us", href: "/sell-us" },
      { label: "Careers", href: "/careers" },
    ],
  },
];
