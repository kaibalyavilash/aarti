import { notFound } from "next/navigation";
import RawSection from "@/components/RawSection";
import { INFRASTRUCTURE_PAGES } from "@/content/infrastructurePages";
import { renderBanner } from "@/lib/banner";

export async function generateStaticParams() {
  return Object.keys(INFRASTRUCTURE_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const p = INFRASTRUCTURE_PAGES[params.slug];
  if (!p) return {};
  return { title: p.title, description: p.description };
}

export default function InfrastructureSubPage({ params }) {
  const p = INFRASTRUCTURE_PAGES[params.slug];
  if (!p) notFound();
  const banner = renderBanner({
    parentLabel: "Infrastructure",
    parentHref: "/infrastructure",
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
