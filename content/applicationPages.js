const IMG = {
  auto: "https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?w=1600&q=70&auto=format&fit=crop",
  gear: "https://images.unsplash.com/photo-1524514587686-e2909d726e9b?w=1600&q=70&auto=format&fit=crop",
  bearing: "https://images.unsplash.com/photo-1776463156345-b1a3e00ef289?w=1600&q=70&auto=format&fit=crop",
  defence: "https://images.unsplash.com/photo-1695120972968-21ffead317fb?w=1600&q=70&auto=format&fit=crop",
  oilGas: "https://images.unsplash.com/photo-1784915474323-6b84bb2ed040?w=1600&q=70&auto=format&fit=crop",
  power: "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?w=1600&q=70&auto=format&fit=crop",
  heavy: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1600&q=70&auto=format&fit=crop",
  offroad: "https://images.unsplash.com/photo-1523848309072-c199db53f137?w=1600&q=70&auto=format&fit=crop",
  railways: "https://images.unsplash.com/photo-1610611342266-bcc131ecc78c?w=1600&q=70&auto=format&fit=crop",
  generic: "https://images.unsplash.com/photo-1569950044518-fa4f3f19a888?w=1600&q=70&auto=format&fit=crop",
};

function body(title, items, note, image) {
  return `<section class="section">
  <div class="wrap">
    <div class="about-grid reveal">
      <div class="about-copy">
        <div class="eyebrow" style="color:var(--ember-2); font-family:'JetBrains Mono'; font-size:12px; letter-spacing:.22em; text-transform:uppercase; display:flex; gap:12px; align-items:center; margin-bottom:18px;"><span style="width:34px;height:1px;background:currentColor;display:inline-block;"></span>Where our steel goes</div>
        <h2 style="margin-bottom:20px;">${title} Components</h2>
        <div class="pillrow" style="margin-top:0;">
          ${items.map((i) => `<span class="pill">${i}</span>`).join("")}
        </div>
        ${note ? `<p style="margin-top:24px;max-width:680px;color:var(--paper-dim);">${note}</p>` : ""}
      </div>
      <div class="photo-grid flat" style="grid-template-columns:1fr;">
        <div class="ph has-photo" style="aspect-ratio:4/3;"><img src="${image}" alt="${title} components in use" loading="lazy"></div>
      </div>
    </div>
  </div>
</section>
<div class="ctaband">
  <div class="wrap">
    <h2 class="reveal">See the grades behind these parts.</h2>
    <div class="slide-cta reveal">
      <a href="/products/grades" class="btn btn-primary">View grade range →</a>
      <a href="/applications" class="btn btn-ghost">← All industries</a>
    </div>
  </div>
</div>`;
}

export const APPLICATION_PAGES = {
  auto: {
    title: "Auto Components",
    subtitle: "Steering, drivetrain and engine parts machined and forged from our special steel range.",
    image: IMG.auto,
    description: "Auto component grades from Aarti Steel: steering, drivetrain and engine parts.",
    body: body(
      "Auto",
      ["Steering Worm", "RA Shaft", "Steering Shaft", "Cam Shaft", "Bevel Gear", "RAS Gear", "Steering Nut", "Transmission Gear", "Crown Wheel", "FA Beam", "Stub Axle", "Crankshaft", "Connecting Rod", "Engine Valve", "Stabilizer Bar"],
      "Case carburizing and chrome-molly grades are the usual fit for high-load steering and drivetrain parts; consult our <a href=\"/products/grades\">grade range</a> for the specific chemistry.",
      IMG.auto
    ),
  },
  gear: {
    title: "Gear & Transmission",
    subtitle: "Case-hardening and alloy grades for gears, shafts and clutch components under continuous load.",
    image: IMG.gear,
    description: "Gear and transmission steel grades from Aarti Steel.",
    body: body(
      "Gear & Transmission",
      ["Transmission Gears & Shafts", "Engine Gears", "Clutch Components", "Differential & Axle Gears", "Synchro Hubs & Gears", "Crown Gear", "Worm Gear", "Spur Gear", "Helical Gear", "Bevel Gear", "Rack & Pinion", "Ring Gears"],
      null,
      IMG.gear
    ),
  },
  bearing: {
    title: "Bearing Industries",
    subtitle: "Bearing-grade steel for rings, balls and rollers across ball, taper, roller and thrust bearings.",
    image: IMG.bearing,
    description: "Bearing steel grades from Aarti Steel: rings, balls and rollers.",
    body: body(
      "Bearing",
      ["Inner Ring", "Outer Ring", "Balls", "Rollers", "Ball Bearings", "Taper Bearings", "Roller Bearings", "Thrust Ball Bearings"],
      "Produced against SAE 52100 / 100Cr6-family bearing steel chemistry — full detail on our <a href=\"/products/grades\">grade range</a> page.",
      IMG.bearing
    ),
  },
  defence: {
    title: "Defence",
    subtitle: "High-toughness alloy steel for armoured and ordnance components where failure isn't an option.",
    image: IMG.defence,
    description: "Defence-grade steel components from Aarti Steel.",
    body: body(
      "Defence",
      ["Battle Tank Components", "Bomb Shell", "Gun Barrel", "Small Arms Barrel", "Cartridge Cases", "Armoured Vehicle Components"],
      null,
      IMG.defence
    ),
  },
  "oil-gas": {
    title: "Oil & Gas",
    subtitle: "Forged and rolled steel for shafts, casing and valve components in upstream and downstream operations.",
    image: IMG.oilGas,
    description: "Oil and gas industry steel components from Aarti Steel.",
    body: body(
      "Oil & Gas",
      ["Shafts", "Casing", "Open Forge", "Valve Bodies", "Interconnecting Blocks", "Drill Shanks"],
      null,
      IMG.oilGas
    ),
  },
  power: {
    title: "Power",
    subtitle: "Rotor and turbine-grade steel for power generation equipment.",
    image: IMG.power,
    description: "Power generation industry steel components from Aarti Steel.",
    body: body(
      "Power",
      ["Drive Shafts", "Rotor Shaft", "Rotor Disc", "Rings", "Flanges", "Turbine Blade"],
      null,
      IMG.power
    ),
  },
  heavy: {
    title: "Heavy Engineering",
    subtitle: "Components for sugar, textile, cement, mining, construction and marine industries.",
    image: IMG.heavy,
    description: "Heavy engineering steel components from Aarti Steel.",
    body: body(
      "Heavy Engineering",
      ["Sugar Industry", "Textile Industry", "Cement Industry", "Mining Industry", "Construction Industry", "Marine Industry"],
      null,
      IMG.heavy
    ),
  },
  offroad: {
    title: "Off-Road Vehicles",
    subtitle: "Undercarriage steel for track and linkage components under continuous abrasive load.",
    image: IMG.offroad,
    description: "Off-road and construction vehicle steel components from Aarti Steel.",
    body: body(
      "Off-Road",
      ["Linkage Pin", "Track Shoe", "Track Roller", "Idler Shaft", "Nitride / Carburized Parts"],
      null,
      IMG.offroad
    ),
  },
  railways: {
    title: "Railways",
    subtitle: "Axle and suspension-grade steel for rolling stock and track fittings.",
    image: IMG.railways,
    description: "Railway industry steel components from Aarti Steel.",
    body: body(
      "Railways",
      ["Axle Shaft", "Camshaft", "Helical Spring", "Elastic Rail Clip (ERC)"],
      null,
      IMG.railways
    ),
  },
};
