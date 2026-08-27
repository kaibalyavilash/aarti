import { notFound } from "next/navigation";
import RawSection from "@/components/RawSection";
import { PRODUCT_PAGES } from "@/content/productPages";
import { renderBanner } from "@/lib/banner";

export async function generateStaticParams() {
  return Object.keys(PRODUCT_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const p = PRODUCT_PAGES[params.slug];
  if (!p) return {};
  return { title: p.title, description: p.description };
}

export default function ProductSubPage({ params }) {
  const p = PRODUCT_PAGES[params.slug];
  if (!p) notFound();
  const banner = renderBanner({
    parentLabel: "Products",
    parentHref: "/products",
    title: p.title,
    subtitle: p.subtitle,
    image: p.image,
  });
  return (
    <>
      <RawSection html={banner} />
      <RawSection html={p.body} />
    </>
  );
}
