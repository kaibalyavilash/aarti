import { notFound } from "next/navigation";
import RawSection from "@/components/RawSection";
import { CSR_PAGES } from "@/content/csrPages";
import { renderBanner } from "@/lib/banner";

export async function generateStaticParams() {
  return Object.keys(CSR_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const p = CSR_PAGES[params.slug];
  if (!p) return {};
  return { title: p.title, description: p.description };
}

export default function CsrSubPage({ params }) {
  const p = CSR_PAGES[params.slug];
  if (!p) notFound();
  const banner = renderBanner({
    parentLabel: "EHS & CSR",
    parentHref: "/csr",
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
