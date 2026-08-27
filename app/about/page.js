import RawSection from "@/components/RawSection";
import { aboutContent } from "@/content/about";

export const metadata = {
  title: "About Us",
  description:
    "Aarti Group: established 1979, ISO-accredited steel plant in Cuttack, Odisha, supplying India's auto, defence, energy and rail industries.",
};

export default function AboutPage() {
  return <RawSection html={aboutContent} />;
}
