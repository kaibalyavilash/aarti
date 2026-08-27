// Dedicated product subpages (godawaripowerispat.com-style: each division gets its own page).
const IMG = {
  specialSteel: "https://images.unsplash.com/photo-1569950044518-fa4f3f19a888?w=1600&q=70&auto=format&fit=crop",
  ironMaking: "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?w=1600&q=70&auto=format&fit=crop",
  ferroAlloy: "https://images.unsplash.com/photo-1744735973756-b2efa8be24c8?w=1600&q=70&auto=format&fit=crop",
  roundBars: "https://images.unsplash.com/photo-1763771420303-0f11ccf613d1?w=1600&q=70&auto=format&fit=crop",
  wireRods: "https://images.unsplash.com/photo-1570970348641-13691ff58528?w=1600&q=70&auto=format&fit=crop",
  steelSquares: "https://images.unsplash.com/photo-1745448797901-2a4c9d9af1c1?w=1600&q=70&auto=format&fit=crop",
  spongeIron: "https://images.unsplash.com/photo-1745377881072-fa978cac245a?w=1600&q=70&auto=format&fit=crop",
  oxygen: "https://images.unsplash.com/photo-1526139506140-315ac793b9cf?w=1600&q=70&auto=format&fit=crop",
  flyAsh: "https://images.unsplash.com/photo-1527105763016-1b36a9d21bfa?w=1600&q=70&auto=format&fit=crop",
  power: "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?w=1600&q=70&auto=format&fit=crop",
};

function body({ tag, eyebrow, points, footNote }) {
  return `<section class="section">
  <div class="wrap">
    <div class="about-grid reveal">
      <div class="about-copy">
        <div class="eyebrow" style="color:var(--ember-2); font-family:'JetBrains Mono'; font-size:12px; letter-spacing:.22em; text-transform:uppercase; display:flex; gap:12px; align-items:center; margin-bottom:18px;"><span style="width:34px;height:1px;background:currentColor;display:inline-block;"></span>${eyebrow}</div>
        <div class="pillrow" style="margin-top:0;margin-bottom:24px;">${points.map((p) => `<span class="pill">${p}</span>`).join("")}</div>
        ${footNote}
      </div>
      <div class="photo-grid">
        <div class="ph" data-tag="Cuttack Plant"><svg viewBox="0 0 24 24" fill="none" stroke="#f3f1ec" stroke-width="1"><path d="M4 20V10l4-4 4 4 4-4 4 4v10H4z"/></svg></div>
        <div class="ph" data-tag="Tested In-House"><svg viewBox="0 0 24 24" fill="none" stroke="#f3f1ec" stroke-width="1"><rect x="4" y="4" width="16" height="16"/></svg></div>
      </div>
    </div>
  </div>
</section>
<div class="ctaband">
  <div class="wrap">
    <h2 class="reveal">Sourcing this division?</h2>
    <p class="reveal">Tell us your spec and volume and our team will match it to a grade.</p>
    <div class="slide-cta reveal">
      <a href="/contact" class="btn btn-primary">Talk to our team →</a>
      <a href="/products" class="btn btn-ghost">← All products</a>
    </div>
  </div>
</div>`;
}

