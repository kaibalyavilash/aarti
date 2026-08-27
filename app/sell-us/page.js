import RawSection from "@/components/RawSection";
import { sellUsContent } from "@/content/sellUs";

export const metadata = {
  title: "Sell To Us",
  description:
    "Supply scrap, sponge iron, ferro alloys, coal or iron ore to Aarti Steel's Cuttack plant — submit a sales inquiry.",
};

export default function SellUsPage() {
  return <RawSection html={sellUsContent} />;
}
