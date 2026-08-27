// Sell-to-us / vendor & scrap supplier page.
export const sellUsContent = `<section class="page-banner pb-photo" style="--banner-img:url('https://images.unsplash.com/photo-1671362935207-d9abfc5b9509?w=1600&q=70&auto=format&fit=crop')">
  <div class="wrap page-banner-inner">
    <div class="breadcrumb"><a href="/">Home</a><span>/</span><span>Sell To Us</span></div>
    <h1>Your strategic partner<br><em style="font-style:normal;color:var(--hydro-2);">in steel sourcing.</em></h1>
    <p>We buy scrap, raw materials and inputs at scale for our Cuttack plant. If you supply what we need, we want to hear from you.</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head hydro reveal">
      <div class="eyebrow">Why supply Aarti Steel</div>
      <h2>Excellence, innovation and reliability — from the buying side too.</h2>
      <p>Our scrap-first, EAF-based production route means a consistent, ongoing need for quality scrap and raw material inputs. We look for long-term, mutually rewarding supplier relationships, not one-off transactions.</p>
    </div>
    <div class="why-grid reveal">
      <div class="why-card">
        <div class="num">01</div>
        <h4>Consistent Offtake</h4>
        <p>44 years of steelmaking means steady, recurring demand — not a one-time purchase.</p>
      </div>
      <div class="why-card">
        <div class="num">02</div>
        <h4>Fair, Transparent Terms</h4>
        <p>Long-term, mutually rewarding partnerships based on transparency and fair-dealing.</p>
      </div>
      <div class="why-card">
        <div class="num">03</div>
        <h4>Fast Turnaround</h4>
        <p>In-house testing and a dedicated procurement team keep evaluation and payment cycles quick.</p>
      </div>
    </div>
  </div>
</section>

<section class="section tight alt-bg" id="materials">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="eyebrow">What we're buying</div>
      <h2>Materials &amp; inputs</h2>
    </div>
    <div class="cert-grid reveal">
      <div class="cert-card"><h4>Steel Scrap</h4><p>Melting-grade ferrous scrap for our Electric Arc Furnace route.</p></div>
      <div class="cert-card"><h4>Sponge Iron</h4><p>Direct-reduced iron as a feedstock supplement.</p></div>
      <div class="cert-card"><h4>Ferro Alloys</h4><p>Input-grade ferro alloys for alloying and grade control.</p></div>
      <div class="cert-card"><h4>Coal &amp; Fuel</h4><p>Coal and other fuel inputs for our captive power plants.</p></div>
      <div class="cert-card"><h4>Iron Ore</h4><p>Ore-grade material for our iron-making division.</p></div>
      <div class="cert-card"><h4>Not Sure?</h4><p>Tell us what you have — our procurement team will advise on fit.</p></div>
    </div>
  </div>
</section>

<section class="section" id="submit">
  <div class="wrap">
    <div class="contact-grid reveal">
      <div>
        <div class="section-head" style="margin-bottom:32px;">
          <div class="eyebrow" style="color:var(--hydro-2); font-family:'JetBrains Mono'; font-size:12px; letter-spacing:.22em; text-transform:uppercase; display:flex; gap:12px; align-items:center; margin-bottom:18px;">Sales Inquiry</div>
          <h2 style="font-size:30px;">Tell us what you're supplying.</h2>
        </div>
        <form class="contact-form">
          <div>
            <label for="company">Company / Supplier Name</label>
            <input type="text" id="company" name="company" placeholder="Your company name" required>
          </div>
          <div>
            <label for="contact-name">Contact Person</label>
            <input type="text" id="contact-name" name="contact-name" placeholder="Your name" required>
          </div>
          <div>
            <label for="s-email">Email</label>
            <input type="email" id="s-email" name="s-email" placeholder="you@company.com" required>
          </div>
          <div>
            <label for="s-phone">Phone</label>
            <input type="tel" id="s-phone" name="s-phone" placeholder="+91">
          </div>
          <div>
            <label for="material">Material / Product</label>
            <select id="material" name="material">
              <option>Steel Scrap</option>
              <option>Sponge Iron</option>
              <option>Ferro Alloys</option>
              <option>Coal &amp; Fuel</option>
              <option>Iron Ore</option>
              <option>Other — describe below</option>
            </select>
          </div>
          <div>
            <label for="quantity">Quantity Available</label>
            <input type="text" id="quantity" name="quantity" placeholder="e.g. 500 MT / month">
          </div>
          <div>
            <label for="s-message">Message</label>
            <textarea id="s-message" name="s-message" placeholder="Grade, location, pricing basis, timeline..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="align-self:flex-start;">Submit Inquiry</button>
        </form>
      </div>
      <div>
        <div class="section-head" style="margin-bottom:32px;">
          <div class="eyebrow" style="color:var(--ember-2); font-family:'JetBrains Mono'; font-size:12px; letter-spacing:.22em; text-transform:uppercase; display:flex; gap:12px; align-items:center; margin-bottom:18px;">Reach us directly</div>
          <h2 style="font-size:30px;">Prefer to talk first?</h2>
        </div>
        <div class="cert-grid" style="grid-template-columns:1fr;">
          <div class="cert-card">
            <h4>Head Office</h4>
            <p>Aarti Steels Limited, Sector 51, Gurugram, Haryana – 122003, India.</p>
          </div>
          <div class="cert-card">
            <h4>Cuttack Plant</h4>
            <p>Ghantikhal, P.O. Mahakalbasta, Via Athgarh, Dist. Cuttack – 754029, Odisha, India.</p>
          </div>
          <div class="cert-card">
            <h4>Phone &amp; Email</h4>
            <p>+91-671-7161000<br>info@aartisteelsltd.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