export const PRODUCT_PAGES = {
  "special-steel": {
    tag: "01",
    title: "Special Steel",
    subtitle: "Carbon and alloy steel engineered for strength, durability and tight dimensional tolerance across critical applications.",
    image: IMG.specialSteel,
    description: "Special steel rounds and squares from Aarti Steel's Cuttack plant, supplied to auto component, bearing and defence manufacturers.",
    body: body({
      eyebrow: "Special steel",
      points: ["Carbon Steel", "Bearing Steel", "Chrome-Molly Steel", "Case Carburizing Steel", "Boron Steel"],
      footNote:
        "<p>Rolled and finished at our Cuttack facility, special steel is the core of our product range — supplied as rounds, round-corner squares and blooms across the full grade table on our <a href=\"/products/grades\">Grade Range</a> page.</p>",
    }),
  },
  "iron-making": {
    tag: "02",
    title: "Iron Making",
    subtitle: "Our metallurgical core — direct-reduced sponge iron feeding every downstream steelmaking division.",
    image: IMG.ironMaking,
    description: "Aarti Steel's in-house iron-making division: DRI kilns feeding our Electric Arc Furnace steelmaking route.",
    body: body({
      eyebrow: "Iron making",
      points: ["2 × 500 TPD DRI Kilns", "Feeds EAF Steelmaking", "Scrap + DRI Charge Mix"],
      footNote:
        "<p>Two 500 TPD direct-reduced-iron kilns produce the sponge iron that, alongside recycled scrap, charges our Electric Arc Furnace — the route that lets us control chemistry and quality from raw material through to finished bar.</p>",
    }),
  },
  "ferro-alloy": {
    tag: "03",
    title: "Ferro Alloy",
    subtitle: "Precision-crafted ferro chrome alloys produced to demanding metallurgical specifications.",
    image: IMG.ferroAlloy,
    description: "Ferro chrome alloy production at Aarti Steel via submerged arc furnaces in Cuttack, Odisha.",
    body: body({
      eyebrow: "Ferro alloy",
      points: ["Submerged Arc Furnaces", "9 MVA × 2 + 18 MVA × 1", "Ferro Chrome Conversion"],
      footNote:
        "<p>Our ferro alloy division runs three submerged arc furnaces — two rated 9 MVA and one at 18 MVA — converting chrome ore into ferro chrome alloy for the steel and stainless industries.</p>",
    }),
  },
  "round-bars": {
    tag: "04",
    title: "Round Bars",
    subtitle: "Sized and graded for automotive, bearing and gear work — rolled, peeled or centreless-ground to spec.",
    image: IMG.roundBars,
    description: "Round bars and bright bars from Aarti Steel, sized 16mm to 130mm for auto, bearing and gear applications.",
    body: body({
      eyebrow: "Round bars",
      points: ["Rounds: 16mm – 130mm", "Bright Bars: 20mm – 75mm", "Peeled & Centreless Ground"],
      footNote:
        "<p>Rolled on our 13-stand continuous mill and finished through our Bright Bar Shop — peeling and centreless grinding for dimensional accuracy ahead of forging or machining.</p>",
    }),
  },
  "wire-rods": {
    tag: "05",
    title: "Wire Rods",
    subtitle: "Spring steel wires and tyre bead wire for tensile applications, coiled and ready to draw.",
    image: IMG.wireRods,
    description: "Wire rods and Garret-coiled steel from Aarti Steel, sized 16mm to 40mm.",
    body: body({
      eyebrow: "Wire rods",
      points: ["Garret Coil: 16mm – 40mm", "Spring & Tyre Bead Grades", "Continuous-Cast to Coil"],
      footNote:
        "<p>Wire rod is coiled on our Garret Coiler straight off the rolling line, supplying wire-drawing customers with consistent chemistry batch to batch.</p>",
    }),
  },
  "steel-squares": {
    tag: "07",
    title: "Steel Squares",
    subtitle: "Round-corner squares rolled to spec for forging and machining.",
    image: IMG.steelSquares,
    description: "Round-corner square steel bars from Aarti Steel, sized 35mm to 125mm.",
    body: body({
      eyebrow: "Steel squares",
      points: ["Round Corner Squares: 35mm – 125mm", "Forging-Grade Chemistry"],
      footNote:
        "<p>Round-corner squares are cast at 250×320mm and 240×280mm bloom sizes, then rolled down for forging shops that need a clean, consistent billet cross-section.</p>",
    }),
  },
  "sponge-iron": {
    tag: "06",
    title: "Sponge Iron",
    subtitle: "Direct-reduced iron feedstock produced in-house for our steelmaking route.",
    image: IMG.spongeIron,
    description: "Sponge iron (DRI) produced at Aarti Steel's Cuttack plant across two 500 TPD kilns.",
    body: body({
      eyebrow: "Sponge iron",
      points: ["2 × 500 TPD Kilns", "Waste-Heat Power Recovery", "EAF Charge Feedstock"],
      footNote:
        "<p>Waste heat from our DRI kilns is recovered to generate captive power, cutting the net energy cost of the sponge iron that charges our furnaces.</p>",
    }),
  },
  oxygen: {
    tag: "08",
    title: "Oxygen",
    subtitle: "High-purity industrial oxygen supplied reliably from our own generation plant.",
    image: IMG.oxygen,
    description: "Industrial oxygen supply from Aarti Steel, used in-house for EAF and cutting operations and supplied externally.",
    body: body({
      eyebrow: "Oxygen",
      points: ["In-House Generation", "EAF & Cutting Grade", "Reliable Supply"],
      footNote:
        "<p>Our captive oxygen plant supports EAF lancing and cutting operations on-site, with surplus capacity supplied to external industrial customers.</p>",
    }),
  },
  "fly-ash": {
    tag: "09",
    title: "Fly Ash By-Products",
    subtitle: "Combustion residue from our power division, repurposed rather than landfilled.",
    image: IMG.flyAsh,
    description: "Fly ash by-products from Aarti Steel's captive power plants, supplied for cement and construction use.",
    body: body({
      eyebrow: "Fly ash by-products",
      points: ["Cement & Construction Use", "Landfill Diversion", "Circular Economy Loop"],
      footNote:
        "<p>Fly ash from our AFBC and CFBC boilers is recovered and supplied on for cement and construction use rather than sent to landfill — part of the same circular approach behind our <a href=\"/circularity\">circular steel loop</a>.</p>",
    }),
  },
  power: {
    tag: "10",
    title: "Power",
    subtitle: "90 MW of captive generation feeding a stable, consistent melt shop.",
    image: IMG.power,
    description: "Aarti Steel's 90 MW captive power division: AFBC and CFBC generation feeding EAF steelmaking in Cuttack.",
    body: body({
      eyebrow: "Power",
      points: ["90 MW Total Capacity", "40 MW AFBC + 50 MW CFBC", "Waste-Heat Recovery Boilers"],
      footNote:
        "<p>Two captive plants — a 40 MW unit on a 115 TPH AFBC boiler and a 50 MW unit on a 200 TPH CFBC boiler, each paired with a waste-heat recovery boiler — keep our EAF operations running on stable, predictable power. Full detail on our <a href=\"/infrastructure/power\">Infrastructure — Power</a> page.</p>",
    }),
  },
};
