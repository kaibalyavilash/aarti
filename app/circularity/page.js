import RawSection from "@/components/RawSection";
import { circularityContent } from "@/content/circularity";

export const metadata = {
  title: "Circularity",
  description:
    "How Aarti Steel's scrap-first EAF route and by-product recovery close the loop on steelmaking.",
};

export default function CircularityPage() {
  return <RawSection html={circularityContent} />;
}
