import HeroSlider from "@/components/HeroSlider";
import Marquee from "@/components/Marquee";
import RawSection from "@/components/RawSection";
import { homeContent } from "@/content/home";

export const metadata = {
  title: "Aarti Steel — Special & Alloy Steel, Since 1979",
  description:
    "Aarti Steel: 44 years of special and alloy steelmaking in Cuttack, Odisha, serving India's auto, defence, energy and rail industries.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <Marquee />
      <RawSection html={homeContent} />
    </>
  );
}
