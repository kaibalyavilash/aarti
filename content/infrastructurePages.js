const IMG = {
  plant: "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?w=1600&q=70&auto=format&fit=crop",
  power: "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?w=1600&q=70&auto=format&fit=crop",
  logistics: "https://images.unsplash.com/photo-1745956983820-6e960f7e8472?w=1600&q=70&auto=format&fit=crop",
  testing: "https://images.unsplash.com/photo-1639772823907-a716be4bdecc?w=1600&q=70&auto=format&fit=crop",
};

export const INFRASTRUCTURE_PAGES = {
  plant: {
    title: "Plant & Process",
    subtitle: "From DRI kiln to bright bar — the full steelmaking route under one roof in Cuttack.",
    image: IMG.plant,
    description: "Aarti Steel's plant facilities: DRI, Electric Arc Furnace, Ladle Refining, Vacuum Degassing, Continuous Casting, Rolling Mill and Bright Bar Shop.",
    body: `<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="eyebrow">Vertically integrated</div>
      <h2>Plant Facilities</h2>
      <p>Every stage of the route — iron-making through finished bright bar — sits inside our Cuttack plant.</p>
    </div>
    <div class="cert-grid reveal">
      <div class="cert-card"><h4>DRI (Iron Making)</h4><p>2 × 500 TPD kilns producing sponge iron for our EAF charge.</p></div>
      <div class="cert-card"><h4>Ferro Chrome</h4><p>Submerged arc furnaces — two rated 9 MVA and one at 18 MVA — for ferro chrome conversion.</p></div>
      <div class="cert-card"><h4>Steel Melting Shop</h4><p>40 MT Electric Arc Furnace, twin 40 MT Ladle Refining Furnaces and a 40 MT Vacuum Degassing unit.</p></div>
      <div class="cert-card"><h4>Continuous Caster</h4><p>Bloom caster running 9m, 13m and 25m radius configurations.</p></div>
      <div class="cert-card"><h4>Rolling Mill</h4><p>Walking-beam reheating furnace, blooming mill and a 13-stand continuous rolling line.</p></div>
      <div class="cert-card"><h4>Bright Bar Shop</h4><p>Peeling and centreless grinding, producing 20mm–75mm bright rounds.</p></div>
    </div>
  </div>
</section>
<section class="section tight alt-bg">
  <div class="wrap">
    <div class="section-head hydro reveal">
      <div class="eyebrow">Charge to dispatch</div>
      <h2>Process Flow</h2>
      <p>A 70% scrap / 30% DRI charge mix runs through one continuous route, tested at every stage.</p>
    </div>
    <div class="pillrow reveal" style="margin-top:0;">
      <span class="pill">70% Scrap + 30% DRI</span>
      <span class="pill">Electric Arc Furnace</span>
      <span class="pill">Ladle Refining Furnace</span>
      <span class="pill">Vacuum Degassing</span>
      <span class="pill">Continuous Caster</span>
      <span class="pill">Reheating Furnace</span>
      <span class="pill">Descalar</span>
      <span class="pill">Reversible BD Mill</span>
      <span class="pill">13-Stand Rolling</span>
      <span class="pill">Cooling Bed</span>
      <span class="pill">Peeling</span>
      <span class="pill">Centreless Grinding</span>
      <span class="pill">Bright Bar</span>
      <span class="pill">Quality Assurance</span>
      <span class="pill">Dispatch</span>
    </div>
  </div>
</section>
<div class="ctaband">
  <div class="wrap">
    <h2 class="reveal">Want the full spec sheet?</h2>
    <div class="slide-cta reveal">
      <a href="/contact" class="btn btn-primary">Talk to our team →</a>
      <a href="/infrastructure" class="btn btn-ghost">← Infrastructure overview</a>
    </div>
  </div>
</div>`,
  },
  power: {
    title: "Power",
    subtitle: "90 MW of captive generation across two plants — the backbone of consistent steelmaking.",
    image: IMG.power,
    description: "Aarti Steel's 90 MW captive power infrastructure: AFBC and CFBC generation in Cuttack, Odisha.",
    body: `<section class="section">
  <div class="wrap">
    <div class="about-grid reveal">
      <div class="about-copy">
        <div class="eyebrow" style="color:var(--ember-2); font-family:'JetBrains Mono'; font-size:12px; letter-spacing:.22em; text-transform:uppercase; display:flex; gap:12px; align-items:center; margin-bottom:18px;"><span style="width:34px;height:1px;background:currentColor;display:inline-block;"></span>Captive generation</div>
        <h2 style="margin-bottom:18px;">Power</h2>
        <p>Our Power division runs <strong>90 MW of captive generation</strong> across two plants — a 40 MW unit on an AFBC coal-fired boiler (115 TPH) with a 52 TPH waste heat recovery boiler, and a 50 MW unit on a CFBC coal-fired boiler (200 TPH) with a 54.5 TPH waste heat recovery boiler.</p>
        <p>Stable power is the backbone of consistent steelmaking — it's what lets our EAF operations run predictably, batch after batch, without the swings that undermine quality. Smart-grid monitoring and cleaner energy technologies are under evaluation to reduce emissions further.</p>
      </div>
      <div class="photo-grid">
        <div class="ph" data-tag="Captive Plant"><svg viewBox="0 0 24 24" fill="none" stroke="#3d4a40" stroke-width="1"><path d="M13 2 3 14h8l-2 8 10-12h-8l2-8z"/></svg></div>
        <div class="ph" data-tag="Grid Backup"><svg viewBox="0 0 24 24" fill="none" stroke="#3d4a40" stroke-width="1"><circle cx="12" cy="12" r="8"/></svg></div>
        <div class="ph" data-tag="Renewable Roadmap"><svg viewBox="0 0 24 24" fill="none" stroke="#3d4a40" stroke-width="1"><path d="M4 20l4-8 4 8 4-8 4 8"/></svg></div>
        <div class="ph" data-tag="EAF Feed"><svg viewBox="0 0 24 24" fill="none" stroke="#3d4a40" stroke-width="1"><rect x="4" y="4" width="16" height="16"/></svg></div>
      </div>
    </div>
  </div>
</section>
<div class="ctaband">
  <div class="wrap">
    <h2 class="reveal">Curious about our carbon roadmap?</h2>
    <div class="slide-cta reveal">
      <a href="/csr/environment" class="btn btn-primary">See Environment →</a>
      <a href="/infrastructure" class="btn btn-ghost">← Infrastructure overview</a>
    </div>
  </div>
</div>`,
  },
  logistics: {
    title: "Logistics",
    subtitle: "Production planning built around delivery reliability, not best-effort.",
    image: IMG.logistics,
    description: "Aarti Steel's logistics and dispatch infrastructure from Cuttack, Odisha.",
    body: `<section class="section">
  <div class="wrap">
    <div class="section-head hydro reveal">
      <div class="eyebrow">On-time, by design</div>
      <h2>Logistics</h2>
      <p>Our Cuttack facility is positioned as a manufacturing and distribution hub, with production planning built around delivery reliability rather than best-effort.</p>
    </div>
    <div class="cert-grid reveal">
      <div class="cert-card"><h4>Odisha Manufacturing Hub</h4><p>Ghantikhal, Cuttack gives us direct access to eastern India's port and rail corridors for reliable dispatch.</p></div>
      <div class="cert-card"><h4>Planned Dispatch</h4><p>Production scheduling is tied to delivery commitments, not treated as an afterthought once material is ready.</p></div>
      <div class="cert-card"><h4>850+ Clients Served</h4><p>A logistics network proven across steel wire and steel rolled customer bases alike.</p></div>
    </div>
  </div>
</section>
<div class="ctaband">
  <div class="wrap">
    <h2 class="reveal">Need a delivery schedule you can plan around?</h2>
    <div class="slide-cta reveal">
      <a href="/contact" class="btn btn-primary">Talk to our team →</a>
      <a href="/infrastructure" class="btn btn-ghost">← Infrastructure overview</a>
    </div>
  </div>
</div>`,
  },
  testing: {
    title: "Testing Facilities",
    subtitle: "Every batch that leaves our plant is verified in-house before it ships.",
    image: IMG.testing,
    description: "In-house testing and quality-assurance equipment at Aarti Steel, Cuttack — spectrometry, ultrasonic, hardness and metallurgical testing.",
    body: `<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="eyebrow">Tested, not assumed</div>
      <h2>Testing Facilities</h2>
      <p>Every batch that leaves our plant is verified in-house before it ships.</p>
    </div>
    <div class="photo-grid flat reveal" style="grid-template-columns:repeat(4,minmax(0,1fr)); margin-bottom:40px;">
      <div class="ph has-photo" data-tag="Spectrometry"><img src="https://images.unsplash.com/photo-1639772823907-a716be4bdecc?w=700&q=70&auto=format&fit=crop" alt="Spectrometry lab" loading="lazy"></div>
      <div class="ph has-photo" data-tag="Hardness Testing"><img src="https://images.unsplash.com/photo-1745448797901-2a4c9d9af1c1?w=700&q=70&auto=format&fit=crop" alt="Hardness testing" loading="lazy"></div>
      <div class="ph has-photo" data-tag="Metallurgical Microscopy"><img src="https://images.unsplash.com/photo-1569950044518-fa4f3f19a888?w=700&q=70&auto=format&fit=crop" alt="Metallurgical microscopy" loading="lazy"></div>
      <div class="ph has-photo" data-tag="Certified Reports"><img src="https://images.unsplash.com/photo-1745377881072-fa978cac245a?w=700&q=70&auto=format&fit=crop" alt="Certified test reports" loading="lazy"></div>
    </div>
    <div class="cert-grid reveal">
      <div class="cert-card"><h4>Spectrometer</h4><p>Spectrolab, Germany — Models LAB M-9 &amp; M-12, for precise chemical composition analysis.</p></div>
      <div class="cert-card"><h4>Oxygen, Nitrogen &amp; Hydrogen Analyzer</h4><p>LECO Corporation, USA — Model TCH 600.</p></div>
      <div class="cert-card"><h4>XRF Analysis</h4><p>LECO Corporation, USA — Model WDXR Primus 4.</p></div>
      <div class="cert-card"><h4>Universal Tensile Testing</h4><p>FIE — 600 KN capacity, two units, for strength and ductility verification.</p></div>
      <div class="cert-card"><h4>Metallurgical Microscope</h4><p>Carl Zeiss, Germany — Model AXIO Imager, with image analysis.</p></div>
      <div class="cert-card"><h4>Stereo Microscope</h4><p>For surface and macro-structure inspection.</p></div>
      <div class="cert-card"><h4>Brinell Hardness Tester</h4><p>FIE — Model B-3000.</p></div>
      <div class="cert-card"><h4>Vickers Hardness Tester</h4><p>FIE — Model B-3000.</p></div>
      <div class="cert-card"><h4>Rockwell Hardness Tester</h4><p>Suraj Engineers.</p></div>
      <div class="cert-card"><h4>Impact Testing Machine</h4><p>FIE — Model B-3000, for toughness verification at temperature.</p></div>
      <div class="cert-card"><h4>Jominy Hardenability Tester</h4><p>Conation Technologies — hardenability profiling across the bar cross-section.</p></div>
      <div class="cert-card"><h4>Ultrasonic Flaw Detector</h4><p>EEC — non-destructive internal defect detection.</p></div>
      <div class="cert-card"><h4>Automatic Ultrasonic Testing</h4><p>GE Krautkramer, Germany — Model ROWA UX600.</p></div>
      <div class="cert-card"><h4>Immersion Ultrasonic Testing</h4><p>Olympus, Canada — Model FPX-UT4.</p></div>
      <div class="cert-card"><h4>Eddy Current Sorter</h4><p>Automated grade-sorting on incoming and finished bar.</p></div>
    </div>
  </div>
</section>
<div class="ctaband">
  <div class="wrap">
    <h2 class="reveal">Need certified test reports with your order?</h2>
    <div class="slide-cta reveal">
      <a href="/contact" class="btn btn-primary">Talk to our team →</a>
      <a href="/infrastructure" class="btn btn-ghost">← Infrastructure overview</a>
    </div>
  </div>
</div>`,
  },
};
