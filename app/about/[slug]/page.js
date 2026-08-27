import { notFound } from "next/navigation";
import RawSection from "@/components/RawSection";
import { ABOUT_PAGES } from "@/content/aboutPages";
import { renderBanner } from "@/lib/banner";

export async function generateStaticParams() {
  return Object.keys(ABOUT_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const p = ABOUT_PAGES[params.slug];
  if (!p) return {};
  return { title: p.title, description: p.description };
}

export default function AboutSubPage({ params }) {
  const p = ABOUT_PAGES[params.slug];
  if (!p) notFound();
  const banner = renderBanner({
    parentLabel: "About Us",
    parentHref: "/about",
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
