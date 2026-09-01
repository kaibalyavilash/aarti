const IMG = {
  ehs: "https://images.unsplash.com/photo-1745448797901-2a4c9d9af1c1?w=1600&q=70&auto=format&fit=crop",
  community: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1600&q=70&auto=format&fit=crop",
  environment: "https://images.unsplash.com/photo-1671362935207-d9abfc5b9509?w=1600&q=70&auto=format&fit=crop",
};

export const CSR_PAGES = {
  ehs: {
    title: "EHS",
    subtitle: "Environment, Health & Safety — the foundation everything else is built on.",
    image: IMG.ehs,
    description: "Environment, Health and Safety practices and certifications at Aarti Steel, Cuttack.",
    body: `<section class="section">
  <div class="wrap">
    <div class="section-head hydro reveal">
      <div class="eyebrow">Environment, Health &amp; Safety</div>
      <h2>EHS</h2>
      <p>Safe operations are the foundation everything else is built on — for our people first, and for the communities around our plants.</p>
    </div>
    <div class="cert-grid reveal">
      <div class="cert-card"><h4>Workplace Safety</h4><p>Protocols and training built around the realities of heavy industrial operations — furnaces, rolling mills and material handling.</p></div>
      <div class="cert-card"><h4>Health Monitoring</h4><p>Ongoing occupational health measures for our workforce across the plant.</p></div>
      <div class="cert-card"><h4>Continuous Improvement</h4><p>EHS practices reviewed and updated alongside our broader sustainability roadmap, not treated as a static checklist.</p></div>
    </div>
    <div class="pillrow reveal">
      <span class="pill">ISO 45001:2018 Certified</span>
      <span class="pill">Kalinga Award for Safety Excellence 2023–24 (Silver)</span>
    </div>
  </div>
</section>
<div class="ctaband">
  <div class="wrap">
    <h2 class="reveal">See our other commitments.</h2>
    <div class="slide-cta reveal">
      <a href="/csr/environment" class="btn btn-primary">Environment →</a>
      <a href="/csr/community" class="btn btn-ghost">CSR →</a>
    </div>
  </div>
</div>`,
  },
  community: {
    title: "CSR",
    subtitle: "Long-term, mutually rewarding partnerships built on transparency and fair business practices.",
    image: IMG.community,
    description: "Corporate social responsibility at Aarti Steel, Cuttack, Odisha.",
    body: `<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="eyebrow">Community</div>
      <h2>CSR</h2>
      <p>We believe in long-term, mutually rewarding partnerships based on transparency and fair business practices with all our stakeholders — including the communities we operate in.</p>
    </div>
    <div class="why-grid reveal">
      <div class="why-card">
        <div class="num">01</div>
        <h4>Local Employment</h4>
        <p>Direct and indirect employment across manufacturing, logistics and ancillary services in and around Cuttack, Odisha.</p>
      </div>
      <div class="why-card">
        <div class="num">02</div>
        <h4>Stakeholder Trust</h4>
        <p>Transparent, fair-dealing relationships with suppliers, customers and the communities around our plants.</p>
      </div>
      <div class="why-card">
        <div class="num">03</div>
        <h4>Long-Term View</h4>
        <p>Investments in people and process built for decades, not quarters — consistent with our 44-year track record.</p>
      </div>
    </div>
  </div>
</section>
<div class="ctaband">
  <div class="wrap">
    <h2 class="reveal">See our other commitments.</h2>
    <div class="slide-cta reveal">
      <a href="/csr/ehs" class="btn btn-primary">EHS →</a>
      <a href="/csr/environment" class="btn btn-ghost">Environment →</a>
    </div>
  </div>
</div>`,
  },
  environment: {
    title: "Environment",
    subtitle: "Certified carbon intensity, not a slogan — our roadmap from today's plant to 2030.",
    image: IMG.environment,
    description: "Environmental performance and certifications at Aarti Steel: certified CO2 intensity, GreenPro Ecolabel, and national awards.",
    body: `<section class="section">
  <div class="wrap">
    <div class="about-grid reveal">
      <div class="about-copy">
        <div class="eyebrow" style="color:var(--ember-2); font-family:'JetBrains Mono'; font-size:12px; letter-spacing:.22em; text-transform:uppercase; display:flex; gap:12px; align-items:center; margin-bottom:18px;"><span style="width:34px;height:1px;background:currentColor;display:inline-block;"></span>Beyond compliance</div>
        <h2 style="margin-bottom:18px;">Environment</h2>
        <p>Our environmental commitments run through the plant: fly ash recovery instead of landfill, a scrap-first feedstock strategy, and ongoing investment in cleaner, more efficient captive power.</p>
        <p>Our hot-rolled product carries a <strong>GreenPro Ecolabel certified carbon footprint of 636 kg CO2eq per tonne</strong> (certificate valid to December 2027) — down from 797 kg in 2023, with a roadmap to 330 kg by 2030.</p>
        <p><a href="/circularity" class="btn btn-ghost" style="margin-top:6px;">See our circular economy loop →</a></p>
      </div>
      <div class="photo-grid">
        <div class="ph" data-tag="Emissions Tracking"><svg viewBox="0 0 24 24" fill="none" stroke="#3d4a40" stroke-width="1"><path d="M4 20V10l4-4 4 4 4-4 4 4v10H4z"/></svg></div>
        <div class="ph" data-tag="Water Usage"><svg viewBox="0 0 24 24" fill="none" stroke="#3d4a40" stroke-width="1"><path d="M12 2s6 7 6 12a6 6 0 1 1-12 0c0-5 6-12 6-12z"/></svg></div>
        <div class="ph" data-tag="Fly Ash Recovery"><svg viewBox="0 0 24 24" fill="none" stroke="#3d4a40" stroke-width="1"><path d="M3 12l4-8 4 8 4-8 4 8"/></svg></div>
        <div class="ph" data-tag="Roadmap"><svg viewBox="0 0 24 24" fill="none" stroke="#3d4a40" stroke-width="1"><rect x="4" y="4" width="16" height="16"/></svg></div>
      </div>
    </div>
  </div>
</section>
<section class="section tight alt-bg">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="eyebrow">Certified, not claimed</div>
      <h2 style="font-size:28px;">GreenPro Ecolabel — Per-Grade CO2 Footprint</h2>
    </div>
    <div class="datatable reveal">
      <table>
        <thead><tr><th>Grade</th><th>Certified CO2eq / MT</th></tr></thead>
        <tbody>
          <tr><td class="lead">100Cr6 / 52100 / SUJ2R</td><td>559 kg</td></tr>
          <tr><td class="lead">C56E2</td><td>467 kg</td></tr>
          <tr><td class="lead">20MnCr5</td><td>501 kg</td></tr>
          <tr><td class="lead">100CrMnSi6-4</td><td>605 kg</td></tr>
          <tr><td class="lead">C45 Modified</td><td>465 kg</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="eyebrow">Recognised</div>
      <h2>Environmental Awards</h2>
    </div>
    <div class="cert-grid reveal">
      <div class="cert-card"><h4>CII GreenPro Ecolabel Award 2025</h4><p>Green Products &amp; Services Council — Automotive and Engineering Steel category.</p></div>
      <div class="cert-card"><h4>Odisha State Energy Conservation Award 2024</h4><p>Captive/Industrial Power Plant (CPP/IPP) category.</p></div>
      <div class="cert-card"><h4>Fly Ash Utilisation Award 2025</h4><p>Winner, Excellence in R&amp;D — Mission Energy Foundation.</p></div>
      <div class="cert-card"><h4>Kalinga Environment Excellence National Award 2024</h4><p>Winner, 4-star rating, presented in Bhubaneswar.</p></div>
    </div>
  </div>
</section>
<div class="ctaband">
  <div class="wrap">
    <h2 class="reveal">Sourcing certified low-carbon steel?</h2>
    <div class="slide-cta reveal">
      <a href="/contact" class="btn btn-primary">Talk to our team →</a>
      <a href="/circularity" class="btn btn-ghost">Circular economy loop →</a>
    </div>
  </div>
</div>`,
  },
};
