import { notFound } from "next/navigation";
import RawSection from "@/components/RawSection";
import { APPLICATION_PAGES } from "@/content/applicationPages";
import { renderBanner } from "@/lib/banner";

export async function generateStaticParams() {
  return Object.keys(APPLICATION_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const p = APPLICATION_PAGES[params.slug];
  if (!p) return {};
  return { title: p.title, description: p.description };
}

export default function ApplicationSubPage({ params }) {
  const p = APPLICATION_PAGES[params.slug];
  if (!p) notFound();
  const banner = renderBanner({
    parentLabel: "Applications",
    parentHref: "/applications",
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
