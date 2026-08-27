// Shared full-bleed photo banner markup for subpages (godawaripowerispat.com-inspired).
export function renderBanner({ parentLabel, parentHref, title, subtitle, image }) {
  const crumbMiddle = parentLabel
    ? `<a href="${parentHref}">${parentLabel}</a><span>/</span>`
    : "";
  return `<section class="page-banner pb-photo" style="--banner-img:url('${image}')">
  <div class="wrap page-banner-inner">
    <div class="breadcrumb"><a href="/">Home</a><span>/</span>${crumbMiddle}<span>${title.replace(/<[^>]+>/g, "")}</span></div>
    <h1>${title}</h1>
    ${subtitle ? `<p>${subtitle}</p>` : ""}
  </div>
</section>`;
}
